import React from 'react'
import {} from '@chakra-ui/react'
import Banner from '../components/Banner'
import ProductList from '../components/ProductList'
import Pagination from '../components/Pagination'
import FilternSorting from '../components/FilternSorting'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
export default function Product() {
  return (
    <>
     <Navbar/>
     <Banner/>
     <ProductList />
     <Pagination/>
     <FilternSorting />
     <Footer/>
    </>
  )
}
