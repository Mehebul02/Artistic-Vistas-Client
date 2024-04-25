import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import signIn from "../assets/art.avif";
const Login = () => {
  return (
    <div className=" flex flex-col md:flex lg:flex-row p-2 lg:space-x-10 mt-10 max-w-[1300px] mx-auto">
      <div
        className="w-full min-h-screen  bg-gray-400 hidden lg:block  bg-no-repeat  lg:w-1/2  rounded-l-lg "
        style={{
          background: `url(${signIn})`,
          backgroundSize: "100% 100%",
          backgroundOrigin: "content-box",
        }}
      >
        {/* <p className="font-bold text-3xl font-serif p-4 mt-20 mx-6">
          We Offer the <br />
          Best Products
        </p> */}
      </div>
      <div>
        <h1 className="text-3xl font-serif font-semibold text-black">
          Sign in to Artistic Vistas.
        </h1>
        <p>Enter your details below</p>

        <div className="flex mt-10 gap-4">
          <div className="flex items-center gap-2 text-balance lg:text-2xl font-serif  font-semibold p-4 bg-[#E0E7FF] rounded-lg">
            <button className="lg:bg-white p-2 rounded-full">
              {" "}
              <FcGoogle className="text-xl lg:text-2xl  "></FcGoogle>{" "}
            </button>
            <h1>Sign In Google</h1>
          </div>
          {/* Github  */}
          <div className="flex items-center gap-2 text-balance lg:text-2xl font-serif  font-semibold lg:p-4 bg-[#E0E7FF] rounded-lg">
            <button className="lg:bg-white p-2 rounded-full">
              {" "}
              <FaGithub className="text-xl lg:text-2xl  "></FaGithub>{" "}
            </button>
            <h1>Sign In Github</h1>
          </div>
        </div>
        <div className="divider font-serif">Or sign In with e-mail</div>

        <form>
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text text-xl font-serif font-semibold">
                Name
              </span>
            </div>
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              required
              className="input input-bordered w-full "
            />
          </label>
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text text-xl font-serif font-semibold">
                Password
              </span>
            </div>
            <input
              type="text"
              name="password"
              placeholder="Enter Your Password"
              className="input input-bordered w-full "
              required
            />
          </label>
          <button className="bg-[#33989B] px-3 py-2 rounded-lg text-xl font-serif text-white font-semibold mt-4">
            Sign In
          </button>
        </form>

        <p className="text-center text-xl font-serif my-6">
          Dont’t Have An Account ?{" "}
          <Link className="btn-link" to="/register">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
