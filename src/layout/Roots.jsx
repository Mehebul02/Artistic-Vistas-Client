import { Outlet } from "react-router-dom";
import Navbar from "../components/Headers/Navbar";
import Footer from "../components/footer/Footer";

const Roots = () => {
  return (
    <div >
      <Navbar />

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
