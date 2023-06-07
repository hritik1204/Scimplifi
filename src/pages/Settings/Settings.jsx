import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import { links } from "../../sidebarLinks/sidebarLinks";

const Settings = () => {
  return (
    <div className="bg-[#F5F5F5] flex">
      <Sidebar
        className1=" hidden bg-black md:block md:rounded-[1.87rem] md:my-10 md:ml-10 md:min-w-[17.5rem] md:max-w-[17.5rem] md:h-[59rem]"
        classNameH1="text-white font-[Montserrat] font-bold text-3xl leading-[2.75rem] pl-[3.12rem] pt-[3.75rem]"
        heading="Board."
        text={links}
      />
      <Navbar pageName="Settings" />
    </div>
  );
};

export default Settings;
