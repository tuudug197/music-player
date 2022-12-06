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

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(14)

    return (
        <userAuth.Provider value={{ user, setUser}}>
            {children}
        </userAuth.Provider>
    )
}

export const useAuth = () => useContext(userAuth)





