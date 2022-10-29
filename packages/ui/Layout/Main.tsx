import { Box, Flex, FlexProps } from '@chakra-ui/react';

export const Main = (props: FlexProps) => (
  <Flex
    as="main"
    role="main"
    direction="column"
    flex="1"
    py={{ base: '6', md: '8', lg: '12' }}
    px={{ base: '4', md: '8', lg: '12' }}
    {...props}
  >
    <Box w="full" maxW="7xl" mx="auto">
      {props.children}
    </Box>
  </Flex>
);
