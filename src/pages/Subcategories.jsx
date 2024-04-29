import { useEffect, useState } from "react";
import Subcategory from "./Subcategory";

const Subcategories = () => {
    const [subcategories ,setSubcategories] = useState([])
    useEffect(()=>{
        fetch('https://artistic-vistas-server.vercel.app/subcategories')
        .then(res => res.json())
        .then(data =>{
           setSubcategories(data)
        })
    },[])
    console.log(subcategories)
    return (
        <div>
            
            <div className="text-center my-10 space-y-4 ">
      <h1 className="text-4xl text-[#5454E2] font-serif font-semibold"> Art & Craft Categories</h1>
      <p className="text-xl font-serif">Expressive artworks created through various mediums like watercolor, oil, acrylic, and charcoal. <br /> Three-dimensional creations crafted from materials like clay, stone, metal, or wood...</p>
      <div className="divider"></div>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {
            subcategories.map(sub =><Subcategory key={sub} sub={sub}></Subcategory>)
        }
       
        
        
      </div>
        </div>
    );
};

export default Subcategories;