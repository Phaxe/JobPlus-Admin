"use client";
import { useState } from "react";
import "tailwindcss/tailwind.css";
import styles from "./NewTable.css";
import Image from "next/image";
import backIconGreen from "/public/Back-icon-green.svg";
import { Pagination } from 'antd';
import SavedApplicantDrop from "../SavedApplicantDrop/SavedApplicantDrop"
import { useLocale, useTranslations } from "next-intl";

const SavedApplicant = ({dropdownTable,dropDownData}) => {
  const a  = useTranslations("Applicant")
  const t = useTranslations("JobsTable");
  const c = useTranslations("Candidates")

  const locale = useLocale()
  const [expandedRows, setExpandedRows] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const toggleRow = (key) => {
    setExpandedRows((prev) =>
      prev.includes(key) ? prev.filter((id) => id !== key) : [...prev, key]
    );
  };
 
  const mainTableData = [
    {
      key: "1",
      jobTitle: "محاسب",
      createdDate: "هايل ال ثابت",
      city: "محاسبه",
      applicants: "3 سنوات",
      candidates: "12/06/2023",
    },
    {
      key: "2",
      jobTitle: "محاسب",
      createdDate: "هايل ال ثابت",
      endDate: "80%",
      city: "محاسبه",
      applicants: "3 سنوات",
      candidates: "12/06/2023",
    },
    {
      key: "2",
      jobTitle: "محاسب",
      createdDate: "هايل ال ثابت",
      endDate: "80%",
      city: "محاسبه",
      applicants: "3 سنوات",
      candidates: "12/06/2023",
    },
    {
      key: "2",
      jobTitle: "محاسب",
      createdDate: "هايل ال ثابت",
      endDate: "80%",
      city: "محاسبه",
      applicants: "3 سنوات",
      candidates: "12/06/2023",
    },
    {
      key: "2",
      jobTitle: "محاسب",
      createdDate: "هايل ال ثابت",
      endDate: "80%",
      city: "محاسبه",
      applicants: "3 سنوات",
      candidates: "12/06/2023",
    },
    {
      key: "2",
      jobTitle: "محاسب",
      createdDate: "هايل ال ثابت",
      endDate: "80%",
      city: "محاسبه",
      applicants: "3 سنوات",
      candidates: "12/06/2023",
    },
    {
      key: "2",
      jobTitle: "محاسب",
      createdDate: "هايل ال ثابت",
      endDate: "80%",
      city: "محاسبه",
      applicants: "3 سنوات",
      candidates: "12/06/2023",
    },
    // Add more rows as needed
  ];
   // Pagination settings
   const pageSize = 5; // Number of rows per page
   const totalItems = mainTableData.length; // Total number of items
 
   // Calculate pagination range
   const startIndex = (currentPage - 1) * pageSize;
   const endIndex = Math.min(startIndex + pageSize, totalItems);
 
   const currentTableData = mainTableData.slice(startIndex, endIndex);
 
   // Handle page change
   const handlePageChange = (page) => {
     setCurrentPage(page);
   };



  return (
    <div className={`p-4  my-5 responsive font-cairo bg-white  px-10`}>
      <table
        className={`${styles.mainTable} w-full  border-separate border-spacing-y-3 `}
      >
        <thead className=" border-2 ">
          <tr className={`border-2 ${locale === "ar" ? "text-right" : "text-left"}  `}>
            <th className={dropdownTable}></th>
            <th className="font-cairo px-4 text-base">{c("cnandidateName")}</th>
            <th className="font-cairo px-4 text-base">{a("Speciality")}</th>
            <th className="font-cairo px-4 text-base">{c("expYears")}</th>
            <th className="font-cairo px-4 text-base">{c("applicationDate")}</th>
            <th className="font-cairo px-4 text-base">{t("Action")}</th>
          </tr>
          </thead>
    <tbody >
      {mainTableData.map((row) => (
        <>
          <tr key={row.key} className="border text-start h-[52px]">
            <td
              className={`p-1 border ${dropdownTable} cursor-pointer text-center align-middle ${locale === "ar" ? "border-l-0 rounded-r-lg" : "border-r-0 rounded-l-lg"}`}
              onClick={() => toggleRow(row.key)}
            >
              {expandedRows.includes(row.key) ? (
                <div className="inline-block">
                  <Image src={backIconGreen} width={25} height={10} alt="back-icon " className="rotate-180" />
                </div>
              ) : (
                <div className="inline-block">
                <Image src={backIconGreen} width={25} height={10} alt="back-icon " />
                </div>
              )}
            </td>
       
            <td className={`py-2 px-4 text-darkGray font-semibold font-cairo border ${locale === "ar" ? "border-l-0 rounded-r-lg" : "border-r-1 rounded-l-lg"}`}>
              {row.createdDate}
            </td>
         
            <td className="py-2 px-4 text-darkGray font-semibold font-cairo border border-l-0">
              {row.city}
            </td>
            <td className="py-2 px-4 text-darkGray font-semibold font-cairo border border-l-0">
              {row.applicants}
            </td>
            <td className="py-2 px-4 text-darkGray font-semibold font-cairo border border-l-0">
              {row.candidates}
            </td>
            <SavedApplicantDrop dropDownData={dropDownData}/>
          </tr>
      
        </>
      ))}
    </tbody>
      </table>
      <div className="mt-4 flex justify-end">
        <Pagination
         className={`${locale === "ar" ? "rtl-pagination" : "ltr-pagination"}`}
          current={currentPage}
          pageSize={pageSize}
          total={totalItems}
          onChange={handlePageChange}
          showSizeChanger={false}
        />
      </div>
    </div>
  );
};

export default SavedApplicant;
