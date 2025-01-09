import ListProducts from "../../components/admin/crudProducts/list.component";
// import CreateProduct from "../../components/admin/crudProducts/create.component";
import MenuAdmin from "../../components/admin/menuAdmin/menuAdmin.component";
import Spinner from "../../components/spinner/spinner.component";
import { useProducts } from "../../hooks/useProducts";

const AdminProducts = () => {
    const { products, getAllProducts, deleteProduct, deleteManyProducts } = useProducts();

    if (!products) getAllProducts();

    return (
        <div className="adminView">
            <MenuAdmin />
            {products ? <ListProducts list={products} deleteProduct={deleteProduct} deleteManyProducts={deleteManyProducts} ></ListProducts> : <Spinner />}
        </div>
    );
};

export default AdminProducts;