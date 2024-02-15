import useId from "../hooks/useId";
import { HomePage } from "../pages/Home";
import { PropertiesPage } from "../pages/Properties";
import { SignPage } from "../pages/Sign";
export const navbar = [
  {
    id: useId,
    element: <HomePage />,
    title: "Home",
    path: "/home",
    private: false,
    hidden: false,
  },
  {
    id: useId,
    element: <PropertiesPage />,
    title: "Properties",
    path: "/properties",
    private: false,
    hidden: false,
  },
  {
    id: useId,
    element: <SignPage />,
    title: "Sign in",
    path: "/signin",
    private: false,
    hidden: true,
  },
];
