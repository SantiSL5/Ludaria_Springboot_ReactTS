import secrets from "../../secret";
import Api from "../api/api";

const productConsumer: any = {
    get: (id: number) => {
        return Api({
            method: "get",
            url: secrets.SPRINGBOOT_APP_URL + "/product/" + id,
        })
    },
    getAll: (params?: { [key: string]: any }) => {
        return Api({
            method: "get",
            url: secrets.SPRINGBOOT_APP_URL + "/product",
            params: params,
        })
    },
    delete: (data: any) => {
        return Api({
            method: "delete",
            url: secrets.SPRINGBOOT_APP_URL + "/admin/product/" + data,
            data: data,
        })
    },
    deleteMany: (data: any) => {
        return Api({
            method: "delete",
            url: secrets.SPRINGBOOT_APP_URL + "/admin/product/deleteMany",
            data: data,
        })
    },
}

export default productConsumer;