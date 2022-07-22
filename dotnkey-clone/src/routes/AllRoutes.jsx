import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Cart from '../pages/Cart';
import Product from '../pages/Product';
export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Product/>}></Route>
      <Route path={"/cart"} element={<Cart/>}></Route>
    </Routes>
  );
}
