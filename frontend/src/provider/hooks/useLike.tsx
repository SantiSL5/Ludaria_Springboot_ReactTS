import consume from '../router/consumer'
import { queryConsumer, likeQueries, jwtQueries } from "../../core/queries";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export function useLikes() {
    const navigate = useNavigate();

    const setLike = async (product: number) => {
        try {
            if (consume(queryConsumer.apiJwt, jwtQueries.getToken) == null) {
                navigate('/login');
                toast.info("Necesitas estar logueado para dar like");
                return;
            }

            await consume(queryConsumer.apiLike, likeQueries.like, product);
        } catch (error) {
            console.log(error);
            throw error;
        }
    };

    return { setLike };

}