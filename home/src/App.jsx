import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeContent from "./components/HomeContent";

import "remixicon/fonts/remixicon.css";
import "./index.scss";

import 'tailwindcss/tailwind.css'

import MainLayout from "./MainLayout";

// const App = () => (
//   <div className="text-3xl mx-auto max-w-6xl">
//     <Header />
//     <div className="py-10">
//       <HomeContent />
//     </div>
//     <Footer />
//   </div>
// );
const rootElement = document.getElementById("app")
if (!rootElement) throw new Error("Failed to find the root element")

const root = ReactDOM.createRoot(rootElement)

root.render(<MainLayout />)