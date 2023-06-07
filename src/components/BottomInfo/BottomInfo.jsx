import React, { useState, useEffect } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { RxDotFilled } from "react-icons/rx";
import useCryptoData from "../../Hooks/useCryptoData";
import PieChart from "../../Charts/PieChart";
import millify from "millify";

const BottomInfo = () => {
  const [timeperiod, setTimeperiod] = useState("7d");
  const { coinTimePeriod, ethTimePeriod } = useCryptoData(timeperiod);
  const [btc, setBtc] = useState();
  const [eth, setEth] = useState();

  const getCoinPrice = (btc, eth) => {
    setBtc(btc);
    setEth(eth);
  };

  const time = ["3h", "24h", "7d", "30d", "3m", "1y", "3y", "5y"];

  useEffect(() => {
    setTimeperiod(timeperiod);
  }, [timeperiod]);

  return (
    <div className="flex flex-col flex-wrap w-screen lg:flex-row md:w-[85.3%] md:ml-5 lg:ml-[3.75rem] md:items-center lg:items-start lg:justify-between">
      <div className="bg-white w-screen h-64 md:w-[23rem] lg:w-[30rem] mb-3 md:rounded-[1.25rem]">
        <div className="flex justify-between p-5">
          <h1 className="font-[Montserrat] font-bold text-lg text-black">
            Top products
          </h1>
          <select
            className="font-[Montserrat] font-normal text-xs text-[#858585]"
            defaultValue="7d"
            placeholder="Select Time Period"
            onChange={(e) => setTimeperiod(e.target.value)}
          >
            {time.map((date) => (
              <option key={date}>{date}</option>
            ))}
          </select>
        </div>
        <div className="flex justify-evenly sm:justify-between mx-28 md:mx-6">
          <div className="h-36 w-36 xl:ml-14">
            <PieChart
              btcHistory={coinTimePeriod}
              ethHistory={ethTimePeriod}
              getCoinPrice={getCoinPrice}
            />
          </div>
          <div>
            <div className=" xl:mr-16">
              <h3 className="flex items-center font-[Montserrat] font-bold text-sm text-black">
                <span className="text-2xl">
                  <RxDotFilled color="#98D89E" />
                </span>{" "}
                Bitcoin
              </h3>
              <p className="font-[Lato] font-normal text-xs text-[#858585] ml-5">
                {millify(btc, {
                  precision: 4,
                  lowercase: true,
                })}
              </p>
            </div>

            <div>
              <h3 className="flex items-center font-[Montserrat] font-bold text-sm text-black">
                <span className="text-2xl">
                  <RxDotFilled color="#EE8484" />
                </span>{" "}
                Ethereum
              </h3>
              <p className="font-[Lato] font-normal text-xs text-[#858585] ml-5">
                {millify(eth, {
                  precision: 4,
                  lowercase: true,
                })}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white w-screen h-64 md:w-[23rem] lg:w-[30rem] md:rounded-[1.25rem]">
        <div className="flex justify-between items-center p-5 lg:p-0 lg:ml-10 lg:mt-[1.87rem] lg:mb-6">
          <h1 className="font-[Montserrat] font-bold text-lg text-black">
            Today's schedule
          </h1>
          <p className="flex items-center font-[Monteserrat] font-normal text-xs text-[#858585] lg:mr-[1.87rem] hover:underline">
            See all{" "}
            <span>
              <MdOutlineKeyboardArrowRight />
            </span>
          </p>
        </div>
        <div className="pl-5 lg:pl-10">
          <div className="flex mb-3">
            <div className="w-1 h-auto items-center bg-[#9BDD7C]"></div>
            <div className="ml-4">
              <h3 className="font-[Lato] font-bold text-sm text-[#666666]">
                Meeting with suppliers from kuta bali
              </h3>
              <p className="font-[Lato] font-normal text-xs text-[#999999]">
                14:00-15:00
              </p>
              <p className="font-[Lato] font-normal text-xs text-[#999999]">
                at Sunset Road kuta, bali
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="w-1 h-auto items-center bg-[#6972C3]"></div>
            <div className="ml-4">
              <h3 className="font-[Lato] font-bold text-sm text-[#666666]">
                Check operation at Giga Factory
              </h3>
              <p className="font-[Lato] font-normal text-xs text-[#999999]">
                18:00-22:00
              </p>
              <p className="font-[Lato] font-normal text-xs text-[#999999]">
                at Central Jakrata
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomInfo;
