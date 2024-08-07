import { useEffect, useState } from "react";
import { jwt, login } from "./Cart";
import Login from "./Login";

import MiniCart from "./MiniCart"

const CartContent = () => {
    const [token, setToken] = useState("");

    useEffect( () => {

        return jwt.subscribe( (val) => setToken(val ?? "")); 

    }, [] )

    return <div>
        <Login />
        <MiniCart />
    </div>

}

export default CartContent;