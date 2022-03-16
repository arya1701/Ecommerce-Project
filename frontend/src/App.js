import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';

import WebFont from "webfontloader";
import Header from "./component/layout/Header/Header";
import Home from "./component/home/Home"
import Footer from "./component/layout/Footer/Footer";
import Productdetails from "./component/Product/Productdetails";
import Products from "./component/Product/Products.js";
import Search from "./component/Product/Search.js"

import LoginSignUp from "./component/User/LoginSignUp"
import store from './store';
import { loadUser } from "./actions/userAction";
import UserOptions from "./component/layout/Header/UserOptions";
import { useSelector } from 'react-redux';
import Profile from "./component/User/Profile";

import ProtectedRoute from "./component/Route/ProtectedRoute"
import UpdateProfile from "./component/User/UpdateProfile";
import UpdatePassword from "./component/User/UpdatePassword";
import ForgotPassword from "./component/User/ForgotPassword"
import ResetPassword from "./component/User/ResetPassword"
import Cart from "./component/Cart/Cart";
import Shipping from "./component/Cart/Shipping";
import ConfirmOrder from "./component/Cart/ConfirmOrder";
import axios from "axios";
import Payment from "./component/Cart/Payment";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from '@stripe/stripe-js';
import OrderSuccess from "./component/Cart/OrderSuccess";

import MyOrders from "./component/Order/MyOrders"
import OrderDetails from "./component/Order/OrderDetails";
import Dashboard from "./component/admin/Dashboard"
import ProductList from "./component/admin/ProductList";
import NewProduct from "./component/admin/NewProduct";
import UpdateProduct from "./component/admin/UpdateProduct";
import OrderList from "./component/admin/OrderList";

import ProcessOrder from "./component/admin/ProcessOrder";
import UserList from "./component/admin/UserList";
import UpdateUser from "./component/admin/UpdateUser";
import ProductReviews from "./component/admin/ProductReviews"
import NotFound from "./component/layout/Not Found/NotFound";


const App = () => {

  const { isAuthenticated, user } = useSelector((state) => state.user);
  const [stripeApiKey, setStripeApiKey] = useState("");

  async function getStripeApiKey() {

    const { data } = await axios.get("/api/v1/stripeapikey");
    setStripeApiKey(data.stripeApiKey)
  }
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"]
      },
    });

    store.dispatch(loadUser())
    getStripeApiKey();
    
// window.addEventListener("contextmenu",(e)=> e.preventDefault());

  }, [])
  return (
    <Router>
      {isAuthenticated && <UserOptions user={user} />}
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path="/product/:id" element={<Productdetails />} />
        <Route exact path="/products" element={<Products />} />
        <Route path="/products/:keyword" element={<Products />} />
        <Route exact path="/search" element={<Search />} />
        <Route exact path="/login" element={<LoginSignUp />} />
        {/* <ProtectedRoute exact path="/account" element={<Profile />} /> */}

        <Route path="/account" element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        } />
        <Route path="/me/update" element={
          <ProtectedRoute>
            <UpdateProfile />
          </ProtectedRoute>
        } />
        <Route path="/password/update" element={
          <ProtectedRoute>
            <UpdatePassword />
          </ProtectedRoute>
        } />
        <Route path="/password/forgot" element={<ForgotPassword />} />
        <Route path="/password/reset/:token" element={<ResetPassword />} />
        <Route path="/cart" element={<Cart />} />

        <Route path="/shipping" element={
          <ProtectedRoute>
            <Shipping />
          </ProtectedRoute>
        } />

        <Route path="/order/confirm" element={
          <ProtectedRoute>
            <ConfirmOrder />
          </ProtectedRoute>
        } />



        <Route path="/process/payment" element={
          <ProtectedRoute>
            <Elements stripe={loadStripe(stripeApiKey)}>
              <Payment />
            </Elements>
          </ProtectedRoute>
        } />
        <Route path="/success" element={
          <ProtectedRoute>
            <OrderSuccess />
          </ProtectedRoute>
        } />

        <Route path="/orders" element={
          <ProtectedRoute>
            <MyOrders />
          </ProtectedRoute>
        } />

        <Route path="/order/:id" element={
          <ProtectedRoute>
            <OrderDetails />
          </ProtectedRoute>
        } />

        <Route path="/admin/dashboard" element={
          <ProtectedRoute isAdmin={true}>
            <Dashboard />
          </ProtectedRoute>
        } />

<Route path="/admin/products" element={
          <ProtectedRoute isAdmin={true}>
            <ProductList />
          </ProtectedRoute>
        } />

<Route path="/admin/product" element={
          <ProtectedRoute isAdmin={true}>
            <NewProduct />
          </ProtectedRoute>
        } />
      <Route path="/admin/product/:id" element={
          <ProtectedRoute isAdmin={true}>
            <UpdateProduct />
          </ProtectedRoute>
        } />

<Route path="/admin/orders" element={
          <ProtectedRoute isAdmin={true}>
            <OrderList />
          </ProtectedRoute>
        } />

<Route path="/admin/order/:id" element={
          <ProtectedRoute isAdmin={true}>
            <ProcessOrder />
          </ProtectedRoute>
        } />

<Route path="/admin/users" element={
          <ProtectedRoute isAdmin={true}>
            <UserList />
          </ProtectedRoute>
        } />

<Route path="/admin/user/:id" element={
          <ProtectedRoute isAdmin={true}>
            <UpdateUser />
          </ProtectedRoute>
        } />

<Route path="/admin/reviews" element={
          <ProtectedRoute isAdmin={true}>
            <ProductReviews />
          </ProtectedRoute>
        } />



<Route path="*" element ={ <NotFound />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
