import consume from '../router/consumer'
import { useState } from 'react'
import { queryConsumer, brandQueries } from "../../core/queries";
import { toast } from 'react-toastify'

export function useBrands() {

    const [brand, setBrand]: any = useState(undefined);
    const [brands, setBrands]: any = useState(undefined);
    const [loading, setLoading]: any = useState(true);

    const getAllBrands = (() => {
        consume(queryConsumer.apiBrand, brandQueries.getAllBrands).then((res: any) => {
            setBrands(res.data)
        }).catch((e: any) => {
            console.log(e);
        })
    })
    
    const getBrand = ((id:any) => {
        consume(queryConsumer.apiBrand, brandQueries.getBrand, id).then((res: any) => {
            setBrand(res.data);
        }).catch((res: any) => {
            if (res.response.data != null) {
                toast.error(res.response.data, { className: "text-base bg-green-600 text-white rounded-lg p-4 shadow-md" })
            } else {
                toast.error("Something went wrong", { className: "text-base bg-red-600 text-white rounded-lg p-4 shadow-md" })
            }
        })
    })

    const createBrand = ((data: any) => {
        consume(queryConsumer.apiBrand, brandQueries.createBrand, data).then((res: any) => {      
            const aux = [...brands, res.data]
            toast.success("Created successfully", { className: "text-base bg-green-600 text-white rounded-lg p-4 shadow-md"})
            
            setBrands(aux)
        }).catch((res: any) => {
            if (res.response.data != null) {
                toast.error(res.response.data, { className: "text-base bg-red-600 text-white rounded-lg p-4 shadow-md" })
            } else {
                toast.error("Something went wrong", { className: "text-base bg-red-600 text-white rounded-lg p-4 shadow-md" })
            }
        })
    })

    const deleteBrand = ((data: any) => {
        consume(queryConsumer.apiBrand, brandQueries.deleteBrand, data).then((res: any) => {
            toast.success("Deleted successfully", { className: "text-base bg-green-600 text-white rounded-lg p-4 shadow-md"})
            setBrands(brands.filter((item: any) => data !== item.id));
        }).catch((res: any) => {
            if (res.response.data != null) {
                toast.error(res.response.data, { className: "text-base bg-red-600 text-white rounded-lg p-4 shadow-md" })
            } else {
                toast.error("Something went wrong", { className: "text-base bg-red-600 text-white rounded-lg p-4 shadow-md" })
            }
        })
    })

    const deleteManyBrands = ((data: any) => {
        let req: any = { ids: [] };
        data.map((e: any) => {
            return req.ids.push(e.id);
        })
        consume(queryConsumer.apiBrand, brandQueries.deleteManyBrands, req).then((res:any) => {
            const array = brands.filter((x: any) => {
                return req.ids.indexOf(x.id) < 0;
            });
            setBrands(array);
            toast.success("Deleted successfully", { className: "text-base bg-green-600 text-white rounded-lg p-4 shadow-md"})
        }).catch((res: any) => {
            if (res.response.data != null) {
                toast.error(res.response.data, { className: "text-base bg-red-600 text-white rounded-lg p-4 shadow-md" })
            } else {
                toast.error("Something went wrong", { className: "text-base bg-red-600 text-white rounded-lg p-4 shadow-md" })
            }
        })
    })

    const updateBrand = ((data: any) => {
        consume(queryConsumer.apiBrand, brandQueries.updateBrand, data).then((res: any) => {
            let aux = [...brands];
            let index = aux.findIndex((x: any) => x.id === data.id);
            aux[index] = res.data;
            setBrands(aux)
            toast.success("Updated successfully", { className: "text-base bg-green-600 text-white rounded-lg p-4 shadow-md"})
            getAllBrands();
        }).catch((res: any) => {
            if (res.response.data != null) {
                toast.error(res.response.data, { className: "text-base bg-red-600 text-white rounded-lg p-4 shadow-md" })
            } else {
                toast.error("Something went wrong", { className: "text-base bg-red-600 text-white rounded-lg p-4 shadow-md" })
            }
        })
    })

    return { brand, brands, loading, setLoading, getBrand, getAllBrands, createBrand, updateBrand, deleteBrand, deleteManyBrands };

}
