import * as React from "react";
import { Navigate } from "react-router-dom";
import { useAuthContext } from "../context/auth-context"

type ProtectedRouteProps = {
    children?: React.ReactNode
}

export const ProtectedRoute: React.FC<React.PropsWithChildren<ProtectedRouteProps>> = ({ children }) => {
    const { user} = useAuthContext()
    if (!user) {
        return <Navigate to="/login" />
    }
    return (
        <>
            {children}
        </>
    )
}