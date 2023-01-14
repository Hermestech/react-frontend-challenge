import * as React from "react"
import StyledInput from "../atom/styled-input"
import LoginButton from "../atom/login-button"
import useAuthContext from "../../context/auth-context"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"

type RegisterStructureProps = {
    setIsLogin: React.Dispatch<React.SetStateAction<boolean>>
}

export function RegisterStructure({ setIsLogin }: RegisterStructureProps) {
const { setUser, navigate } = useAuthContext()
const passwordRegex = /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/;
const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const [formState, setFormState] = React.useState<INewRegisteredUser>({
  email: '',
  password: '',
  newPassword: '',
  tycAccepted: 'false'
});
const [validPassword, setValidPassword] = React.useState<boolean>(false);
const [matchPassword, setMatchPassword] = React.useState<boolean>(false);
const [validEmail, setValidEmail] = React.useState<boolean>(false);
const [showPassword, setShowPassword] = React.useState<boolean>(false);

function emailMatchWithRegex(email: string): boolean {
  return emailRegex.test(email);
}

function newPasswordMatchWithPassword(password: string, newPassword: string): boolean {
  return password === newPassword;
}

function isValidPassword(password: string): boolean {
  return passwordRegex.test(password);
}


const handleLoginClick = (event: React.FormEvent<HTMLInputElement>): void  => {
    event.preventDefault();
    setIsLogin(true);
}

const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
  const { name, value } = event.target;
  setFormState({ ...formState, [name]: value });
}

const handleDisabledButton = (): boolean => {
  if (validEmail && validPassword && matchPassword && formState.tycAccepted === 'true') {
    return false;
  }
  return true;
}

const saveRegisteredUserLocalStorage = (user: IRegisteredUser): void => {
  localStorage.setItem('user', JSON.stringify(user));
}

const handleShowPassword = (): void => {
  setShowPassword(!showPassword);
}

const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const { email, password } = formState;
    const encryptedPassword = btoa(password);
    const newUser: IRegisteredUser = {
      email,
      password: encryptedPassword,
    }
    setUser(newUser);
    saveRegisteredUserLocalStorage(newUser);
    setTimeout(() => {
    navigate('/');
    }, 2500);
}

return(
    <>
    <div className="mx-auto max-w-md">
      <div className="flex w-full justify-center">
        <img src="/logo-rick.png" className="h-12 w-24" alt="Tailwind Play" />
      </div>
      <div className="divide-y divide-gray-300/50">
        <div className="space-y-6 py-8 text-center text-base leading-7 text-gray-600">
          <form className="flex flex-col items-center gap-6 space-y-4"
          onSubmit={handleSubmit}
          >
            <StyledInput 
            placeholder="Correo electrónico" 
            inputType="text" 
            value={formState.email || ''}
            onChange={e => {
              handleChange(e);
              setValidEmail(emailMatchWithRegex(e.target.value));
            }}
            name="email"
            />
            {
              !validEmail && formState.email.length >0 &&  (
                <p className="text-red-500 text-xs">
                    Email inválido
                </p>
              )
            }
            <div className="flex ">
            <StyledInput 
              placeholder="Contraseña"
              inputType={showPassword ? "text" : "password"}
              value={formState.password}
              onChange={e => {
                handleChange(e);
                setValidPassword(isValidPassword(e.target.value) );
              }}
              name="password"
              width="medium"
            />
            <div className="flex flex-col items-center justify-center">
              <button
                onClick={handleShowPassword}
                className="rounded-md h-12 p-2"
                type="button"
              >
                {
                  showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />
                }
              </button>
            </div>
            </div>

            {
              !validPassword && formState.password.length >0 &&  (
                <p className="text-red-500 text-xs">
                    Contraseña inválida necesitas al menos 8 caracteres, una mayúscula, una minúscula, un número y un caracter especial
                </p>
              )
            }
            <div className="flex">
            <StyledInput 
             placeholder="Confirmar contraseña"
             inputType={showPassword ? "text" : "password"} 
             value={formState.newPassword}
             onChange={ e => {
                handleChange(e);
                setMatchPassword(newPasswordMatchWithPassword(formState.password, e.target.value));
             }}
             name="newPassword"
              width="medium"
             />
            <div className="flex flex-col items-center justify-center">
              <button
                onClick={handleShowPassword}
                className="rounded-md h-12 p-2"
                type="button"
              >
                {
                  showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />
                }
              </button>
            </div>
            </div>

             {
              !matchPassword && formState.newPassword.length >0 &&  (
                <p className="text-red-500 text-xs">
                    Las contraseñas no coinciden
                </p>
              )
             }
            <div className="mb-2 flex max-w-full items-center">
              <input 
              id="default-checkbox" 
              type="checkbox" 
              value={ formState.tycAccepted}
              onChange={ () => setFormState({ ...formState, tycAccepted: 'true' })}
              className="h-8 w-8 rounded border-gray-300 bg-gray-100 text-sky-600 focus:ring-2 focus:ring-sky-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-sky-600" />
              <label htmlFor="default-checkbox" className="ml-4 text-sm font-medium text-gray-900 dark:text-gray-300">
                Acepto y he leído los <a className="text-sky-500 underline">Términos y condiciones</a> <br />
                y la <a className="text-sky-500 underline">Politica de privacidad</a>
              </label>
            </div>
            <LoginButton text="Registrarse" myOnClick={handleSubmit} variant="secondary" buttonType="submit" 
            disabled={handleDisabledButton()}
            />
          </form>
        </div> 
        <div className="flex flex-col gap-4 pt-8 text-center text-base leading-7">
          <p>¿Ya tienes una cuenta con nosotros?</p>
            <LoginButton text="Iniciar Sesión" myOnClick={handleLoginClick} variant="main" buttonType="button"/>
        </div>
      </div>
    </div>
    </>
)
}