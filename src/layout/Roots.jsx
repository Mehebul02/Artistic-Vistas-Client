import { Outlet } from "react-router-dom";
import Navbar from "../components/Headers/Navbar";
import Footer from "../components/footer/Footer";
import Navbar2 from "../components/Headers/Navbar2";
const Roots = () => {
  return (
    <div >
      <Navbar2/>
     <div className="max-w-[1320px] mx-auto">
     <Navbar />
     </div>

     <div className="min-h-screen">
     <Outlet></Outlet>
     </div>
    
     <div className="mt-14">
     <Footer />
     </div>
    </div>
  );
};

export default Roots;
