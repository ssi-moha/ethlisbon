import { Flex, Heading, VStack, Text, Divider } from 'ui';
import { CartItem } from './CartItem';

export const OrderSummary = () => (
  <VStack w="full" gap={8} p={4} bg="gray.50">
    <Heading fontSize="xl" w="full">
      Order Summary
    </Heading>

    <VStack w="full" gap={8}>
      <CartItem
        name="Product Name"
        description="Product Description"
        quantity={1}
        price={100}
        currency="USD"
        imageUrl="https://images.unsplash.com/photo-1509941943102-10c232535736?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
      />

      <Divider />

      <Flex w="full" justifyContent="space-between" fontWeight="semibold" color="gray.700">
        <Text fontSize="lg">Order Total</Text>
        <Text fontSize="xl"> $597.00 </Text>
      </Flex>
    </VStack>
  </VStack>
);
