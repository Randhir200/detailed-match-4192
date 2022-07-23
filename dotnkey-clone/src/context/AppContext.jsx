import { createContext, useState, useEffect } from 'react';
import { getData,addToUser} from '../api/api';
import axios from 'axios'
export const AppContext = createContext();
export default function AppContextProvider({ children }) {
  const [productData, setProductData] = useState([]);
  const [page, setPage] = useState(1);
  function handlePage(p) {
    console.log(p);
    setPage(p);
  }
  function handleCart(data){
    
 }
  async function takeData(page, limit = 4) {
    const res = await getData(page, limit);
    setProductData(res);
  }
  function handleSignup(userData){
    addToUser(userData)
    console.log(userData);

  }
  let [signedin, setSignedin] = useState(false);
  async function handleSignin(siginData){
    let res = await  axios.get("http://localhost:8000/user")
    res.data.map((el) => {
      if(el.username===siginData.username && el.password===siginData.password){
         
         setSignedin(true);
         alert('successfully signed in')
      }
  });

    }
  useEffect(() => {
    takeData(page);
  }, [page]);
  return (
    <AppContext.Provider value={{ productData, handlePage,page,handleCart,handleSignup,handleSignin}}>
      {children}
    </AppContext.Provider>
  );
}
