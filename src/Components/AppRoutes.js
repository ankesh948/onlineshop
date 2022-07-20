import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Home/Home';
import FetchNews from './Home/FetchNews';
import View from './Home/View';
import Edit from './Home/Edit';
import Login from './Login/Login';
import Dashboard from './Dashboard/Dashboard';
import AddProducts from './Dashboard/Addproducts/AddProduct';
import Signup from './Signup/Signup';
import UserLogin from './Login/UserLogin';
import Header from './Inc/Header';

function AppRoutes() {
  return (
    <>

    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="news" element={<FetchNews />}></Route>
        <Route path="products" element={<AddProducts />}></Route>
        <Route path="view/:id" element={<View />}></Route>
        <Route path="edit/:id" element={<Edit />}></Route>
        <Route path="admin" element={<Login />}></Route>


        <Route path="dashboard" element={<Dashboard />}></Route>
        <Route path="addproduct" element={<AddProducts />}></Route>
        <Route path="admin" element={<Login />}></Route>
        <Route path="signup" element={<Signup />}></Route>
        <Route path="userlogin" element={<UserLogin />}></Route>
      </Routes> 
    </BrowserRouter>
    </>
  )
}
export default AppRoutes;