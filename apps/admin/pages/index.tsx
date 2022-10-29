import {
  initializeApollo,
  GetProductsQuery,
  GetProductsDocument,
  addApolloState,
  Product,
} from 'apollo';

import { Products } from '../modules/products';

type AddProductPage = { products: Product[] };

export default function Home({ products }: AddProductPage) {
  return <Products products={products} />;
}

export const getServerSideProps = async () => {
  const apolloClient = initializeApollo();
  const productsQueryResult = await apolloClient.query<GetProductsQuery>({
    query: GetProductsDocument,
    variables: {
      appId: process.env.APP_ID,
    },
  });

  return addApolloState(apolloClient, {
    props: { products: productsQueryResult.data.products },
  });
};
