import React, { useState } from "react";

import { BiMenu, BiBell } from "react-icons/bi";
import { MdOutlineSearch } from "react-icons/md";
import { IoMdCloseCircleOutline } from "react-icons/io";

import DefaultProfilePicture from "../../assets/profilepic.jpg";
import useAuthenticate from "../../Hooks/useAuthenticate";
import { links } from "../../sidebarLinks/sidebarLinks";
import Sidebar from "../Sidebar/Sidebar";

const Navbar = ({ pageName }) => {
  const [isOpen, setIsOpen] = useState();
  const { profilePic } = useAuthenticate();

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="flex justify-between items-center w-screen h-auto mt-8 md:mt-[3.75rem]  md:items-baseline md:justify-around lg:justify-between md:w-[89.9%] md:mb-10">
      <div className="nav-left flex items-center">
        {!isOpen ? (
          <div
            className="text-4xl md:text-base ml-3  md:hidden"
            onClick={handleClick}
          >
            <BiMenu />
          </div>
        ) : (
          <div className="z-20 md:hidden transition ease-in-out delay-1000">
            <span
              className="text-3xl text-white z-30 absolute left-56 mt-2"
              onClick={handleClick}
            >
              <IoMdCloseCircleOutline />
            </span>
            <Sidebar
              className1="bg-black min-w-[17.5rem] h-auto absolute top-10 -left-1 border rounded-r-[2.5rem] pb-3 transition ease-in-out delay-1000"
              classNameH1="text-white font-[Montserrat] font-bold text-3xl leading-[2.75rem] pl-[3.12rem] pt-[3.75rem]"
              heading="Board."
              text={links}
            />
          </div>
        )}
        <h1 className="menu-heading hidden text-black text-base font-[Montserrat] font-bold leading-[1.81rem] sm:ml-3 md:ml-1 lg:ml-[3.75rem] sm:block">
          {pageName}
        </h1>
      </div>
      <div className="nav-right flex items-center ml-7 md:ml-14">
        <div className="search hidden sm:flex items-center px-3 w-[11.25rem] h-9 md:h-[1.87rem]   bg-white rounded-[0.62rem] ">
          <input
            className="rounded-[0.62rem] w-3/4 text-lg font-[Lato] font-normal leading-4 placeholder:text-lg placeholder:font-[Lato] md:text-sm md:placeholder:text-xs outline-none"
            placeholder="Search..."
          />
          <span className="text-[#858585] text-xl ml-6 md:text-lg">
            <MdOutlineSearch />
          </span>
        </div>
        <div className="icon flex flex-row  sm:ml-1 md:ml-2 lg:ml-[1.87rem] px-4 md:px-3 2xl:px-0 items-center">
          <span className="text-4xl md:text-lg">
            <BiBell />
          </span>
          <img
            className="w-11 h-11 ml-2 rounded-full object-cover md:w-8 md:h-8 md:ml-2 lg:ml-5"
            src={profilePic || DefaultProfilePicture}
            alt="Profile Pic"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
