import { createContext, useContext, useState } from "react";

const LessenedContext = createContext({});

export const LessenedProvider = ({ children }) => {
    const [value, setValue] = useState(true)

    return <LessenedContext.Provider value={{ value, setValue }}>

        {children}
    </LessenedContext.Provider>
}

export const useLessened = () => useContext(LessenedContext)
