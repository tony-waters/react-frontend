import React from "react";
import ReactDOM from "react-dom/client";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Customers from "./components/Customers";
import CustomerDetails from "./components/CustomerDetails";
import Home from "./components/Home";
import NotFound from "./components/NotFound";

// import "../css/main.css"


const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        errorElement: <NotFound />
    },
    {
        path: "/customers",
        element: <Customers />
    },
    {
        path: "/customers/:id",
        element: <CustomerDetails />
    }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);

