import { AxiosInstance } from "@/services/api";

// import axios from "axios";

class ApiAuth {
  onApiLogin = (args) => {
    return AxiosInstance({
      method: "post",
      url: "/api/auth/login",
      data: args
    })
  };

  onApiRegister = () => {
    return AxiosInstance({
      method: "post",
      url: "/api/auth/register",
    })
  };
}

export const API_AUTH = new ApiAuth();