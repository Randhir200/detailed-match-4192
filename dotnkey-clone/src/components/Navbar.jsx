import React from 'react';
import { Image, Box, Flex, Container, Icon } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import {Link}  from 'react-router-dom';
import {
  FaMapMarkerAlt,
  FaSearch,
  FaCartArrowDown,
  FaUser,
} from 'react-icons/fa';
export default function Navbar() {
  return (
    <Container
      p={0}
      m={0}
      maxW='100%'
      borderBottom='1px'
      borderColor='gray.200'
    >
      <Box
        bg='#50504b'
        fontSize='14px'
        w='100%'
        p={0}
        m={0}
        textAlign='center'
        border='0'
        color='white'
      >
        Flat 20% off
      </Box>
      <Flex
        p='0.8% 0'
        direction='row'
        justifyContent='space-between'
        alignItems='center'
        m='0 auto 2px'
        maxW='80%'
      >
        <Box>
          <HamburgerIcon w={6} h={6} />
        </Box>
        <Box>
          <Link to='/'>
          <Image
            ml='20%'
            maxW='80%'
            src='https://cdn.shopify.com/s/files/1/0361/8553/8692/files/unnamed_250x_200x_2x_260x_24408e11-6e3a-4a0c-8327-74d0455f7696_260x.jpg?v=1646547348'
          />
          </Link>
        </Box>
        <Flex gap='8px' fontSize='17px'>
          <Icon as={FaSearch} />
          <Icon as={FaMapMarkerAlt} />
          <Link to='/cart'><Icon as={FaCartArrowDown} /></Link>
          <Icon as={FaUser} />
        </Flex>
      </Flex>
    </Container>
  );
}
