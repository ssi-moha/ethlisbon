import { NextApiRequest, NextApiResponse } from 'next';
import {
  initializeApollo,
  GetProductByIdDocument,
  GetProductByIdQuery,
  GetProductByIdQueryVariables,
} from 'apollo';
import { applyDiscount } from 'pure';

import { formatAmountForStripe, StripeSDK } from 'payment';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const apolloClient = initializeApollo();
  const { data } = await apolloClient.query<GetProductByIdQuery, GetProductByIdQueryVariables>({
    query: GetProductByIdDocument,
    variables: { id: req.body.productId },
  });

  const price = data.product_by_pk?.discount
    ? applyDiscount(data.product_by_pk?.price || 1, data.product_by_pk.discount)
    : data.product_by_pk?.price;

  const paymentIntent = await StripeSDK.paymentIntents.create({
    amount: formatAmountForStripe(price, 'eur'),
    currency: 'eur',
    payment_method_types: ['card'],
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
}
