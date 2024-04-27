import React from 'react';
import { RiStarFill } from 'react-icons/ri';
import { SiProcessingfoundation } from 'react-icons/si';
import { Link } from 'react-router-dom';

const MyCraft = ({craft}) => {
    const{_id,image,itemName,price,stockStatus,rating,processingTime,description} = craft
    console.log(craft)
    return (
        <div  data-aos='zoom-in-up' className="card p-4 w-full bg-base-100 border shadow-lg">
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
           <SiProcessingfoundation className="text-xl text-[#06b23a]"></SiProcessingfoundation>
           <h1 className=" font-medium">{processingTime}Day</h1>
           </span>
          </span>
          <div className="space-y-3">
            <h2 className="card-title text-3xl font-semibold font-serif">
              {itemName}
            </h2>
            <p className="text-sm font-serif text-gray-600"> {description.slice(0,100)}</p>
            <h1 className="text-2xl font-sans font-medium ">Price:${price}</h1>
            <div className="card-actions justify-center ">
             <Link to={`/details/${_id}`}>
             <button className="bg-[#06ABB2] hover:bg-[#2e9a9e] mt-3 px-4 py-2 rounded-lg text-xl text-white font-serif w-full font-semibold">View Details</button>
             </Link>
            </div>
          </div>
        </div>
    );
};

export default MyCraft;