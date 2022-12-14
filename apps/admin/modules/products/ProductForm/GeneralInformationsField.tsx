import {
  Heading,
  FormControl,
  FormLabel,
  InputGroup,
  InputLeftElement,
  Input,
  Checkbox,
  HStack,
  FormErrorMessage,
} from '@chakra-ui/react';
import { useFormContext } from 'form';

import { Section, ChatRightTextIcon } from 'ui';

import { PRODUCTS_FIELDS } from '../constants';
import { ProductFormValues } from './ProductFormValues';

export const GeneralInformationsFields = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<ProductFormValues>();

  return (
    <Section>
      <Heading fontSize="xl"> General Information </Heading>

      {/* Name */}
      <FormControl isInvalid={Boolean(errors.name)}>
        <FormLabel mb={1}>{PRODUCTS_FIELDS.name.label}</FormLabel>

        <InputGroup>
          <InputLeftElement pointerEvents="none" color="gray.300" fontSize="1.2em">
            -
          </InputLeftElement>
          <Input placeholder="Name" {...register('name')} />
        </InputGroup>
        <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
      </FormControl>

      {/* Description */}
      <FormControl isInvalid={Boolean(errors.description)}>
        <FormLabel mb={1}>{PRODUCTS_FIELDS.description.label}</FormLabel>

        <InputGroup>
          <InputLeftElement pointerEvents="none" color="gray.300" fontSize="1.2em">
            <ChatRightTextIcon />
          </InputLeftElement>

          <Input placeholder="Description" {...register('description')} />
        </InputGroup>
        <FormErrorMessage>{errors.description?.message}</FormErrorMessage>
      </FormControl>

      {/* Price */}
      <FormControl isInvalid={Boolean(errors.price)}>
        <FormLabel mb={1}>{PRODUCTS_FIELDS.price.label}</FormLabel>

        <InputGroup>
          <InputLeftElement pointerEvents="none" color="gray.300" fontSize="1.2em">
            $
          </InputLeftElement>

          <Input placeholder="Price" {...register('price')} />
        </InputGroup>
        <FormErrorMessage>{errors.price?.message}</FormErrorMessage>
      </FormControl>

      {/* Discount */}
      <FormControl isInvalid={Boolean(errors.discount)}>
        <FormLabel mb={1}>Discount</FormLabel>

        <InputGroup>
          <InputLeftElement pointerEvents="none" color="gray.300" fontSize="1.2em">
            %
          </InputLeftElement>

          <Input placeholder="Discount for holders" {...register('discount')} />
        </InputGroup>
        <FormErrorMessage>{errors.discount?.message}</FormErrorMessage>
      </FormControl>

      {/* isDiscountGated */}
      <FormControl isInvalid={Boolean(errors.isDiscountGated)}>
        <HStack>
          <Checkbox {...register('isDiscountGated')} />

          <FormLabel>Enable discount only for holders</FormLabel>
        </HStack>

        <FormErrorMessage>{errors.isDiscountGated?.message}</FormErrorMessage>
      </FormControl>
    </Section>
  );
};
