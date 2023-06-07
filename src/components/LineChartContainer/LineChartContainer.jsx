import React, { useState, useEffect } from "react";
import { RxDotFilled } from "react-icons/rx";
import LineChart from "../../Charts/LineChart";
import useCryptoData from "../../Hooks/useCryptoData";

const LineChartContainer = () => {
  const [timeperiod, setTimeperiod] = useState("7d");
  const { coinTimePeriod, isLoading } = useCryptoData(timeperiod);

  const time = ["3h", "24h", "7d", "30d", "3m", "1y", "3y", "5y"];

  useEffect(() => {
    setTimeperiod(timeperiod);
  }, [timeperiod]);

  return (
    <div className="flex flex-col bg-white mb-3 md:mb-10 md:rounded-[1.25rem] h-[22.4rem] w-screen md:w-[84.9%] md:ml-5 lg:ml-[3.75rem]">
      <div className="flex justify-between p-5">
        <div>
          <h1 className="font-[Montserrat] font-bold text-sm text-black md:mx-10 lg:mt-[1.87rem]">
            Activities
          </h1>
          <select
            className="font-[Montserrat] font-normal text-[0.87rem] text-[#858585] md:mx-9 outline-none"
            defaultValue="7d"
            placeholder="Select Time Period"
            onChange={(e) => setTimeperiod(e.target.value)}
          >
            {time.map((date) => (
              <option key={date}>{date}</option>
            ))}
          </select>
        </div>
        <div className="flex flex-col md:flex-row lg:mt-[3.06rem pr-4 lg:mr-[3.75rem]">
          <p className="flex items-center font-[Lato] font-normal text-[0.87rem] text-black">
            <span className="text-2xl">
              <RxDotFilled color="#E9A0A0" />
            </span>{" "}
            Bitcoin
          </p>
          {/* <p className="flex items-center font-[Lato] font-normal text-[0.87rem] text-black">
            <span className="text-2xl">
              <RxDotFilled color="#9BDD7C" />
            </span>{" "}
            User
          </p> */}
        </div>
      </div>
      <div className="w-screen h-[18rem] md:w-full md:h-[13rem] lg:w-4/5 lg:ml-12 xl:w-[86%] xl:ml-14">
        {!isLoading && <LineChart coinHistory={coinTimePeriod} />}
      </div>
    </div>
  );
}; //md:w-4/5 md:h-96 md:pt-8 md:pl-2 lg:pt-0 lg:h-60 lg:pl-20 xl:pl-60

export default LineChartContainer;
