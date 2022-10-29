import { Box, ProductCard, ProductGrid, products } from 'ui';

export default function Web() {
  return (
    <ProductGrid>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </ProductGrid>
  );
}
