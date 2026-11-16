import { createBrowserRouter } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import UserWrapper from "../layouts/userPanel/UserWrapper";
import ProductList from "../pages/ProductList";
import Cart from "../pages/Cart";
import MultiStepForm from "../pages/MultiStepForm";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <UserWrapper />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "products",
        element: <ProductList />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "form",
        element: <MultiStepForm />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default Routes;
