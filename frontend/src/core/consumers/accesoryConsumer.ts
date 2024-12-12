import secrets from "../../secret";
import Api from "../api/api";

const accessoryConsumer: any = {
    create: (data: any) => {
        return Api({
            method: "post",
            url: secrets.SPRINGBOOT_APP_URL + "/admin/accessory",
            data: data,
        })
    },
    update: (data: any) => {
        return Api({
            method: "put",
            url: secrets.SPRINGBOOT_APP_URL + "/admin/accessory/" + data.id,
            data: data,
        })
    },
}

export default accessoryConsumer;