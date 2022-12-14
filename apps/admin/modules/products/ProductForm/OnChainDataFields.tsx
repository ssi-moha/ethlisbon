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
import { Section, CollectionIcon, CollectionPlayIcon } from 'ui';
import { ProductFormValues } from './ProductFormValues';

export const OnChainDataFields = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<ProductFormValues>();

  return (
    <Section>
      <Heading fontSize="xl"> On-Chain Data </Heading>

      <FormControl isInvalid={Boolean(errors.collection)}>
        <FormLabel> Collection Name </FormLabel>

        <InputGroup>
          <InputLeftElement pointerEvents="none" color="gray.300" fontSize="1.2em">
            <CollectionIcon />
          </InputLeftElement>

          <Input placeholder="Collection Name" {...register('collection')} />
        </InputGroup>
        <FormErrorMessage>{errors.collection?.message}</FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={Boolean(errors.curation)}>
        <FormLabel> Collection Address </FormLabel>

        <InputGroup>
          <InputLeftElement pointerEvents="none" color="gray.300" fontSize="1.2em">
            <CollectionPlayIcon />
          </InputLeftElement>

          <Input placeholder="Collection Address" {...register('curation')} />
        </InputGroup>
        <FormErrorMessage>{errors.curation?.message}</FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={Boolean(errors.poapId)}>
        <FormLabel> Poap Id </FormLabel>

        <InputGroup>
          <InputLeftElement pointerEvents="none" color="gray.300" fontSize="1.2em">
            <CollectionIcon />
          </InputLeftElement>

          <Input type="number" placeholder="Poap ID" {...register('poapId')} />
        </InputGroup>
        <FormErrorMessage>{errors.poapId?.message}</FormErrorMessage>
      </FormControl>
    </Section>
  );
};
