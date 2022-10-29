import { useCreateProductMutation } from 'apollo';
import { FormProvider, useForm } from 'form';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { ProductForm } from './ProductForm';
import { ProductFormValues } from './ProductForm/ProductFormValues';
import axios from 'axios';
import { useToast } from 'ui';
import { toNumber } from 'pure';
import { getAddProductSuccessMessage } from './ProductForm/toasts';

export const AddProductFormContainer = () => {
  const methods = useForm<ProductFormValues>({
    defaultValues: {},
  });
  const [storageActionLoading, setStorageActionLoading] = useState(false);

  const {
    handleSubmit,
    formState: { isValid },
  } = methods;

  const router = useRouter();

  const [createProduct, { loading: isLoading }] = useCreateProductMutation();

  const toast = useToast();

  const onSubmit = async (data: ProductFormValues) => {
    try {
      setStorageActionLoading(true);
      const {
        data: { uploadUrl },
      } = await axios.post('/api/image/store', { url: data.image, bucketName: 'products' });
      setStorageActionLoading(false);

      await createProduct({
        variables: {
          ...data,
          appId: process.env.APP_ID,
          price: toNumber(data.price),
          discount: toNumber(data.discount),
          poapId: toNumber(data.poapId),
          image: uploadUrl,
        },
        onCompleted: () => toast(getAddProductSuccessMessage(data.name)),
      });

      router.push('/');
    } catch (e) {
      console.error(e);
    } finally {
      setStorageActionLoading(false);
    }
  };

  return (
    <FormProvider {...methods}>
      <ProductForm
        isDisabled={!isValid}
        isLoading={storageActionLoading || isLoading}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
      />
    </FormProvider>
  );
};
