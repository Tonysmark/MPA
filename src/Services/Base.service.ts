import axios, { AxiosInstance } from 'axios';
import { request } from 'http';
import { Method } from './Interfaces';

interface PendingType {
    url?: string;
    method?: Method;
    params: any;
    data: any;
    cancel: (...args: any[]) => any;
}
const isDev = process.env.NODE_ENV === 'development';
const pending: Array<PendingType> = [];
const CancelToken = axios.CancelToken;
/**
 * @description 展业家 mobile API
 */
export const target = isDev ? 'http://api.test.e-baotong.cn' : 'https://api.e-bao.cn'; //接口
export class BaseService {
    constructor(private instance: AxiosInstance) {
        this.instance = axios.create({
            baseURL: target,
            headers: {
                Token: this.getAuthToken(),
                'Cache-Control': 'no-cache',
            },
            transformRequest: [],
            transformResponse:[],
        });
        this.instance.interceptors.request.use(
            req => {
                // someLoading you wang to put in
                return req;
            },
            err => Promise.reject(err),  // 不写呢 ？
        );
        this.instance.interceptors.response.use(res => {
            return res;
        });
    }

    getAuthToken() {
        return localStorage.getItem('Token') ?? 'unAuthorized';
    }
}
