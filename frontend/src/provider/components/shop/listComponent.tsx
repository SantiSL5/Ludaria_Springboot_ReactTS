import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

interface ListProps {
    items: any[];
    onLike: (product: number) => void;
}

const ListComponent: React.FC<ListProps> = ({ items, onLike }) => {

    const navigate = useNavigate();

    const detailsClick = ( id : number) => {
        navigate(`/shop/details/${id}`);
    };

    const like = (product : number) => {
        onLike(product);
    }

    return (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:lg:grid-cols-4">
            {items.map((item:any) => (
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
                    <div className="flex items-center justify-between mt-3">
                        <p className="text-sm text-gray-500">{item.likes || 0} Likes</p>
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                like(item.id);
                            }}
                            className="flex items-center text-red-500"
                        >
                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path
                                    fillRule="evenodd"
                                    d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                                    clipRule="evenodd"
                                    className={item.liked ? "fill-red-600 stroke-red-600" : "fill-none stroke-black"}
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ListComponent;

