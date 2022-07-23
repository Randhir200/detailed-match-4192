import { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  getCartData,
  getData,
  getUsersData,
  patchCartData,
  postCartData,
  postUsersData,
  deleteCartData
} from '../api/api';
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react';
export const AppContext = createContext();

export default function AppContextProvider({ children }) {
  const [productData, setProductData] = useState([]);
  const [cartData, setCartData] = useState([]);
  const [usersData, setUsersData] = useState();
  const [signupData, setSignupData] = useState();
  const [signinData, setSigninData] = useState();
  const [addProd, setAddProd] = useState({});
  const [deleteProd, setDeleteProd] = useState({});
  const [page, setPage] = useState(1);

  //  collect products data
  async function takeData(page, limit = 4) {
    const res = await getData(page, limit);
    setProductData(res);
  }
  // collect cart data
  async function collectCartData() {
    const res = await getCartData();
    setCartData(res);
  }
  //handle cart delete 
  function handleCartDelete(el){
    setDeleteProd(el)
     deleteCartData(el.id);
  }
  //collect users data
  async function collectUsersData() {
    const res = await getUsersData();
    setUsersData(res);
  }
  //handle page data
  function handlePage(p) {
    setPage(p);
  }
  //handle cart
  function handleCart(data) {
    let find = cartData.find(checkId);
    function checkId(c) {
      return data.id === c.id;
    }
    if (find === undefined) {
      setAddProd(data)
      postCartData(data);
    } else {
      patchCartData(find.qwt + 1, data.id);
    }
  }

  //handle signin data
  function handleSignin(data, onClose) {
    console.log(data);
    let find = usersData.find(checkId);
    console.log(find);
    function checkId(users) {
      return data.email === users.email && data.password === users.password;
    }
    if (find !== undefined) {
      setSigninData(find);
      onClose();
      return (
        <Alert status='success'>
          <AlertIcon />
          loged in successfully
        </Alert>
      );
    } else {
      return (
        <Alert status='error'>
          <AlertIcon />
          Wrong Credential
        </Alert>
      );
    }
  }
  //handle
  useEffect(() => {
    collectUsersData();
  }, [signupData]);
  useEffect(() => {
    collectCartData();
  }, [deleteProd, addProd]);
  useEffect(() => {
    takeData(page);
  }, [page]);
  return (
    <AppContext.Provider
      value={{
        productData,
        handlePage,
        page,
        handleCart,
        signinData,
        handleSignin,
        setSigninData,
        postUsersData,
        signupData,
        setSignupData,
        usersData,
        cartData,
        handleCartDelete
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
