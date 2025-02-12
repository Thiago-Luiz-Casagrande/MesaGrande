import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Principal from "./Principal.jsx";
import AdminPage from "./AdminPage.jsx";
import Exemplos from "./Exemplos.jsx";
import SobreNos from "./SobreNos.jsx";

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
