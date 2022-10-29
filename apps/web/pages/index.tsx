import {
  addApolloState,
  GetProductsDocument,
  GetProductsQuery,
  initializeApollo,
  Product,
} from 'apollo';
import { ProductCard, ProductGrid } from 'ui';

type WebProps = {
  products: Product[];
};

export default function Web({ products }: WebProps) {
  return (
    <ProductGrid>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </ProductGrid>
  );
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
