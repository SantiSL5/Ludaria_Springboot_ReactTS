import axios from "axios";

interface AxiosInterface {
    method: string;
    url: string;
    data?: any;
    params?: { [key: string]: any };
}

const Api = ({ method, url, data, params }: AxiosInterface) => {
    let res: any;

    try {
        res = axios({
            method: method,
            url: url,
            data: data,
            params: params,
        });
    } catch (e) {
        return e;
    }

    axios.interceptors.response.use(
        (response: any) => response,
        (error: any) => {
            if (error.response && error.response.status === 403) {
                sessionStorage.removeItem("time");
                window.location.reload();
            }
            return Promise.reject(error);
        }
    );

    return res;
};

export default Api;