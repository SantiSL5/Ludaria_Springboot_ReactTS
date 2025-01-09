const ListComponent = ({ items }: { items: any[] }) => {
    return (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {items.map((item) => (
                <div 
                    key={item.id} 
                    className="border p-4 rounded-lg hover:shadow-md"
                >
                    <div className="relative">
                        <img
                            src={`/assets/products/${item.img}`}
                            alt={item.name}
                            className="w-full h-48 object-contain rounded-md"
                        />
                    </div>

                    <h3 className="mt-2 text-sm font-bold">{item.name}</h3>
                    <p className="text-gray-700 text-sm">{item.price} €</p>
                </div>
            ))}
        </div>
    );
};

export default ListComponent;

