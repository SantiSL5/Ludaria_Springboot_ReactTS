import consume from '../router/consumer'
import { useState } from 'react'
import { queryConsumer, accessoryQueries, cartQueries } from "../../core/queries";
import { toast } from 'react-toastify'

export function useCart() {
    const [loading, setLoading]: any = useState(true);
    const [cart, setCart]: any = useState(undefined);

    const getCart = (() => {
        consume(queryConsumer.apiCart, cartQueries.getCart).then((res: any) => {
            console.log(res);
            setCart(res.data);
        }).catch((res: any) => {
            if (res.response.data != null) {
                toast.error(res.response.data, { className: "text-base bg-green-600 text-white rounded-lg p-4 shadow-md" })
            } else {
                toast.error("Something went wrong", { className: "text-base bg-red-600 text-white rounded-lg p-4 shadow-md" })
            }
        })
    })

    const cleanCart = (() => {
        consume(queryConsumer.apiCart, cartQueries.cleanCart).then((res: any) => {
            console.log(res);
            setCart(null);
        }).catch((res: any) => {
            if (res.response.data != null) {
                toast.error(res.response.data, { className: "text-base bg-green-600 text-white rounded-lg p-4 shadow-md" })
            } else {
                toast.error("Something went wrong", { className: "text-base bg-red-600 text-white rounded-lg p-4 shadow-md" })
            }
        })
    })

    const addCartLine = ((data:any) => {
        consume(queryConsumer.apiCart, cartQueries.addCartLine, data).then((res: any) => {
            console.log(res);
            toast.success("Producto añadido al carrito")
            getCart();
        }).catch((res: any) => {
            if (res.response.data != null) {
                toast.error(res.response.data, { className: "text-base bg-green-600 text-white rounded-lg p-4 shadow-md" })
            } else {
                toast.error("Something went wrong", { className: "text-base bg-red-600 text-white rounded-lg p-4 shadow-md" })
            }
        })
    })

    const updateCartLine = async (data:any, cant:number) => {
        try {
            await consume(queryConsumer.apiCart, cartQueries.updateCartLine, {data, cant});
            getCart()
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    const deleteCardLine = async (id:number) => {
        try {
            await consume(queryConsumer.apiCart, cartQueries.deleteCartLine, id);
            getCart()
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    return { cart, getCart, cleanCart, addCartLine, updateCartLine, deleteCardLine}
}