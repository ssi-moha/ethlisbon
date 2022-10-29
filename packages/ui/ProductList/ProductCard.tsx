import {
  AspectRatio,
  Box,
  Button,
  Image,
  Skeleton,
  Stack,
  StackProps,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from '@chakra-ui/react';
import Link from 'next/link';

import { FavouriteButton } from './FavouriteButton';
import { applyDiscount } from 'pure';
import { PriceTag } from './PriceTag';
import { Product } from 'apollo';

interface Props {
  product: Product;
  rootProps?: StackProps;
}

export const ProductCard = (props: Props) => {
  const { product, rootProps } = props;
  const { id, name, image, price, discount } = product;

  const salePrice = applyDiscount(price, discount);

  return (
    <Stack spacing={useBreakpointValue({ base: '4', md: '5' })} {...rootProps}>
      <Box position="relative">
        <AspectRatio ratio={4 / 3}>
          <Image
            src={image}
            alt={name}
            draggable="false"
            fallback={<Skeleton />}
            borderRadius={useBreakpointValue({ base: 'md', md: 'xl' })}
          />
        </AspectRatio>
        {/* <FavouriteButton
          position="absolute"
          top="4"
          right="4"
          aria-label={`Add ${name} to your favourites`}
        /> */}
      </Box>
      <Stack>
        <Stack spacing="1">
          <Text fontWeight="medium" color={useColorModeValue('gray.700', 'gray.400')}>
            {name}
          </Text>
          <PriceTag
            price={price}
            salePrice={price !== salePrice ? salePrice : undefined}
            currency="USD"
          />
        </Stack>
      </Stack>

      <Stack align="center">
        <Link href={`product/${id}`}>
          <Button colorScheme="blue" width="full">
            Buy
          </Button>
        </Link>
      </Stack>
    </Stack>
  );
};
