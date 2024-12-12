import { useState } from "react";
import ListCategories from "../../components/admin/crudCategories/list.component";
import CreateCategory from "../../components/admin/crudCategories/create.component";
import MenuAdmin from "../../components/admin/menuAdmin/menuAdmin.component";
import Spinner from "../../components/spinner/spinner.component";
import { useCategories } from "../../hooks/useCategories";

const AdminCategories = () => {
    const { categories, getAllCategories, createCategory, deleteCategory, deleteManyCategories, updateCategory } = useCategories();
    const [op, setOp]: any = useState("create");
    const [updateData, setupdateData]: any = useState();

    if (!categories) getAllCategories();

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
            <CreateCategory createCategory={createCategory} operation={op} updateData={updateData} updateCategory={updateCategory} changeForm={changeForm} />
            {categories ? <ListCategories list={categories} deleteCategory={deleteCategory} deleteManyCategories={deleteManyCategories} changeForm={changeForm} updateCategory={updateCategory}></ListCategories> : <Spinner />}
        </div>
    );
};

export default AdminCategories;