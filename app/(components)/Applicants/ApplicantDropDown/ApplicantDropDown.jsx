"use client";
import React, { useState } from "react";
import { Menu, Dropdown, Button } from "antd";
import Image from "next/image";
import Frame from "/public/Frame2.png";
import { useLocale, useTranslations } from "next-intl";
import ApplicantHeader from "../ApplicantHeader/ApplicantHeader";
import ApplicantModal from "../ApplicantModal/ApplicantModal";
import GrayClose from "/public/grayClose.svg";
import Expanded from "./ExpandedDropdown";
import SaveFilled from "/public/saveFill.svg";
import SaveClear from "/public/saveClear.svg";
import ComplaintModal from "../../Alerts/ComplaintAlert/ComplainAlert";
import AcceptModal from "../../Alerts/AcceptAlert/AcceptModal";
import RejectModal from "../../Alerts/RejectAlert/RejectModal";
import useModal from "@/app/(hooks)/ModalToggle/useModalToggle";


const ApplicantDropDown = ({ dropDownData }) => {
  const locale = useLocale();
  const a = useTranslations("Applicant")
  const [visible, setVisible] = useState(false);
  const {
    isModalOpen: applicantToggle,
    toggleModal: applicantModal
  } = useModal();
  const {
    isModalOpen: saveIconToggle,
    toggleModal: saveIconSwitch
  } = useModal();
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

  const cancelDefault = (e) => {
    stopPropagation();
  };

  const userMenu = (
    <Menu className="font-cairo">
      {dropDownData.slice(0, 2).map((item) => (
        <Menu.Item
        key={item.key}
        className="font-cairo"
        onMouseDown={(e) => {
          if (item.key === 2) {
            saveIconSwitch();
            e.stopPropagation(); // Prevent the dropdown from closing
          }
        }}
        onClick={(e) => {
          if (item.key === 1) {
            applicantModal();
          }
          if (item.key === 2) {
            cancelDefault(e);
          }
          if (item.key === 3) {
            complainModal();
          }
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
                <span className="px-2">
                  {item.key === 2 ? (
                    saveIconToggle ? (
                      <Image
                        src={SaveFilled}
                        width={12}
                        height={10}
                        alt="save-filled"
                      />
                    ) : (
                      <Image
                        src={SaveClear}
                        width={12}
                        height={10}
                        alt="save-clear"
                      />
                    )
                  ) : (
                    item.icon
                  )}
                </span>
                {item.text}
              </span>
            </div>
          </a>
        </Menu.Item>
      ))}

      <Expanded onChange={(e) => e.event.target} />

      {dropDownData.slice(2).map((item) => (
       <Menu.Item
       key={item.key}
       className="font-cairo"
       onMouseDown={(e) => {
         if (item.key === 2) {
           saveIconSwitch();
           e.stopPropagation(); // Prevent the dropdown from closing
         }
       }}
       onClick={(e) => {
         if (item.key === 1) {
           applicantModal();
         }
         if (item.key === 2) {
           cancelDefault(e);
         }
         if (item.key === 3) {
           complainModal();
         }
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
              onClick={acceptModal}
              modalReject={rejectModal}
                text1={a("Accept")}
                text2={a("Reject")}
                text3={a("reschedule")}
              />
              <ApplicantModal />
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

export default ApplicantDropDown;

// "use client";
// import React, { useState } from "react";
// import { Menu, Dropdown, Button } from "antd";
// import Image from "next/image";
// import Frame from "/public/Frame2.png";
// import { useLocale, useTranslations } from "next-intl";
// import Expanded from "./ExpandedDropdown";
// import SaveFilled from "/public/saveFill.svg";
// import SaveClear from "/public/saveClear.svg";
// import useModal from "@/app/(hooks)/ModalToggle/useModalToggle";
// import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';

// const ApplicantDropDown = ({ dropDownData }) => {
//   const locale = useLocale();
//   const [visible, setVisible] = useState(false);
//   const items = [
//     {
//       key: 'sub4',
//       label: 'Navigation Three',
//       icon: <SettingOutlined />,
//       children: [
//         {
//           key: '9',
//           label: 'Option 9',
//         },
//         {
//           key: '10',
//           label: 'Option 10',
//         },
//         {
//           key: '11',
//           label: 'Option 11',
//         },
//         {
//           key: '12',
//           label: 'Option 12',
//         },
//       ],
//     },

//   ];
 
//   const {
//     isModalOpen: saveIconToggle,
//     toggleModal: saveIconSwitch
//   } = useModal();



//   const cancelDefault = (e) => {
//     stopPropagation();
//   };

//   const userMenu = (
//     // <Menu className="font-cairo ">
//     //   {dropDownData.slice(0, 2).map((item) => (
//     //     <Menu.Item
//     //     key={item.key}
//     //     className="font-cairo"
 
//     //   >
//     //       <a href={item.href}>
//     //         <div className="border-b border-gray-100 font-cairo">
//     //           <span
//     //             className="text-sm py-4 font-cairo"
//     //             style={{
//     //               color: item.color,
//     //               display: "flex",
//     //               alignItems: "center",
//     //             }}
//     //           >
//     //             <span className="px-2">
//     //               {item.key === 2 ? (
//     //                 saveIconToggle ? (
//     //                   <Image
//     //                     src={SaveFilled}
//     //                     width={12}
//     //                     height={10}
//     //                     alt="save-filled"
//     //                   />
//     //                 ) : (
//     //                   <Image
//     //                     src={SaveClear}
//     //                     width={12}
//     //                     height={10}
//     //                     alt="save-clear"
//     //                   />
//     //                 )
//     //               ) : (
//     //                 item.icon
//     //               )}
//     //             </span>
//     //             {item.label}
//     //           </span>
//     //         </div>
//     //       </a>
//     //     </Menu.Item>
//     //   ))}

//     //   {/* <Expanded onChange={(e) => e.event.target} /> */}
 
//     //   {dropDownData.slice(2).map((item) => (
//     //    <Menu.Item
//     //    key={item.key}
//     //    className="font-cairo"
   
//     //  >
//     //       <a href={item.href}>
//     //         <div className="border-b border-gray-100 font-cairo">
//     //           <span
//     //             className="text-sm py-4 font-cairo"
//     //             style={{
//     //               color: item.color,
//     //               display: "flex",
//     //               alignItems: "center",
//     //             }}
//     //           >
//     //             <span className="px-2">{item.icon}</span>
//     //             {item.label}
//     //           </span>
//     //         </div>
//     //       </a>
//     //     </Menu.Item>
//     //   ))}
//     // </Menu>
//          <Menu
//     className="absolute z-50  bg-white border border-gray-200 rounded-lg shadow-lg w-[200px]"
//          defaultSelectedKeys={['1']}
//          defaultOpenKeys={['sub1']}
//          mode="inline"
//          items={dropDownData}
//        />
//   );



//   return (
//     <>
//       <td
//         className={`py-2 px-4 text-darkGray font-semibold font-cairo border ${
//           locale === "ar" ? "rounded-l-lg" : "rounded-r-lg"
//         }`}
//       >
//           <button
//         onClick={() => setVisible(!visible)}
//         className="flex items-center text-black font-semibold text-lg focus:outline-none "
//       >
//         <Image
//           alt="actions-icon"
//           src={Frame}
//           width={4}
//           height={5}
//           className="object-cover"
//         />
//       </button>
//       {visible && (
       
//        <Menu
//        className="absolute z-50  bg-white border border-gray-200 rounded-lg shadow-lg w-[200px]"
//             defaultSelectedKeys={['1']}
//             defaultOpenKeys={['sub1']}
//             mode="inline"
//             items={dropDownData}
//           />
      
       
//       )}
//       </td>
  

//     </>
//   );
// };

// export default ApplicantDropDown;
