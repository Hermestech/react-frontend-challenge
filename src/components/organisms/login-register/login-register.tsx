import * as React from "react";
import InitialStructure from "../initial-structure";
import { LoginStructure } from "../login-structure";
import { RegisterStructure } from "../register-structure";

export default function LoginRegister() {
    // este estado es para saber si el usuario quiere loguearse o registrarse
    const [isLogin, setIsLogin] = React.useState(true);

    if (isLogin) return (
        <InitialStructure>
            <LoginStructure setIsLogin={setIsLogin}/>
        </InitialStructure>
    );

    return (
        <InitialStructure>
            <RegisterStructure setIsLogin={setIsLogin}/>
        </InitialStructure>
    );

}