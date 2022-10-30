import {
  initializeApollo,
  GetProductsQuery,
  GetProductsDocument,
  addApolloState,
  Product,
  GetAppQuery,
  GetAppDocument,
  GetAppQueryVariables,
  GetAppQueryResult,
} from 'apollo';

import { Products } from '../modules/products';

type AddProductPage = {
  products: Product[];
  app:
    | {
        __typename?: 'app' | undefined;
        id: any;
        isZKP: boolean;
        name: string;
      }
    | null
    | undefined;
};

export default function Home({ products, app }: AddProductPage) {
  return <Products products={products} isZKP={app?.isZKP} />;
}

export const getServerSideProps = async () => {
  const apolloClient = initializeApollo();

  const appQueryResult = await apolloClient.query<GetAppQuery, GetAppQueryVariables>({
    query: GetAppDocument,
    variables: {
      id: process.env.APP_ID,
    },
  });

  const productsQueryResult = await apolloClient.query<GetProductsQuery>({
    query: GetProductsDocument,
    variables: {
      appId: process.env.APP_ID,
    },
  });

  return addApolloState(apolloClient, {
    props: { products: productsQueryResult.data.products, app: appQueryResult.data.app_by_pk },
  });
};
