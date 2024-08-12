import React from 'react'
import Button from "../../Buttons/Button"
function ApplicantHeader({headerClass, text1 ,text2 ,text3 ,onClick, modalReject}) {
  return (
    <div className='flex items-center justify-between  responsive pb-5 pt-10'>
        <div className='flex flex-col items-start justify-start gap-4'>
            <h1 className='font-semibold text-2xl'>هايل آل ثابت</h1>
            <p className='text-sm'>محاسب</p>
        </div>
        <div className='flex items-center justify-between gap-5'>
            <Button onClick={onClick} classProps={`px-4 py-2  rounded-lg  text-white bg-Homeworld-600 `} buttonText={text1}/>
            <Button onClick={modalReject} classProps={`px-4 py-2  rounded-lg  text-white bg-red-500`} buttonText={text2}/>
            <Button classProps={`px-4 py-2  rounded-lg  text-[#47C0AC] bg-[#F3F9F8] ${headerClass}`} buttonText={text3}/>
        </div>
    </div>
  )
}

export default ApplicantHeader