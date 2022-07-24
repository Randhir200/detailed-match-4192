import React from 'react';
import {} from '@chakra-ui/react';
import Banner from '../components/Banner';
import ProductList from '../components/ProductList';
import FilternSorting from '../components/FilternSorting';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
export default function Product() {
  return (
    <>
      <Navbar />
      <Banner />
      <ProductList />
      <FilternSorting />
      <Footer />
    </>
  );
}
