import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import SplashScreen from "./pages/SplashScreen";
import MainLayout from "./layouts/MainLayout";

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
          element: "Home Page",
        },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
