import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from '../Routes/Payment';

const stripePromise = loadStripe('pk_test_51PgHUWLBc8kTBo8RMCvdQmWfrofZvNxav4YBpNb1Se5YucJTFex5SFUD1vqziXboADm25dClhzBk3nFoF1yZwjXt00qUdCj0Uv');

const Payment = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12">
    <div className="max-w-lg w-full">
      <h2 className="text-3xl font-bold text-center text-gray-700 mb-6">Payment Page</h2>
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </div>
  </div>
);

export default Payment;
