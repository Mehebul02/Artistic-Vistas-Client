import { FaLocationArrow, FaPhone } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import form from "../assets/contact.gif";
const Contact = () => {
  return (
    // data-aos="fade-right"
    // data-aos="fade-left"
    <div className="grid grid-cols-8 p-4">
      <div className="col-span-3 rounded-md shadow-lg">
        <img className="" src={form} alt="" />
      </div>
      <div className="col-span-5 w-full border rounded-lg shadow-lg p-4 lg:w-1/2">
        <h1 className=" text-3xl font-poppins font-semibold text-center ">
          Contact Form
        </h1>
        <div className="divider"></div>
        <div>
          <h1 className="text-xl font-poppins">Your Name*</h1>
          <input
            type="text"
            placeholder="Your Name"
            className="input input-bordered  w-full"
          />
        </div>
        <div className="my-4">
          <h1 className="text-xl font-poppins">Your Email*</h1>
          <input
            type="text"
            placeholder="Your Email"
            className="input input-bordered  w-full"
          />
        </div>
        <div>
          <h1 className="text-xl font-poppins">Your Message</h1>
          <textarea
            rows="6"
            cols="50"
            placeholder="Type Your Message....."
            className="textarea textarea-bordered textarea-lg w-full max-w-2xl"
          ></textarea>
        </div>
        <div className="text-center block mt-3 ">
          <button className="bg-yellow-600 text-2xl text-white font-semibold px-4 py-2 font-poppins rounded-md">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
