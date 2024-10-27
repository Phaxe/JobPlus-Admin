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
       isActive={pathName === `/${locale}/ViewAllJobs` || pathName === `/${locale}/addNewJob ` || pathName === `/${locale}/EditJobPage` ? true : false}
       onClick={() => setActiveItem(`${"/ViewAllJobs"   ? "/ViewAllJobs": "/addNewJob" || "/EditJobPage"}`)}
           href="/ViewAllJobs" SideItemText={s("Jobs")}/>
        <MySideItems
         isActive={pathName === `/${locale}/ViewAllUsers`  ? true : false}
          onClick={() => setActiveItem(`${"/ViewAllUsers"}`)}
           href="/ViewAllUsers" SideItemText={s("allUsers")}/>
        <MySideItems
         isActive={pathName === `/${locale}/ViewAllCompanies`  ? true : false}
          onClick={() => setActiveItem(`${"/ViewAllCompanies"}`)}
           href="/ViewAllCompanies" SideItemText={s("Companies")}/> 
        <MySideItems
         isActive={pathName === `/${locale}/AllInterviews`  ? true : false}
          onClick={() => setActiveItem(`${"/AllInterviews"}`)}
           href="/AllInterviews" SideItemText={s("Notifacations")}/>
        <MySideItems
         isActive={pathName === `/${locale}/ViewNotifications`  ? true : false}
          onClick={() => setActiveItem(`${"/ViewNotifications"}`)}
           href="/ViewNotifications" SideItemText={s("Complains")}/>
        <MySideItems
         isActive={activeItem === 7}
          onClick={() => setActiveItem(7)}
           href="#" SideItemText={s("Rating")}/>
        <MySideItems
             isActive={pathName === `/${locale}/ViewAllAdmins`  ? true : false}
             onClick={() => setActiveItem(`${"/ViewAllAdmins"}`)}
              href="/ViewAllAdmins" SideItemText={s("adminManagers")}/>
        <MySideItems
        isActive={pathName === `/${locale}/companyUserProfile` || pathName === `/${locale}/EditCompanyProfile` ? true : false}
        onClick={() => setActiveItem(`${"/companyUserProfile"   ? "/companyUserProfile": "/EditCompanyProfile"}`)}
           href="/companyUserProfile" SideItemText={s("disabilityManagment")}/>
        <MySideItems
         isActive={pathName === `/${locale}/Contactus`  ? true : false}
          onClick={() => setActiveItem(`${"/Contactus"}`)}
           href="/Contactus" SideItemText={s("Subscribtion")}/>
                    <MySideItems
         isActive={pathName === `/${locale}/Contactus`  ? true : false}
          onClick={() => setActiveItem(`${"/Contactus"}`)}
           href="/Contactus" SideItemText={s("Plans")}/>
             <MySideItems
         isActive={pathName === `/${locale}/Contactus`  ? true : false}
          onClick={() => setActiveItem(`${"/Contactus"}`)}
           href="/Contactus" SideItemText={s("contentManagment")}/>

      </ul>
    </div>
  </div>
  );
};

export default MySideBar;
