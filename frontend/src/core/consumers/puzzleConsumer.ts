import secrets from "../../secret";
import Api from "../api/api";

const puzzleConsumer: any = {
    create: (data: any) => {
        return Api({
            method: "post",
            url: secrets.SPRINGBOOT_APP_URL + "/admin/puzzle",
            data: data,
        })
    },
    update: (data: any) => {
        return Api({
            method: "put",
            url: secrets.SPRINGBOOT_APP_URL + "/admin/puzzle/" + data.id,
            data: data,
        })
    },
}

export default puzzleConsumer;