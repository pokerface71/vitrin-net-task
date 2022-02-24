import { AxiosRequestConfig } from 'axios';
import axiosInstance from 'Services/axiosInstance';
import { GET_PRODUCT_LIST, GET_PRODUCT_DETAIL } from 'Services/urls';

export const getProductList = () => {
	const reqConfig: AxiosRequestConfig = {
		method: 'GET',
		url: GET_PRODUCT_LIST,
	};
	return axiosInstance(reqConfig).then((res) => res.data);
};

export const getProductDetail = (id: number) => {
	const reqConfig: AxiosRequestConfig = {
		method: 'GET',
		url: `${GET_PRODUCT_DETAIL}${id}`,
	};
	return axiosInstance(reqConfig).then((res) => res.data);
};
