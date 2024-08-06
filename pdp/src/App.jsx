import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";

import "./index.scss";

const Header = React.lazy( () => import("home/Header") ) 
import Footer from "home/Footer"


const App = () => (
  <div className="text-3xl mx-auto max-w-6xl">
      <Suspense fallback={<div> Loading ... </div>} >
        <Header />
      </Suspense>
      <div className="py-10" >This is PDP Page</div>
      <Footer />
  </div>
);
const rootElement = document.getElementById("app")
if (!rootElement) throw new Error("Failed to find the root element")

const root = ReactDOM.createRoot(rootElement)

root.render(<App />)