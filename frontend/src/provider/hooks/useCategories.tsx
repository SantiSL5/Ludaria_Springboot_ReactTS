import consume from '../router/consumer'
import { useState } from 'react'
import { queryConsumer, categoryQueries } from "../../core/queries";
import { toast } from 'react-toastify'

export function useCategories() {

    const [category, setCategory]: any = useState(undefined);
    const [categories, setCategories]: any = useState(undefined);
    const [loading, setLoading]: any = useState(true);

    const getAllCategories = (() => {
        consume(queryConsumer.apiCategory, categoryQueries.getAllCategories).then((res: any) => {
            console.log(res);
            setCategories(res.data)
        }).catch((e: any) => {
            console.log(e);
        })
    })
    
    const getCategory = ((id:any) => {
        consume(queryConsumer.apiCategory, categoryQueries.getCategory, id).then((res: any) => {
            console.log(res);
            setCategory(res.data);
        }).catch((res: any) => {
            if (res.response.data != null) {
                toast.error(res.response.data, { className: "text-base bg-green-600 text-white rounded-lg p-4 shadow-md" })
            } else {
                toast.error("Something went wrong", { className: "text-base bg-red-600 text-white rounded-lg p-4 shadow-md" })
            }
        })
    })

    const createCategory = ((data: any) => {
        consume(queryConsumer.apiCategory, categoryQueries.createCategory, data).then((res: any) => {      
            const aux = [...categories, res.data]
            toast.success("Created successfully", { className: "text-base bg-green-600 text-white rounded-lg p-4 shadow-md"})
            
            setCategories(aux)
        }).catch((res: any) => {
            if (res.response.data != null) {
                toast.error(res.response.data, { className: "text-base bg-red-600 text-white rounded-lg p-4 shadow-md" })
            } else {
                toast.error("Something went wrong", { className: "text-base bg-red-600 text-white rounded-lg p-4 shadow-md" })
            }
        })
    })

    const deleteCategory = ((data: any) => {
        consume(queryConsumer.apiCategory, categoryQueries.deleteCategory, data).then((res: any) => {
            toast.success("Deleted successfully", { className: "text-base bg-green-600 text-white rounded-lg p-4 shadow-md"})
            setCategories(categories.filter((item: any) => data !== item.id));
        }).catch((res: any) => {
            if (res.response.data != null) {
                toast.error(res.response.data, { className: "text-base bg-red-600 text-white rounded-lg p-4 shadow-md" })
            } else {
                toast.error("Something went wrong", { className: "text-base bg-red-600 text-white rounded-lg p-4 shadow-md" })
            }
        })
    })

    const deleteManyCategories = ((data: any) => {
        let req: any = { ids: [] };
        data.map((e: any) => {
            return req.ids.push(e.id);
        })
        consume(queryConsumer.apiCategory, categoryQueries.deleteManyCategories, req).then((res:any) => {
            const array = categories.filter((x: any) => {
                return req.ids.indexOf(x.id) < 0;
            });
            setCategories(array);
            toast.success("Deleted successfully", { className: "text-base bg-green-600 text-white rounded-lg p-4 shadow-md"})
        }).catch((res: any) => {
            if (res.response.data != null) {
                toast.error(res.response.data, { className: "text-base bg-red-600 text-white rounded-lg p-4 shadow-md" })
            } else {
                toast.error("Something went wrong", { className: "text-base bg-red-600 text-white rounded-lg p-4 shadow-md" })
            }
        })
    })

    const updateCategory = ((data: any) => {
        consume(queryConsumer.apiCategory, categoryQueries.updateCategory, data).then((res: any) => {
            let aux = [...categories];
            let index = aux.findIndex((x: any) => x.id === data.id);
            aux[index] = res.data;
            setCategories(aux)
            toast.success("Updated successfully", { className: "text-base bg-green-600 text-white rounded-lg p-4 shadow-md"})
            getAllCategories();
        }).catch((res: any) => {
            if (res.response.data != null) {
                toast.error(res.response.data, { className: "text-base bg-red-600 text-white rounded-lg p-4 shadow-md" })
            } else {
                toast.error("Something went wrong", { className: "text-base bg-red-600 text-white rounded-lg p-4 shadow-md" })
            }
        })
    })

    return { category, categories, loading, setLoading, getCategory, getAllCategories, createCategory, updateCategory, deleteCategory, deleteManyCategories };

}
