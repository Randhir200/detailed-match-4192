import React from 'react';
import { Flex, Select } from '@chakra-ui/react';
export default function FilternSorting() {
  return (
    <Flex pos='fixed' bottom='0' left='35%' m='auto' w='35%' gap='20px'>
      <Select textAlign='center' bg='#fff' borderColor='black.600'>
        <option value='null'>Filter</option>
        <option value='4'>4 Stars</option>
        <option value='3'>3 Stars</option>
        <option value='2'>2 Stars</option>
      </Select>
      <Select textAlign='center' bg='#fff' borderColor='black.600'>
        <option value='null'>Featured</option>
        <option value='asc'>A-Z</option>
        <option value='desc'>Z-A</option>
        <option value='lowToHigh'>Low to High</option>
        <option value='highToLow'>High to Low</option>
      </Select>
    </Flex>
  );
}
