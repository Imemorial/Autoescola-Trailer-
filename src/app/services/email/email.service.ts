import { Injectable } from '@angular/core';
import emailjs from 'emailjs-com';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private readonly serviceId = 'service_qoio6xt'; 
  private readonly templateId = 'template_7bdfl68'; 
  private readonly userId = 'fq9lkunsg6-9lyUFg'; 

  constructor() { }


  sendEmail(emailData: any): Observable<any> {
    return new Observable(observer => {
      emailjs.send(this.serviceId, this.templateId, emailData, this.userId)
        .then(
          (response) => {
            console.log('Correo enviado correctamente', response);
            observer.next(response);
            observer.complete(); 
          },
          (error) => {
            console.error('Error al enviar el correo', error);
            observer.error(error);  
          }
        );
    });
  }

}
