"use client";
import React, { useState } from "react";
import "tailwindcss/tailwind.css";
import Image from "next/image";
import backIconGreen from "/public/Back-icon-green.svg";
import { Pagination } from "antd";
import TableDropDown from "./TableDropDown";
import { useLocale, useTranslations } from "next-intl";
import styles from "./NewTable.css";
import TableToggle from "../../TableToggle";
const TableX = ({
  dropdownTable,
  loading,
  handlePageChange,
  currentTableData,
  currentPage,
  totalItems,
  pageSize,
  filteredData,
}) => {
  const j = useTranslations("AddJob");
  const t = useTranslations("JobsTable");
  const a = useTranslations("Applicant");
  const locale = useLocale();
  const [expandedRows, setExpandedRows] = useState([]);
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
  const handleCheckboxChange = (e) => {
    setIsCheckboxChecked(e.target.checked);
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
  const toggleRow = (key) => {
    setExpandedRows((prev) =>
      prev.includes(key) ? prev.filter((id) => id !== key) : [...prev, key]
    );
  };

  return (
    <div className={`p-4 w-full my-5 responsive font-cairo bg-white px-10`}>
      <table className={`w-full border-separate border-spacing-y-3`}>
        <thead className="border-2">
          <tr
            className={`border-2 ${
              locale === "ar" ? "text-right" : "text-left"
            }`}
          >
            <th
              className={`${dropdownTable} ${
                currentTableData.length === 0 ? "hidden" : "visible"
              }`}
            ></th>
            <th className="font-cairo text-base">أسم الشركة</th>
            <th className="font-cairo text-base">{j("jobTitle")}</th>
            <th className="font-cairo text-base">{t("createDate")}</th>
            <th className="font-cairo text-base">{t("endDate")}</th>
            <th className="font-cairo text-base">{j("City")}</th>
            <th className="font-cairo text-base">{t("numberCandidates")}</th>
            <th className="font-cairo text-base">{t("numberInterview")}</th>
            <th className="font-cairo text-base">تفعيل</th>
            <th className="font-cairo text-base">{t("Action")}</th>
          </tr>
        </thead>
        <tbody>
          {currentTableData?.length === 0 ? (
            <div className="text-center py-10 text-gray-500">
              <p>{locale === "ar" ? "لا يوجد بيانات" : "No data available"}</p>
            </div>
          ) : (
            currentTableData?.map((row) => (
              <React.Fragment key={row.id}>
                <tr className="border h-[52px]">
                  <td
                    className={`p-1 border ${dropdownTable} cursor-pointer text-center align-middle ${
                      locale === "ar"
                        ? "border-l-0 rounded-r-lg"
                        : "border-r-0 rounded-l-lg"
                    }`}
                    onClick={() => toggleRow(row.id)}
                  >
                    {expandedRows.includes(row.id) ? (
                      <Image
                        src={backIconGreen}
                        width={25}
                        height={10}
                        alt="back-icon"
                        className="rotate-180 mx-2"
                      />
                    ) : (
                      <Image
                        src={backIconGreen}
                        width={25}
                        height={10}
                        alt="back-icon"
                        className="mx-2"
                      />
                    )}
                  </td>
                  <td className="py-2 px-4 text-darkGray font-semibold font-cairo border border-l-0">
                    {row.company_name}
                  </td>
                  <td
                    className={`py-2 px-4 text-darkGray font-semibold font-cairo flex items-center justify-center gap-2 border  h-[52px]   }`}
                  >
                    {row.title}
                  </td>
                  <td className="py-2 px-4 text-darkGray font-semibold font-cairo border border-l-0">
                    {row.publish_date
                      ? row.publish_date.match(/^\d{4}-\d{2}-\d{2}/)[0]
                      : "N/A"}
                  </td>
                  <td className="py-2 px-4 text-darkGray font-semibold font-cairo border border-l-0">
                    {row.end_date
                      ? row.end_date.match(/^\d{4}-\d{2}-\d{2}/)[0]
                      : "N/A"}
                  </td>
                  <td className="py-2 px-4 text-darkGray font-semibold font-cairo border border-l-0">
                    {row.location[0]?.city || "null"}
                  </td>
                  <td className="py-2 px-4 text-darkGray font-semibold font-cairo border border-l-0">
                    {row.applicatns}
                  </td>
                  <td className="py-2 px-4 text-darkGray font-semibold font-cairo border border-l-0">
                    {row.applicatns_for_interview}
                  </td>
                  <TableToggle   status={row.status} />
                  <TableDropDown
                    id={row.id}
                    title={row.title}
                    status={row.status}
                  />
                </tr>
                {expandedRows.includes(row.id) && (
                  <tr className={`${styles.expandedTable} rounded-lg w-full`}>
                    <td colSpan="10" className="rounded-lg mt-[-100px] w-full">
                      <table
                        className={`"w-full  bg-lightGray table-edit mt-[-12px] border-lg"${
                          locale == "ar" ? "text-right" : "text-left"
                        }`}
                      >
                        <tbody>
                          <tr className="font-bold">
                            <td className="pt-8 px-4">أسم الشركه</td>
                            <td className="pt-8 px-4">{j("jobTitle")}</td>
                            <td className="pt-8 px-4">{a("Speciality")}</td>
                            <td className="pt-8 px-4">{t("createDate")}</td>
                            <td className="pt-8 px-4">{t("endDate")}</td>

                            <td className="pt-8 px-4">{a("jobLocation")}</td>
                          </tr>
                          {/* Filter data to only show the matched id */}
                          {currentTableData
                            .filter((subRow) => subRow.id === row.id)
                            .map((subRow) => (
                              <tr key={subRow.id} className="">
                                <td className="px-4 py-5 text-gray-500">
                                  {subRow.company_name}
                                </td>
                                <td className="px-4 py-5 text-gray-500">
                                  {subRow.title}
                                </td>

                                <td className="px-4 py-5 text-gray-500">
                                  Missing!!
                                </td>
                                <td className="px-4 py-5 text-gray-500">
                                  {subRow.publish_date
                                    ? subRow.publish_date.match(
                                        /^\d{4}-\d{2}-\d{2}/
                                      )[0]
                                    : "N/A"}
                                </td>
                                <td className="px-4 py-5 text-gray-500">
                                  {subRow.end_date
                                    ? subRow.end_date.match(
                                        /^\d{4}-\d{2}-\d{2}/
                                      )[0]
                                    : "N/A"}
                                </td>
                                <td className="px-4 py-5 text-gray-500">
                                  {subRow.location[0].city}
                                </td>
                              </tr>
                            ))}
                          <tr className="font-bold w-full">
                            <td className="pt-8 px-4">
                              {t("applicantNumber")}
                            </td>
                            <td className="pt-8 px-4">{t("applicant")}</td>
                            <td className="pt-8 px-4">{j("language")}</td>

                            <td className="pt-8 px-4">{t("plusActive")}</td>
                            <td className="pt-8 px-4">{t("adminActive")}</td>
                            <td className="pt-8 px-4">{j("jobtype")}</td>
                            <td className="pt-8 px-4">
                              {expandedTableData.action}
                            </td>
                          </tr>
                          {currentTableData
                            .filter((subRow) => subRow.id === row.id)
                            .map((subRow) => (
                              <tr key={subRow.id} className="">
                                <td className="px-4 py-5 text-gray-500">
                                  Missing!!!!
                                </td>
                                <td className="px-4 py-5 text-gray-500">
                                  {subRow.candidate_numbers}
                                </td>
                                <td className="px-4 py-5 text-gray-500">
                                  {subRow.location &&
                                    subRow.location.map(
                                      (location, index) => (
                                        <span key={index}>
                                          {location.city}
                                          {index <
                                            subRow.location.length -
                                              1 && ", "}
                                        </span>
                                      )
                                    )}
                                </td>

                         
                              
                                {subRow.admin_active === "1" ? (
                                  <td className="px-4 py-5 ">
                                    {" "}
                                    <input
                                      className="custom-checkbox"
                                      type="checkbox"
                                      onChange={handleCheckboxChange}
                                      checked={true}
                                    />
                                  </td>
                                ) : (
                                  <td className="px-4 py-5 ">
                                    {" "}
                                    <input
                                      className="custom-checkbox"
                                      type="checkbox"
                                      onChange={handleCheckboxChange}
                                      checked={false}
                                    />
                                  </td>
                                )}

                                {subRow.status === "active" ||
                                subRow.status === "hidden" ||
                                subRow.status === "visible" ? (
                                  <td className="px-4 py-5 ">
                                    {" "}
                                    <input
                                      className="custom-checkbox"
                                      type="checkbox"
                                      onChange={handleCheckboxChange}
                                      checked={true}
                                    />
                                  </td>
                                ) : (
                                  <td className="px-4 py-5 ">
                                    {" "}
                                    <input
                                      className="custom-checkbox"
                                      type="checkbox"
                                      onChange={handleCheckboxChange}
                                      checked={false}
                                    />
                                  </td>
                                )}
                                  <td className="px-4 py-5 text-gray-500">
                                  Missing!!!
                                </td>
                              </tr>
                              
                            ))}
                             
                        </tbody>
                      </table>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))
          )}
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

export default TableX;
