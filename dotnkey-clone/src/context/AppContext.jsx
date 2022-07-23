import { createContext, useState, useEffect } from 'react';
import { getCartData, getData, getUsersData,patchCartData,
  postCartData } from '../api/api';
export const AppContext = createContext();
export default function AppContextProvider({ children }) {
  const [productData, setProductData] = useState([]);
  const [cartData, setCartData] = useState();
  const [usersData, setUsersData] = useState();
  const [signupData, setSignupData] = useState();
  const [signinData, setSignData] = useState();
  const [readyProd, setReadyProd] = useState({});
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
      // console.log(c.id);
      return data.id === c.id;
    } 
    if(find===undefined) {
      postCartData(data);
    }else{
      patchCartData(find.qwt+1,data.id)
    }
  }

  //handle signup

  //handle signin data

  //handle
  useEffect(() => {
    collectUsersData();
  }, [signupData]);
  useEffect(() => {
    collectCartData();
  }, [cartData]);
  useEffect(() => {
    takeData(page);
  }, [page]);
  return (
    <AppContext.Provider value={{ productData, handlePage, page, handleCart }}>
      {children}
    </AppContext.Provider>
  );
}
