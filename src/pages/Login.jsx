import { FaEye, FaEyeSlash, FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import signIn from "../assets/art.avif";
import useAuth from "../hooks/useAuth";
import toast, { Toaster } from "react-hot-toast";
import Swal from "sweetalert2";
import { useState } from "react";
const Login = () => {
  const { userSignIn, signInGoogle, githubLogin } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const navigate =useNavigate()
  const location =useLocation()
  const from = location ?.state || '/'
  // sign in
  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    userSignIn(email, password)
      .then((result) => {
        console.log(result.user);
        Swal.fire({
          title: "Success",
          text: "Login Successfully",
          icon: "success",
        });
        navigate(from)
        form.reset();
      })
      .catch((error) => {
        console.log(error);
        toast.error("Auth/invalid-credential");
      });
  };
  // google login
  const googleLogin = () => {
    signInGoogle()
    
      .then(result =>{
        navigate(from)
      }
      
    )
      .catch((error) => {
        console.log(error);
      });
  };
  const handleGithub =()=>{
    githubLogin()
    .then(result =>{
        navigate(from)
    })
    .catch(error =>{
        console.log(error)
    })
  }
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
          <div
            onClick={googleLogin}
            className="flex items-center gap-2 text-balance lg:text-2xl font-serif  font-semibold p-4 bg-[#E0E7FF] rounded-lg"
          >
            <button className="lg:bg-white p-2 rounded-full">
              {" "}
              <FcGoogle className="text-xl lg:text-2xl  "></FcGoogle>{" "}
            </button>
            <h1 className="cursor-pointer">Sign In Google</h1>
          </div>
          {/* Github  */}
          <div
            onClick={handleGithub}
            className="flex items-center gap-2 text-balance lg:text-2xl font-serif  font-semibold lg:p-4 bg-[#E0E7FF] rounded-lg"
          >
            <button className="lg:bg-white p-2 rounded-full">
              {" "}
              <FaGithub className="text-xl lg:text-2xl  "></FaGithub>{" "}
            </button>
            <h1 className="cursor-pointer">Sign In Github</h1>
          </div>
        </div>
        <div className="divider font-serif">Or sign In with e-mail</div>

        <form onSubmit={handleSignIn}>
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text text-xl font-serif font-semibold">
                Email
              </span>
            </div>
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              required
              className="input input-bordered w-full "
            />
          </label>
          <label className="form-control w-full relative">
            <div className="label">
              <span className="label-text text-xl font-serif font-semibold">
                Password
              </span>
            </div>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter Your Password"
              className="input input-bordered w-full "
              required
            />
            <span
              className="absolute right-6 top-14"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <FaEyeSlash className="text-xl"></FaEyeSlash>
              ) : (
                <FaEye className="text-xl"></FaEye>
              )}
            </span>
          </label>
          <button className="bg-[#33989B] px-3 py-2 rounded-lg text-xl font-serif text-white font-semibold mt-4">
            Sign In
          </button>
          <Toaster />
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
