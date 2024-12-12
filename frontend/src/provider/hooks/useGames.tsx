import consume from '../router/consumer'
import { useState } from 'react'
import { queryConsumer, gameQueries } from "../../core/queries";
import { toast } from 'react-toastify'

export function useGames() {

    const [loading, setLoading]: any = useState(true);

    const createGame = ((data: any) => {
        consume(queryConsumer.apiGame, gameQueries.createGame, data).then((res: any) => {      
            toast.success("Created successfully", { className: "text-base bg-green-600 text-white rounded-lg p-4 shadow-md"})
            
        }).catch((res: any) => {
            if (res.response.data != null) {
                toast.error(res.response.data, { className: "text-base bg-red-600 text-white rounded-lg p-4 shadow-md" })
            } else {
                toast.error("Something went wrong", { className: "text-base bg-red-600 text-white rounded-lg p-4 shadow-md" })
            }
        })
    })

    const updateGame = ((data: any) => {
        consume(queryConsumer.apiGame, gameQueries.updateGame, data).then((res: any) => {
            toast.success("Updated successfully", { className: "text-base bg-green-600 text-white rounded-lg p-4 shadow-md"})
        }).catch((res: any) => {
            if (res.response.data != null) {
                toast.error(res.response.data, { className: "text-base bg-red-600 text-white rounded-lg p-4 shadow-md" })
            } else {
                toast.error("Something went wrong", { className: "text-base bg-red-600 text-white rounded-lg p-4 shadow-md" })
            }
        })
    })

    return {loading, setLoading, createGame, updateGame};

}
