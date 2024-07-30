import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./routes/homePage/HomePage.jsx";
import ChatPage from "./routes/chatPage/ChatPage.jsx";
import DashboardPage from "./routes/dashboardPage/DashboardPage.jsx";
import RootLayout from "./layout/rootLayout/RootLayout.jsx";
import DashboardLayout from "./layout/dashboardLayout/DashboardLayout.jsx";
import SingInPage from "./routes/signInPage/SingInPage.jsx";
import SignUpPage from "./routes/signUpPage/SignUpPage.jsx";


const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/sign-in/*",
        element: <SingInPage />,
      },
      {
        path: "/sign-up/*",
        element: <SignUpPage />,
      },
      {
        element: <DashboardLayout />,
        children: [
          {
            path: "/dashboard",
            element: <DashboardPage />,
          },
          {
            path: "/dashboard/chat/:id",
            element: <ChatPage />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
