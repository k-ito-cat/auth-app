import { useEffect } from "react";
import { axiosClient } from "../api/axiosClient";

export const Home = () => {
  useEffect(() => {
    fetchRequest();
  }, []);

  const fetchRequest = async () => {
    try {
      const res = await axiosClient.get("/profile");
      console.log(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  return <h1>Home</h1>;
};
