import { FormControl, FormLabel, Heading, Input, Stack, VStack } from 'ui';

export const PaymentForm = () => (
  <VStack w="full" gap={8} p={4}>
    <Heading fontSize="xl" w="full">
      Payment Information
    </Heading>

    <div>Stripe Iframe</div>
  </VStack>
);
