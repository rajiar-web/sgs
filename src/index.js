import React from 'react';
import ReactDOM from 'react-dom';
import AOS from "aos";
import App from './App';
import "aos/dist/aos.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import UserProfile from "./UserProfile";
import Cart from "./Cart";
import Checkout from "./Checkout";
// import Listing from "./Listing";
import Login from "./Login";
import ProductDetails from "./ProductDetails";
import Header from "./inc/Header";import Footer from "./inc/Footer";
const routing = (
  <Router>
    <div>
      <Header />    
      <Switch>
        <Route exact path="/" component={App} />

      <Route path="/userprofile" component={UserProfile} />
        <Route path="/cart" component={Cart} />
        <Route path="/checkout" component={Checkout} />
        {/* <Route path="/listing" component={Listing} /> */}
        <Route path="/login" component={Login} /> */}
        <Route path="/productdetails" component={ProductDetails} />
        
        {/* <Route component={Notfound} /> */}
      </Switch>
      <Footer />    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

