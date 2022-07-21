import React from 'react';
import {
  Image,
  Box,
  Flex,
  Text,
  Heading,
  Container,
  Input,
  Button,
  Icon,
} from '@chakra-ui/react';
import {
  FaYoutube,
  FaFacebookF,
  FaInstagram,
  FaRegCopyright,
} from 'react-icons/fa';

export default function Footer() {
  return (
    <Container m='0' p='0' maxW='100%'>
      <Flex
        gap='10%'
        textTransform='uppercase'
        justifyContent='space-between'
        maxW='80%'
        m='auto'
      >
        <Box>
          <Heading fontSize='18px' fontWeight='500'>
            GET TO KNOW US
          </Heading>
          <Text mb='0.25em' color='#3c3c3c'>
            About us
          </Text>
          <Text mb='0.25em' color='#3c3c3c'>
            Contact us
          </Text>
          <Text mb='0.25em' color='#3c3c3c'>
            Earthcare
          </Text>
          <Text mb='0.25em' color='#3c3c3c'>
            Affilate Program
          </Text>
          <Text mb='0.25em' color='#3c3c3c'>
            Terms &amp; condition
          </Text>
          <Text mb='0.25em' color='#3c3c3c'>
            Refund &amp; cancellation
          </Text>
          <Text mb='0.25em' color='#3c3c3c'>
            Privacy Policy
          </Text>
          <Text mb='0.25em' color='#3c3c3c'>
            Order &amp; Shipping
          </Text>
          <Text mb='0.25em' color='#3c3c3c'>
            Payment Terms
          </Text>
          <Text mb='0.25em' color='#3c3c3c'>
            Terms of Service
          </Text>
          <Text mb='0.25em' color='#3c3c3c'>
            Refund Policy
          </Text>
        </Box>
        <Box>
          <Heading fontSize='18px' fontWeight='500'>
            ALSO AVAILABLE ON
          </Heading>
          <Text mb='0.25em' color='#3c3c3c'>
            NYKAA
          </Text>
          <Text mb='0.25em' color='#3c3c3c'>
            Amazon
          </Text>
          <Text mb='0.25em' color='#3c3c3c'>
            Flipkart
          </Text>
          <Text mb='0.25em' color='#3c3c3c'>
            Myntra
          </Text>
        </Box>
        <Box>
          <Heading fontSize='18px' fontWeight='500'>
            Stay Updated
          </Heading>
          <Flex gap='10px'>
            <Input
              borderRadius='0'
              border='0'
              borderBottom='1px'
              borderColor='black'
              placeholder='example@example.com'
            />
            <Button
              textTransform='uppercase'
              borderRadius='0'
              color='white'
              fontSize='14px'
              fontWeight='100'
              backgroundColor='black'
            >
              Submit
            </Button>
          </Flex>
          <Button
            mt='10px'
            backgroundColor='purple.400'
            color='#fff'
            borderRadius='0'
            textTransform='uppercase'
          >
            Download the App
          </Button>
          <Flex mt='30px' gap='15px' alignItems='center'>
            <Text fontSize='16px'>Follow Us</Text>
            <Icon fontSize='17px' as={FaFacebookF} />
            <Icon fontSize='20px' as={FaInstagram} />
            <Icon fontSize='22px' as={FaYoutube} />
          </Flex>
          <Flex mt='20px' gap='5px' alignItems='center'>
            <Icon fontSize='11px' as={FaRegCopyright} />
            <Text textTransform='capitalize' fontSize='14px'>
              2022 Dot &amp; Key
            </Text>
          </Flex>
        </Box>
      </Flex>
    </Container>
  );
}
