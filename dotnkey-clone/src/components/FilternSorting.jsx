import React,{ useContext} from 'react';
import { Flex, Select } from '@chakra-ui/react';
import {AppContext} from '../context/AppContext'
export default function FilternSorting() {
  const {setFilter, setSort} = useContext(AppContext);
  return (
    <Flex pos='fixed' bottom='0' left='35%' m='auto' w='35%' gap='20px'>
      <Select onChange={(e)=>setFilter(e.target.value)} textAlign='center' bg='#fff' borderColor='black.600'>
        <option value='null'>Filter</option>
        <option value='ratings_gte=4&ratings_lte=5'>4 Stars</option>
        <option value='ratings_gte=3&ratings_lte=4'>3 Stars</option>
        <option value='ratings_gte=2&ratings_lte=3'>2 Stars</option>
      </Select>

      <Select onChange={(e)=>setSort(e.target.value)} textAlign='center' bg='#fff' borderColor='black.600'>
        <option value='null'>Featured</option>
        <option value='_sort=price&_order=asc'>Low to High</option>
        <option value='_sort=price&_order=desc'>High to Low</option>
      </Select>
    </Flex>
  );
}
