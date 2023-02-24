import { AxiosInstance } from "@/services/api";

const token = localStorage.getItem("token");

class ApiAccount {
  onApiGetAllUsers = () => {
    return AxiosInstance({
      method: "get",
      url: "/api/auth/users",
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  };

  onApiDeleteUsers = (args) => {
    return AxiosInstance({
      method: "put",
      url: `/api/auth/users`,
      data: args,
      headers: {
        Authorization: `Bearer ${token}`
      },
    })
  };
}

export const API_ACCOUNT = new ApiAccount();