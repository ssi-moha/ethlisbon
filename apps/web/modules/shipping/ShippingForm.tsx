import { FormControl, FormLabel, Heading, Input, Stack, VStack } from 'ui';

export const ShippingForm = () => (
  <VStack w="full" gap={8} p={4}>
    <Heading fontSize="xl" w="full">
      Shipping Information
    </Heading>

    <VStack w="full" gap={8}>
      <FormControl>
        <FormLabel> Full name </FormLabel>
        <Input placeholder="Your first and last name" />
      </FormControl>

      <FormControl>
        <FormLabel> Street address </FormLabel>
        <Input placeholder="123 Example Street" w="full" />
      </FormControl>

      <FormControl>
        <FormLabel>Email address</FormLabel>
        <Input placeholder="you@exmaple.com" type="email" />
      </FormControl>

      <Stack w="full" flexDir={{ base: 'column', md: 'row' }} alignItems="center" gap={8}>
        <FormControl w={{ base: 'full', md: '150px' }}>
          <FormLabel> Zip Code </FormLabel>
          <Input placeholder="Zip Code" type="number" />
        </FormControl>

        <FormControl w="full" sx={{ mt: '0 !important' }}>
          <FormLabel> City </FormLabel>
          <Input placeholder="City" />
        </FormControl>
      </Stack>
    </VStack>
  </VStack>
);
