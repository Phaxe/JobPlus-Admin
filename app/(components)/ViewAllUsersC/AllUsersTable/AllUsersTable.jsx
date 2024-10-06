"use client";
import { useState } from "react";
import "tailwindcss/tailwind.css";
import styles from "./NewTable.css";
import { Pagination } from 'antd';
import AllUsersDropDown from "./UsersDropDown"
import { useLocale, useTranslations } from "next-intl";
import TableToggle from "./TableToggle";

const AllUsesrsTable = (
  {
    dropdownTable,
    loading,
    handlePageChange,
    currentTableData,
    currentPage,
    totalItems,
    pageSize,
  
  }
) => {
 
  const t = useTranslations("JobsTable");
  const c = useTranslations("Candidates")

  const g = useTranslations("General");
  const locale = useLocale()








  return (
    <div className={`p-4  my-5 responsive font-cairo bg-white  px-10`}>
      <table
        className={`${styles.mainTable} w-full  border-separate border-spacing-y-3 `}
      >
        <thead className=" border-2 ">
          <tr className={`border-2 ${locale === "ar" ? "text-right" : "text-left"}  `}>
           
            <th className="font-cairo px-4 text-base">الاسم كامل</th>
            <th className="font-cairo px-4 text-base">رقم الجوال</th>
            <th className="font-cairo px-4 text-base">التخصص</th>
            <th className="font-cairo px-4 text-base">تاريخ التسجيل</th>
            <th className="font-cairo px-4 text-base">نسبة اكتمال الملف الشخصي</th>
            <th className="font-cairo px-4 text-base">تفعيل</th>
            <th className="font-cairo px-4 text-base">{t("Action")}</th>
          </tr>
          </thead>
    <tbody >
      {currentTableData.map((row) => (
        <>
          <tr key={row.id} className="border text-start h-[52px]">
  
            <td className={`py-2 px-4 text-darkGray  text-start font-semibold font-cairo  gap-2 border h-[52px] ${locale === "ar" ? " rounded-r-lg" : " rounded-l-lg"}`}>
              {row.full_name}
            </td>
            <td className={`py-2 px-4 text-darkGray  text-start font-semibold font-cairo border  ${locale === "ar" ? " border-r-0 border-l-0" : " border-l-0"}`}>
              {row.phone_number}
            </td>
            <td className="py-2 px-4 text-darkGray font-semibold font-cairo border border-l-0">
              Missing!!!
            </td>
            <td className="py-2 px-4 text-darkGray font-semibold font-cairo border border-l-0">
              {row.creation_date}
            </td>
            <td className="py-2 px-4 text-darkGray font-semibold font-cairo border border-l-0">
              {row.profile_completion_percentage}
            </td>
         
          <TableToggle/>
            <AllUsersDropDown  />
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