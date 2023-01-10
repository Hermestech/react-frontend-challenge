import * as React from 'react'

interface AuthContextType {
    user: IRegisteredUser|null
    login: boolean
    logout: boolean
    setUser: React.Dispatch<React.SetStateAction<IRegisteredUser|null>>
    setLogin: React.Dispatch<React.SetStateAction<boolean>>
    setLogout: React.Dispatch<React.SetStateAction<boolean>>
}

export const AuthContext = React.createContext({} as AuthContextType)

export const AuthContextProvider: React.FC<React.PropsWithChildren<{}>> = (({ children }) => {
    const [user, setUser] = React.useState<IRegisteredUser|null>(null)
    const [logout, setLogout] = React.useState<boolean>(false)
    const [login, setLogin] = React.useState<boolean>(false)

    const values = React.useMemo(() => ({
        user,
        login,
        logout,
        setUser,
        setLogin,
        setLogout
    }), [user, login, logout])

    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    )
})

export function useAuthContext() {
    const context = React.useContext(AuthContext)
    if (!context) {
        throw new Error('useAuthContext must be used within AuthContextProvider')
    }
    return context
}

export default useAuthContext