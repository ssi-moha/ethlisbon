import Link from 'next/link';
import {
  Box,
  Button,
  ButtonGroup,
  Header,
  Spinner,
  Table,
  TableContainer,
  Tbody,
  Th,
  Thead,
  Tr,
} from 'ui';

import { PRODUCT_ATTRIBUTES } from './constants';
import { ProductListItem } from './ProductListItem';

import { Product, useChangeZkpMutation, useGetProductsQuery } from 'apollo';
import { useState } from 'react';

type ProductsProps = {
  products: Product[];
  isZKP?: boolean;
};

export const Products = ({ products, isZKP }: ProductsProps) => {
  const { data, error, loading } = useGetProductsQuery({
    variables: { appId: process.env.APP_ID },
  });
  const [fakeZKP, setFakeZKP] = useState(isZKP);
  const [changeZKP, { loading: changeZKPLoading }] = useChangeZkpMutation({});

  if (loading) return <Spinner />;

  if (error || !data) {
    return <div>Error</div>;
  }

  const handleChangeZKP = async () => {
    await changeZKP({
      variables: {
        _eq: process.env.APP_ID,
        isZKP: !fakeZKP,
      },
    });
    setFakeZKP(!fakeZKP);
  };

  return (
    <Box>
      <Header title="Back-office">
        <ButtonGroup display="block">
          <Button
            onClick={handleChangeZKP}
            isLoading={changeZKPLoading}
            isDisabled={changeZKPLoading}
          >
            {fakeZKP ? 'Disable ZKP' : 'Enable ZKP'}
          </Button>

          <Link href="/add">
            <Button>+ New Product</Button>
          </Link>
        </ButtonGroup>
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
              {products.map(({ id, image, name, price, discount, collection, curation }) => (
                <ProductListItem
                  key={id}
                  id={id}
                  image={image}
                  name={name}
                  price={price}
                  discount={discount}
                  collection={collection}
                  collectionAddress={curation}
                />
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};
