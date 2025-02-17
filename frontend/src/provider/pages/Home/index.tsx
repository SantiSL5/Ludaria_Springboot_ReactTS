import { useState } from "react";
import BestSellersComponent from "../../components/home/bestSellersComponent";
import Spinner from "../../components/spinner/spinner.component";
import { useProducts } from "../../hooks/useProducts";
import CategoriesComponent from "../../components/home/categoriesComponent";

const Home = () => {
    const { products, getProductsFilters } = useProducts();
    const [filters] = useState({
        type: null,
        category: null,
        brand: null,
        minPrice: null,
        maxPrice: null,
        search: null,
    });
    
    if (!products) getProductsFilters(6,1,filters);

    return (
        <>
            <div className="relative flex items-center justify-center h-60 text-white text-center">
                <div
                    className="absolute inset-0 bg-cover bg-bottom blur-sm"
                    style={{
                        backgroundImage: "url('/assets/home/home.jpg')",
                        backgroundColor: "rgba(255, 255, 255, 0.5)",
                        backgroundBlendMode: "lighten",
                    }}
                ></div>
                <div className="relative p-6 bg-opacity-30 bg-white rounded-lg">
                    <h1 className="text-6xl font-bold text-custom-orange text-shadow-4xl">Bienvenido a Ludaria</h1>
                </div>
            </div>
            <div className="container flex justify-items-center mx-auto my-5 ">
                {products ? (<BestSellersComponent products={products} />) : <Spinner />}
            </div>
            <div className="flex justify-center items-center flex-col">
                <h2 className="text-4xl mt-5">· Compra juegos de mesa en Ludaria ·</h2>
                <p className="mt-5 text-medium w-1/3 text-center">Utiliza los filtros de Ludaria para encontrar tu juego de mesa ideal, puedes utilizar nuestros filtros para buscar ese juego del que tanto hablan o para buscar por las categorías de juegos que existen. </p>
            </div>
            <CategoriesComponent />
        </>
    );
}

export default Home;