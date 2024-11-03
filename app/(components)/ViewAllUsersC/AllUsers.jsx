"use client"
import React, { useEffect, useState } from "react";


import Navbar from '../Navbar/Navbar'
import SideBar from "../MySideBar/MySideBar"
import PageHeader from "../ComPagesHeaders/PagesHeaders"
import SearchInput from "../SearchInput/SearchInput"
import UsersTable from "./AllUsersTable/AllUsersTable"
import BeatLoader from "react-spinners/BeatLoader"

import { useLocale, useTranslations } from "next-intl";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "@/app/ReduxStore/Slices/usersSlice";

function AllUsers() {
    const t = useTranslations("JobsTable");
    const g = useTranslations("General");
    const locale = useLocale()
    const dispatch = useDispatch();
    const { data, loading } = useSelector((state) => state.users);
    const { token } = useSelector((state) => state.auth);
    const [currentPage, setCurrentPage] = useState(1);
    const currentTableData = Array.isArray(data?.data) ? data?.data : []
    const pagination = data?.pagination || {};
    const pageSize = pagination.perPage || 10;
    const totalItems = pagination.total;
  console.log(token);
  
    useEffect(() => {
      if (token) {
        dispatch(fetchUsers({page: currentPage,locale}));
      }
    }, [dispatch, token, currentPage, locale]);
  
  
  
    const handlePageChange = (page) => {
      setCurrentPage(page);
     
    };
    console.log(currentTableData);
  
    
    
      if (loading) {
        return (
          <div className=" flex items-center justify-center w-full h-screen m-auto ">
            <BeatLoader color="#1984E5" size={30}/>
          </div>
        );
      }
  return (
    <div>
        <Navbar/>
        <div className='flex items-start justify-start w-full ' >
        <SideBar/>
        <div className="responsive">
        <PageHeader
        searchFields={<SearchInput/>}
      goTo={"/addNewJob"}
      buttonclass={
        "h-[48px] px-6 text-base border-Homeworld-600 border text-center text-white rounded-lg bg-Homeworld-600 hover:shadow-xl hover:duration-300 duration-300 w-full max-md:text-xs"
      }
      buttonclass2={
        "h-[48px] w-[140px] text-base px-6 border-Homeworld-600 border text-center text-Homeworld-600 rounded-lg bg-white hover:shadow-xl hover:duration-300 duration-300 w-full max-md:text-xs"
      }
      buttonName="إضافة مستخدم"
      currentPage="المستخدمين"
      prevPage={""}
      pageName="المستخدمين"
      toPrev="/"
      HomePage={g("Home")}
      notice=""
      noticeClass={"hidden"}
      buttonName2={g("Excel")}
      disabled={false}
        />
        <UsersTable 
              loading={loading}
              currentTableData={currentTableData}
              currentPage={currentPage}
              pageSize={pageSize}
              totalItems={totalItems}
              handlePageChange={handlePageChange}
               />
        </div>
        </div>
    </div>
  )
}

export default AllUsers