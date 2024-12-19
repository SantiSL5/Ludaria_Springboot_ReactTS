import RegisterComponent from "../../components/register/registerComponent";
import { useUsers } from "../../hooks/useUsers";

const Register = () => {
    const { register } = useUsers();
    return (
        <div className="registerView">
            <RegisterComponent registerH={register}/>
        </div>
    );
}

export default Register;