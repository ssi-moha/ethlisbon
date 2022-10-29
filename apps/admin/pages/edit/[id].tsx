import { initializeApollo, GetProductByIdDocument, addApolloState, Product } from 'apollo';
import { GetServerSidePropsContext } from 'next';
import { BackButton } from 'ui';
import { EditProductFormContainer } from '../../modules/products/EditProductFormContainer';

type EditProductPageProps = {
  product: Product;
};

const EditProductPage = ({ product }: EditProductPageProps) => (
  <>
    <BackButton href="/" />
    <EditProductFormContainer product={product} />
  </>
);

export default EditProductPage;

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const apolloClient = initializeApollo();
  const { params } = context;

  if (params?.id) {
    const { id } = params;
    const res = await apolloClient.query({
      query: GetProductByIdDocument,
      variables: {
        id,
      },
    });

    return addApolloState(apolloClient, {
      props: { product: res.data?.product_by_pk },
    });
  }
};
