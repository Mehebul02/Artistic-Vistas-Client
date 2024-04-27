import { BiCustomize } from "react-icons/bi";
import { RiStarFill } from "react-icons/ri";
import { SiProcessingfoundation } from "react-icons/si";
import { useLoaderData } from "react-router-dom";

const CraftDetails = () => {
const craft = useLoaderData()
const{_id,image,itemName,price,stockStatus,rating,processingTime,description,customization,subcategoryName,email} = craft
    return (
        <div data-aos="flip-left" className="card lg:card-side p-4 max-w-[1100px] mx-auto mt-10  bg-base-100">
        <figure ><img className="border  rounded-lg" src={image} alt=""/>
       
        </figure>
        <div className="card-body">
          <h2 className="text-3xl font-serif  text-[#06b284] font-semibold">{itemName}</h2>
          <h2 className="text-xl font-serif   font-semibold">Subcategory Name:<span className="text-[#555958]">{subcategoryName}</span></h2>
          <h1 className="text-xl text-[#FF8300] font-semibold">Rating : <span className=" font-medium ">{rating}</span></h1>
          <p className="font-serif ">{description}</p>
          <span className="flex items-center gap-14 mt-4">
            <span className="flex items-center gap-3">
            <SiProcessingfoundation className="text-xl text-[#06b23a]"></SiProcessingfoundation>
           <h1 className=" font-medium">{processingTime} Day</h1>
            </span>
           <span className="flex items-center gap-3">
           {/* <BiCustomize className="text-xl text-[#06b23a]"></BiCustomize> */}
           <h1 className=" font-medium  text-[#070707]">Customization : <span className="text-red-500">{customization}</span></h1>
           </span>
           <span className=" bg-[#06ABB2] text-white p-2 rounded-t-lg font-serif">{stockStatus}
            </span>
          </span>
          <div className="card-actions mt-5 justify-center">
            <button className="bg-[#571F8E] px-4 py-2 rounded-md text-xl text-white font-serif">Purchase</button>
          </div>
          <h1>{email}</h1>
        </div>
      </div>
    );
};

export default CraftDetails;