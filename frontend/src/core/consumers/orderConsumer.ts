import secrets from "../../secret";
import Api from "../api/api";

const orderConsumer: any = {
    get: () => {
        return Api({
            method: "get",
            url: secrets.SPRINGBOOT_APP_URL + "/client/order",
        })
    },
    create: () => {
        return Api({
            method: "post",
            url: secrets.SPRINGBOOT_APP_URL + "/client/order",
        })
    },
}

export default orderConsumer;