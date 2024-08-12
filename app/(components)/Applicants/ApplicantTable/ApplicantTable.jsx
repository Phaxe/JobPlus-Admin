"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import backIconGreen from "/public/Back-icon-green.svg";
import { Pagination } from 'antd';
import ApplicantDropDown from "../ApplicantDropDown/ApplicantDropDown";
import { useLocale, useTranslations } from "next-intl";
import { useDispatch, useSelector } from 'react-redux';
import { fetchApplicants } from "@/app/ReduxStore/Slices/applicantSlice";

const CandidateTable = ({ dropdownTable, dropDownData }) => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.applicants);
  const t = useTranslations("JobsTable");
  const c = useTranslations("Candidates");
  const locale = useLocale();
  const [expandedRows, setExpandedRows] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const { token } = useSelector((state) => state.auth);
console.log(data);
  useEffect(() => {
    if (token) {
      dispatch(fetchApplicants());
    }
  }, [dispatch, token]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  // Destructure the nested data
  const { data: applicantsData = [], pagination } = data;

  // Pagination state
  const pageSize = pagination?.perPage || 10;
  const totalItems = pagination?.total || 0;

  // Slice data for current page
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, applicantsData.length);
  const currentTableData = applicantsData.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className={`p-4 my-5 responsive font-cairo bg-white px-10`}>
      <table className={` w-full border-separate border-spacing-y-3`}>
        <thead className="border-2">
          <tr className={`border-2 ${locale === "ar" ? "text-right" : "text-left"}`}>
            <th className={dropdownTable}></th>
            <th className="font-cairo px-4 text-base">{c("Job")}</th>
            <th className="font-cairo px-4 text-base">{c("cnandidateName")}</th>
            <th className="font-cairo px-4 text-base">{c("Acceptance")}</th>
            <th className="font-cairo px-4 text-base">{c("expYears")}</th>
            <th className="font-cairo px-4 text-base">{c("applicationDate")}</th>
            <th className="font-cairo px-4 text-base">{c("Status")}</th>
            <th className="font-cairo px-4 text-base">{t("Action")}</th>
          </tr>
        </thead>
        <tbody>
          {currentTableData.map((row) => (
            <tr key={row.applicant_id} className="border text-start h-[52px]">
              <td
                className={`p-1 border ${dropdownTable} cursor-pointer text-center align-middle ${locale === "ar" ? "border-l-0 rounded-r-lg" : "border-r-0 rounded-l-lg"}`}
                onClick={() => toggleRow(row.applicant_id)}
              >
                {expandedRows.includes(row.applicant_id) ? (
                  <div className="inline-block">
                    <Image src={backIconGreen} width={25} height={10} alt="back-icon " className="rotate-180" />
                  </div>
                ) : (
                  <div className="inline-block">
                    <Image src={backIconGreen} width={25} height={10} alt="back-icon " />
                  </div>
                )}
              </td>
              <td className={`py-2 px-4 text-darkGray text-start font-semibold font-cairo gap-2 border h-[52px] ${locale === "ar" ? "rounded-r-lg" : "rounded-l-lg"}`}>
                {row.job_title}
              </td>
              <td className={`py-2 px-4 text-darkGray text-start font-semibold font-cairo border ${locale === "ar" ? "border-r-0 border-l-0" : "border-l-0"}`}>
                {row.applicant_name}
              </td>
              <td className="py-2 px-4 text-darkGray font-semibold font-cairo border border-l-0">
                {row.compatibility_degree}%
              </td>
              <td className="py-2 px-4 text-darkGray font-semibold font-cairo border border-l-0">
                {row.number_of_experiences}
              </td>
              <td className="py-2 px-4 text-darkGray font-semibold font-cairo border border-l-0">
                {new Date(row.created_at).toLocaleDateString()}
              </td>
              <td className="py-2 px-4 font-semibold font-cairo border border-l-0 text-Homeworld-600">
                {row.status}
              </td>
              <ApplicantDropDown dropDownData={dropDownData} />
            </tr>
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

export default CandidateTable;

