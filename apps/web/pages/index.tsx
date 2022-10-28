import { Box, ProductCard, ProductGrid, products } from 'ui';

export default function Web() {
  return (
    <Box w="full" maxW="7xl" mx="auto">
      <ProductGrid>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ProductGrid>
    </Box>
  );
}
