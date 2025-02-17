import ProfileComponent from "../../components/profile/profileComponent";
import Spinner from "../../components/spinner/spinner.component";
import { useOrders } from "../../hooks/useOrders";
import { useUsers } from "../../hooks/useUsers";

const Profile = () => {
    const { orders, getOrders } = useOrders();
    const { user } = useUsers();

    if (!orders) { getOrders() }

    return (
        <div>
            {orders && user ? (<ProfileComponent orders={orders} user={user}/>) : <Spinner />}
        </div>
    );
}

export default Profile;