import axios from "axios";

export * as API_STOCK from "@/views/stocks/services/api";
export * as API_USER from "@/views/user/services/api";

export const AxiosInstance = axios.create({
  baseURL: "http://localhost:5000", //
  // timeout: 1000,
  // headers: {
  //   Authorization: appLocalStorage.value?.userData?.accessToken,
  // },
});

// AxiosInstance.interceptors.request.use(
//   (request) => {
//     // Do something before request is sent

//     request.headers = {
//       Authorization: appLocalStorage.value?.userData?.accessToken,
//     };

//     const STORE_APP = StoreApp();

//     STORE_APP.onActionDisplayLoading(true);

//     return request;
//   },
//   (error) => {
//     // Do something with request error

//     const STORE_APP = StoreApp();

//     STORE_APP.onActionDisplayLoading(false);

//     return Promise.reject(error);
//   }
// );

// AxiosInstance.interceptors.response.use(
//   (response) => {
//     // Any status code that lie within the range of 2xx cause this function to trigger
//     // Do something with response data

//     const STORE_APP = StoreApp();

//     STORE_APP.onActionDisplayLoading(false);

//     if (response.data?.statusCode === 408) {
//       // Token expired
//       onDeleteUserData();
//     }

//     return response;
//   },
//   (error) => {
//     // Any status codes that falls outside the range of 2xx cause this function to trigger
//     // Do something with response error

//     const STORE_APP = StoreApp();

//     STORE_APP.onActionDisplayLoading(false);

//     return Promise.reject(error);
//   }
// );
