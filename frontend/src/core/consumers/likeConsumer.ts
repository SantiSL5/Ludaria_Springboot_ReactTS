import secrets from "../../secret";
import Api from "../api/api";

const likeConsumer: any = {
    like: (productId : number) => {
        return Api({
            method: "post",
            url: secrets.SPRINGBOOT_APP_URL + "/client/like",
            data: {"productId" : productId},
        })
    }
}

export default likeConsumer;