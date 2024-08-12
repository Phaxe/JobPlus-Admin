import React from 'react'
import NotFoundImage from "/public/404.svg";

import Image from 'next/image';
import { Link } from "../../../Navigation"
import { useTranslations } from 'next-intl';
function NotFoundPage() {
  const n = useTranslations("NotFound")
  return (
    <div className='w-screen h-[60vh]'>
  
     <div className='flex items-center justify-center mt-[200px]'>

     </div>
     <div className='flex flex-col items-center justify-center gap-3'>
        <h1 className='text-xl text-center font-bold text-Homeworld-600'>{n("PageNotFound")}</h1>
        <p className='text-xl font-semibold text-center text-darkGray '>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        <Link href={"/LandingPage"} className='bg-Homeworld-600 text-center text-white text-base px-6 py-3 rounded-lg'>{n("BackHome")}</Link>
     </div>
    </div>
  )
}

export default NotFoundPage