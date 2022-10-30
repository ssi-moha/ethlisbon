import { Box, Flex, HStack, Text, useColorModeValue } from '@chakra-ui/react';
import Link from 'next/link';
import { useAppSelector } from 'store';

export const Navbar = () => {
  const address = useAppSelector((state) => state.user.address);
  const shortAddress = `${address.slice(0, 5)}...${address.slice(-5)}`;

  return (
    <Box as="section" w="full">
      <Box
        as="nav"
        bg="bg-surface"
        boxShadow={useColorModeValue('sm', 'sm-dark')}
        px={{ base: '4', md: '8', lg: '12' }}
      >
        <HStack spacing="10" justify="space-between" height="60px">
          <Link href="/">
            <Text fontWeight="bold" cursor="pointer">
              Token Gated Shop
            </Text>
          </Link>

          <Flex justify="flex-end" flex="1">
            <HStack spacing="3">
              <Text fontWeight="semibold"> {shortAddress} </Text>
            </HStack>
          </Flex>
        </HStack>
      </Box>
    </Box>
  );
};
