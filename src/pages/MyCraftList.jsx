// import { useLoaderData } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useEffect, useState,} from "react";
import MyCraft from "./MyCraft";

const MyCraftList = () => {

  const { user } = useAuth() || {};
  const [crafts,setCrafts] =useState([])
  useEffect(() => {
    fetch(`http://localhost:5000/myCrafts/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCrafts(data)
      });
  }, [user]);
//   const myCraft = useLoaderData();
//   console.log(myCraft);
  return (
    <div>
     <div className="max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        
       {
       crafts?.map(craft =><MyCraft key={craft._id} craft={craft}></MyCraft>)
       }
        
        
      </div>
    </div>
  );
};

export default MyCraftList;
