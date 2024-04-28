import { IoIosAddCircle } from "react-icons/io";
import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";

const AddCraftItem = () => {
  const {user} = useAuth()
  const handleAddCraftItem = (event) => {
    event.preventDefault();
    const form = event.target;

    const image = form.image.value;
    const itemName = form.itemName.value;
    const subcategoryName = form.subcategory.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const customization = form.customization.value;
    const processingTime = form.processingTime.value;
    const stockStatus = form.stockStatus.value;
    const email = user.email
    const name = user.displayName
    const description = form.description.value;
    const addCraftItem = {
      image,
      itemName,
      subcategoryName,
        price,
        rating,
        customization,
        processingTime,
        stockStatus,
        email,
        name,
        description,
    };

    console.log(addCraftItem);
    fetch("https://artistic-vistas-server.vercel.app/crafts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addCraftItem),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success",
            text: "Add Crafts Successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
          form.reset();
        }
      });

  };
  return (
    <div className=" max-w-[1320px] mx-auto bg-[#0E2332] p-10 shadow-lg rounded-lg border my-10">
      <div className="  text-center flex md:flex items-center gap-3"></div>
  
     <div className="flex md:flex justify-center  items-center gap-3">
        <div className="bg-[#571f8e] p-1 rounded-full">
          <IoIosAddCircle className="text-white text-2xl "></IoIosAddCircle>
        </div>
        <h1 className="  lg:text-4xl font-semibold text-white font-serif">
          <span className="text-[#374fb0]">Add</span> Craft Item
        </h1>
      </div>
     

      <div>
        <form onSubmit={handleAddCraftItem} className="space-y-6 mt-6">
          <div className="flex flex-col md:flex  lg:flex-row items-center lg:gap-10 ">
            {/* image url */}
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text text-white text-xl font-serif font-semibold">
                  Image Url
                </span>
              </div>
              <input
                type="imageUrl"
                required
                name="image"
                placeholder="Enter Your Image"
                className="input input-bordered  focus:outline-[#571f8e] w-full "
              />
            </label>
            {/*item Name input  */}
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text text-white text-xl font-serif font-semibold">
                  Item Name
                </span>
              </div>
              <input
                type="text"
                required
                name="itemName"
                placeholder="Item Name"
                className="input input-bordered  focus:outline-[#571f8e] w-full "
              />
            </label>
          </div>
          <div className="flex flex-col lg:flex-row justify-center  items-center lg:gap-10 ">
            {/* subcategory_Name input  */}

            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text text-white text-xl font-serif font-semibold">
                  Subcategory_Name
                </span>
              </div>
              <input
                type="text"
                required
                name="subcategory"
                placeholder="Subcategory Name"
                className="input input-bordered  focus:outline-[#571f8e] w-full "
              />
            </label>
            {/* price input  */}
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text text-white text-xl font-serif font-semibold">
                  Price
                </span>
              </div>
              <input
                type="number"
                required
                name="price"
                placeholder="Price
                "
                className="input input-bordered  focus:outline-[#571f8e] w-full "
              />
            </label>
          </div>
          <div className="flex flex-col lg:flex-row items-center lg:gap-10 ">
            {/* Rating input  */}
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text text-white text-xl font-serif font-semibold">
                  Rating
                </span>
              </div>
              <input
                type="number"
                max="5"
                min="1"
                required
                name="rating"
                placeholder="Rating"
                className="input input-bordered  focus:outline-[#571f8e] w-full "
              />
            </label>
            {/*  customization input  */}
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text text-white text-xl font-serif font-semibold">
                  Customization
                </span>
              </div>
              <select
                type="text"
                name="customization"
                required
                className="select select-bordered"
              >
                <option disabled selected>
                  Select
                </option>
                <option>Yes</option>
                <option>No</option>
              </select>
            </label>
          </div>
          <div className="flex flex-col lg:flex-row justify-center  items-center lg:gap-10 ">
            {/* processing_time input  */}

            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text text-white text-xl font-serif font-semibold">
                  Processing Time
                </span>
              </div>
              <input
                type="number"
                max="100"
                min="1"
                required
                name="processingTime"
                placeholder=" Processing Time"
                className="input input-bordered  focus:outline-[#571f8e] w-full "
              />
            </label>
            {/* Stock Status input  */}
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text text-white text-xl font-serif font-semibold">
                  Stock Status
                </span>
              </div>
              <select
                type="text"
                name="stockStatus"
                required
                className="select select-bordered"
              >
                <option disabled selected>
                  Select
                </option>
                <option> In stock</option>
                <option>Made to Order</option>
              </select>
            </label>
            {/* user email input  */}

            {/* <label className="form-control w-full ">
              <div className="label">
                <span className="label-text text-white text-xl font-serif font-semibold">
                  Your Email
                </span>
              </div>
              <input
                type="email"
                required
                name="email"
                placeholder="Email"
                defaultValue={user.email}
                className="input input-bordered  focus:outline-[#571f8e] w-full "
              />
            </label> */}
          </div>
          <div className="flex flex-col lg:flex-row justify-center mt-4  items-center lg:gap-10 ">
            {/* user name input  */}
            {/* <label className="form-control w-full ">
              <div className="label">
                <span className="label-text text-white text-xl font-serif font-semibold">
                  Your Name
                </span>
              </div>
              <input
                type="text"
                required
                name="name"
                placeholder="Name
                "
                defaultValue={user.displayName}
                className="input input-bordered  focus:outline-[#571f8e] w-full "
              />
            </label> */}
            {/* Description input  */}
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text text-white text-xl font-serif font-semibold">
                  Description
                </span>
              </div>
              <textarea
                type="text"
                name="description"
                rows="5"
                placeholder="Short Description----"
                className="textarea textarea-bordered textarea-lg w-full "
              ></textarea>
            </label>
          </div>

          <input
            type="submit"
            required
            value="Add Craft"
            className=" bg-[#571f8e] block  mx-auto px-6 py-2 text-2xl font-serif text-white rounded-lg my-10 cursor-pointer"
          />
        </form>
      </div>
    </div>
  );
};

export default AddCraftItem;
