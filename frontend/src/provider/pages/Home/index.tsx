import { useState } from "react";
import BestSellersComponent from "../../components/home/bestSellersComponent";
import Spinner from "../../components/spinner/spinner.component";
import { useProducts } from "../../hooks/useProducts";

const Home = () => {
    const { products, getProductsFilters } = useProducts();
    const [filters] = useState({
        type: null,
        category: null,
        brand: null,
        minPrice: null,
        maxPrice: null,
    });
    
    if (!products) getProductsFilters(6,1,filters);

    return (
        <div className="container flex justify-items-center mx-auto my-5 ">
            {products ? (<BestSellersComponent products={products} />) : <Spinner />}
        </div>
    );
}

export default Home;