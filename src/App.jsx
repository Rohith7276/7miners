import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import HomePage from "./pages/HomePage";

import { Routes, Route, Navigate } from "react-router-dom";
import PrivacyPolicy from "./pages/PrivacyPlicy";
import ContactInformation from "./pages/ContactInformation";
import Contact from "./pages/Contact";
import TermsOfService from "./pages/TermsOfService";
import ShippingPolicy from "./pages/ShippingPolicy";
import RefundPolicy from "./pages/RefundPolicy";
import Cart from "./pages/Cart";
import { useEffect } from "react";
import { useCartStore } from "./store/useCartStore"; 
import Checkout from "./pages/Checkout";
import Bitaxe from "./pages/products/Bitaxe"; 
import Nerdoctaxe from "./pages/products/Nerdoctaxe"; 
import Nerdqaxe from "./pages/products/Nerdqaxe"
import  Collection  from "./pages/collections";
import Login from "./pages/Login";

const App = () => {
  const {getData} = useCartStore()
  useEffect(() => {
    getData()
  }, [])


  return (
    <div className=" " >
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy-policy" element={ <PrivacyPolicy />  } /> 
        <Route path="/contact-information" element={<ContactInformation />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/shipping-policy" element={<ShippingPolicy />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
        <Route path={`/checkout`} element={<Checkout />} />
        <Route path="/products/bitaxe" element={<Bitaxe />} />
        <Route path="/products/Nerdoctaxe" element={<Nerdoctaxe />} />
        <Route path="/products/Nerdqaxe" element={<Nerdqaxe />} />
        <Route path="/catalog" element={<Collection />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />

    </div>
  );
};
export default App;