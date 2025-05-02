// import React, { useState } from "react";
// import loginShoe from "../assets/loginShoe.avif";
// import { NavLink, useNavigate } from "react-router-dom";

// const Login = () => {
//   const navigate = useNavigate();

//   return (
//     <>
//       <div className=" h-110 w-220 flex  m-auto mt-4">
//         <div className=" w-[50%] ">
//           <img src={loginShoe} alt="" srcset="" />
//         </div>
//         <div className=" w-[50%]">
//           <h1 className="text-6xl text-center mt-4 font-bold ">Welcome Back</h1>
//           <p className="mt-4 text-center text-2xl">
//             We are <span className="text-blue-600 mx-2">Happy</span>to see you.
//           </p>
//           <div className="grid justify-center ">
//             <form action="">
//               <label
//                 htmlFor=""
//                 className="block text-sm/6 font-medium text-gray-900 my-4"
//               >
//                 Enter Your Email address
//               </label>
//               <input
//                 type="email"
//                 name=""
//                 id=""
//                 className="block w-70 rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2"
//               />
//               <label
//                 htmlFor=""
//                 className="block text-sm/6 font-medium text-gray-900 my-4"
//               >
//                 Enter Your Password
//               </label>
//               <input
//                 type="email"
//                 name=""
//                 id=""
//                 className="block w-70 rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2"
//               />

//               <div className="flex justify-center items-center">
//                 <button
//                   onClick={(e) => {
//                     login(e);
//                   }}
//                   type="submit"
//                   className="bg-blue-600 text-white px-4 py-2  mt-4 rounded-2xl hover:bg-blue-700 transition-all"
//                 >
//                   Submit
//                 </button>
//               </div>
//               <span className="block text-end my-2">Forget Password ?</span>
//               <p className="my-2 ml-2">
//                 Don't have an account?
//                 <span className="text-blue-600 mx-2 ml-4">
//                   <NavLink to={"/Signup"}>Go to Signup</NavLink>
//                 </span>
//               </p>
//             </form>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Login;






import React, { useState } from "react";
import loginShoe from "../assets/loginShoe.avif";
import { NavLink, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Redirect or store token
        console.log("Login successful:", data);
        navigate("/dashboard"); // adjust as per your route
      } else {
        setError(data.message || "Login failed");
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
      console.error(err);
    }
  };

  return (
    <div className="h-110 w-220 flex m-auto mt-4">
      <div className="w-[50%]">
        <img src={loginShoe} alt="Login Shoe" />
      </div>
      <div className="w-[50%]">
        <h1 className="text-6xl text-center mt-4 font-bold">Welcome Back</h1>
        <p className="mt-4 text-center text-2xl">
          We are <span className="text-blue-600 mx-2">Happy</span>to see you.
        </p>
        <div className="grid justify-center">
          <form onSubmit={handleLogin}>
            <label className="block text-sm/6 font-medium text-gray-900 my-4">
              Enter Your Email address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block w-70 rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2"
              required
            />
            <label className="block text-sm/6 font-medium text-gray-900 my-4">
              Enter Your Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="block w-70 rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2"
              required
            />

            {error && (
              <p className="text-red-500 text-sm mt-2 text-center">{error}</p>
            )}

            <div className="flex justify-center items-center">
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 mt-4 rounded-2xl hover:bg-blue-700 transition-all"
              >
                Submit
              </button>
            </div>

            <span className="block text-end my-2 text-sm text-gray-500 cursor-pointer hover:text-gray-800">
              Forget Password?
            </span>

            <p className="my-2 ml-2">
              Don't have an account?
              <span className="text-blue-600 mx-2 ml-4">
                <NavLink to={"/Signup"}>Go to Signup</NavLink>
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
