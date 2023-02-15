import { AxiosInstance } from "@/services/api";

// import axios from "axios";

class ApiCategory {
  onApiGetCategory = () => {
    return AxiosInstance({
      method: "get",
      url: "/categories",
    });
  };
}

export const API_CATEGORY = new ApiCategory();
