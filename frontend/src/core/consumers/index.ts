import brandConsumer from "./brandConsumer";
import categoryConsumer from "./categoryConsumer";

const consumers: any = {
    ApiBrand: { ...brandConsumer },
    ApiCategory: { ...categoryConsumer },
}

export default consumers;

