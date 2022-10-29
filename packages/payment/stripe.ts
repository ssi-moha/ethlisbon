import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
import { Stripe } from 'stripe';

export const getStripeObject = () => loadStripe(process.env.PUBLIC_STRIPE_PUBLISHABLE_KEY || '');
export const StripeSDK = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2022-08-01',
});
export const getPaymentIntent = async (productId: string) => {
  const { data } = await axios.post<{ clientSecret: string }>('/api/payment-intents', {
    productId,
  });

  return data.clientSecret;
};
