import { Button } from "flowbite-react";
import { useUsers } from "../../hooks/useUsers";

interface CartListProps {
    cart: any;
    onUpdate: (cardLine: any,card: number) => void;
    onDelete: (id: number) => void;
    onCheckout: () => void;
}

const cartListComponent : React.FC<CartListProps> = ({ cart, onUpdate, onDelete, onCheckout })=> {
    const { user } = useUsers();
    console.log(cart.cartLines)

    if (!user) {
        return <p className="text-center text-red-500">Debes iniciar sesión para ver tu carrito.</p>;
    }

    const updateLine = (cardLine:any, cant:number) => {
        onUpdate(cardLine, cant);
    }

    const removeLine = (id:number) => {
        onDelete(id);
    }

    const checkout = () => {
        onCheckout();
    }


    return (
    <div className="container mx-auto p-6 border rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Tu Carrito</h2>
        
        {cart?.cartLines?.length > 0 || cart == null ? (
            <>
                <ul>
                    {cart.cartLines.map((item: any) => (
                        <li 
                        key={item.product.id} 
                        className="flex items-center justify-between border-b py-3"
                        >
                            <div className="flex items-center">
                                <img 
                                    src={`/assets/products/${item.product.img}`} 
                                    alt={item.product.name} 
                                    className="w-28 h-28 object-cover rounded-md"
                                />
                                <div className="ml-4">
                                    <p className="font-semibold">{item.product.name}</p>
                                    <p className="text-gray-800 font-bold">{item.unitaryPrice} €</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4">
                                <button 
                                    onClick={() => removeLine(item.id)} 
                                    className="text-white hover:text-black border border-red-500 bg-red-500 px-4 py-2 rounded"
                                >
                                    Eliminar
                                </button>

                                <div className="flex items-center space-x-2">
                                    <button
                                        onClick={() => updateLine(item, item.cant - 1)} 
                                        className="bg-gray-300 text-black p-2 rounded"
                                    >
                                        -
                                    </button>
                                    <input 
                                        type="number" 
                                        value={item.cant}
                                        readOnly
                                        min="1" 
                                        className="w-12 text-center border rounded-md" 
                                        style={{ WebkitAppearance: 'none', MozAppearance: 'textfield' }}
                                    />
                                    <button
                                        onClick={() => updateLine(item, item.cant + 1)} 
                                        className="bg-gray-300 text-black p-2 rounded"
                                    >
                                        +
                                    </button>
                                </div>

                                <p className="text-gray-800 font-bold">
                                    {(item.unitaryPrice * item.cant).toFixed(2)} €
                                </p>
                            </div>
                        </li>
                    ))}
                </ul>
                <div className="flex justify-between items-center py-4 border-t font-semibold">
                    <p>Total Artículos:</p>
                    <p>{cart.cartLines.reduce((total:any, item:any) => total + item.cant, 0)} artículos</p>
                </div>
                <div className="flex justify-between items-center py-4 font-semibold">
                    <p>Total:</p>
                    <p>{cart.cartLines.reduce((total:any, item:any) => total + (item.unitaryPrice * item.cant), 0).toFixed(2)} €</p>
                </div>
                <div className="flex justify-end items-center py-4 font-semibold">
                    <Button 
                        color="blue" 
                        onClick={checkout}>
                            Comprar
                    </Button>
                </div>
            </>
        ) : (
            <p className="text-black">Tu carrito está vacío.</p>
        )}
    </div>
    );
}

export default cartListComponent;