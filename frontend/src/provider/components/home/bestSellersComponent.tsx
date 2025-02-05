import { useNavigate } from "react-router-dom";

const BestSellersComponent = ({ products }: { products: any[] }) => {
    const navigate = useNavigate();

    const detailsClick = ( id : number) => {
        navigate(`/shop/details/${id}`);
    };
    return (
        <div className="bg-white p-6 rounded-lg shadow-[0_0_15px_rgba(0,0,0,0.25)]">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-3xl">Juegos más vendidos</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {products.map((product) => (
                    <div 
                        key={product.id}
                        className="border p-4 rounded-lg hover:shadow-md"
                        onClick={() => detailsClick(product.id)} style={{ cursor: 'pointer'}}
                    >
                        <div className="relative">
                            <img
                                src={`/assets/products/${product.img}`}
                                alt={product.name}
                                className="w-full h-48 object-contain rounded-md"
                            />
                        </div>

                        <h3 className="text-sm text-gray-700 mt-3 mb-1">{product.name}</h3>
                        <p className="text-sm font-bold">{product.price} €</p>
                    </div>
                ))}
          </div>
        </div>
      );
};

export default BestSellersComponent;