import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import SellingPageBody from "./components/SellingPageBody";
import YTMoreDet from "./components/YTMoreDet";
import About from "./components/About";
import ContactUs from "./components/contactpage";
import Login from "./components/loginpage";
import Signup from "./components/signuppage";
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<SellingPageBody />} />
        <Route path="/YTMoreDet" element={<YTMoreDet />} />
        <Route path="/About" element={<About />} />
        <Route path="/contactpage" element={<ContactUs />} />
        <Route path="/SellingPageBody" element={<SellingPageBody />} />
        <Route path="/loginpage" element={<Login />} />
        <Route path="/signuppage" element={<Signup />} />
      </Routes>
    </>
  );
};

export default App;
