import secrets from "../../secret";
import Api from "../api/api";

const gameConsumer: any = {
    create: (data: any) => {
        return Api({
            method: "post",
            url: secrets.SPRINGBOOT_APP_URL + "/admin/game",
            data: data,
        })
    },
    update: (data: any) => {
        return Api({
            method: "put",
            url: secrets.SPRINGBOOT_APP_URL + "/admin/game/" + data.id,
            data: data,
        })
    },
}

export default gameConsumer;