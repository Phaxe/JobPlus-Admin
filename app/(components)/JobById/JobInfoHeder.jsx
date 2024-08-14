import React from 'react'
import calender from "/public/Calendar2.svg"
import Image from 'next/image'
function JobInfoHeder({jobTitle, companyName, publishDate, endDate }) {
  return (
    <div className='flex flex-col items-start justify-start gap-8  pr-10  responsive' >
        <div className='flex  items-center justify-center gap-5'>
            <h1 className='text-xl text-Homeworld-600 font-bold'>{jobTitle}</h1>
            <h5 className='text-black text-2xl font-semibold'>|</h5>
            <h5 className='text-black text-lg font-semibold'>{companyName}</h5>
        </div>
        <div className='grid grid-cols-2 gap-5 items-start justify-start'>
            <div className='flex items-start justify-center flex-col'>
                <h1 className='flex items-start justify-start gap-2 pb-2 text-base'> <Image src={calender} alt='calendar-icon' width={25} height={10}/> تاريخ النشر </h1>
                <h5 className='text-sm text-gray-500 '>{publishDate}</h5>
            </div>
            <div >
                <h1 className='flex items-start justify-start gap-2 pb-2 text-base'> <Image src={calender} alt='calendar-icon' width={25} height={10}/> تاريخ انتهاء الإعلان </h1>
                <h5 className='text-sm text-red-500'>{endDate}</h5>
            </div>
        </div>
    </div>
  )
}

export default JobInfoHeder