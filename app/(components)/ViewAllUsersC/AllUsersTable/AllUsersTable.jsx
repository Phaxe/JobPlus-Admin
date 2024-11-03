"use client";
import { useState } from "react";
import "tailwindcss/tailwind.css";
import styles from "./NewTable.css";
import { Pagination } from "antd";
// import AllUsersDropDown from "./UsersDropDown";
import DropDownMenu from "../../DropDownMenu/DropDownMenu";
import SaveFilled from "/public/saveFill.svg";
import SaveClear from "/public/saveClear.svg";
import { useLocale, useTranslations } from "next-intl";
import TableToggle from "../../TableToggle";
import { LiaEditSolid } from "react-icons/lia";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { TbBadge } from "react-icons/tb";
import { AiOutlineStop } from "react-icons/ai";
import { HiOutlineTrash } from "react-icons/hi2";
import { ImSwitch } from "react-icons/im";
import { FaRegBell } from "react-icons/fa";
import useModal from "@/app/(hooks)/ModalToggle/useModalToggle";
const AllUsesrsTable = ({
  dropdownTable,
  loading,
  handlePageChange,
  currentTableData,
  currentPage,
  totalItems,
  pageSize,
}) => {
  const t = useTranslations("JobsTable");
  const c = useTranslations("Candidates");

  const g = useTranslations("General");
  const locale = useLocale();
  const { isModalOpen: applicantToggle, toggleModal: applicantModal } =
    useModal();
  const { isModalOpen: saveIconToggle, toggleModal: saveIconSwitch } =
    useModal();
  const { isModalOpen: complainToggle, toggleModal: complainModal } =
    useModal();
  const { isModalOpen: rejectToggle, toggleModal: rejectModal } = useModal();
  const { isModalOpen: acceptToggle, toggleModal: acceptModal } = useModal();
  const userMenuItems = [
    {
      key: 1,
      text: c("showCV"),
      color: "#000",
      icon: <MdOutlineRemoveRedEye size={15} />,
      onClick: applicantModal,
    },
    {
      key: 2,
      text: g("savedApplicant"),
      color: "#FF9900",
      icon: <TbBadge size={19} style={{ transform: "rotate(180deg)" }} />,
      onClick: () => applicantModal(), // Open applicant modal
    },
    {
      key: 3,
      text: g("showAppJobs"),
      color: "#000",
      icon: <MdOutlineRemoveRedEye size={15} />,
      onClick: () => complainModal(), // Open complaint modal
    },
    {
      key: 4,
      text: g("editUserInfo"),
      color: "#1676CD",
      icon: <LiaEditSolid size={15} />,
      onClick: () => complainModal(), // Open complaint modal
    },
    {
      key: 5,
      text: g("sendNotification"),
      color: "#40AC9A",
      icon: <FaRegBell size={15} />,
    },
    {
      key: 6,
      text: g("Delete"),
      color: "#DC5A5A",
      icon: <HiOutlineTrash size={15} />,
      onClick: () => rejectModal(), // Open reject modal
    },
  ];

  return (
    <div className={`p-4  my-5 responsive font-cairo bg-white  px-10`}>
      <table
        className={`${styles.mainTable} w-full  border-separate border-spacing-y-3 `}
      >
        <thead className=" border-2 ">
          <tr
            className={`border-2 ${
              locale === "ar" ? "text-right" : "text-left"
            }  `}
          >
            <th className="font-cairo px-4 text-base">الاسم كامل</th>
            <th className="font-cairo px-4 text-base">رقم الجوال</th>
            <th className="font-cairo px-4 text-base">التخصص</th>
            <th className="font-cairo px-4 text-base">تاريخ التسجيل</th>
            <th className="font-cairo px-4 text-base">
              نسبة اكتمال الملف الشخصي
            </th>
            <th className="font-cairo px-4 text-base">تفعيل</th>
            <th className="font-cairo px-4 text-base">{t("Action")}</th>
          </tr>
        </thead>
        <tbody>
          {currentTableData.map((row) => (
            <>
              <tr key={row.id} className="border text-start h-[52px]">
                <td
                  className={`py-2 px-4 text-darkGray  text-start font-semibold font-cairo  gap-2 border h-[52px] ${
                    locale === "ar" ? " rounded-r-lg" : " rounded-l-lg"
                  }`}
                >
                  {row.full_name}
                </td>
                <td
                  className={`py-2 px-4 text-darkGray  text-start font-semibold font-cairo border  ${
                    locale === "ar" ? " border-r-0 border-l-0" : " border-l-0"
                  }`}
                  style={
                    locale === "ar"
                      ? { direction: "ltr", unicodeBidi: "bidi-override" }
                      : {}
                  }
                >
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

                <TableToggle status={row.is_active} />
                <DropDownMenu
                  completion={row.profile_completion_percentage}
                  name={row.full_name}
                  userMenuItems={userMenuItems}
                  applicantModal={applicantModal}
                  applicantToggle={applicantToggle}
                  id={row.id}
                  
                />
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
