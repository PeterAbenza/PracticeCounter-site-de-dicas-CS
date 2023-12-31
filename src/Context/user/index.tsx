import { ReactNode, createContext, useState } from "react";

interface UserContext {
    user?: User 
    setUser: React.Dispatch<React.SetStateAction<User | undefined>>    
}

interface User {
    name: string
    email: string
    token: string
}

export const userContext = createContext({} as UserContext)

export const UserProvider = ({children}: {children: ReactNode}) => {

    const [user, setUser] = useState<User | undefined>()

    return <userContext.Provider value={{user, setUser}}>
        {children}
    </userContext.Provider>
}