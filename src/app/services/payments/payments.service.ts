import { Injectable, inject } from '@angular/core';
import { loadStripe, Stripe } from '@stripe/stripe-js';

@Injectable({
  providedIn: 'root'
})
export class PaymentsService {

  private stripePromise = loadStripe('pk_test_51QEZaXRvNhLMcjftUwAFWNAxbkGEobt7dpcT09Xt4rCEQxspFBVGmoE0sTV6HAqNCf9Daw9f9r13Op2OuCmGCiUk00awi2vVNp');

  constructor() { }

  async checkout(amount: number) {
    const stripe = await this.stripePromise;
    if (!stripe) throw new Error("Stripe no se ha cargado");

    const response = await fetch('http://localhost:3000/create-checkout-session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount }),
    });

    const session = await response.json();
    stripe.redirectToCheckout({ sessionId: session.id });
  }

}
