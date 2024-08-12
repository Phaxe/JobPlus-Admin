"use client";
import { Link } from '@/Navigation';
import React from 'react';
import { BsDashLg } from 'react-icons/bs';
const MySideItems = ({ href, SideItemText , isActive, onClick}) => {
  return (
    <li 
    className={`py-4 px-2 text-black ${isActive ? 'text-Homeworld-600' : ' hover:border-r-blue-500'} `}
    onClick={onClick}
  >
    <Link href={href} className="flex items-center space-x-2">
      <BsDashLg className={`transform rotate-90 rounded ${isActive ? 'text-Homeworld-600' : 'hidden'}`} size={20}/>
      <span className={`text-base font-semibold ${isActive ? 'text-Homeworld-600' : ''}`}>{SideItemText}</span>
    </Link>
  </li>
  );
};

export default MySideItems;
