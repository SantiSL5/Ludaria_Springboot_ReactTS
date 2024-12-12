import secrets from "../../secret";
import Api from "../api/api";

const categoryConsumer: any = {
    get: (id: number) => {
        return Api({
            method: "get",
            url: secrets.SPRINGBOOT_APP_URL + "/category/" + id,
        })
    },
    getAll: () => {
        return Api({
            method: "get",
            url: secrets.SPRINGBOOT_APP_URL + "/category",
        })
    },
    create: (data: any) => {
        return Api({
            method: "post",
            url: secrets.SPRINGBOOT_APP_URL + "/admin/category",
            data: data,
        })
    },
    update: (data: any) => {
        return Api({
            method: "put",
            url: secrets.SPRINGBOOT_APP_URL + "/admin/category/" + data.id,
            data: data,
        })
    },
    delete: (data: any) => {
        return Api({
            method: "delete",
            url: secrets.SPRINGBOOT_APP_URL + "/admin/category/" + data,
            data: data,
        })
    },
    deleteMany: (data: any) => {
        return Api({
            method: "delete",
            url: secrets.SPRINGBOOT_APP_URL + "/admin/category/deleteMany",
            data: data,
        })
    },
}

export default categoryConsumer;