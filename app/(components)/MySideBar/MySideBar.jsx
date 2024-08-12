"use client";

import React, { useState ,useEffect} from 'react';
import MySideItems from "../MySideItems/MySideItems"
import { usePathname } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';

const MySideBar = () => {
  const [activeItem, setActiveItem] = useState("");
  const pathName = usePathname();
  const locale  = useLocale()
  const s = useTranslations("SidebarItems")

 
  

  return (
    <div className={`flex flex-col  transition-all duration-300  bg-white 2xl:w-[300px] xl:w-[250px]  h-[90vh] ${locale === "ar" ? "border-gray-300 border-l" : "border-gray-300 border-r"}`}>
    <div className={`${locale === "ar" ? "flex-grow py-4 px-2 2xl:mr-12 mt-10 xl:mr-2" : "flex-grow py-4 px-2 2xl:ml-12 mt-10 xl:ml-2"}`}>
      <ul className="space-y-2 flex flex-col">
        <MySideItems
         isActive={pathName === `/${locale}` ? true : false}
         onClick={() => setActiveItem(`/${locale}`)}
        href="/" SideItemText={s("Home")}/>
        <MySideItems
       isActive={pathName === `/${locale}/JobsInformationPage` || pathName === `/${locale}/addNewJob ` || pathName === `/${locale}/EditJobPage` ? true : false}
       onClick={() => setActiveItem(`${"/JobsInformationPage"   ? "/JobsInformationPage": "/addNewJob" || "/EditJobPage"}`)}
           href="/JobsInformationPage" SideItemText={s("Jobs")}/>
        <MySideItems
         isActive={pathName === `/${locale}/AllApplicants`  ? true : false}
          onClick={() => setActiveItem(`${"/AllApplicants"}`)}
           href="/AllApplicants" SideItemText={s("Candidates")}/>
        <MySideItems
         isActive={pathName === `/${locale}/ViewAllCandidate`  ? true : false}
          onClick={() => setActiveItem(`${"/ViewAllCandidate"}`)}
           href="/ViewAllCandidate" SideItemText={s("candidatesInterviews")}/> 
        <MySideItems
         isActive={pathName === `/${locale}/AllInterviews`  ? true : false}
          onClick={() => setActiveItem(`${"/AllInterviews"}`)}
           href="/AllInterviews" SideItemText={s("Interviews")}/>
        <MySideItems
         isActive={pathName === `/${locale}/ViewNotifications`  ? true : false}
          onClick={() => setActiveItem(`${"/ViewNotifications"}`)}
           href="/ViewNotifications" SideItemText={s("Notifacations")}/>
        <MySideItems
         isActive={activeItem === 7}
          onClick={() => setActiveItem(7)}
           href="#" SideItemText={s("Plans")}/>
        <MySideItems
         isActive={activeItem === 8}
          onClick={() => setActiveItem(8)}
           href="#" SideItemText={s("Bills")}/>
        <MySideItems
        isActive={pathName === `/${locale}/companyUserProfile` || pathName === `/${locale}/EditCompanyProfile` ? true : false}
        onClick={() => setActiveItem(`${"/companyUserProfile"   ? "/companyUserProfile": "/EditCompanyProfile"}`)}
           href="/companyUserProfile" SideItemText={s("companyProfile")}/>
        <MySideItems
         isActive={pathName === `/${locale}/Contactus`  ? true : false}
          onClick={() => setActiveItem(`${"/Contactus"}`)}
           href="/Contactus" SideItemText={s("Contact")}/>
      </ul>
    </div>
  </div>
  );
};

export default MySideBar;
