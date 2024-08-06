import React from "react";
import ReactDOM from "react-dom/client";

import "./index.scss";

import Header from "home/Header"
import Footer from "home/Footer"
import SafeComponent from "./components/SafeComponent";

const App = () => {

  return ( <div className="text-3xl mx-auto max-w-6xl">
      <SafeComponent>
        <Header />
      </SafeComponent>
      <div className="py-10" >This is PDP Page</div>
      <Footer />
  </div> )
};
const rootElement = document.getElementById("app")
if (!rootElement) throw new Error("Failed to find the root element")

const root = ReactDOM.createRoot(rootElement)

root.render(<App />)