import React, { useEffect, useState } from "react";
import { useLocale } from "next-intl";
import { useDispatch, useSelector } from "react-redux";
import BeatLoader from "react-spinners/BeatLoader";
import { fetchCompanies } from "@/app/ReduxStore/Slices/companiesSlice";
import Navbar from "../Navbar/Navbar";
import SideBar from "../MySideBar/MySideBar";
import PageHeader from "./ViewCompanyHeader/PagesHeaders";
import SearchInput from "../SearchInput/SearchInput";
import ViewCompanyTable from "./ViewCompanyTable/ViewCompanyTable";
import { useTranslations } from "next-intl";

function ViewJobs() {
  const locale = useLocale();
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state.companies);
  const { token } = useSelector((state) => state.auth);
  const [currentPage, setCurrentPage] = useState(1);
  const currentTableData = Array.isArray(data?.data) ? data?.data : [];
  const pagination = data?.pagination || {};
  const pageSize = pagination.perPage || 10;
  const totalItems = pagination.total;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  useEffect(() => {
    if (token) {
      dispatch(fetchCompanies({ page: currentPage, locale }));
    }
  }, [dispatch, token, currentPage, locale]);
  console.log(currentTableData);

  const g = useTranslations("General");
  if (loading) {
    return (
      <div className=" flex items-center justify-center w-full h-screen m-auto ">
        <BeatLoader color="#1984E5" size={30} />
      </div>
    );
  }
  return (
    <div>
      <Navbar />
      <div className="flex items-start justify-start w-full ">
        <SideBar />
        <div>
          <PageHeader
            searchFields={<SearchInput />}
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
          <ViewCompanyTable
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
