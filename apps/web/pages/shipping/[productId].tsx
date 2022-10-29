import { Box, OrderSummary, Stack } from 'ui';
import { ShippingForm } from '../../modules';
import { PaymentForm } from '../../modules/shipping/PaymentForm';

export default function shipping() {
  return (
    <Box h={100} w="full">
      <Stack as="form" flexDir={{ base: 'column', md: 'row' }}>
        <Box flex={1}>
          <ShippingForm />

          <PaymentForm />
        </Box>

        <Box minW="400px">
          <OrderSummary />
        </Box>
      </Stack>
    </Box>
  );
}
