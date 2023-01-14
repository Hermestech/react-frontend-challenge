import useAuthContext from "../../context/auth-context"
import Layout from "./layout"

export default function HomePage() {
    const { logout } = useAuthContext()
    return (
        <Layout/>
    )
}