import { useState } from "react";
import ListBrands from "../../components/admin/crudBrands/list.component";
import CreateBrand from "../../components/admin/crudBrands/create.component";
import MenuAdmin from "../../components/admin/menuAdmin/menuAdmin.component";
import Spinner from "../../components/spinner/spinner.component";
import { useBrands } from "../../hooks/useBrands";

const AdminBrands = () => {
    const { brands, getAllBrands, createBrand, deleteBrand, deleteManyBrands, updateBrand } = useBrands();
    const [op, setOp]: any = useState("create");
    const [updateData, setupdateData]: any = useState();

    if (!brands) getAllBrands();

    const changeForm = (data: any, op: string) => {
        if (op === "create") {
            setOp(op);
            setupdateData(null);
        } else {
            setOp(op);
            setupdateData(data);
        }
        console.log("Updated state:", { op, updateData: data });
    };

    return (
        <div className="adminView">
            <MenuAdmin />
            <CreateBrand createBrand={createBrand} operation={op} updateData={updateData} updateBrand={updateBrand} changeForm={changeForm} />
            {brands ? <ListBrands list={brands} deleteBrand={deleteBrand} deleteManyBrands={deleteManyBrands} changeForm={changeForm} updateBrand={updateBrand}></ListBrands> : <Spinner />}
        </div>
    );
};

export default AdminBrands;