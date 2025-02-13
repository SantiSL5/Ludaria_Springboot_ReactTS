import secrets from "../../secret";
import Api from "../api/api";

const commentConsumer: any = {
    getAll: (params?: { [key: string]: any }) => {
        return Api({
            method: "get",
            url: secrets.SPRINGBOOT_APP_URL + "/comment",
            params: params,
        })
    },
    create: (data: any) => {
        return Api({
            method: "post",
            url: secrets.SPRINGBOOT_APP_URL + "/client/comment",
            data: data,
        })
    },
    delete: (id: number) => {
        return Api({
            method: "delete",
            url: secrets.SPRINGBOOT_APP_URL + "/client/comment/" + id,
        })
    },
}

export default commentConsumer;