"use client";
import { useState } from "react";
import "tailwindcss/tailwind.css";
import styles from "./NewTable.css";
import { Pagination } from 'antd';
import AllUsersDropDown from "./AdminDropDown"
import { useLocale, useTranslations } from "next-intl";
import TableToggle from "./TableToggle";

const AllUsesrsTable = ({dropDownData}) => {
 
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
      endDate: "Haill.d@gmail.com%",
      city: "966538293808",
      applicants: "12/06/2020",
      candidates: "الرياض",
      status:"طلب إعادة جدولة"
    },
    {
      key: "1",
      jobTitle: "محاسب",
      createdDate: "هايل ال ثابت",
      endDate: "Haill.d@gmail.com%",
      city: "966538293808",
      applicants: "12/06/2020",
      candidates: "الرياض",
      status:"طلب إعادة جدولة"
    },
    {
      key: "1",
      jobTitle: "محاسب",
      createdDate: "هايل ال ثابت",
      endDate: "Haill.d@gmail.com%",
      city: "966538293808",
      applicants: "12/06/2020",
      candidates: "الرياض",
      status:"طلب إعادة جدولة"
    },
    {
      key: "1",
      jobTitle: "محاسب",
      createdDate: "هايل ال ثابت",
      endDate: "Haill.d@gmail.com%",
      city: "966538293808",
      applicants: "12/06/2020",
      candidates: "الرياض",
      status:"طلب إعادة جدولة"
    },
    {
      key: "1",
      jobTitle: "محاسب",
      createdDate: "هايل ال ثابت",
      endDate: "Haill.d@gmail.com%",
      city: "966538293808",
      applicants: "12/06/2020",
      candidates: "الرياض",
      status:"طلب إعادة جدولة"
    },
    {
      key: "1",
      jobTitle: "محاسب",
      createdDate: "هايل ال ثابت",
      endDate: "Haill.d@gmail.com%",
      city: "966538293808",
      applicants: "12/06/2020",
      candidates: "الرياض",
      status:"طلب إعادة جدولة"
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
           
            <th className="font-cairo px-4 text-base">اسم مدير النظام</th>
            <th className="font-cairo px-4 text-base">البريد الالكتروني</th>
            <th className="font-cairo px-4 text-base">رقم الجوال</th>
            <th className="font-cairo px-4 text-base">تفعيل</th>
            <th className="font-cairo px-4 text-base">{t("Action")}</th>
          </tr>
          </thead>
    <tbody >
      {mainTableData.map((row) => (
        <>
          <tr key={row.key} className="border text-start h-[52px]">
  
            <td className={`py-2 px-4 text-darkGray  text-start font-semibold font-cairo border  ${locale === "ar" ? " rounded-r-lg" : " rounded-l-lg"}`}>
              {row.createdDate}
            </td>
            <td className="py-2 px-4 text-darkGray font-semibold font-cairo border border-l-0">
              {row.endDate}
            </td>
            <td className="py-2 px-4 text-darkGray font-semibold font-cairo border border-l-0">
              {row.city}
            </td>
          
          <TableToggle/>
            <AllUsersDropDown dropDownData={dropDownData} />
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

export default AllUsesrsTable;