import { Box, Button, ButtonGroup, Flex, HStack, Text, useColorModeValue } from '@chakra-ui/react';
import { useGetAppQuery } from 'apollo';
import Link from 'next/link';
import { useAppSelector } from 'store';

export const Navbar = () => {
  const { data } = useGetAppQuery({ variables: { id: process.env.APP_ID } });
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
              {data?.app_by_pk?.isZKP && (
                <Link href="https://playground.sismo.io/monsters">
                  <Text fontWeight="semibold">Go to Sismo</Text>
                </Link>
              )}
              <Text fontWeight="semibold"> {shortAddress} </Text>
            </HStack>
          </Flex>
        </HStack>
      </Box>
    </Box>
  );
};
