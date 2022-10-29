import { initializeApollo, GetProductByIdDocument, addApolloState } from 'apollo';
import { GetServerSidePropsContext } from 'next';
import { Box, OrderSummary, Stack } from 'ui';
import { ShippingForm } from '../../modules';
import { PaymentForm } from '../../modules/shipping/PaymentForm';

type ShippingPageProps = {
  product: any;
};

export default function Shipping({ product }: ShippingPageProps) {
  const { id, name, description, price, image } = product;

  return (
    <Box h={100} w="full">
      <Stack as="form" flexDir={{ base: 'column', md: 'row' }}>
        <Box flex={1}>
          <ShippingForm />

          <PaymentForm />
        </Box>

        <Box minW="400px" maxW="400px">
          <OrderSummary name={name} description={description} price={price} image={image} />
        </Box>
      </Stack>
    </Box>
  );
}

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const { params } = context;
  const apolloClient = initializeApollo();

  try {
    if (params?.productId) {
      const { productId } = params;
      const res = await apolloClient.query({
        query: GetProductByIdDocument,
        variables: {
          id: productId,
        },
      });

      return addApolloState(apolloClient, {
        props: { product: res.data?.product_by_pk },
      });
    }
  } catch {
    return addApolloState(apolloClient, {
      props: {},
    });
  }

  return addApolloState(apolloClient, {
    props: {},
  });
};
