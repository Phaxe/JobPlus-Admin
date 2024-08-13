"use client";
import { useState } from "react";
import "tailwindcss/tailwind.css";
import styles from "./NewTable.css";
import Image from "next/image";
import backIconGreen from "/public/Back-icon-green.svg";
import { Pagination } from "antd";
import { useLocale, useTranslations } from "next-intl";
import TableDropDown from "./TableDropDown";
import TableToggle from "./TableToggle"
const ViewJobsTable = ({ dropdownTable, dropDownData }) => {
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

  const mainTableData = [
    {
      key: "1",
      jobTitle: "مدير حسابات",
      createdDate: "20/02/2024",
      endDate: "20/03/2024",
      city: "الرياض",
      applicants: 602,
      candidates: 12,
    },
    {
      key: "2",
      jobTitle: "مدير حسابات",
      createdDate: "20/02/2024",
      endDate: "20/03/2024",
      city: "الرياض",
      applicants: 602,
      candidates: 12,
    },
    {
      key: "2",
      jobTitle: "مدير حسابات",
      createdDate: "20/02/2024",
      endDate: "20/03/2024",
      city: "الرياض",
      applicants: 602,
      candidates: 12,
    },
    {
      key: "2",
      jobTitle: "مدير حسابات",
      createdDate: "20/02/2024",
      endDate: "20/03/2024",
      city: "الرياض",
      applicants: 602,
      candidates: 12,
    },
    {
      key: "2",
      jobTitle: "مدير حسابات",
      createdDate: "20/02/2024",
      endDate: "20/03/2024",
      city: "الرياض",
      applicants: 602,
      candidates: 12,
    },
    {
      key: "2",
      jobTitle: "مدير حسابات",
      createdDate: "20/02/2024",
      endDate: "20/03/2024",
      city: "الرياض",
      applicants: 602,
      candidates: 12,
    },
    {
      key: "2",
      jobTitle: "مدير حسابات",
      createdDate: "20/02/2024",
      endDate: "20/03/2024",
      city: "الرياض",
      applicants: 602,
      candidates: 12,
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
          {mainTableData.map((row) => (
            <>
              <tr key={row.key} className="border h-[52px]">
                <td
                  className={`p-1 border ${dropdownTable} cursor-pointer text-center align-middle ${
                    locale === "ar"
                      ? "border-l-0 rounded-r-lg"
                      : "border-r-0 rounded-l-lg"
                  }`}
                  onClick={() => toggleRow(row.key)}
                >
                  {expandedRows.includes(row.key) ? (
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
                  {row.jobTitle}
                </td>
                <td className="py-2 px-4 text-darkGray font-semibold font-cairo border border-r-0 border-l-0">
                  {row.createdDate}
                </td>
                <td className="py-2 px-4 text-darkGray font-semibold font-cairo border border-l-0">
                  {row.endDate}
                </td>
              
                <td className="py-2 px-4 text-darkGray font-semibold font-cairo border border-l-0">
                  {row.applicants}
                </td>
                <td className="py-2 px-4 text-darkGray font-semibold font-cairo border border-l-0">
                  {row.candidates}
                </td>

               <TableToggle/>
                <TableDropDown dropDownData={dropDownData} />
              </tr>
              {expandedRows.includes(row.key) && (
                <>
                  <tr
                    className={`${styles.expandedTable}  rounded-lg  w-full`}
                  >
                    <td colSpan="8" className="rounded-lg mt-[-100px]   w-full">
                      <table className="w-full text-right bg-lightGray table-edit  mt-[-12px] border-lg  ">
                        <tbody>
                          <tr className="font-bold  ">
                            <td className="pt-8 px-4">المسمى الوظيفي</td>
                            <td className="pt-8 px-4">تاريخ الأنشاء</td>
                            <td className="pt-8 px-4">تاريخ الأنتهاء</td>
                            <td className="pt-8 px-4">المدينه</td>
                            <td className="pt-8 px-4">العدد</td>
                          </tr>
                          {expandedTableData.map((subRow) => (
                            <tr key={subRow.key} className="">
                              <td className="px-4 py-5">{subRow.detail}</td>
                              <td className="px-4 py-5">{subRow.applicants}</td>
                              <td className="px-4 py-5">{subRow.status}</td>
                              <td className="px-4 py-5">
                               الرياض
                              </td>
                              <td className="px-4 py-5">{subRow.action}</td>
                            </tr>
                          ))}
                          <tr className="font-bold w-full">
                            <td className="pt-8 px-4">عدد المتقدمين</td>
                            <td className="pt-8 px-4">لذي الأعاقه</td>
                            <td className="pt-8 px-4">عدد المرشحين</td>
                            <td className="pt-8 px-4">مفعله من جوب بلس</td>
                            <td className="pt-8 px-4">مفعله من</td>
                            <td className="pt-8 px-4">{expandedTableData.action}</td>
                          </tr>
                          {expandedTableData.map((subRow) => (
                            <tr key={subRow.key} className="">
                              <td className="px-4 pb-8">ش7ش</td>
                              <td className="px-4 pb-8">{subRow.applicants}</td>
                              <td className="px-4 pb-8">{subRow.status}</td>
                              <td className="px-4 pb-8">
                                <input
                                  type="checkbox"
                                  checked={subRow.enabled}
                                  readOnly
                                />
                              </td>
                              <td className="p-2">{subRow.action}</td>
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

export default ViewJobsTable;
