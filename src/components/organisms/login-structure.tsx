import * as React from "react"
import StyledInput from "../atom/styled-input"
import LoginButton from "../atom/login-button"

type LoginStructureProps = {
    setIsLogin: React.Dispatch<React.SetStateAction<boolean>>

}

export function LoginStructure({ setIsLogin }: LoginStructureProps) {
    return (
        <>
        <div className="mx-auto max-w-md">
        <div className="flex w-full justify-center">
            <img src="" className="h-6" alt="Tailwind Play" />
        </div>
        <div className="divide-y divide-gray-300/50">
            <div className="space-y-6 py-8 text-center text-base leading-7 text-gray-600">
            <form className="flex flex-col items-center gap-6 space-y-4">
                <StyledInput placeholder="Usuario o email" inputType="text" />
                <StyledInput placeholder="Contraseña" inputType="password" />
                <LoginButton text="Iniciar Sesión" myOnClick={() => {alert('hola')}} variant="secondary" buttonType="submit" />
            </form>
            </div>
            <div className="flex flex-col gap-4 pt-8 text-center text-base leading-7">
            <p>¿Aún no tienes cuenta con nosotros?</p>
            <LoginButton text="Regístrate" myOnClick={() => setIsLogin(false)} variant="main" buttonType="button"/>
            </div>
        </div>
        </div>
        </>
    )
}