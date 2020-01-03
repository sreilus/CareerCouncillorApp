import React, { useState, createContext } from 'react'

export const UserContext = createContext();

export const UserProvider = props => {
    let data = [{
        userType: 1,
        _id: "5dff82eef9c4fe41a8e42ff0",
        name: "ahmet",
        email: "dsercew@gmail.com",
        password: "$2a$10$XR/6DlilBv6CNZF80Oh.mOJJLDqcYcNwPi.CV74o5NL9l5e3OSIgu",
        username: "dsafds",
        date: "2019-12-22T14:51:26.030Z",
        __v: 0
    }]
    const [user, setUser] = useState("");
    return (
        <UserContext.Provider value={[user,setUser]}>
            {props.children}
        </UserContext.Provider>
    );
}