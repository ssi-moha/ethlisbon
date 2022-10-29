import Link from 'next/link';
import { Box, Button, Header, Spinner, Table, TableContainer, Tbody, Th, Thead, Tr } from 'ui';

import { PRODUCT_ATTRIBUTES } from './constants';
import { ProductListItem } from './ProductListItem';

import { useGetProductsQuery } from 'apollo';

type ProductsProps = {
  products: {
    id: string;
    image: string;
    name: string;
    price: string;
    discount?: string;
    collection?: string;
    collectionAddress?: string;
  }[];
};

export const Products = ({ products }: ProductsProps) => {
  const { data, error, loading } = useGetProductsQuery({
    variables: { appId: process.env.APP_ID },
  });

  if (loading) return <Spinner />;

  if (error || !data) {
    return <div>Error</div>;
  }

  return (
    <Box>
      <Header title="Products">
        <Link href="/admin/product/add">
          <Button>+ New Product</Button>
        </Link>
      </Header>

      <Box
        my={4}
        sx={{
          bg: 'white',
          borderRadius: 'lg',
          p: 8,
          border: '1px solid lightgrey',
        }}
      >
        <TableContainer>
          <Table>
            <Thead>
              <Tr>
                {PRODUCT_ATTRIBUTES.map((title, index) => (
                  <Th key={`product-list-${index}`}>{title}</Th>
                ))}
              </Tr>
            </Thead>

            <Tbody>
              {products.map(
                ({ id, image, name, price, discount, collection, collectionAddress }) => (
                  <ProductListItem
                    key={id}
                    id={id}
                    image={image}
                    name={name}
                    price={price}
                    discount={discount}
                    collection={collection}
                    collectionAddress={collectionAddress}
                  />
                ),
              )}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};
