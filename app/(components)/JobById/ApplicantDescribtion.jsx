import Image from 'next/image'
import React from 'react'
import Pattren from "/public/jobcardpattren.svg"
function ApplicantDescribtion({workTime,workCity,education,expYears}) {
    const cardsData = [
        { title: workTime, dataIndex: 'عدد المتقدمين', key: '1' },
        { title: workCity, dataIndex: 'عدد المقبولين', key: '2' },
        { title: education, dataIndex: 'عدد المقبولين للمقابلة', key: '3' },
        { title: expYears, dataIndex: 'عدد المرفوضين', key: '4' },
   
      ];
  return (
    <div className='responsive pr-10 py-5'>
        <div className='flex flex-col items-start justify-center gap-5 w-full'>
            <div>
            <h1 className='text-xl font-bold'>تفاصيل الإعلان</h1>
            </div>
          
            
                <div className='grid grid-cols-4 items-center justify-center gap-5 w-full 2xl:w-[1330px]'>
                    {cardsData.map((card) => (
     <div key={card.key} className='flex flex-col items-start justify-center gap-2 bg-Homeworld-600 w-full h-[91px] px-5 rounded-lg relative'>
     <Image src={Pattren} alt='any' width={110} height={100} className='absolute left-0 object-cover'/>
     <h1 className='text-2xl font-semibold text-[#47C0AC]'>{card.title}</h1>
     <h1 className='text-base text-white'>{card.dataIndex}</h1>
 </div>
                    ) )}
                   
                </div>
            
        </div>
    </div>
  )
}

export default ApplicantDescribtion