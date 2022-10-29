import {
  addApolloState,
  GetProductsDocument,
  GetProductsQuery,
  initializeApollo,
  Product,
} from 'apollo';
import { ProductCard, ProductGrid } from 'ui';
import { useIsAnHolder } from '../hooks/useIsAnHolder';

type WebProps = {
  products: Product[];
};

type ProductCardContainerProps = {
  product: Product;
};

const ProductCardContainer = ({ product }: ProductCardContainerProps) => {
  const isAnHolder = useIsAnHolder(product.collection);

  return <ProductCard product={product} isAnHolder={isAnHolder} />;
};

export default function Web({ products }: WebProps) {
  return (
    <ProductGrid>
      {products.map((product) => (
        <ProductCardContainer product={product} />
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
