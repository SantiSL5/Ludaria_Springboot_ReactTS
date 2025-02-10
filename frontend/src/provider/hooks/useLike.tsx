import consume from '../router/consumer'
import { queryConsumer, likeQueries } from "../../core/queries";

export function useLikes() {


    const setLike = async (product: number) => {
        try {
            await consume(queryConsumer.apiLike, likeQueries.like, product);
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    return { setLike };

}