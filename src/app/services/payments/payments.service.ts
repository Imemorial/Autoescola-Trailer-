import { Injectable, inject } from '@angular/core';
import { loadStripe, Stripe } from '@stripe/stripe-js';

@Injectable({
  providedIn: 'root'
})
export class PaymentsService {

  private stripePromise = loadStripe('pk_live_51ROhznEDvAc9AOLDJOs61SUu0cj1wirpTiGCciiaO1fVc2tWots5WVMOZrsNljt6lJYU5K2GLvkoiIVpqzJtj07k00b5KVLXww');

  constructor() { }

  async checkout(amount: number, studentName?: string, description?: string) {
    const stripe = await this.stripePromise;
    if (!stripe) throw new Error("Stripe no se ha cargado");

    const response = await fetch('http://localhost:3000/create-checkout-session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount, studentName, description }),
    });

    const session = await response.json();
    stripe.redirectToCheckout({ sessionId: session.id });
  }

}
