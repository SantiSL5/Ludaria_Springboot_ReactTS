import LoginComponent from "../../components/login/loginComponent";
import { useUsers } from "../../hooks/useUsers";

const Login = () => {
    const { login } = useUsers();
    return (
        <div className="loginView">
            <LoginComponent login={login}/>
        </div>
    );
}

export default Login;