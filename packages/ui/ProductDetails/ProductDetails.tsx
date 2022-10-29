import {
  Box,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
} from '@chakra-ui/react';
import { MdLocalShipping } from 'react-icons/md';
import Link from 'next/link';
import { Product } from 'apollo';

type ProductDetailsProps = {
  product: Product;
};

export const ProductDetails = ({ product }: ProductDetailsProps) => {
  const { id, name, description, price, image } = product;

  return (
    <Container maxW="7xl">
      <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={{ base: 8, md: 10 }}>
        <Flex>
          <Image
            rounded="md"
            alt="product image"
            src={image}
            fit="cover"
            align="center"
            w="100%"
            h={{ base: '100%', sm: '400px', lg: '500px' }}
          />
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as="header">
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}
            >
              {name}
            </Heading>

            <Text color={useColorModeValue('gray.900', 'gray.400')} fontWeight={300} fontSize="2xl">
              ${price} USD
            </Text>
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction="column"
            divider={<StackDivider borderColor={useColorModeValue('gray.200', 'gray.600')} />}
          >
            <VStack spacing={{ base: 4, sm: 6 }}>
              <Text
                color={useColorModeValue('gray.500', 'gray.400')}
                fontSize="2xl"
                fontWeight="300"
              >
                {description}
              </Text>
              {/* <Text fontSize="lg">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid amet at
                delectus doloribus dolorum expedita hic, ipsum maxime modi nam officiis porro, quae,
                quisquam quos reprehenderit velit? Natus, totam.
              </Text> */}
            </VStack>
          </Stack>

          <Link href={`/shipping/${id}`}>
            <Button
              rounded="none"
              w="full"
              mt={8}
              size="lg"
              py="7"
              bg={useColorModeValue('gray.900', 'gray.50')}
              color={useColorModeValue('white', 'gray.900')}
              textTransform="uppercase"
              _hover={{
                transform: 'translateY(2px)',
                boxShadow: 'lg',
              }}
            >
              SHOP NOW
            </Button>
          </Link>

          <Stack direction="row" alignItems="center" justifyContent="center">
            <MdLocalShipping />
            <Text>2-3 business days delivery</Text>
          </Stack>
        </Stack>
      </SimpleGrid>
    </Container>
  );
};
