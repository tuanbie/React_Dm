import React, { useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineClose,
  AiFillTag,
} from "react-icons/ai";
import {
  BsFillPersonLinesFill,
  BsFillSaveFill,
  BsPersonCheck,
} from "react-icons/bs";
import Button from "./button";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
      {/* Left side */}
      <div className="flex items-center">
        <div onClick={() => setNav(!nav)} className="cursor-pointer">
          {/* <AiOutlineMenu size={30} /> */}
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
          The Best <span className="font-bold">Singers</span>
        </h1>
        {/* <div className='hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]'>
          <p className='bg-black text-white rounded-full p-2'>Singer</p>
          <p className='p-2'>Song</p>
        </div> */}
      </div>

      {/* Search Input */}
      <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
        <AiOutlineSearch size={25} />
        <input
          className="bg-transparent p-2 w-full focus:outline-none"
          type="text"
          placeholder="Search Singer"
        />
      </div>

      <button className="bg-black text-white hidden md:flex items-center px-2 rounded-full">
        <BsFillPersonLinesFill
          size={40}
          onClick={() => setNav(!nav)}
          className="mr-3 "
        />{" "}
        Login
        {/* <AiOutlineClose
            onClick={()=> setNav(!nav)}
          size={50}
          className='absolute right-4 top-4 cursor-pointer'
        /> */}
      </button>

      {/* Mobile Menu */}
      {/* Overlay */}
      {nav ? (
        <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
      ) : (
        ""
      )}

      {/* Side drawer menu */}
      <div
        className={
          nav
            ? "fixed top-0 right-0 w-[500px] h-screen bg-white z-10 duration-300"
            : <Button to="/login">
          </Button>
        }
      >
        <AiOutlineClose
          onClick={() => setNav(!nav)}
          size={30}
          className="absolute right-4 top-4 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Navbar;
