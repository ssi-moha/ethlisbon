import { Products } from '../modules/products';

export default function Home() {
  return (
    <Products
      products={[
        {
          id: '0001',
          image:
            'https://kqjytgxbtetzewipikax.supabase.co/storage/v1/object/public/products/31b57b85-33fd-443a-906b-33b505b39631',
          name: 'T Shirt One piece',
          price: '40',
        },
      ]}
    />
  );
}
