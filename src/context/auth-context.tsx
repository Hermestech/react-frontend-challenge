import * as React from 'react'
import { useNavigate } from 'react-router-dom'
import { useLocalStorage } from '../hooks/useLocalStorage'

interface AuthContextType {
    user: IRegisteredUser|null
    navigate: ReturnType<typeof useNavigate>
    logout: () => void
    setUser: React.Dispatch<React.SetStateAction<IRegisteredUser|null>>
}

export const AuthContext = React.createContext({} as AuthContextType)

export const AuthContextProvider: React.FC<React.PropsWithChildren<{}>> = (({ children }) => {
    const [user, setUser] = useLocalStorage('user', null)
    const navigate = useNavigate()

    function logout() {
        setUser(null)
        navigate('/')
    }

    const values = React.useMemo(() => ({
        user,
        navigate,
        logout,
        setUser,
    }), [user])

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