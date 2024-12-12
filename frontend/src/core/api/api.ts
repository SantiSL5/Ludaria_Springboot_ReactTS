import axios from "axios";
import consume from "../../provider/router/consumer";
import { queryConsumer } from "../queries";

interface AxiosInterface {
    method: string,
    url: string,
    data?: any
}

const Api = ({ method, url, data }: AxiosInterface) => {
    let res: any;

    try {
        res = axios({
            method: method,
            url: url,
            data: data
        });
    } catch (e) {
        return e;
    }

    axios.interceptors.response.use(
        (response: any) => response,
        (error: any) => {
            if (error.response.status === 403) {
                sessionStorage.removeItem("time")
                window.location.reload();
            }
            return Promise.reject(error);
        }
    );

    return res;
};


export default Api;