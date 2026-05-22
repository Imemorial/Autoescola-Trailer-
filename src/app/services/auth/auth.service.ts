import { Injectable } from '@angular/core';
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User
} from 'firebase/auth';
import { BehaviorSubject, Observable, from, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { FirebaseService } from '../firebase/firebase.service';
import { environment } from '../../../environments/environment';

const SESSION_KEY = 'trailer_admin_session';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authenticated$ = new BehaviorSubject<boolean>(this.hasLocalSession());

  constructor(private firebaseService: FirebaseService) {
    this.initAuthListener();
  }

  private initAuthListener(): void {
    const auth = this.firebaseService.getAuth();
    if (!auth) {
      return;
    }

    onAuthStateChanged(auth, (user) => {
      if (user) {
        sessionStorage.setItem(SESSION_KEY, 'true');
        this.authenticated$.next(true);
      } else if (!this.hasLocalSession()) {
        this.authenticated$.next(false);
      }
    });
  }

  login(email: string, password: string): Observable<{ success: boolean; error?: string }> {
    const normalizedEmail = email.trim().toLowerCase();
    const adminEmail = environment.admin.email.trim().toLowerCase();
    const auth = this.firebaseService.getAuth();

    if (this.firebaseService.isConfigured() && auth) {
      if (normalizedEmail !== adminEmail) {
        return of({ success: false, error: 'Aquest correu no té permís d\'administració.' });
      }

      return from(signInWithEmailAndPassword(auth, normalizedEmail, password)).pipe(
        map(() => {
          sessionStorage.setItem(SESSION_KEY, 'true');
          this.authenticated$.next(true);
          return { success: true };
        }),
        catchError((error) => {
          console.error('Firebase Auth error:', error?.code, error?.message);
          return of({
            success: false,
            error: this.getFirebaseAuthError(error)
          });
        })
      );
    }

    if (normalizedEmail !== adminEmail || password !== environment.admin.password) {
      return of({ success: false, error: 'Credencials incorrectes.' });
    }

    sessionStorage.setItem(SESSION_KEY, 'true');
    this.authenticated$.next(true);
    return of({ success: true });
  }

  ensureFirebaseAuth(): Observable<void> {
    const auth = this.firebaseService.getAuth();

    if (!auth || !this.firebaseService.isConfigured()) {
      return of(undefined);
    }

    if (auth.currentUser) {
      return of(undefined);
    }

    return of(undefined).pipe(
      map(() => {
        throw new Error('Sessió caducada. Tanca sessió i torna a entrar.');
      })
    );
  }

  private getFirebaseAuthError(error: { code?: string; message?: string }): string {
    switch (error.code) {
      case 'auth/user-not-found':
      case 'auth/invalid-credential':
      case 'auth/wrong-password':
        return 'Usuari o contrasenya incorrectes a Firebase. Ves a Authentication → Users i crea l\'usuari admin@autoescolatrailer.cat amb contrasenya Trailer2026!';
      case 'auth/operation-not-allowed':
        return 'El mètode Correu/Contrasenya no està activat. Ves a Authentication → Método de acceso i activa\'l.';
      case 'auth/invalid-email':
        return 'El correu electrònic no és vàlid.';
      case 'auth/too-many-requests':
        return 'Massa intents. Espera uns minuts i torna-ho a provar.';
      default:
        return `Error Firebase (${error.code || 'desconegut'}): ${error.message || 'Comprova Authentication.'}`;
    }
  }

  logout(): Observable<void> {
    sessionStorage.removeItem(SESSION_KEY);
    this.authenticated$.next(false);

    const auth = this.firebaseService.getAuth();
    if (auth) {
      return from(signOut(auth));
    }

    return of(undefined);
  }

  isAuthenticated(): boolean {
    return this.authenticated$.value;
  }

  authState$(): Observable<boolean> {
    return this.authenticated$.asObservable();
  }

  getCurrentUser(): User | null {
    return this.firebaseService.getAuth()?.currentUser ?? null;
  }

  private hasLocalSession(): boolean {
    return sessionStorage.getItem(SESSION_KEY) === 'true';
  }
}
