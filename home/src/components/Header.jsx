

import MiniCart from "cart/MiniCart"
import Login from "cart/Login"

import { NavLink } from "react-router-dom";

import 'tailwindcss/tailwind.css'

const Header = () => {
    return (
        <div className="p-5 bg-blue-500 text-white text-3xl font-bold">
            <div className="flex">
                <div className="flex-grow">
                    <NavLink to="/">Fidget Spinner World </NavLink>
                    |   
                    <NavLink to="/cart">Cart </NavLink>

                </div>
                <div className="flex-end relative">
                    <MiniCart />
                    <Login />
                </div>
            </div>

        </div>
        
    )
}

export default Header;