// import React, { useEffect, useState } from "react";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const AllArtCraft = () => {
  const [allCrafts, setAllCrafts] = useState([]);
  useEffect(() => {
    fetch("https://artistic-vistas-server.vercel.app/crafts")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAllCrafts(data);
      });
  }, []);
  return (
   <div>
    
    <Helmet>
        <title>Artistic Vistas | All Art & craft Items</title>
      </Helmet>
     <div className="overflow-x-auto max-w-[1320px] mx-auto mt-10">
      <table className="table border table-lg rounded-lg">
        <thead className="text-xl text-white font-semibold bg-gray-600  font-serif ">
          <tr>
            <th></th>
            <th>Name</th>
            <th>Subcategory</th>
            <th>Price</th>
            <th>Rating</th>
            <th>Customization</th>
            <th>StockStatus</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {allCrafts.map((allCraft, idx) => (
            <tr key={idx}>
              <th>{idx + 1}</th>
              <td className="font-serif font-semibold">{allCraft.itemName}</td>
              <td>{allCraft.subcategoryName}</td>
              <td>${allCraft.price}</td>
              <td>{allCraft.rating}</td>
              <td>{allCraft.customization}</td>
              <td>{allCraft.stockStatus}</td>
              
              <Link to={`/details/${allCraft._id}`}>

              <td className="btn-link">View Details</td>
              </Link>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
   </div>
  );
};

export default AllArtCraft;
