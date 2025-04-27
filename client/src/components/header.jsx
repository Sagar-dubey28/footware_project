import React from "react";
import { FiSearch } from "react-icons/fi";
import {NavLink} from "react-router-dom"

const Header = () => {
  return (
    <>
      <div className="flex justify-between items-center text-teal-50 bg-gray-900">
        
        
          <ul  className="flex  gap-10 m-6 items-center justify-center ">
            <li className="text-4xl"><span className="text-4xl"> <NavLink to={"/"}>Logo</NavLink></span></li>
            <li className="font-bold"><NavLink to={"/New"}>New</NavLink></li>
            <li className="font-bold"><NavLink to={"/Men"}>Men</NavLink></li>
            <li className="font-bold"><NavLink to={"/Women"}>Women</NavLink></li>
            <li className="font-bold"><NavLink to={"/Kids"}>Kids</NavLink></li>
            <li className="font-bold"><NavLink to={"/Sale"}>Sale</NavLink></li>
          </ul>
        

        <div className="flex  gap-8 mt-5 mr-16 items-center ">
          <div className="flex items-center border  border-white  h-12 w-80 p-4 rounded-2xl mb-3">
          <FiSearch className="text-2xl mr-2" />
          <input type="search" name="" id="" className="border-none focus:outline-none text-lg " placeholder="Search"/>
          
          </div>
          <div >
            <button className="font-bold  text-2xl mb-3">
                 <NavLink to={"/login"}>Login</NavLink>
                 
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
