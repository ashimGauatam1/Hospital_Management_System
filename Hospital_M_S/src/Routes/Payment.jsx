import React, { useState, useEffect } from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';

const CheckoutForm = ({ authToken }) => {
  const [searchParams] = useSearchParams();
  const paidAmount = searchParams.get('amount');
  const typeParam = searchParams.get('type');
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [data, setData] = useState({ type: typeParam });

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    if (!stripe || !elements) {
      setError("Stripe hasn't loaded yet. Please try again.");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('http://localhost:8080/create-payment-intent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount: paidAmount }),
      });

      if (!response.ok) {
        throw new Error('Failed to create payment intent');
      }

      const { clientSecret } = await response.json();

      const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      });

      if (error) {
        setError(error.message);
      } else if (paymentIntent.status === 'succeeded') {
        setSuccess(true);
        await setUserType();
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const setUserType = async () => {
    try {
      const response = await axios.put(
        'http://localhost:8080/api/auth/update-type',
        { type: data.type },
        { headers: { 'auth-token': authToken } }
      );

      if (response.status === 200) {
        setData({ type: response.data.user.type });
        // localStorage.setItem('typeofuser', response.data.user.type);
      } else {
        alert('Error');
      }
    } catch (err) {
      console.error('Error setting user type:', err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow-md max-w-lg mx-auto">
      <div className="form-group">
        <label htmlFor="amount" className="block text-gray-700 text-sm font-medium mb-2">Amount</label>
        <input
          id="amount"
          disabled
          value={paidAmount}
          onChange={(e) => setData({ ...data, amount: e.target.value })}
          className="block w-full border border-gray-300 rounded-md p-2 mb-4 focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
          min="1"
        />
      </div>
      <div className="form-group">
        <label htmlFor="card-element" className="block text-gray-700 text-sm font-medium mb-2">Credit or Debit Card</label>
        <CardElement
          id="card-element"
          className="p-2 border border-gray-300 rounded-md"
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
      </div>
      <button
        type="submit"
        disabled={!stripe || loading}
        className={`w-full py-3 px-4 rounded-md text-white font-semibold transition-colors duration-300 ${stripe && !loading ? 'bg-cyan-600 hover:bg-cyan-700' : 'bg-gray-400 cursor-not-allowed'}`}
      >
        {loading ? 'Processing...' : 'Pay'}
      </button>
      {error && <div className="mt-4 text-red-500 font-semibold">{error}</div>}
      {success && <div className="mt-4 text-green-500 font-semibold">Payment successful!</div>}
    </form>
  );
};

export default CheckoutForm;
