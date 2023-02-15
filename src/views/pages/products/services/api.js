import { AxiosInstance } from "@/services/api";

// import axios from "axios";

class ApiProduct {
  onApiGetProducts = () => {
    return AxiosInstance({
      method: "get",
      url: "/api/posts",
      headers: {
				Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2M2VjYTdiZmNlMzRmODMxMjhhMWM4NjAiLCJpYXQiOjE2NzY0ODU4MjN9.Oj8xUSRbu67w1lntowq_C_BaBzppIU6doZoI74j7ibs`
			}
    })
  };

}

export const API_PRODUCT = new ApiProduct();


