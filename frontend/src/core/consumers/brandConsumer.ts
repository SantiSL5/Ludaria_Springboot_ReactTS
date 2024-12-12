import secrets from "../../secret";
import Api from "../api/api";

const brandConsumer: any = {
    get: (id: number) => {
        return Api({
            method: "get",
            url: secrets.SPRINGBOOT_APP_URL + "/brand/" + id,
        })
    },
    getAll: () => {
        return Api({
            method: "get",
            url: secrets.SPRINGBOOT_APP_URL + "/brand",
        })
    },
    create: (data: any) => {
        return Api({
            method: "post",
            url: secrets.SPRINGBOOT_APP_URL + "/admin/brand",
            data: data,
        })
    },
    update: (data: any) => {
        return Api({
            method: "put",
            url: secrets.SPRINGBOOT_APP_URL + "/admin/brand/" + data.id,
            data: data,
        })
    },
    delete: (data: any) => {
        return Api({
            method: "delete",
            url: secrets.SPRINGBOOT_APP_URL + "/admin/brand/" + data,
            data: data,
        })
    },
    deleteMany: (data: any) => {
        return Api({
            method: "delete",
            url: secrets.SPRINGBOOT_APP_URL + "/admin/brand/deleteMany",
            data: data,
        })
    },
}

export default brandConsumer;