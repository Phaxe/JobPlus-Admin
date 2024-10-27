"use client"
import React, { useEffect, useState } from "react";


import Navbar from '../Navbar/Navbar'
import SideBar from "../MySideBar/MySideBar"
import PageHeader from "../ComPagesHeaders/PagesHeaders"
import SearchInput from "../SearchInput/SearchInput"

import BeatLoader from "react-spinners/BeatLoader"

import { useLocale, useTranslations } from "next-intl";


function AllUsers() {
 
    const g = useTranslations("General");
    const locale = useLocale()

    const [loading, setLoading] = useState(true);
   
  
    useEffect(() => {
    
       setTimeout(() => {
         setLoading(false)
       }, 1000);
    
    }, []);
  
  

  
    
    
      if (loading) {
        return (
          <div className=" flex items-center justify-center w-full h-screen m-auto ">
            <BeatLoader color="#1984E5" size={30}/>
          </div>
        );
      }
  return (
    <div>
        <Navbar/>
        <div className='flex items-start justify-start w-full ' >
        <SideBar/>
        <div className="responsive flex items-center justify-center">
 <div className="flex items-center justify-center">
    <h1 className="mt-52 text-Homeworld-700 text-2xl">This Will be DashBoard</h1>
 </div>
   
        </div>
        </div>
    </div>
  )
}

export default AllUsers