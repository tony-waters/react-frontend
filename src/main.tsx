import React from "react";
import ReactDOM from "react-dom/client";
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import Customers from "./components/Customers";
import CustomerDetails from "./components/CustomerDetails";
import CustomerDetailsEditForm from "./components/CustomerDetailsEditForm";
import CustomerDetailsNewForm from "./components/CustomerDetailsNewForm";
import Home from "./components/Home";
import NotFound from "./components/NotFound";

import "./css/main.css"
import 'bootstrap/dist/css/bootstrap.min.css';

// Layout component
function Layout() {
    return (
        <div>
            <header>Header</header>
            <main>
                <Outlet /> {/* Child routes render here */}
            </main>
            <footer>Footer</footer>
        </div>
    );
}

const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home />,
                errorElement: <NotFound />
            },
            {
                path: "/customers",
                element: <Customers />,
                children: [
                    {
                        path: "/customers/:id",
                        element: <CustomerDetails />
                    },
                    {
                        path: "/customers/:id/edit",
                        element: <CustomerDetailsEditForm />
                    },
                    {
                        path: "/customers/new",
                        element: <CustomerDetailsNewForm />
                    }
                ]
            },
        ]
    },

]);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);

