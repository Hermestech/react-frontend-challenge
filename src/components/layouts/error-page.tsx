import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    
    return (
        <div>
        <h1>Ooops!</h1>
        <p>Lo sentimos, un error inesperado ocurrió</p>
        <p>
            <i>{error.statusText || error.message}</i>
        </p>
        </div>
    );
}