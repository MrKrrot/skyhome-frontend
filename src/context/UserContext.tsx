import { createContext, ReactElement, useState } from 'react'

export const UserContext = createContext({})

export const UserProvider = ({ children }: { children: ReactElement }) => {
    const [user, setUser] = useState({})

    return (
        <UserContext.Provider
            value={{
                user,
                setUser,
            }}>
            {children}
        </UserContext.Provider>
    )
}
