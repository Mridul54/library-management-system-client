import { Outlet } from "react-router-dom";
import Footer from "../pages/combine/Footer";
import NavBar from "../pages/combine/NavBar";


const MainLayOut = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayOut;