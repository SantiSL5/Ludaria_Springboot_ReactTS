import { useEffect, useState } from "react";
import Spinner from "../../components/spinner/spinner.component";
import { useCart } from "../../hooks/useCart";
import CartListComponent from "../../components/cart/cartListComponent";
import { toast } from "react-toastify";

const Cart = () => {
    const { cart, getCart, updateCartLine, deleteCardLine} = useCart();
    useEffect(() => {
        getCart();
    }, []);

    const handleUpdate = async (cardLine:any, cant: number) => {
        console.log(cardLine)
        if (cant > cardLine.product.stock) {
            toast.error("No hay mas stock disponible de este producto")
        } else if (cant < 0) {
            try {
                await deleteCardLine(cardLine.id);
                getCart();
                toast.success("Producto eliminado del carrito");
            } catch(e) {
                console.log(e);
            }
        } else {
            try {
                await updateCartLine(cardLine, cant);
                getCart()
            } catch(e) {
                console.log(e);
            }
        }
    }
    const handleDelete = async (id:number) => {
        try {
            await deleteCardLine(id);
            getCart()
            toast.success("Producto eliminado del carrito")
        } catch(e) {
            console.log(e);
        }
    }
    

    return (
        <div className="container flex justify-items-center mx-auto my-5 ">
            {cart ? (<CartListComponent cart={cart} onUpdate={handleUpdate} onDelete={handleDelete} />) : <Spinner />}

        </div>
    );
}

export default Cart;