
import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"


import Header from "home/Header"
import Footer from "home/Footer"
import PDPContent from "pdp/PDPContent";
import HomeContent from "home/HomeContent";
import CartContent from "cart/CartContent";

import "./index.scss";
import "remixicon/fonts/remixicon.css";

const MainLayout = () => {

    return ( 
        <Router>
            <div className="text-3xl mx-auto max-w-6xl">
                <Header />
                <div className="py-10" >
                    <Routes>
                        <Route exact path="/" element={<HomeContent />} />
                        <Route path="/product/:id" element={<PDPContent />} />
                        <Route path="/cart" element={<CartContent />} />
                    </Routes>
                </div>
                <Footer />
            </div>
        </Router>
    )

}

export default MainLayout;