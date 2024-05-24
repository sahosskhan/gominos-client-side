import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";


const MainLayouts = () => {
    return (
        <div className="bg-lime-50">
            <Navbar/>
           <Outlet/>
        </div>
    );
};

export default MainLayouts;