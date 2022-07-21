import { createContext, useState,useEffect } from 'react';
import {getData} from '../api/api';
export const AppContext = createContext();
export default function AppContextProvider({ children }) {
    const [productData, setProductData] = useState([]);
    async function takeData() {
    const res = await getData();
    setProductData(res)
    }
    useEffect(()=>{
      takeData();
  },[])
  return <AppContext.Provider value={{productData}}>{children}</AppContext.Provider>;
}
