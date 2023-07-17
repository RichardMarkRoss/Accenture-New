import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Banner } from "./components/Banner";
import { About } from "./components/About";
import { ProductsPreview } from "./components/ProductsPreview";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

const Home = () => {
  return (
    <Router>
      <Header/>      
        <div>
          <hr />
          <Routes>
            <Route path='/Banner' element={<Banner />} />
            <Route path='/ProductsPreview' element={<ProductsPreview />} />
            <Route path='/About' element={<About />} />
          </Routes>
        </div>
        <Footer/>  
      </Router>
  );
};

export default Home;
