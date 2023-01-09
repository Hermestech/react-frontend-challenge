import * as React from "react"
import StyledInput from "../atom/styled-input"
import LoginButton from "../atom/login-button"

type RegisterStructureProps = {
    setIsLogin: React.Dispatch<React.SetStateAction<boolean>>
}

export function RegisterStructure({ setIsLogin }: RegisterStructureProps) {

const handleLoginClick = (event: React.FormEvent<HTMLInputElement>): void  => {
    event.preventDefault();
    console.log('inciar sesión, cliqueado');
    setIsLogin(true);
}

return(
    <>
    <div className="mx-auto max-w-md">
      <div className="flex w-full justify-center">
        <img src="" className="h-6" alt="Tailwind Play" />
      </div>
      <div className="divide-y divide-gray-300/50">
        <div className="space-y-6 py-8 text-center text-base leading-7 text-gray-600">
          <form className="flex flex-col items-center gap-6 space-y-4">
            <StyledInput placeholder="Nombre" inputType="text" />
            <StyledInput placeholder="Apellido" inputType="text" />
            <StyledInput placeholder="Email" inputType="email" />
            <div className="mb-2 flex max-w-full items-center">
              <input id="default-checkbox" type="checkbox" value="" className="h-8 w-8 rounded border-gray-300 bg-gray-100 text-sky-600 focus:ring-2 focus:ring-sky-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-sky-600" />
              <label htmlFor="default-checkbox" className="ml-4 text-sm font-medium text-gray-900 dark:text-gray-300">
                Acepto y he leído los <a className="text-sky-500 underline">Términos y condiciones</a> <br />
                y la <a className="text-sky-500 underline">Politica de privacidad</a>
              </label>
            </div>
            <LoginButton text="Registrarse" myOnClick={(event:any) => {
                event.preventDefault();
                console.log('registrarse, cliqueado');
            }} variant="secondary" buttonType="submit"/>
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