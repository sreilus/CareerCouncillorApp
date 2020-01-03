import React, { useState, createContext } from 'react'

export const ServiceContext = createContext();

export const ServiceProvider = props => {
    const [baseUrl, setBaseUrl] = useState("http://192.168.1.53:3500/api/");
    return (
        <ServiceContext.Provider value={baseUrl}>
            {props.children}
        </ServiceContext.Provider>
    );
}