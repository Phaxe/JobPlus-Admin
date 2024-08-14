import Image from 'next/image'
import React from 'react'
import Pattren from "/public/jobcardpattren.svg"
function JobDescribtion({workTime,workCity,education,expYears, contractType, numberReq}) {
    const cardsData = [
        { title: workTime, dataIndex: 'وقت العمل', key: '1' },
        { title: workCity, dataIndex: 'موقع الوظيفة', key: '2' },
        { title: education, dataIndex: 'التخصص التعليمي', key: '3' },
        { title: expYears, dataIndex: 'عدد سنوات الخبرة', key: '4' },
        { title: contractType, dataIndex: 'نوع العقد', key: '5' },
        { title: numberReq, dataIndex: 'العدد المطلوب', key: '6' },
      ];
  return (
    <div className='responsive pr-10 py-5'>
        <div className='flex flex-col items-start justify-center gap-5 w-full'>
            <div>
            <h1 className='text-xl font-bold'>تفاصيل الإعلان</h1>
            </div>
          
            
                <div className='grid grid-cols-3 items-start justify-center gap-5 w-full'>
                    {cardsData.map((card) => (
     <div key={card.key} className='flex flex-col items-start justify-center gap-2 bg-lightGray w-[360px] h-[91px] px-5 rounded-lg relative'>
     <Image src={Pattren} alt='any' width={110} height={100} className='absolute left-0 object-cover'/>
     <h1 className='text-xl font-semibold text-Homeworld-600'>{card.title}</h1>
     <h1 className='text-base text-gray-500'>{card.dataIndex}</h1>
 </div>
                    ) )}
                   
                </div>
            
        </div>
    </div>
  )
}

export default JobDescribtion