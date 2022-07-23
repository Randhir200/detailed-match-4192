import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Signup from '../pages/Signup'
import Auth from '../pages/Auth'
import Product from '../pages/Product'
import Cart from '../pages/Cart'
export default function AllRoutes() {
  return (
    <Routes>
        <Route path={'/'} element={<Product/>}></Route>
        <Route path={'/signup'} element={<Signup/>}></Route>
        <Route path={'/signin'} element={<Auth/>}></Route>
        <Route path={'/cart'} element={<Cart/>}></Route>
    </Routes>
  )
}
