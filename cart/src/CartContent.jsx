import { useEffect, useState } from "react";
import { jwt, login } from "./Cart";
import Login from "./Login";

const CartContent = () => {
    const [token, setToken] = useState("");

    useEffect( () => {

        return jwt.subscribe( (val) => setToken(val ?? "")); 

    }, [] )

    return <div>
        <div> <Login /> </div>
        JWT: {token}</div>

}

export default CartContent;