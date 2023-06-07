import React from "react";
import { BiAbacus } from "react-icons/bi";

import useCryptoData from "../../Hooks/useCryptoData";
import millify from "millify";
import { FaCoins } from "react-icons/fa";
import { BsCurrencyExchange } from "react-icons/bs";
import { AiOutlineBank } from "react-icons/ai";

const Info = () => {
  const { coinStats, isLoading } = useCryptoData();
  console.log();

  const infoData = [
    {
      title: "Total Coins",
      value: coinStats?.totalCoins,
      color: "#DDEFE0",
      icon: <FaCoins />,
    },
    {
      title: "Total Market Cap",
      value: `$ ${millify(coinStats?.totalMarketCap, {
        precision: 2,
        locales: "de-DE",
      })}`,
      color: "#F4ECDD",
      icon: <AiOutlineBank />,
    },
    {
      title: "Total Markets",
      value: coinStats?.totalMarkets,
      color: "#EFDADA",
      icon: <BiAbacus />,
    },
    {
      title: "Total Exchanges",
      value: coinStats?.totalExchanges,
      color: "#DEE0EF",
      icon: <BsCurrencyExchange />,
    },
  ];
  return (
    <div className="flex flex-wrap justify-center md:justify-center lg:justify-start 2xl:justify-between w-screen md:w-[89.9%] md:ml-1 lg:ml-[3.55rem] md:mb-10 ">
      {infoData.map((info, index) => (
        <div
          key={index}
          className="w-48 h-28 rounded-[1.25rem] m-5 md:m-1 md:ml-6 lg:ml-0 md:mr-12 xl:mr-9 2xl:mr-12 flex flex-col lg:mb-5 xl:w-[13.8rem] xl:h-[7.5rem]"
          style={{ backgroundColor: info.color }}
        >
          <span className="font-bold text-2xl mt-5 ml-36 xl:ml-44">
            {info.icon}
          </span>
          <div className="ml-6">
            <p className="font-[Lato] font-normal text-sm text-black">
              {info.title}
            </p>
            {isLoading ? (
              <div className="animate-pulse">
                <p className="rounded-full bg-slate-300 h-4 w-32 mt-3"></p>
              </div>
            ) : (
              <p className="font-sans font-bold text-[1.5rem]">{info.value}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Info;
