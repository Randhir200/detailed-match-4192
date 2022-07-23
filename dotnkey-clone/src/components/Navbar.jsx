import React, { useContext } from 'react';
import {
  Image,
  Box,
  Flex,
  Container,
  Icon,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { HamburgerIcon, SearchIcon } from '@chakra-ui/icons';
import {
  FaMapMarkerAlt,
  FaSearch,
  FaCartArrowDown,
  FaUser,
} from 'react-icons/fa';
import Auth from '../pages/Auth';
import { AppContext } from '../context/AppContext';
import { Link } from 'react-router-dom';
export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { signinData, setSigninData } = useContext(AppContext);
  function handleLogout() {
    alert('want to logout');
    setSigninData(null);
  }
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
        <Flex alignItems='center' gap='8px' fontSize='17px'>
          <Icon as={FaSearch} />
          <Icon as={FaMapMarkerAlt} />
          <Link to='cart'>
            <Icon mt='4px' fontSize='18px' as={FaCartArrowDown} />{' '}
          </Link>
          {signinData ? (
            <Text
              onClick={() => {
                handleLogout();
              }}
              cursor='pointer'
              fontSize='14px'
              color='white'
              boxShadow='xl'
              p='0 5px'
              rounded='md'
              bg='#9F7AEA'
            >
              {signinData.username[0].toUpperCase()}
            </Text>
          ) : (
            <Icon cursor='pointer' onClick={onOpen} as={FaUser} />
          )}
          <Auth popup={{ isOpen, onOpen, onClose }} />
        </Flex>
      </Flex>
    </Container>
  );
}
