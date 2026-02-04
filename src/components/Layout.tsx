import {Outlet} from "react-router-dom";
import Navigation from "./Navigation";


export default function Layout() {
    return (
        <div>
            <header><Navigation /></header>
            <main>
                <Outlet /> {/* Child routes render here */}
            </main>
            <footer>Footer</footer>
        </div>
    );
}