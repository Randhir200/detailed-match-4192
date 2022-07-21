import React, { useContext, useState } from 'react';
import { Flex, Button } from '@chakra-ui/react';
import { AppContext } from '../context/AppContext';
export default function Pagination() {
  const total = [1, 2, 3, 4, 5];
  const [btnStatus, setBtnStatus] = useState(0);
  const { handlePage } = useContext(AppContext);
  return (
    <Flex gap='5px' mb='30px' w='100%' justifyContent='center'>
      {total.map((el, index) => (
        <Button
          disabled={index === btnStatus}
          color='#22222'
          backgroundColor='#7b7b7b'
          key={index}
          onClick={(e) => {
            handlePage(e.target.innerText);
            setBtnStatus(index);
          }}
        >
          {el}
        </Button>
      ))}
    </Flex>
  );
}
