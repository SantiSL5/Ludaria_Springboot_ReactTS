import brandConsumer from "./brandConsumer";
import categoryConsumer from "./categoryConsumer";
import productConsumer from "./productConsumer";
import gameConsumer from "./gameConsumer";
import puzzleConsumer from "./puzzleConsumer";
import accessoryConsumer from "./accesoryConsumer";

const consumers: any = {
    ApiBrand: { ...brandConsumer },
    ApiCategory: { ...categoryConsumer },
    ApiProduct: {...productConsumer },
    ApiGame: { ...gameConsumer },
    ApiPuzzle: { ...puzzleConsumer },
    ApiAccessory: { ...accessoryConsumer },
}

export default consumers;

