import {
  Flex,
  Select,
  SelectProps,
  useColorModeValue,
  Text,
  Stack,
  Box,
  Image,
  useColorModeValue as mode,
} from '@chakra-ui/react';

type CartItemProps = {
  isGiftWrapping?: boolean;
  name: string;
  description: string;
  quantity: number;
  price: number;
  currency: string;
  imageUrl: string;
  onChangeQuantity?: (quantity: number) => void;
  onClickGiftWrapping?: () => void;
  onClickDelete?: () => void;
};

const QuantitySelect = (props: SelectProps) => (
  <Select
    maxW="64px"
    aria-label="Select quantity"
    focusBorderColor={useColorModeValue('blue.500', 'blue.200')}
    {...props}
  >
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
  </Select>
);

export const CartItem = (props: CartItemProps) => {
  const { name, description, imageUrl } = props;

  return (
    <Flex direction={{ base: 'column', md: 'row' }} justify="space-between" align="center" w="full">
      <Stack direction="row" spacing="5" width="full">
        <Image
          rounded="lg"
          width="120px"
          height="120px"
          fit="cover"
          src={imageUrl}
          alt={name}
          draggable="false"
          loading="lazy"
        />
        <Box pt="4">
          <Stack spacing="0.5">
            <Text fontWeight="medium">{name}</Text>
            <Text color={mode('gray.600', 'gray.400')} fontSize="sm">
              {description}
            </Text>
          </Stack>
        </Box>
      </Stack>

      <Flex justify="space-between" display={{ base: 'none', md: 'flex' }}>
        <Text fontWeight="medium"> $597.00 </Text>
      </Flex>
    </Flex>
  );
};
