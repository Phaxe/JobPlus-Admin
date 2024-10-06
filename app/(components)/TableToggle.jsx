"use client"
import Image from 'next/image'
import React, { useState, useEffect } from 'react'

function TableToggle({ status }) {
  // Set initial state based on the status prop
  const [openToggle, setOpenToggle] = useState(status === "active");

  const handleToggle = () => {
    setOpenToggle(!openToggle);
  };

  return (
    <td className="py-2 px-4 text-darkGray font-semibold font-cairo border border-l-0">
      {/* Checkbox input to toggle the switch */}
      <input
        type="checkbox"
        checked={openToggle}
        onChange={handleToggle}
        className="hidden" // Hidden the actual checkbox input for custom styling
      />
      
      {/* Image that changes based on the toggle */}
      <Image
        onClick={handleToggle}
        alt="actions-icon"
        src={openToggle ? "/Switcher.svg" : "/offSwitcher.svg"}
        width={40}
        height={15}
        className="object-cover flex items-center justify-center cursor-pointer"
      />
    </td>
  );
}

export default TableToggle;
