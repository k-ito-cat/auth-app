import axios from "axios";

export const axiosClient = axios.create({
  baseURL: "/auth",
  headers: {
    "Content-Type": "application/json",
  },
});
