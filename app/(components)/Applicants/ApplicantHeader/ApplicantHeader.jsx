import React from 'react'
import Button from "../../Buttons/Button"
function ApplicantHeader({appData, name}) {
  const experiences = appData?.experiences || [];

  // Safely access jobTitle, providing fallback if 'experiences' is empty
  const jobTitle = experiences.length > 0 ? experiences[0]?.job_title : "N/A";
  return (
    <div className='flex items-center justify-between  responsive pb-5 pt-10'>
        <div className='flex flex-col items-start justify-start gap-4'>
            <h1 className='font-semibold text-2xl'>{name}</h1>
            <p className='text-sm'>{jobTitle}</p>
        </div>

    </div>
  )
}

export default ApplicantHeader