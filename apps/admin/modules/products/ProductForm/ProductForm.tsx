import { Box } from 'ui';
import { GeneralInformationsFields } from './GeneralInformationsField';
import { MediaFields } from './MediaFields';
import { OnChainDataFields } from './OnChainDataFields';
import { ProductFormHeader } from './ProductFormHeader';
import { ProductFormValues } from './ProductFormValues';

type ProductFormProps = {
  handleSubmit: Function;
  onSubmit(data: ProductFormValues): Promise<void>;
  onOpen?(): void;
  isLoading: boolean;
  isDisabled: boolean;
};

export const ProductForm = ({
  handleSubmit,
  isDisabled,
  isLoading,
  onSubmit,
  onOpen,
}: ProductFormProps) => (
  <Box
    as="main"
    sx={{
      m: '0 auto',
      width: '100%',
      maxWidth: 1024, // TODO: change to 1440px
      p: { xs: 4, md: 8, lg: 8 },
    }}
  >
    <form onSubmit={handleSubmit(onSubmit)}>
      <ProductFormHeader isDisabled={isDisabled} isLoading={isLoading} onOpen={onOpen} />

      <GeneralInformationsFields />
      <MediaFields />
      <OnChainDataFields />
    </form>
  </Box>
);
