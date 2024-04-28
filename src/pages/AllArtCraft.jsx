import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllArtCraft = () => {
  const [allCrafts, setAllCrafts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/crafts")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAllCrafts(data);
      });
  }, []);
  return (
    <div className="overflow-x-auto max-w-[1300px] mx-auto mt-10">
      <table className="table border table-lg rounded-lg">
        <thead className="text-xl bg-gray-600 text-black font-serif ">
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
              <td>{allCraft.itemName}</td>
              <td>{}</td>
              <td>{allCraft.price}</td>
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
  );
};

export default AllArtCraft;
