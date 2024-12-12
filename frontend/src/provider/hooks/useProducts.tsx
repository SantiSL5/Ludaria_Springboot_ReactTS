import consume from '../router/consumer'
import { useState } from 'react'
import { queryConsumer, productQueries } from "../../core/queries";
import { toast } from 'react-toastify'

export function useProducts() {

    const [product, setProduct]: any = useState(undefined);
    const [products, setProducts]: any = useState(undefined);
    const [loading, setLoading]: any = useState(true);

    const getAllProducts = (() => {
        consume(queryConsumer.apiProduct, productQueries.getAllProducts).then((res: any) => {
            console.log(res);
            setProducts(res.data)
        }).catch((e: any) => {
            console.log(e);
        })
    })

    const getAllGames = (() => {
        consume(queryConsumer.apiProduct, productQueries.getAllProducts, { type: "GAME" }).then((res: any) => {
            console.log(res);
            setProducts(res.data)
        }).catch((e: any) => {
            console.log(e);
        })
    })

    const getAllPuzzles = ((type: string) => {
        consume(queryConsumer.apiProduct, productQueries.getAllProducts, { type }).then((res: any) => {
            console.log(res);
            setProducts(res.data)
        }).catch((e: any) => {
            console.log(e);
        })
    })

    const getAllAccessories = (() => {
        consume(queryConsumer.apiProduct, productQueries.getAllProducts, { type: "ACCESSORY" }).then((res: any) => {
            console.log(res);
            setProducts(res.data)
        }).catch((e: any) => {
            console.log(e);
        })
    })
    
    const getProduct = ((id:any) => {
        consume(queryConsumer.apiProduct, productQueries.getProduct, id).then((res: any) => {
            console.log(res);
            setProduct(res.data);
        }).catch((res: any) => {
            if (res.response.data != null) {
                toast.error(res.response.data, { className: "text-base bg-green-600 text-white rounded-lg p-4 shadow-md" })
            } else {
                toast.error("Something went wrong", { className: "text-base bg-red-600 text-white rounded-lg p-4 shadow-md" })
            }
        })
    })

    const deleteProduct = ((data: any) => {
        consume(queryConsumer.apiProduct, productQueries.deleteProduct, data).then((res: any) => {
            toast.success("Deleted successfully", { className: "text-base bg-green-600 text-white rounded-lg p-4 shadow-md"})
            setProducts(products.filter((item: any) => data !== item.id));
        }).catch((res: any) => {
            if (res.response.data != null) {
                toast.error(res.response.data, { className: "text-base bg-red-600 text-white rounded-lg p-4 shadow-md" })
            } else {
                toast.error("Something went wrong", { className: "text-base bg-red-600 text-white rounded-lg p-4 shadow-md" })
            }
        })
    })

    const deleteManyProducts = ((data: any) => {
        let req: any = { ids: [] };
        data.map((e: any) => {
            return req.ids.push(e.id);
        })
        consume(queryConsumer.apiProduct, productQueries.deleteManyProducts, req).then((res:any) => {
            const array = products.filter((x: any) => {
                return req.ids.indexOf(x.id) < 0;
            });
            setProducts(array);
            toast.success("Deleted successfully", { className: "text-base bg-green-600 text-white rounded-lg p-4 shadow-md"})
        }).catch((res: any) => {
            if (res.response.data != null) {
                toast.error(res.response.data, { className: "text-base bg-red-600 text-white rounded-lg p-4 shadow-md" })
            } else {
                toast.error("Something went wrong", { className: "text-base bg-red-600 text-white rounded-lg p-4 shadow-md" })
            }
        })
    })

    return { product, products, loading, setLoading, getProduct, getAllProducts, getAllPuzzles, deleteProduct, deleteManyProducts };

}

