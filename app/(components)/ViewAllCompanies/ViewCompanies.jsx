import React from 'react'


import Navbar from '../Navbar/Navbar'
import SideBar from "../MySideBar/MySideBar"
import PageHeader from "./ViewCompanyHeader/PagesHeaders"
import SearchInput from "../SearchInput/SearchInput"
import ViewCompanyTable from "./ViewCompanyTable/ViewCompanyTable"


import { useTranslations } from 'next-intl'
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { AiOutlineStop } from "react-icons/ai";
import { HiOutlineTrash } from "react-icons/hi2";
import { ImSwitch } from "react-icons/im";
function ViewJobs() {
    const t = useTranslations("JobsTable");
    const g = useTranslations("General");
    const userMenuItems = [
        {
          key: 1,
          text: t("jobDetails"),
          color: "#000",
          icon: <MdOutlineRemoveRedEye size={15} />,
        },
        {
          key: "2",
          text:  t("Candidates"),
          href: "/AllApplicants",
          color: "#40AC9A",
          icon: <MdOutlineRemoveRedEye size={15} />,
        },
        {
          key: "3",
          text: g("Stop"),
          href: "/",
          color: "#FF9900",
          icon: <ImSwitch size={15}/> ,
        },
        {
            key: "4",
            text: g("Hide"),
            href: "/",
            color: "#9D9D9D",
            icon:<AiOutlineStop size={15}/>,
          },
          {
            key: "5",
            text: g("Delete"),
            href: "/",
            color: "#DC5A5A",
            icon:<HiOutlineTrash size={15}/>,
          },
      
        
      ];
  return (
    <div>
        <Navbar/>
        <div className='flex items-start justify-start w-full ' >
        <SideBar/>
        <div >
        <PageHeader
        searchFields={<SearchInput/>}
      goTo={"/addNewJob"}
      buttonclass={
        "h-[48px] px-6 text-base border-Homeworld-600 border text-center text-white rounded-lg bg-Homeworld-600 hover:shadow-xl hover:duration-300 duration-300 w-full max-md:text-xs"
      }
      buttonclass2={
        "h-[48px] w-[140px] text-base px-6 border-Homeworld-600 border text-center text-Homeworld-600 rounded-lg bg-white hover:shadow-xl hover:duration-300 duration-300 w-full max-md:text-xs"
      }
      buttonName="إضافة شركة جديدة"
      currentPage="الشركات"
      prevPage={""}
      pageName="الشركات"
      toPrev="/"
      HomePage={g("Home")}
      notice=""
      noticeClass={"hidden"}
      buttonName2={g("Excel")}
      disabled={false}
        />
        <ViewCompanyTable dropDownData={userMenuItems} />
        </div>
        </div>
    </div>
  )
}

export default ViewJobs