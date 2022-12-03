import { createContext, useContext, useState } from "react";

const Lessened = createContext({});

export const LessenedProvider = ({ children }) => {
    const [value, setValue] = useState(true)

    return (
        <Lessened.Provider value={{ value, setValue }}>

            {children}
        </Lessened.Provider>
    )
}

export const useLessened = () => useContext(Lessened)

// user auth context

const userAuth = createContext({})

export const authProvider = ({ children }) => {

    return (
        <userAuth.Provider value={{}}>

            {children}
        </userAuth.Provider>
    )
}





