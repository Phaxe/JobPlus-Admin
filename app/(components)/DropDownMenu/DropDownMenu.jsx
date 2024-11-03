"use client";
import React, { useEffect, useState } from "react";
import { Menu, Dropdown, Button } from "antd";
import Image from "next/image";
import Frame from "/public/Frame2.png";
import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname } from "@/Navigation";
import Expanded from "../ViewAllUsersC/AllUsersTable/ExpandedDropdown";
import useModal from "@/app/(hooks)/ModalToggle/useModalToggle";
import SaveFilled from "/public/saveFill.svg";
import SaveClear from "/public/saveClear.svg";
import GrayClose from "/public/grayClose.svg";
import ApplicantModal from "../Applicants/ApplicantModal/ApplicantModal";
import ApplicantHeader from "../Applicants/ApplicantHeader/ApplicantHeader";
import AcceptModal from "../Alerts/AcceptAlert/AcceptModal";
import RejectModal from "../Alerts/RejectAlert/RejectModal";
import ComplaintModal from "../Alerts/ComplaintAlert/ComplainAlert";
import { useDispatch, useSelector } from "react-redux";
import { fetchApplicantId } from "@/app/ReduxStore/Slices/applicantByIdSlice";

const UsersDropDown = ({completion,name,userMenuItems, applicantModal,applicantToggle,id}) => {
const locale = useLocale();
const a = useTranslations("Applicant")
const [visible, setVisible] = useState(false);
const [applicantStatus, setApplicantStatus] = useState("")
const dispatch = useDispatch()
  const {
    isModalOpen: complainToggle,
    toggleModal: complainModal
  } = useModal();
  const {
    isModalOpen: rejectToggle,
    toggleModal: rejectModal
  } = useModal();
  const {
    isModalOpen: acceptToggle,
    toggleModal: acceptModal
  } = useModal();
  const { token } = useSelector((state) => state.auth);
  const { data, loading, error } = useSelector((state) => state.applicantsById);
  const appData = data?.data
  const handleApplicantModal = (id) => {
if(token){
  dispatch(fetchApplicantId({  APPLICATION_ID: id ,locale}));
  setTimeout(() => {
    applicantModal();
  }, 1000);
}
  };
  
  console.log(appData);
  
  const handleClose = () =>{
    setVisible(false);
  }
  const userMenu = (
    <Menu className="font-cairo">
      {userMenuItems.slice(0, 2).map((item) => (
        <Menu.Item
        key={item.key}
        className="font-cairo"
        onClick={(e,key) => {
            
          
            if(item.key === 1){
              handleApplicantModal(id)
            } // Call the item's onClick handler if it exists
          }}
      >
          <a href={item.href}>
            <div className="border-b border-gray-100 font-cairo">
            <span
                className="text-sm py-4 font-cairo"
                style={{
                  color: item.color,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <span className="px-2">{item.icon}</span>
                {item.text}
              </span>
            </div>
          </a>
        </Menu.Item>
      ))}

      <Expanded onChange={(e) => e.event.target} shown={"hidden"}/>

      {userMenuItems.slice(2).map((item) => (
       <Menu.Item
       key={item.key}
       className="font-cairo"
       onClick={() => {
        
        item.onClick && item.onClick(); // Call the item's onClick handler if it exists
      }}
     >
          <a href={item.href}>
            <div className="border-b border-gray-100 font-cairo">
              <span
                className="text-sm py-4 font-cairo"
                style={{
                  color: item.color,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <span className="px-2">{item.icon}</span>
                {item.text}
              </span>
            </div>
          </a>
        </Menu.Item>
      ))}
    </Menu>
  );

  const dropdownButton = (
    <Dropdown
      overlay={userMenu}
      trigger={["click"]}
      open={visible}
      onOpenChange={(vis) => setVisible(vis)}
      style={{ border: "2px", marginLeft: "10px" }}
    >
      <Button
        style={{
          border: "none",
          color: "black",
          fontSize: "18px",
          fontWeight: "600",
          display: "flex",
          alignItems: "center",
          boxShadow: "none",
        }}
      >
        <Image
          alt="actions-icon"
          src={Frame}
          width={4}
          height={5}
          className="object-cover"
        />
      </Button>
    </Dropdown>
  );

  return (
    <>
      <td
        className={`py-2 px-4 text-darkGray font-semibold font-cairo border ${
          locale === "ar" ? "rounded-l-lg" : "rounded-r-lg"
        }`}
      >
        {dropdownButton}
      </td>
      {applicantToggle && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
         <div className="bg-white p-8 rounded shadow-lg relative h-[95%]  overflow-auto">
            <button
              onClick={applicantModal}
              className={` ${
                locale === "ar" ? "absolute top-10 left-4 text-gray-500 hover:text-gray-700" : "absolute top-10 right-4 text-gray-500 hover:text-gray-700"
              }`}
            >
        
              <Image
                src={GrayClose}
                width={25}
                height={25}
                alt="border"
                className=""
              />
            </button>
            <div className="">
              <ApplicantHeader
              name={name}
              onClick={acceptModal}
              modalReject={rejectModal}
              appData={appData}
    
              />
              <ApplicantModal appData={appData} />
            </div>
          </div>
        </div>
      )}
      {complainToggle && (<ComplaintModal onClose={complainModal} visible={complainModal} /> )}
      {acceptToggle && <AcceptModal visible={acceptModal} onClose={acceptModal}/>}
      {rejectToggle && <RejectModal visible={rejectModal} onClose={rejectModal}/>}

    </>
  );
};

export default UsersDropDown;