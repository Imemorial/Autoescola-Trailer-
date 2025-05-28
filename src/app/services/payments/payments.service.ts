import { Injectable, inject } from '@angular/core';
import { loadStripe, Stripe } from '@stripe/stripe-js';

@Injectable({
  providedIn: 'root'
})
export class PaymentsService {

  private stripePromise = loadStripe('pk_test_51ROhzvEKxIZ8rBpy5N2bl7NqVJGOmYxYrLnTR6fkGJZSVbM0aRiQqgPeWtEeMqEs6hUHvsazFwGdDzQg4N1rY7RZ005urh9eph');

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
