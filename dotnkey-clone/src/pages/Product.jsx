import React from 'react'
import {} from '@chakra-ui/react'
import Banner from '../components/Banner'
import ProductList from '../components/ProductList'
import Pagination from '../components/Pagination'
export default function Product() {
  return (
    <>
     <Banner/>
     <ProductList />
     <Pagination/>
    </>
  )
}
