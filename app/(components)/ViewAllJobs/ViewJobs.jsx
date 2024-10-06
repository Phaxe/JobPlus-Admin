"use client";
import React, { useEffect, useState } from "react";
import ViewJobsTable from "./ViewJobTable/ViewJobsTable"
import Navbar from "@/app/(components)/Navbar/Navbar";
import MySideBar from "@/app/(components)/MySideBar/MySideBar";
import PagesHeaders from "@/app/(components)/ComPagesHeaders/PagesHeaders";
import { useLocale, useTranslations } from "next-intl";
import SearchInput from "@/app/(components)/SearchInput/SearchInput";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobs } from "@/app/ReduxStore/Slices/jobsSlice";
import BeatLoader from "react-spinners/BeatLoader"

function ViewJobs() {
  const t = useTranslations("JobsTable");
  const g = useTranslations("General");


  const locale = useLocale()
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state.jobs);
  const { token } = useSelector((state) => state.auth);
  const [currentPage, setCurrentPage] = useState(1);
  const currentTableData = Array.isArray(data?.data) ? data?.data : []
  const pagination = data?.pagination || {};
  const pageSize = pagination.perPage || 10;
  const totalItems = pagination.total;

  useEffect(() => {
    if (token) {
      dispatch(fetchJobs({page: currentPage,locale}));
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
  
      <div className="h-[90vh] w-full">
        <Navbar />
        <div className="flex items-start justify-start w-full">
          <MySideBar />
          <div className="w-full">
            <PagesHeaders
              searchFields={<SearchInput  />}
              goTo="/addNewJob"
              buttonclass="h-[48px] px-6 text-base border-Homeworld-600 border text-center text-white rounded-lg bg-Homeworld-600 hover:shadow-xl hover:duration-300 duration-300 w-full max-md:text-xs"
              buttonclass2="hidden"
              buttonName={g("addJob")}
              currentPage={g("Jobs")}
              prevPage=""
              pageName={g("Jobs")}
              toPrev="/"
              HomePage={g("Home")}
              noticeClass="hidden"
              notice={g("excelNotice")}
              buttonName2={g("Excel")}
              disabled={true}
            />
      <ViewJobsTable 
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
  
  );
}

export default ViewJobs;
