import { addApolloState, GetProductByIdDocument, initializeApollo, Product } from 'apollo';
import { GetServerSidePropsContext } from 'next';
import { ProductDetails } from 'ui';

type WebProps = {
  product: Product;
};

export default function Web({ product }: WebProps) {
  return <ProductDetails product={product} />;
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
