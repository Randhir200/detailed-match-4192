import React, { useState, useContext } from 'react';
import {useNavigate} from 'react-router-dom'
import {
  Container,
  Button,
  FormControl,
  FormLabel,
  Input,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { AppContext } from '../context/AppContext';
export default function Signup() {
  const initData = {
    username: '',
    email: '',
    password: '',
  };
  const [formData, setFormData] = useState(initData);
  const [alert, setAlert] = useState();
  const { usersData, postUsersData, setSignupData, setSigninData } = useContext(AppContext);
  const navigate = useNavigate();

  //handle signup
  function handleSignup(data) {
        console.log(usersData);
    setSignupData(data);
    let find = usersData.find(checkId);
    console.log(find);
    function checkId(users) {
      return data.email === users.email;
    }
    if (find === undefined) {
      postUsersData(data);
      navigate('/')
      setSigninData(data);
      return (
        <Alert status='success'>
          <AlertIcon />
          Account Created
        </Alert>
      );
    } else {
      // alert('user exist')
      return (
        <Alert status='error'>
          <AlertIcon />
          <AlertTitle>User Exist</AlertTitle>
          <AlertDescription>Please enter new userid</AlertDescription>
        </Alert>
      );
    }
  }
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }
  return (
    <>
      <Navbar />
      <Container
        boxShadow='xs'
        p='6'
        rounded='md'
        bg='white'
        maxW='30%'
        m='20px auto'
      >
        {alert}
        <FormControl>
          <FormLabel>Username</FormLabel>
          <Input
            onChange={(e) => handleChange(e)}
            name='username'
            value={formData.username}
            placeholder='username'
          />
        </FormControl>
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

        <Button
          onClick={() => {
            setAlert(handleSignup(formData));
          }}
          display='flex'
          m='20px auto'
        >
          Submit
        </Button>
      </Container>
      <Footer />
    </>
  );
}
