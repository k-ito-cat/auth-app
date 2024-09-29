import { Outlet } from "react-router-dom";
import { AuthNavigation } from "../components/AuthNavigation";

export const PublicLayout: React.FC = () => {
  return (
    <>
      <AuthNavigation />
      <Outlet />
    </>
  );
};
