import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import SplashScreen from "./pages/SplashScreen";
// ==================== MAIN PAGES ====================
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/main/HomePage";
import ProductDetails from "./pages/main/ProductDetails";
import CategoryPage from "./pages/main/CategoryPage";
import SearchPage from "./pages/main/SearchPage";
import CheckoutPage from "./pages/CheckoutPage";
import CheckoutSuccessPage from "./pages/CheckoutSuccessPage";
// ==================== ADMIN PAGES ====================
import AdminLayout from "./layouts/AdminLayout";
import AdminOverviewPage from "./pages/admin/AdminOverviewPage";
import AdminProductsPage from "./pages/admin/AdminProductsPage";
import AdminOrdersPage from "./pages/admin/AdminOrdersPage";
import AdminCustomerPage from "./pages/admin/AdminCustomerPage";
import AdminSettingsPage from "./pages/admin/AdminSettingsPage";
import AuthenticationPage from "./pages/AuthenticationPage";

function App() {
  const [search, setSearch] = useState("");
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <SplashScreen />,
    },
    {
      path: "/main/",
      element: <MainLayout setSearch={setSearch} search={search} />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "s",
          element: <SearchPage />,
        },
        {
          path: "product/:product-category/:product-name",
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
    {
      path: "/success",
      element: <CheckoutSuccessPage />,
    },
    {
      path: "/6d3d3a56bb6cf8a6255debdfb6771804/admin/dashboard/",
      element: <AdminLayout />,
      children: [
        {
          index: true,
          element: <AdminOverviewPage />,
        },
        {
          path: "products",
          element: <AdminProductsPage />,
        },
        {
          path: "orders",
          element: <AdminOrdersPage />,
        },
        {
          path: "users",
          element: <AdminCustomerPage />,
        },
        {
          path: "settings",
          element: <AdminSettingsPage />,
        },
      ],
    },
    {
      path: "/auth",
      element: <AuthenticationPage />
    }
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
