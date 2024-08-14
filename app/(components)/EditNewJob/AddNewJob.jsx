import React from 'react'
import AddJobForm from './AddNewForm'
import Navbar from '../Navbar/Navbar'
import SideBar from "../MySideBar/MySideBar"
import PageHeader from "../PagesHeaders/PagesHeaders"
import ProgressBar from "./ProgressBar/ProgressBar"
import { useLocale, useTranslations } from 'next-intl'
function AddNewJob() {
    const g = useTranslations("General");
    const j = useTranslations("AddJob");
    const locale = useLocale()
  return (
    <div>
    <Navbar/>
    <div className='flex items-start justify-start w-full ' >
    <SideBar/>
    <div >
    <PageHeader
       toPrev="/companyUserProfile"
         currentPage="تعديل وظيفة محاسب"
         prevPage="الوظيفة /"
         HomePage={g("Home")}
         pageName="تعديل وظيفة محاسب"
         currentPageClass={"text-Homeworld-600"}
       />
        <ProgressBar percentage={10}/>
   <AddJobForm/>
    </div>
    </div>
</div>
  )
}

export default AddNewJob