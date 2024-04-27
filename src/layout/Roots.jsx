import { Outlet } from "react-router-dom";
import Navbar from "../components/Headers/Navbar";
import Footer from "../components/footer/Footer";

const Roots = () => {
    return (
        <div>
           <div >
           <Navbar/>
           </div>
           <Outlet></Outlet> 
         <div >
            
          {/* <Footer/> */}
         </div>
         
        </div>
    );
};

export default Roots;