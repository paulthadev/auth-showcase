import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Verify from "./pages/Verify"; // Create this page for verification
import Dashboard from "./pages/Dashboard";

const RootLayout = () => {
  return <Outlet />;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "verify/:token", // Dynamic route for verification
        element: <Verify />,
      },
      {
        path: "*",
        element: <h1>Not Found</h1>,
      },

      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
