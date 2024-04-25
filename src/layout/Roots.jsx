import { Outlet } from "react-router-dom";
import Navbar from "../components/Headers/Navbar";

const Roots = () => {
    return (
        <div>
            <Navbar/>
           <Outlet></Outlet> 
        </div>
    );
};

export default Roots;