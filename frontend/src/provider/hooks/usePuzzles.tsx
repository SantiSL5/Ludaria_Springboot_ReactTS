import consume from '../router/consumer';
import { useState } from 'react'
import { queryConsumer, puzzleQueries } from "../../core/queries";
import { toast } from 'react-toastify'

export function usePuzzles() {

    const [loading, setLoading]: any = useState(true);


    const createPuzzle = ((data: any) => {
        consume(queryConsumer.apiPuzzle, puzzleQueries.createPuzzle, data).then((res: any) => {      
            toast.success("Created successfully", { className: "text-base bg-green-600 text-white rounded-lg p-4 shadow-md"})
        }).catch((res: any) => {
            if (res.response.data != null) {
                toast.error(res.response.data, { className: "text-base bg-red-600 text-white rounded-lg p-4 shadow-md" })
            } else {
                toast.error("Something went wrong", { className: "text-base bg-red-600 text-white rounded-lg p-4 shadow-md" })
            }
        })
    })

    const updatePuzzle = ((data: any) => {
        consume(queryConsumer.apiPuzzle, puzzleQueries.updatePuzzle, data).then((res: any) => {
            toast.success("Updated successfully", { className: "text-base bg-green-600 text-white rounded-lg p-4 shadow-md"})
        }).catch((res: any) => {
            if (res.response.data != null) {
                toast.error(res.response.data, { className: "text-base bg-red-600 text-white rounded-lg p-4 shadow-md" })
            } else {
                toast.error("Something went wrong", { className: "text-base bg-red-600 text-white rounded-lg p-4 shadow-md" })
            }
        })
    })

    return {loading, setLoading, createPuzzle, updatePuzzle};

}