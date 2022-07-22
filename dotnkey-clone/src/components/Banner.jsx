import React from 'react';
import { Container, Image } from '@chakra-ui/react';
export default function Banner() {
  return (
    <Container maxW='100%' p='0' m='0'>
      <Image
        borderRadius='0.8rem'
        src='https://cdn.shopify.com/s/files/1/0361/8553/8692/collections/top_picks_1_1512x.jpg?v=1655964483'
        alt='banner'
      />
    </Container>
  );
}
