// ProgressBar.js
import React from 'react';
import { useTranslations } from "next-intl";


const getGradient = (percentage) => {
  if (percentage <= 50) {
    return `linear-gradient(to left, #FF9900, #FF9900 ${percentage}%)`;
  } else {
    return `linear-gradient(to left, #47C0AC, #1984E5 ${percentage - 50}%)`;
  }
};

const ProgressBar = ({ percentage }) => {
  const j = useTranslations("AddJob");
  const gradient = getGradient(percentage);

  return (
    <div className="h-[200px]  bg-lightGray rounded-lg w-full mt-3  ">
   <div className='w-[550px] m-auto py-12  '>
   <div className="text-center text-base font-semibold mb-4">
    {j("progBarText")}
      </div>
    <div className='shadow rounded-full'>
    <div className='h-8 rounded-full overflow-hidden bg-white '>
      <div className="relative h-6 mx-1 rounded-full top-1 overflow-hidden bg-gray-100 ">
        <div
          className="absolute h-full transition-width duration-300 rounded-full "
          style={{
            width: `${percentage}%`,
            background: gradient,
          }}
        ></div>
      </div>
      </div>
    </div>
    
      <div className="flex justify-between mt-2 px-5">
      <span className="text-[#FF9900] text-sm font-bold"> {j("unClear")}</span>
      <span className="text-[#47C0AC] text-sm font-bold"> {j("Clear")}</span>
        <span className="text-[#1984E5] text-sm font-bold"> {j("veryClear")}</span>
      
       
      </div>
   </div>
    </div>
  );
};

export default ProgressBar;
