import Functions from './Functions';

export const webTitle = "Bineza | ";
export const customerCookie = Functions.getCookie('bineza_customer_token');
export const sellerCookie = Functions.getCookie('bineza_seller_token');

export const serverEndPoint = 'https://server.bineza.com/api/v1/';
//export const serverEndPoint = 'http://localhost:8000/api/v1/';
