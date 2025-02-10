import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Principal from "./principal";
import AdminPage from "./AdminPage";
import Exemplos from "./Exemplos";
import SobreNos from "./SobreNos";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Principal />,
  },
  {
    path: "/admin",
    element: <AdminPage />,
  },
  {
    path: "/exemplos",
    element: <Exemplos />,
  },
  {
    path: "/sobreNos",
    element: <SobreNos />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
