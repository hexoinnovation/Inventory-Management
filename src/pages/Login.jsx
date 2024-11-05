import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate(); // Use navigate hook from react-router-dom

  const handleSignup = () => {
    // Here you can add authentication logic if needed
    navigate("/signup"); // Redirect to the Dashboard page
  };

  const handleHome = () => {
    // Here you can add authentication logic if needed
    navigate("/dashboard"); // Redirect to the Dashboard page
  };

  return (
    <div>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
          {/* Left Side */}
          <div className="flex flex-col justify-center p-8 md:p-14">
            <span className="mb-3 text-4xl font-bold">Welcome back</span>

            <div className="py-4">
              <span className="mb-2 text-md">Email</span>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                name="email"
                id="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="py-4">
              <span className="mb-2 text-md">Password</span>
              <input
                type="password"
                name="pass"
                id="pass"
                className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                placeholder="Enter your password"
              />
            </div>
            <div className="flex justify-between w-full py-4">
              <span className="font-bold text-md">Forgot password</span>
            </div>
            <button
              className="w-full bg-blue-400 text-white p-2 rounded-lg mb-6 hover:bg-white hover:text-black hover:border hover:border-gray-300"
              onClick={handleHome}
            >
              Sign in
            </button>
            <button className="w-full border border-gray-300 text-md p-2 rounded-lg mb-6 hover:bg-black hover:text-white flex items-center justify-center">
              <img
                src="google.svg"
                alt="Google icon"
                className="w-6 h-6 mr-2"
              />
              Sign in with Google
            </button>
            <div className="text-center text-gray-400">
              Don&apos;t have an account?
              <span className="font-bold text-black" onClick={handleSignup}>
                {" "}
                Sign up for free
              </span>
            </div>
          </div>
          {/* Right Side */}
          {/* <div className="relative">
            <img
              src="image.jpg"
              alt="Illustration"
              className="w-[400px] h-full hidden rounded-r-2xl md:block object-cover"
            />
            {/* Text on Image */}
          {/* <div className="absolute hidden bottom-10 right-6 p-6 bg-white bg-opacity-30 backdrop-blur-sm rounded drop-shadow-lg md:block">
              <span className="text-white text-xl">
                We&apos;ve been using Untitle to kickstart every new project and
                can&apos;t imagine working without it.
              </span>
            </div> */}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default Login;
