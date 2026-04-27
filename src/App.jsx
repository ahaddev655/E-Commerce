import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import SplashScreen from "./pages/SplashScreen";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import ProductDetails from "./pages/ProductDetails";
import CategoryPage from "./pages/CategoryPage";
import CheckoutPage from "./pages/CheckoutPage";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <SplashScreen />,
    },
    {
      path: "/main/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "s",
          element: "<SearchPage />",
        },
        {
          path: "product/:product-name",
          element: <ProductDetails />,
        },
        {
          path: "category/:category-name",
          element: <CategoryPage />,
        },
      ],
    },
    {
      path: "/checkout",
      element: <CheckoutPage />,
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
