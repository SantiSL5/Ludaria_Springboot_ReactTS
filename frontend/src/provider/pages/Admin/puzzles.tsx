import { useState } from "react";
import ListPuzzles from "../../components/admin/crudPuzzles/list.component";
import CreatePuzzle from "../../components/admin/crudPuzzles/create.component";
import MenuAdmin from "../../components/admin/menuAdmin/menuAdmin.component";
import Spinner from "../../components/spinner/spinner.component";
import { usePuzzles } from "../../hooks/usePuzzles";
import { useProducts } from "../../hooks/useProducts";

const AdminPuzzles = () => {
    const { createPuzzle, updatePuzzle } = usePuzzles();
    const { products, getAllPuzzles, deleteProduct, deleteManyProducts } = useProducts();
    const [op, setOp]: any = useState("create");
    const [updateData, setupdateData]: any = useState();

    if (!products) getAllPuzzles("PUZZLE");

    const changeForm = (data: any, op: string) => {
        if (op === "create") {
            setOp(op);
            setupdateData(null);
        } else {
            setOp(op);
            setupdateData(data);
        }
    };

    return (
        <div className="adminView">
            <MenuAdmin />
            <CreatePuzzle createPuzzle={createPuzzle} operation={op} updateData={updateData} updatePuzzle={updatePuzzle} changeForm={changeForm} />
            {products ? <ListPuzzles list={products} deleteProduct={deleteProduct} deleteManyProducts={deleteManyProducts} changeForm={changeForm} updatePuzzle={updatePuzzle}></ListPuzzles> : <Spinner />}
        </div>
    );
};

export default AdminPuzzles;