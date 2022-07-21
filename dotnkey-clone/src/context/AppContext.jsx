import { createContext, useState, useEffect } from 'react';
import { getData } from '../api/api';
export const AppContext = createContext();
export default function AppContextProvider({ children }) {
  const [productData, setProductData] = useState([]);
  const [page, setPage] = useState(1);
  function handlePage(p) {
    console.log(p);
    setPage(p);
  }
  async function takeData(page, limit = 4) {
    const res = await getData(page, limit);
    setProductData(res);
  }
  useEffect(() => {
    takeData(page);
  }, [page]);
  return (
    <AppContext.Provider value={{ productData, handlePage,page }}>
      {children}
    </AppContext.Provider>
  );
}
