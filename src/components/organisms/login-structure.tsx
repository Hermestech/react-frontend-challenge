import * as React from "react"
import StyledInput from "../atom/styled-input"
import LoginButton from "../atom/login-button"

type LoginStructureProps = {
    setIsLogin: React.Dispatch<React.SetStateAction<boolean>>

}

export function LoginStructure({ setIsLogin }: LoginStructureProps) {
    const [loginState, setLoginState] = React.useState<ILoginUser>({
        email: '',
        password: '',
        rememberMe: false
    })

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = event.target;
        setLoginState({ ...loginState, [name]: value });
    }

    const getLocalStorageUser = (): IRegisteredUser | null => {
        const user = localStorage.getItem('user');
        if (user) {
            return JSON.parse(user);
        }
        return null;
    }

    const handleLogin = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        const { email, password } = loginState;
        const encryptedPassword = btoa(password);
        const user = getLocalStorageUser();
        if (user) {
            if (user.email === email && user.password === encryptedPassword) {
                alert('Bienvenido');
            } else {
                alert('Usuario o contraseña incorrectos');
            }
        }
    }

    return (
        <>
        <div className="mx-auto max-w-md">
        <div className="flex w-full justify-center">
            <img src="" className="h-6" alt="Tailwind Play" />
        </div>
        <div className="divide-y divide-gray-300/50">
            <div className="space-y-6 py-8 text-center text-base leading-7 text-gray-600">
            <form className="flex flex-col items-center gap-6 space-y-4"
            onSubmit={handleLogin}
            >
                <StyledInput 
                placeholder="Usuario o email"
                inputType="text" 
                onChange={handleChange}
                name="email"
                value={loginState.email}
                />
                <StyledInput 
                placeholder="Contraseña" 
                inputType="password" 
                onChange={handleChange}
                name="password"
                value={loginState.password}
                />
                <LoginButton text="Iniciar Sesión" variant="secondary" buttonType="submit" />
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