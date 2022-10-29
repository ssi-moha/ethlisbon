import { BackButton } from 'ui';
import { AddProductFormContainer } from '../modules/products/AddProductFormContainer';
import { ProductForm } from '../modules/products/ProductForm';

const AddProductPage = () => (
  <>
    <BackButton href="/admin" />
    <AddProductFormContainer />
  </>
);

export default AddProductPage;
