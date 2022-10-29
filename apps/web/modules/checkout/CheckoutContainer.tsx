import { Elements } from '@stripe/react-stripe-js';
import { getPaymentIntent, getStripeObject } from 'payment';
import { useEffect, useState } from 'react';
import { VStack, Heading } from 'ui';
import { CheckoutForm } from './CheckoutForm';

const stripe = getStripeObject();

export const CheckoutContainer = ({
  id,
  price,
  discount,
}: {
  id: string;
  price: number;
  discount: number;
}) => {
  const [clientSecret, setClientSecret] = useState<string | null>(null);

  //   const isAnHolder = useIsAnHolder(product);

  //   function showDiscount() {
  //     if (!product.curation && !product.poapId) return true;
  //     if (isAnHolder) return true;
  //     return false;
  //   }

  useEffect(() => {
    async function updateClientSecret() {
      const clientSecret = await getPaymentIntent(id);
      setClientSecret(clientSecret);
    }

    updateClientSecret();
  }, [id]);

  return (
    <VStack justifyContent="center">
      <Heading as="h2" py={4}>
        Checkout
      </Heading>

      {clientSecret && (
        <Elements options={{ appearance: { theme: 'stripe' }, clientSecret }} stripe={stripe}>
          <CheckoutForm price={price} discount={discount} />
        </Elements>
      )}
    </VStack>
  );
};
