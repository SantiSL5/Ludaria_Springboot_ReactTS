import ListProducts from "../../components/admin/crudProducts/list.component";
// import CreateProduct from "../../components/admin/crudProducts/create.component";
import MenuAdmin from "../../components/admin/menuAdmin/menuAdmin.component";
import Spinner from "../../components/spinner/spinner.component";
import { useProducts } from "../../hooks/useProducts";

const AdminProducts = () => {
    const { products, getAllProducts, deleteProduct, deleteManyProducts } = useProducts();

    if (!products) getAllProducts();

    // const changeForm = (data: any, op: string) => {
    //     if (op === "create") {
    //         setOp(op);
    //         setupdateData(null);
    //     } else {
    //         setOp(op);
    //         setupdateData(data);
    //     }
    //     console.log("Updated state:", { op, updateData: data });
    // };

    return (
        <div className="adminView">
            <MenuAdmin />
            {/* <CreateProduct createProduct={createProduct} operation={op} updateData={updateData} updateProduct={updateProduct} changeForm={changeForm} /> */}
            {products ? <ListProducts list={products} deleteProduct={deleteProduct} deleteManyProducts={deleteManyProducts} ></ListProducts> : <Spinner />}
        </div>
    );
};

export default AdminProducts;