import { useState } from "react";
import ListGames from "../../components/admin/crudGames/list.component";
import CreateGame from "../../components/admin/crudGames/create.component";
import MenuAdmin from "../../components/admin/menuAdmin/menuAdmin.component";
import Spinner from "../../components/spinner/spinner.component";
import { useGames } from "../../hooks/useGames";
import { useProducts } from "../../hooks/useProducts";

const AdminGames = () => {
    const { createGame, updateGame } = useGames();
    const { products, getAllGames, deleteProduct, deleteManyProducts } = useProducts();
    const [op, setOp]: any = useState("create");
    const [updateData, setUpdateData]: any = useState();

    if (!products) getAllGames("GAME");

    const changeForm = (data: any, op: string) => {
        if (op === "create") {
            setOp(op);
            setUpdateData(null);
        } else {
            setOp(op);
            setUpdateData(data);
        }
    };

    return (
        <div className="adminView">
            <MenuAdmin />
            <CreateGame createGame={createGame} operation={op} updateData={updateData} updateGame={updateGame} changeForm={changeForm} />
            {products ? <ListGames list={products} deleteProduct={deleteProduct} deleteManyProducts={deleteManyProducts} changeForm={changeForm} updateGame={updateGame}></ListGames> : <Spinner />}
        </div>
    );
};

export default AdminGames;