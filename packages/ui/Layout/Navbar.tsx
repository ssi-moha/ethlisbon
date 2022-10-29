import { Box, Button, ButtonGroup, Flex, HStack, Text, useColorModeValue } from '@chakra-ui/react';
import Link from 'next/link';

export const Navbar = () => (
  <Box as="section" w="full" px={{ base: '4', md: '8', lg: '12' }}>
    <Box as="nav" bg="bg-surface" boxShadow={useColorModeValue('sm', 'sm-dark')}>
      <HStack spacing="10" justify="space-between" height="60px">
        <Link href="/">
          <Text fontWeight="bold" cursor="pointer">
            Token Gated Shop
          </Text>
        </Link>

        <Flex justify="space-between" flex="1">
          <ButtonGroup variant="link" spacing="8">
            <Button> Product </Button>
            <Button> About </Button>
          </ButtonGroup>

          <HStack spacing="3">
            <Button variant="ghost">Sign in</Button>
          </HStack>
        </Flex>
      </HStack>
    </Box>
  </Box>
);
