import { Outlet } from "react-router-dom";
import Navbar from "../components/Headers/Navbar";

const Roots = () => {
    return (
        <div>
           <div className="">
           <Navbar/>
           </div>
           <Outlet></Outlet> 
        </div>
    );
};

export default Roots;