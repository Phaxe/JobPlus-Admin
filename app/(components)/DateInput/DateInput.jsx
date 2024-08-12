"use client";
import Image from 'next/image';
import React, { useRef } from 'react';
import calendarIcon from "/public/calendar.svg"; // Ensure the path to your calendar icon is correct
import "./dateinput.css"
const CustomDateInput = ({ labelName,  name,  inputClass }) => {
  const dateInputRef = useRef(null);

  const handleIconClick = () => {
    dateInputRef.current.showPicker(); // Opens the date picker
  };

  return (
    <div className={` flex flex-col mt-0 relative ${inputClass} `}>
      <label htmlFor={name} className="py-2">
        {labelName}
      </label>
      <div className="relative">
        <input
          type="date"
          id={name}
          name={name}
          ref={dateInputRef}
          className="border rounded  h-14 w-full"
          required  
        
        />
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 cursor-pointer" onClick={handleIconClick}>
          <Image
            src={calendarIcon}
            width={25}
            height={25}
            alt="calendar icon"
          />
        </div>
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-400">
          12/03/2002
        </div>
      </div>
    </div>
  );
};

export default CustomDateInput;
