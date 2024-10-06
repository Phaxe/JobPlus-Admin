"use client";
import { useState } from "react";
import "tailwindcss/tailwind.css";
import styles from "./NewTable.css";
import Image from "next/image";
import backIconGreen from "/public/Back-icon-green.svg";
import { Pagination } from "antd";
import { useLocale, useTranslations } from "next-intl";
import TableDropDown from "./TableDropDown";
import TableToggle from "./TableToggle";
const ViewJobsTable = ({ dropdownTable, dropDownData, currentTableData }) => {
  const t = useTranslations("JobsTable");
  const c = useTranslations("Candidates");
  const locale = useLocale();
  const [expandedRows, setExpandedRows] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const toggleRow = (key) => {
    setExpandedRows((prev) =>
      prev.includes(key) ? prev.filter((id) => id !== key) : [...prev, key]
    );
  };
  console.log(currentTableData, "XXXXXXXXXXXXXXXXXXXX");

  const expandedTableData = [
    {
      key: "1",
      detail: "عرض تفاصيل الوظيفة",
      applicants: "عرض المتقدمين",
      status: "إيقاف",
      enabled: true,
      action: "حذف",
    },
  ];

  return (
    <div className={`p-4 w-full  my-5 responsive font-cairo bg-white  px-10`}>
      <table className={` w-full  border-separate border-spacing-y-3  `}>
        <thead className=" border-2 ">
          <tr
            className={`border-2 ${
              locale === "ar" ? "text-right" : "text-left"
            }  `}
          >
            <th className={dropdownTable}></th>
            <th className="font-cairo text-base">اسم الشركة</th>
            <th className="font-cairo text-base">اسم المدير</th>
            <th className="font-cairo text-base">البريد الالكتروني</th>
            <th className="font-cairo text-base">رقم الجوال</th>
            <th className="font-cairo text-base">عدد الوظائف</th>
            <th className="font-cairo text-base">تفعيل</th>
            <th className="font-cairo text-base">{t("Action")}</th>
          </tr>
        </thead>
        <tbody className="border border-red-400">
          {currentTableData.map((row) => (
            <>
              <tr key={row.id} className="border h-[52px]">
                <td
                  className={`p-1 border ${dropdownTable} cursor-pointer text-center align-middle ${
                    locale === "ar"
                      ? "border-l-0 rounded-r-lg"
                      : "border-r-0 rounded-l-lg"
                  }`}
                  onClick={() => toggleRow(row.id)}
                >
                  {expandedRows.includes(row.id) ? (
                    <div className="inline-block">
                      <Image
                        src={backIconGreen}
                        width={25}
                        height={10}
                        alt="back-icon "
                        className="rotate-180"
                      />
                    </div>
                  ) : (
                    <div className="inline-block">
                      <Image
                        src={backIconGreen}
                        width={25}
                        height={10}
                        alt="back-icon "
                      />
                    </div>
                  )}
                </td>
                <td
                  className={`py-2 px-4 text-darkGray font-semibold font-cairo flex items-center justify-center gap-2 border  h-[52px]   }`}
                >
                  {row.name}
                </td>
                <td className="py-2 px-4 text-darkGray font-semibold font-cairo border border-r-0 border-l-0">
                  {row.representative_name}
                </td>
                <td className="py-2 px-4 text-darkGray font-semibold font-cairo border border-l-0">
                  {row.email}
                </td>

                <td className="py-2 px-4 text-darkGray font-semibold font-cairo border border-l-0" style={locale === "ar" ? { direction: 'ltr', unicodeBidi: 'bidi-override' } : {}}>
                  {row.phone}
                </td>
                <td className="py-2 px-4 text-darkGray font-semibold font-cairo border border-l-0">
                  {row.jobs_count}
                </td>

                <TableToggle />
                <TableDropDown dropDownData={dropDownData} />
              </tr>
              {expandedRows.includes(row.id) && (
                <>
                  <tr className={`${styles.expandedTable}  rounded-lg  w-full`}>
                    <td colSpan="8" className="rounded-lg mt-[-100px]   w-full">
                      <table className="w-full text-right bg-lightGray table-edit  mt-[-12px] border-lg  ">
                        <tbody>
                          <tr className="font-bold  ">
                            <td className="pt-8 px-4">المسمى الوظيفي</td>
                            <td className="pt-8 px-4">تاريخ التسجيل </td>
                            <td className="pt-8 px-4">رقم السجل التجاري</td>
                            <td className="pt-8 px-4">الحالة</td>
                            <td className="pt-8 px-4">عدد المتقدمين</td>
                          </tr>
                          {currentTableData
                            .filter((subRow) => subRow.id === row.id)
                            .map((subRow) => (
                              <tr key={subRow.id} className="">
                                <td className="px-4 py-5 text-gray-500">
                                  صورة الشركة{" "}
                                </td>
                                <td className="px-4 py-5 text-gray-500">
                                  {subRow.created_at
                                    ? subRow.created_at.match(
                                        /^\d{4}-\d{2}-\d{2}/
                                      )[0]
                                    : "N/A"}
                                </td>
                                <td className="px-4 py-5 text-gray-500">
                                  {subRow.registration_no || "null"}
                                </td>
                                <td className="px-4 py-5 text-gray-500">
                                  {subRow.status}
                                </td>
                                <td className="px-4 py-5">
                                  {subRow.jobs_count}
                                </td>
                              </tr>
                            ))}
                          <tr className="font-bold w-full">
                            <td className="pt-8 px-4">اسم الشركة</td>
                            <td className="pt-8 px-4">اسم المدير</td>
                            <td className="pt-8 px-4">البريد الالكتروني</td>
                            <td className="pt-8 px-4">رقم الجوال</td>
                            <td className="pt-8 px-4">عدد الوظائف</td>
                            <td className="pt-8 px-4">
                              {expandedTableData.action}
                            </td>
                          </tr>
                          {currentTableData
                            .filter((subRow) => subRow.id === row.id)
                            .map((subRow) => (
                              <tr key={subRow.id} className="">
                                <td className="px-4 pb-8 text-gray-500">
                                  {" "}
                                  {subRow.name}
                                </td>
                                <td className="px-4 pb-8 text-gray-500">
                                  {subRow.representative_name}
                                </td>
                                <td className="px-4 pb-8 text-gray-500">
                                  {subRow.email}
                                </td>
                                <td
                                  className="px-4 pb-8 text-gray-500"
                                  style={
                                    locale === "ar"
                                      ? {
                                          direction: "ltr",
                                          unicodeBidi: "bidi-override",
                                        }
                                      : {}
                                  }
                                >
                                  {subRow.phone}
                                </td>
                                <td className="p-2 text-gray-500">
                                  {subRow.action || "null"}{" "}
                                </td>
                              </tr>
                            ))}
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </>
              )}
            </>
          ))}
        </tbody>
      </table>
      <div className="mt-4 flex justify-end">
        <Pagination
          className={`${locale === "ar" ? "rtl-pagination" : "ltr-pagination"}`}
        />
      </div>
    </div>
  );
};

export default ViewJobsTable;
