import {
  Heading,
  FormControl,
  FormLabel,
  InputGroup,
  InputLeftElement,
  Input,
  FormErrorMessage,
} from '@chakra-ui/react';
import { useFormContext } from 'react-hook-form';
import { Section, LinkIcon } from 'ui';
import { ProductFormValues } from './ProductFormValues';

export const MediaFields = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<ProductFormValues>();

  return (
    <Section>
      <Heading fontSize="xl"> Media </Heading>

      <FormControl isInvalid={Boolean(errors.image)}>
        <FormLabel mb={1}> Url </FormLabel>

        <InputGroup>
          <InputLeftElement pointerEvents="none" color="gray.300" fontSize="1.2em">
            <LinkIcon />
          </InputLeftElement>

          <Input placeholder="Image link" {...register('image')} />
        </InputGroup>
        <FormErrorMessage>{errors.image?.message}</FormErrorMessage>
      </FormControl>
    </Section>
  );
};
