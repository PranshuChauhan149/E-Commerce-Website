import React from "react";
import Home from "./Home/Home";
import Navbar from "./components/Navbar";
import Navbar2 from "./components/Navbar2";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Shop from "./Home/Shop";
import Cart from "./Home/Cart";
import Contect from "./Home/Contect";
import TermsOfService from "./components/TermsOfService";
import PrivacyPolicy from "./components/PrivacyPolicy";
const App = () => {
  return (
    <>
      <BrowserRouter>
      <Navbar />
      <Navbar2 />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop/>} />
          <Route path="/cart" element={<Cart/>}></Route>
          <Route path="/contect" element={<Contect/>}></Route>
          <Route path="/termsofservice" element={<TermsOfService/>}></Route>
          <Route path="/privacypolicy" element={<PrivacyPolicy/>}></Route>
        </Routes>
      <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
