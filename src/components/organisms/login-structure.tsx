import * as React from "react"
import StyledInput from "../atom/styled-input"
import LoginButton from "../atom/login-button"
import { useAuthContext } from "../../context/auth-context"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"

type LoginStructureProps = {
    setIsLogin: React.Dispatch<React.SetStateAction<boolean>>

}

export function LoginStructure({ setIsLogin }: LoginStructureProps) {
    const { navigate,setUser } = useAuthContext();
    const [loginState, setLoginState] = React.useState<ILoginUser>({
        email: '',
        password: '',
        rememberMe: false
    })
    const [loginError, setErrors] = React.useState<string[]>([])
    const [showPassword, setShowPassword] = React.useState<boolean>(false);

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
        const localUser = getLocalStorageUser();
        if (localUser) {
            if (localUser.email === email && localUser.password === encryptedPassword) {
                setUser(localUser);
                navigate('/');
            } else {
               setErrors(['Usuario o contraseña incorrectos'])
            }
        } else {
            setErrors(['Usuario o contraseña incorrectos'])
        }
    }

    return (
        <>
        <div className="mx-auto max-w-md">
        <div className="flex w-full justify-center ">
            <img src="/logo-rick.png" className="h-12 w-24 bg-inherit" alt="Tailwind Play" />
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
            <div className="flex">
                <StyledInput 
                placeholder="Contraseña" 
                inputType={showPassword ? "text" : "password"}
                onChange={handleChange}
                name="password"
                value={loginState.password}
                width="medium"
                />
                <div className="flex flex-col h-12 w-8 justify-center items-center">
                    <button className="text-sm text-gray-500 hover:text-gray-700" type="button" onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                    </button>
                </div>
            </div>

                {
                    loginError.length > 0 && (
                        <div className="flex flex-col gap-2">
                            {
                                loginError.map((error, index) => (
                                    <p key={index} className="text-red-500 text-sm">{error}</p>
                                ))
                            }
                        </div>
                    )
                }

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