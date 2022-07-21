import React, { useContext } from 'react';
import {
  Container,
  Grid,
  GridItem,
  Heading,
  Box,
  Text,
  Image,
  Flex,
  Button,
  Icon,
} from '@chakra-ui/react';
import { FaStar, FaRegHeart } from 'react-icons/fa';

import { AppContext } from '../context/AppContext';
export default function ProductList() {
  const { productData } = useContext(AppContext);
  console.log(productData);
  return (
    <Container mb='100px' maxW='90%'>
      <Heading my='20px' textAlign='center'>
        Products
      </Heading>
      <Grid templateColumns='repeat(4, 1fr)' gap={5}>
        {productData.map((el) => (
          <GridItem key={el.id}>
            <Box>
              <Image src={el.img} />
            </Box>
            <Box m='auto' textAlign='center' maxW='95%'>
              <Flex alignItems='center' mx='2px' justifyContent='space-between'>
                <Flex alignItems='center' gap='5px'>
                  <Icon color='yellow.400' fontSize='12px' as={FaStar} />
                  <Text fontSize='12px'>{el.ratings}</Text>
                </Flex>
                <Flex alignItems='center' gap='5px'>
                  <Text color='#7b7b7b' fontSize='12px'>
                    reveiws
                  </Text>
                  <Text mt='2px' color='blue.600' fontSize='10px'>
                    ({el.reviews})
                  </Text>
                </Flex>
                <Icon as={FaRegHeart} />
              </Flex>

              <Text textTransform='uppercase' fontSize='12px' fontWeight='500'>
                {el.desc}
              </Text>
              <Flex justifyContent='center' my='5px' gap='10px'>
                <Text
                  color='#7b7b7b'
                  textDecoration='line-through'
                  fontSize='12px'
                >
                  ₹ {el.price}
                </Text>
                <Text color='#ff6781' fontSize='12px'>
                  ₹ {(el.price - el.price * (el.discount / 100)).toFixed(2)}
                </Text>
              </Flex>
              <Button
                w='100%'
                fontSize='12px'
                pt='0'
                h='25px'
                borderRadius='0'
                backgroundColor='#7b7b7b'
                color='#fff'
                textTransform='uppercase'
              >
                Add to cart
              </Button>
            </Box>
          </GridItem>
        ))}
      </Grid>
    </Container>
  );
}
