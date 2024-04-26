import { IoIosAddCircle } from "react-icons/io";
import Swal from "sweetalert2";

const AddCraftItem = () => {
  const handleAddCraftItem = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const image = form.image.value;
    const brand = form.brand.value;
    const type = form.type.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const description = form.description.value;
    const addCraftItem = {
      name,
      image,
      brand,
      type,
      price,
      rating,
      description,
    };

    console.log(addCraftItem);
    fetch("http://localhost:5000/crafts", {
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

    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(allProducts),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //     if(data.insertedId){
    //       Swal.fire({
    //         title: 'Success',
    //         text: 'Add Crafts Successfully',
    //         icon: 'success',
    //         confirmButtonText: 'Ok'
    //       })
    //       form.reset()
    //     }
    //   });
  };
  return (
    <div className=" max-w-[1320px] mx-auto bg-base-100 p-10 shadow-lg rounded-lg border my-10">
      <div className="  text-center flex md:flex items-center gap-3"></div>
      <div className="flex md:flex justify-center  items-center gap-3">
        <div className="bg-[#571f8e] p-1 rounded-full">
          <IoIosAddCircle className="text-white text-2xl "></IoIosAddCircle>
        </div>
        <h1 className="  lg:text-4xl font-semibold font-serif">
          <span className="text-[#374fb0]">Add</span> Craft Item
        </h1>
      </div>

      <div>
        <form onSubmit={handleAddCraftItem}>
          <div className="flex flex-col md:flex  lg:flex-row items-center lg:gap-10 ">
            {/* Name input  */}
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text text-xl font-serif font-semibold">
                  Name
                </span>
              </div>
              <input
                type="text"
                required
                name="name"
                placeholder="Name"
                className="input input-bordered  focus:outline-[#571f8e] w-full "
              />
            </label>
            {/* image url */}
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text text-xl font-serif font-semibold">
                  Image
                </span>
              </div>
              <input
                type="text"
                required
                name="image"
                placeholder="Enter Your Image"
                className="input input-bordered  focus:outline-[#571f8e] w-full "
              />
            </label>
          </div>
          <div className="flex flex-col lg:flex-row justify-center  items-center lg:gap-10 ">
            {/* Brand Name input  */}
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text text-xl font-serif font-semibold">
                  Brand Name
                </span>
              </div>
              <select name="brand" required className="select select-bordered">
                <option disabled selected>
                  Select Brand
                </option>
                <option>Huawei</option>
                <option>Asus</option>
                <option>Hp</option>
                <option>LG</option>
                <option>Samsung</option>
                <option>Apple</option>
                <option>Google</option>
                <option></option>
              </select>
            </label>

            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text text-xl font-serif font-semibold">
                  Type
                </span>
              </div>
              <input
                type="text"
                required
                name="type"
                placeholder="Enter Type"
                className="input input-bordered  focus:outline-[#571f8e] w-full "
              />
            </label>
          </div>
          <div className="flex flex-col lg:flex-row items-center lg:gap-10 ">
            {/* Name input  */}
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text text-xl font-serif font-semibold">
                  Price
                </span>
              </div>
              <input
                type="text"
                required
                name="price"
                placeholder="Enter Price"
                className="input input-bordered  focus:outline-[#571f8e] w-full "
              />
            </label>
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text text-xl font-serif font-semibold">
                  Rating
                </span>
              </div>
              <input
                type="text"
                required
                name="rating"
                placeholder="Rating"
                className="input input-bordered  focus:outline-[#571f8e] w-full "
              />
            </label>
          </div>
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text text-xl font-serif font-semibold">
                Description
              </span>
            </div>
            <input
              type="text"
              required
              name="description"
              placeholder="Description"
              className="input input-bordered  focus:outline-[#571f8e] w-full "
            />
          </label>
          <input
            type="submit"
            required
            value="Add Product"
            className=" bg-[#571f8e] block  mx-auto px-6 py-2 text-2xl font-serif text-white rounded-lg my-10 cursor-pointer"
          />
        </form>
      </div>
    </div>
  );
};

export default AddCraftItem;
