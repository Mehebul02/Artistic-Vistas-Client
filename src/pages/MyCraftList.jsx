// import { useLoaderData } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useEffect, useState,} from "react";
import MyCraft from "./MyCraft";
import { IoIosArrowDown } from "react-icons/io";

const MyCraftList = () => {

  const { user } = useAuth() || {};
  const [crafts,setCrafts] =useState([])
  useEffect(() => {
    fetch(`https://artistic-vistas-server.vercel.app/myCrafts/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCrafts(data)
      });
  }, [user]);

  return (
    <div className="max-w-[1300px] mx-auto text-center">
      <div className="dropdown dropdown-end ">
  <div tabIndex={0} role="button" className="bg-green-700 px-6 m-1 flex items-center gap-3 text-white py-2 font-serif text-xl font-semibold mt-7 rounded-lg">Filter <IoIosArrowDown/></div>
  <ul tabIndex={0} className="dropdown-content  z-[1] menu p-2 text-xl font-medium font-serif shadow bg-base-200 rounded-box w-52">
    <li ><a>On</a></li>
    <li><a>Of</a></li>
  </ul>
</div>
     <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        
       {
       crafts?.map(craft =><MyCraft key={craft._id} craft={craft} crafts={crafts} setCrafts={setCrafts}></MyCraft>)
       }
        
        
      </div>
    </div>
  );
};

export default MyCraftList;
