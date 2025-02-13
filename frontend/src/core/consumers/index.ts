import brandConsumer from "./brandConsumer";
import categoryConsumer from "./categoryConsumer";
import productConsumer from "./productConsumer";
import gameConsumer from "./gameConsumer";
import puzzleConsumer from "./puzzleConsumer";
import accessoryConsumer from "./accesoryConsumer";
import jwtConsumer from "./jwtConsumer";
import userConsumer from "./userConsumer";
import likeConsumer from "./likeConsumer";
import commentConsumer from "./commentConsumer";
import cartConsumer from "./cartConsumer";

const consumers: any = {
    ApiJwt: { ...jwtConsumer },
    ApiUser: { ...userConsumer },
    ApiBrand: { ...brandConsumer },
    ApiCategory: { ...categoryConsumer },
    ApiProduct: {...productConsumer },
    ApiGame: { ...gameConsumer },
    ApiPuzzle: { ...puzzleConsumer },
    ApiAccessory: { ...accessoryConsumer },
    ApiLike: {...likeConsumer },
    ApiComment: {...commentConsumer },
    ApiCart: {...cartConsumer},
}

export default consumers;

