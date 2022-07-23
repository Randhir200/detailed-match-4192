import React, { useContext } from 'react';
import {
  Container,
  Grid,
  GridItem,
  Flex,
  Image,
  Text,
  Button,
  Box,
  Heading,
  Icon,
} from '@chakra-ui/react';
import { FaTrash } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { AppContext } from '../context/AppContext';
export default function Cart() {
  const { cartData, handleCartDelete } = useContext(AppContext);
  const total = cartData.reduce((prev, curr, ind, arr) => {
    return prev + curr.qwt;
  }, 0);
  const totalPrice = cartData.reduce((prev, curr, ind, arr) => {
    return prev + curr.qwt * curr.price;
  }, 0);
  return (
    <Container m='0' p='0' maxW='100%' h='auto'>
      <Navbar />
      <Container h='auto' m='20px auto' maxW='80%'>
        <Grid h='200px' templateColumns='repeat(5, 1fr)' gap={4}>
          <GridItem
            textAlign='center'
            rowSpan={cartData.length}
            colSpan={2}
            bg='tomato'
          >
            <Flex direction='column'>
              <Heading>Total Item : {total}</Heading>
              <Flex direction='row' justifyContent='space-between' m='20px 10%'>
                <Text>Total Price</Text>
                <Text>₹ {totalPrice.toFixed(2)}</Text>
              </Flex>
              <Flex direction='row' justifyContent='space-between' m='20px 10%'>
                <Text>Tax</Text>
                <Text>18 %</Text>
              </Flex>
              <Flex direction='row' justifyContent='space-between' m='20px 10%'>
                <Text>Amount to pay</Text>
                <Text>₹{(totalPrice + totalPrice * 0.18).toFixed(2)}</Text>
              </Flex>
            </Flex>
            <Button>Checkout</Button>
          </GridItem>
          {cartData.map((el) => (
            <GridItem m='0 10px' key={el.id} colSpan={3} bg='papayawhip'>
              <Flex alignItems='center' justifyContent='space-between'>
                <Box maxW='15%'>
                  <Image w='100%' src={el.img} alt='image' />
                </Box>
                <Text>{el.title}</Text>
                <Text>₹ {el.price}</Text>
                <Flex alignItems='center' gap='2'>
                  <Button>+</Button>
                  <Text>{el.qwt}</Text>
                  <Button>-</Button>
                </Flex>
                <Text>₹ {el.price * el.qwt}</Text>
                <Icon
                  cursor='pointer'
                  onClick={() => {
                    handleCartDelete(el);
                  }}
                  as={FaTrash}
                />
              </Flex>
            </GridItem>
          ))}
        </Grid>
      </Container>
      {/* <Footer /> */}
    </Container>
  );
}
