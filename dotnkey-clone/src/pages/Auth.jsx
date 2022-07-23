import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import { Link } from 'react-router-dom';
import {
  Button,
  Heading,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  Text,
} from '@chakra-ui/react';
export default function Auth({ popup }) {
  const initData = {
    email: '',
    password: '',
  };
  const [formData, setFormData] = useState(initData);
  const [alert, setAlert] = useState();
  const { handleSignin } = useContext(AppContext);
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }
  return (
    <>
      <Modal isOpen={popup.isOpen} onClose={popup.onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Signin</ModalHeader>
          {alert}
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input
                name='email'
                value={formData.email}
                onChange={(e) => handleChange(e)}
                type='email'
                placeholder='email'
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Password</FormLabel>
              <Input
                name='password'
                value={formData.password}
                onChange={(e) => handleChange(e)}
                type='password'
                placeholder='password'
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Link to='/signup'>
              <Text
                cursor='pointer'
                p='0'
                m='15px 10px 0 '
                float='left'
                fontSize='14px'
                color='blue'
              >
                create account
              </Text>
            </Link>
            <Button colorScheme='blue' mr={3} onClick={popup.onClose}>
              Close
            </Button>
            <Button
              onClick={() => setAlert(handleSignin(formData,popup.onClose))}
              colorScheme='green'
              >
              Submit
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
