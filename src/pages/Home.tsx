import { useEffect } from "react";
import axios from "axios";

export const Home = () => {
  useEffect(() => {
    fetchRequest();
  }, []);

  const fetchRequest = async () => {
    try {
      const res = await axios.get("/user");
      console.log(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  return <h1>Home</h1>;
};
