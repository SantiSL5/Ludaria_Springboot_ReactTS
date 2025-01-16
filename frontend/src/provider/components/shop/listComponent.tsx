import { useNavigate } from 'react-router-dom';

const ListComponent = ({ items }: { items: any[] }) => {

    const navigate = useNavigate();

    const detailsClick = ( id : number) => {
        navigate(`/shop/details/${id}`);
    };

    return (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:lg:grid-cols-4">
            {items.map((item) => (
                <div 
                    key={item.id}
                    className="border p-4 rounded-lg hover:shadow-md"
                    onClick={() => detailsClick(item.id)} style={{ cursor: 'pointer'}}
                >
                    <div className="relative">
                        <img
                            src={`/assets/products/${item.img}`}
                            alt={item.name}
                            className="w-full h-48 object-contain rounded-md"
                        />
                    </div>

                    <h3 className="text-sm text-gray-700 mt-3 mb-1">{item.name}</h3>
                    <p className="text-sm font-bold">{item.price} €</p>
                </div>
            ))}
        </div>
    );
};

export default ListComponent;

