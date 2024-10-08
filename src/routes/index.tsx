import { Navigate, useRoutes } from "react-router-dom";
import { Home } from "../pages/Home";
import { PublicLayout } from "../layouts/PublicLayout";
import { PrivateLayout } from "../layouts/PrivateLayout";
import { Register } from "../features/register/components/Register";
import { Login } from "../features/login/components/Login";
import { NotFound } from "../pages/NotFound";

const AppRoutes: React.FC = () => {
  const isAuthenticated = true;

  const routes = [
    {
      element: <PublicLayout />,
      children: [
        { path: "login", element: <Login /> },
        { path: "register", element: <Register /> },
        {
          path: "/",
          element: isAuthenticated ? (
            <Home />
          ) : (
            <Navigate to="/login" replace />
          ),
        },
      ],
    },
    {
      element: <PrivateLayout />,
      children: [{ path: "/", element: <Home /> }],
    },
    { path: "*", element: <NotFound /> },
  ];

  return useRoutes(routes);
};
export default AppRoutes;
