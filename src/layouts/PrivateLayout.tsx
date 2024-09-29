import { Outlet } from "react-router-dom";
import { DashboardMenu } from "../components/DashbordMenu";

export const PrivateLayout: React.FC = () => {
  return (
    <>
      <DashboardMenu />
      <Outlet />
    </>
  );
};
