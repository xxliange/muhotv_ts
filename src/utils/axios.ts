import qs from 'qs';
import axios from 'axios';

type AxiosType = {
    baseURL:string,
    timeout:number
};

let axiosType : AxiosType;
axiosType = {
    baseURL:'https://www.muho.tv/api',
    timeout:10000
}

let service: any;
service = axios.create({
    ...axiosType
});

export default service;