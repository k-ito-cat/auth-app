import { useEffect } from "react";

export const Home = () => {
  useEffect(() => {
    fetchRequest();
  }, []);

  const fetchRequest = async () => {
    // try {
    //   const res = await axiosClient.get("/profile");
    //   console.log(res.data);
    // } catch (e) {
    //   console.log(e);
    // }
  };

  return <h1>認証成功</h1>;
};
