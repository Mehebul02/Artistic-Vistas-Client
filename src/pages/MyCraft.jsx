import React from 'react';
import { RiStarFill } from 'react-icons/ri';
import { SiProcessingfoundation } from 'react-icons/si';
import { Link } from 'react-router-dom';

const MyCraft = ({craft}) => {
    const{_id,image,itemName,price,stockStatus,rating,customization,processingTime,description} = craft
    console.log(craft)
    return (
        <div  data-aos='zoom-in-up' className="card mt-10 p-4 w-full bg-base-100 border shadow-lg">
          <figure className="relative ">
            <img className="w-96 h-64 mx-auto" src={image} alt="" />

            <span className="bg-[#06ABB2] text-white font-serif p-2 absolute top-0 left-0">
             {stockStatus}
            </span>
          </figure>
          <span className="flex justify-around items-center gap-4 mt-4">
            <span className="flex items-center gap-3">
            <RiStarFill className="text-xl text-[#06ABB2]"></RiStarFill>
            <h1 className=" font-medium">{rating}</h1>
            </span>
           <span className="flex items-center gap-3">
           <h1 className=" font-medium  text-[#070707]">Customization : <span className="text-red-500">{customization}</span></h1>

           </span>
          </span>
          <div className="space-y-6 mt-2">
            <h2 className="card-title text-3xl font-semibold font-serif">
              {itemName}
            </h2>
            {/* <p className="text-sm font-serif text-gray-600"> {description.slice(0,100)}</p> */}
            <h1 className="text-2xl font-sans font-medium ">Price:${price}</h1>
            <div className="card-actions justify-center ">
             <Link to={`/update/${_id}`}>
             <button className="bg-[#e49917]  hover:bg-[#2e9a9e] mt-3 px-4 py-2 rounded-lg text-xl text-white font-serif w-full font-semibold">Update</button>
             </Link>
             <Link >
             <button className="border border-red-700  hover:bg-[#2e9a9e] mt-3 px-4 py-2 rounded-lg text-xl text-black font-serif w-full font-semibold">Delete</button>
             </Link>
            </div>
          </div>
        </div>
    );
};

export default MyCraft;