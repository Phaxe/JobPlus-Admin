import Image from "next/image";
import React, { useState } from "react";
import backIconGreen from "/public/Back-icon-green.svg";
import calendarIcon from "/public/calendar.svg";
import { useLocale } from "next-intl";

const ExpandedDropDown = ({
  value,
  onChange,
  classWidth,
  noticeClass,
  notice,
  shown
}) => {
  const options = [
    { value: "قبول للمقابله", label: "قبول للمقابله" },
    { value: "قبول بعد ", label: "قبول بعد" },
    { value: "رفض بعد", label: "رفض بعد" },
  ];
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const locale = useLocale();

  return (
    <div className={`w-full ${shown}`}>
      <div className={`relative border-b border-gray-100  ${classWidth} `}>
   
        <select
          id="name"
          name="name"
          className=" w-full text-start px-10  text-gray-500 text-sm py-4 font-cairo focus:outline-none focus:ring-1 focus:ring-transparent focus:border-transparent  appearance-none relative"
          placeholder=""
          value={value}
          onChange={(e) => {
            onChange(e);
            handleClick();
          }}
          onClick={handleClick}
          onBlur={() => setIsOpen(false)} // Close the dropdown when focus is lost
        >
  
        
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {locale === "ar" ? (
          <div className="pointer-events-none absolute inset-y-0 left-0 top-[0%] flex items-center px-4">
            <Image
              src={backIconGreen}
              width={20}
              height={10}
              alt="select arrow"
              className={`transform transition-transform duration-200 ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </div>
        ) : (
          <div className="pointer-events-none absolute inset-y-0 right-0 top-[0%] flex items-center px-4">
            <Image
              src={backIconGreen}
              width={20}
              height={10}
              alt="select arrow"
              className={`transform transition-transform duration-200 ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </div>
        )}
                {locale === "ar" ? (
       <div className="pointer-events-none absolute inset-y-0 right-0 top-[0%] flex items-center px-4">
       <Image src={calendarIcon} width={17} height={10} className="object-cover" alt="calendar icon" /> 
      </div>
        ) : (
          <div className="pointer-events-none absolute inset-y-0 left-0 top-[0%] flex items-center px-4">
        <Image src={calendarIcon} width={17} height={10} className="object-cover" alt="calendar icon" /> 
          </div>
        )}
      
        <p className={`pt-2 text-gray-300  absolute ${noticeClass}`}>
          {notice}
        </p>
      </div>
    </div>
  );
};

export default ExpandedDropDown;





