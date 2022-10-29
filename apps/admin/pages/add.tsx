import { BackButton } from 'ui';
import { AddProductFormContainer } from '../modules/products/AddProductFormContainer';

const AddProductPage = ({}) => (
  <>
    <BackButton href="/admin" />
    <AddProductFormContainer />
  </>
);

export default AddProductPage;
