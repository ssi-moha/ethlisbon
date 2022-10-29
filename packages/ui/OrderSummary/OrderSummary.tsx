import { Flex, Heading, VStack, Text, Divider } from 'ui';
import { CartItem } from './CartItem';

type OrderSummaryProps = {
  name: string;
  description: string;
  price: number;
  image: string;
};

export const OrderSummary = ({ name, description, price, image }: OrderSummaryProps) => (
  <VStack w="full" gap={8} p={4} bg="gray.50">
    <Heading fontSize="xl" w="full">
      Order Summary
    </Heading>

    <VStack w="full" gap={8}>
      <CartItem
        name={name}
        description={description}
        quantity={1}
        price={price}
        currency="USD"
        imageUrl={image}
      />

      <Divider />

      <Flex w="full" justifyContent="space-between" fontWeight="semibold" color="gray.700">
        <Text fontSize="lg"> Order Total </Text>
        <Text fontSize="xl"> ${price} </Text>
      </Flex>
    </VStack>
  </VStack>
);
