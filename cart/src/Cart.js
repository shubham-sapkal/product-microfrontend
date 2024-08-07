import { useState, useEffect } from "react"

import { BehaviorSubject } from "rxjs";

const API_SERVER = "http://localhost:8080";

export const jwt = new BehaviorSubject(null);

// Important Methods in Behaviour Subject
// jwt.subscribe( (token) => console.log(token) )
// jwt.next(newValue => console.log(newValue))

export const login = (username, password) => 
    fetch(`${API_SERVER}/auth/login`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            username,
            password,
        })
    })
    .then(res => res.json())
    .then((data) => {
        jwt.next(data.access_token);
        // getCart();

        return data.access_token;
    } )


export const useLoggedIn = () => {
    const [ loggedIn, setLoggedIn ] = useState(!!jwt.value);

    useEffect( () => {
        setLoggedIn(!!jwt.value);

        return jwt.subscribe( c => {
            setLoggedIn(!!jwt.value);
        } )
    }, []);

    return loggedIn;

}