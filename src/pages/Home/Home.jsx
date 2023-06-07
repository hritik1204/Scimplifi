import React from "react";

import Sidebar from "../../components/Sidebar/Sidebar";
import SignInInput from "../../components/SigInInput/SigInInput";

const Home = () => {
  return (
    <div className="flex flex-col md:flex-row ">
      <Sidebar
        className1="bg-black p-3 md:flex justify-center items-center md:h-screen md:w-2/5"
        classNameH1="text-white font-[Montserrat] font-bold md:text-7xl md:leading-[5.5rem]"
        heading="Board."
      />
      <SignInInput />
    </div>
  );
};

export default Home;
