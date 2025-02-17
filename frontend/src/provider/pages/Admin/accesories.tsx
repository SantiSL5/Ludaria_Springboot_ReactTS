import { useState } from "react";
import ListAccessories from "../../components/admin/crudAccessories/list.component";
import CreateAccessory from "../../components/admin/crudAccessories/create.component";
import MenuAdmin from "../../components/admin/menuAdmin/menuAdmin.component";
import Spinner from "../../components/spinner/spinner.component";
import { useAccessories } from "../../hooks/useAccessories";
import { useProducts } from "../../hooks/useProducts";

const AdminAccessories = () => {
    const { createAccessory, updateAccessory } = useAccessories();
    const { products, getAllAccessories, deleteProduct, deleteManyProducts } = useProducts();
    const [op, setOp]: any = useState("create");
    const [updateData, setUpdateData]: any = useState();

    if (!products) getAllAccessories("ACCESSORY");

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
            <CreateAccessory createAccessory={createAccessory} operation={op} updateData={updateData} updateAccessory={updateAccessory} changeForm={changeForm} />
            {products ? <ListAccessories list={products} deleteProduct={deleteProduct} deleteManyProducts={deleteManyProducts} changeForm={changeForm} updateAccessory={updateAccessory}></ListAccessories> : <Spinner />}
        </div>
    );
};

export default AdminAccessories;
