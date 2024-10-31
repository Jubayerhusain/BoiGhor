import { Outlet } from "react-router-dom";
import Navber from './../Navber/Navber';
import Footer from './../Footer/Footer';
function Layout() {
    return (
        <div>
            <Navber></Navber>
            <Outlet />
            <Footer></Footer>
        </div>
    )
}

export default Layout;
