import Image from 'next/image';
import React, { useState } from 'react';
import backIconGreen from "/public/Back-icon-green.svg";
import { useLocale } from 'next-intl';

const ReusableSelectInput = ({
  label,
  placeholder,
  options,
  value,
  onChange,
  astrix,
  classWidth,
  noticeClass,
  notice,
  
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const locale = useLocale()

  return (
    <div className=" w-full">
    
      <div className={`relative text-base  ${classWidth} `}>
        <select
          id={label}
          name={label}
          className="block w-[150px] p-2 text-gray-500 rounded focus:outline-none focus:ring-1 focus:ring-gray-300 focus:border-transparent border border-gray-300 appearance-none relative"
          placeholder={placeholder}
          value={value}
          onChange={(e) => {
            onChange(e);
            handleClick();
          }}
          onClick={handleClick}
          onBlur={() => setIsOpen(false)} // Close the dropdown when focus is lost
        >
          <option value="">{placeholder}</option>
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
           width={25}
           height={10}
           alt="select arrow"
           className={`transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
         />
       </div>
   ) : (
    <div className="pointer-events-none absolute inset-y-0 right-0 top-[0%] flex items-center px-4">
    <Image
      src={backIconGreen}
      width={25}
      height={10}
      alt="select arrow"
      className={`transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
    />
  </div>
   )}
        <p className={`pt-2 text-gray-300  absolute ${noticeClass}`}>{notice}</p>
      </div>
    </div>
  );
};

export default ReusableSelectInput;
