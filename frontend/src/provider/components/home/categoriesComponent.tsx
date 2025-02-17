import { useNavigate } from "react-router-dom";

const CategoriesComponent = () => {
    const navigate = useNavigate();

    return (
        <div className="py-12 px-4 flex justify-center mb-5">
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="relative group cursor-pointer" onClick={() => navigate(`/shop?category=11`)} >
                    <img src="/assets/home/filler.png" alt="Categoría 1" className="w-full h-64 object-cover rounded-lg shadow-lg transition-all duration-300 ease-in-out group-hover:scale-105"/>
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <h3 className="text-white text-xl font-bold">Fillers</h3>
                    </div>
                </div>


                <div className="relative group cursor-pointer" onClick={() => navigate(`/shop?category=4`)}>
                    <img src="/assets/home/eurogame.jpg" alt="Categoría 2" className="w-full h-64 object-cover rounded-lg shadow-lg transition-all duration-300 ease-in-out group-hover:scale-105"/>
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <h3 className="text-white text-xl font-bold">Eurogame</h3>
                    </div>
                </div>

                <div className="relative group cursor-pointer" onClick={() => navigate(`/shop?category=17`)}>
                    <img src="/assets/home/losetas.jpg" alt="Categoría 3" className="w-full h-64 object-cover rounded-lg shadow-lg transition-all duration-300 ease-in-out group-hover:scale-105"/>
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <h3 className="text-white text-xl font-bold">Losetas</h3>
                    </div>
                </div>

                <div className="relative group cursor-pointer" onClick={() => navigate(`/shop?category=1`)}>
                    <img src="/assets/home/estrategia.jpeg" alt="Categoría 4" className="w-full h-64 object-cover rounded-lg shadow-lg transition-all duration-300 ease-in-out group-hover:scale-105"/>
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <h3 className="text-white text-xl font-bold">Estrategia</h3>
                    </div>
                </div> 
            </div>
        </div>
      );
};

export default CategoriesComponent;