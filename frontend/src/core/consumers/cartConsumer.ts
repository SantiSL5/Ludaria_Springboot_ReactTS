import secrets from "../../secret";
import Api from "../api/api";

const cartConsumer: any = {
    // Cart
    getCart: () => {
        return Api({
            method: "get",
            url: secrets.SPRINGBOOT_APP_URL + "/client/cart",
        })
    },
    cleanCart: () => {
        return Api({
            method: "delete",
            url: secrets.SPRINGBOOT_APP_URL + "/client/cart",
        })
    },
    // LineCart
    addCartLine: (data: any) => {
        return Api({
            method: "post",
            url: secrets.SPRINGBOOT_APP_URL + "/client/cartLine",
            data: data,
        })
    },
    updateCartLine: (data: any) => {
        return Api({
            method: "put",
            url: secrets.SPRINGBOOT_APP_URL + "/client/cartLine/" + data.data.id,
            data: {"cant": data.cant},
        })
    },
    deleteCartLine: (id:number) => {
        return Api({
            method: "delete",
            url: secrets.SPRINGBOOT_APP_URL + "/client/cartLine/" + id,
        })
    },
}

export default cartConsumer;