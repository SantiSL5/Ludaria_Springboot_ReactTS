import consume from '../router/consumer'
import { useState } from 'react'
import { queryConsumer, orderQueries } from "../../core/queries";
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom';

export function useOrders() {
    const [orders, setOrders]: any = useState(undefined);
    const navigate = useNavigate();

    const getOrders = (() => {
        consume(queryConsumer.apiOrder, orderQueries.getOrders).then((res: any) => {
            console.log(res);
            setOrders(res);
        }).catch((res: any) => {
            if (res.response.data != null) {
                toast.error(res.response.data, { className: "text-base bg-green-600 text-white rounded-lg p-4 shadow-md" })
            } else {
                toast.error("Something went wrong", { className: "text-base bg-red-600 text-white rounded-lg p-4 shadow-md" })
            }
        })
    })

    const createOrder = (() => {
        consume(queryConsumer.apiOrder, orderQueries.createOrder).then((res: any) => {
            console.log(res);
            toast.success("Compra realizada")
            navigate('/shop')
        }).catch((res: any) => {
            if (res.response.data != null) {
                toast.error(res.response.data, { className: "text-base bg-green-600 text-white rounded-lg p-4 shadow-md" })
            } else {
                toast.error("Something went wrong", { className: "text-base bg-red-600 text-white rounded-lg p-4 shadow-md" })
            }
        })
    })

    return { orders, getOrders, createOrder}
}