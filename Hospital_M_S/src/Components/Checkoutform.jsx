import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from '../Routes/Payment';
import image from '../assets/img/cpay.png'

const stripePromise = loadStripe('pk_test_51PgHUWLBc8kTBo8RMCvdQmWfrofZvNxav4YBpNb1Se5YucJTFex5SFUD1vqziXboADm25dClhzBk3nFoF1yZwjXt00qUdCj0Uv');

const Payment = () => (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12">
    <div className="flex items-center space-x-8">
      <img 
        className='w-1/2 max-w-[1000px] h-auto object-cover' 
        src={image} 
        alt="Payment Illustration"
      />
      <div className="max-w-lg w-full">
        <h2 className="text-3xl font-bold text-center text-cyan-800 mb-6">Payment Page</h2>
        <Elements stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      </div>
    </div>
  </div>
  
);

export default Payment;
