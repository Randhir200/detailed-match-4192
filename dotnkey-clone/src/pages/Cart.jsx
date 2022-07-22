import React from 'react';
import { Container, Heading } from '@chakra-ui/react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
export default function Cart() {
  return (
    <>
      <Navbar />
      <Container>
        <Heading textAlign='center'>Hello</Heading>
      </Container>
      <Footer />
    </>
  );
}
