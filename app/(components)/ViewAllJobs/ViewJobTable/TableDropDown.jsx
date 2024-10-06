"use client";
import React, { useState } from "react";
import { Menu, Dropdown, Button } from "antd";
import Image from "next/image";
import Frame from "/public/Frame2.png";
import { useLocale, useTranslations } from "next-intl";
import ComplaintModal from "../../Alerts/ComplaintAlert/ComplainAlert";
import AcceptModal from "../../Alerts/AcceptAlert/AcceptModal";
import ConfirmDelete from "./confirmDelete/confirmDelete";
import useModal from "@/app/(hooks)/ModalToggle/useModalToggle";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { ImSwitch } from "react-icons/im";
import { AiOutlineStop } from "react-icons/ai";
import { HiOutlineTrash } from "react-icons/hi2";
import { useDispatch, useSelector } from "react-redux";
import { changeJobStatus, deleteJob, fetchJobs } from "@/app/ReduxStore/Slices/jobsSlice";
// import { useRouter } from "next/navigation";
import { Link,useRouter } from "@/Navigation";
import { redirect } from 'next-intl/navigation';

const ApplicantDropDown = ({ id, title ,status}) => {
  const t = useTranslations("JobsTable");
  const g = useTranslations("General");
  const locale = useLocale();
  const router = useRouter();

  const getDropDownData = (status) => {
    // Define the base dropDownData
    let baseDropDownData = [
      {
        key: 1,
        text: t("jobDetails"),
        // href: `/JobsInformationPage/${id}`,
        color: "#000",
        icon: <MdOutlineRemoveRedEye size={15} />,
      },
      {
        key: 2,
        text: t("Candidates"),
        href: `/CandidatesForJob/${id}`,
        color: "#40AC9A",
        icon: <MdOutlineRemoveRedEye size={15} />,
      },
      {
        key: 3,
        text: g("Stop"),
        color: "#FF9900",
        icon: <ImSwitch size={15} />,
      },
      {
        key: 4,
        text: g("Hide"),
        color: "#9D9D9D",
        icon: <AiOutlineStop size={15} />,
      },
      {
        key: 5,
        text: g("Delete"),
        color: "#DC5A5A",
        icon: <HiOutlineTrash size={15} />,
      },
    ];

    // Modify dropDownData based on status
    if (status === 'active') {
      baseDropDownData = baseDropDownData.map(item => {
        if (item.key === 3) {
          return {
            ...item,
            text: g("Stop"),
            color: "#FF9900",
            icon: <ImSwitch size={15} />,
          };
        }
        return item;
      });
    } else if (status === 'not_active') {
      baseDropDownData = baseDropDownData.map(item => {
        if (item.key === 3) {
          return {
            ...item,
            text: g("active"),
            color: "#FF9900",
            icon: <ImSwitch size={15} />,
          };
        }
        return item;
      });
    }else if(status === "hidden"){
      baseDropDownData = baseDropDownData.map(item => {
        if (item.key === 4) {
          return {
            ...item,
            text:g("Show"),
            color: "#40AC9A",
            icon: <AiOutlineStop size={15} />,
          };
        }
        return item;
      });
    }else if(status === "visible"){
      baseDropDownData = baseDropDownData.map(item => {
        if (item.key === 4) {
          return {
            ...item,
            text:g("Hide"),
            color: "#9D9D9D",
            icon: <AiOutlineStop size={15} />,
          };
        }
        return item;
      });
    }

    return baseDropDownData;
  };

  const dropDownData = getDropDownData(status);

  const [visible, setVisible] = useState(false);

  const { isModalOpen: complainToggle, toggleModal: complainModal } =
    useModal();
  const { isModalOpen: rejectToggle, toggleModal: rejectModal } = useModal();
  const { isModalOpen: acceptToggle, toggleModal: acceptModal } = useModal();

  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const handleDeleteJobById = (id) => {
    dispatch(deleteJob(id));
    dispatch(fetchJobs());
    setTimeout(() => {
    window.location.reload()
    }, 1000);
  };
  const handleNotActiveStatus = () =>{
    dispatch(changeJobStatus({id,status: 'not_active'})).unwrap()
    setTimeout(() => {
      window.location.reload()
    }, 500);
  }
  const handleActiveStatus = () =>{
    dispatch(changeJobStatus({id,status: 'active'})).unwrap()
    setTimeout(() => {
      window.location.reload()
    }, 500);
  }
  const handleHideStatus = () =>{
    dispatch(changeJobStatus({id,status: 'hidden'})).unwrap()
    setTimeout(() => {
      window.location.reload()
    }, 500);
  }
  const handleVisibleStatus = () =>{
    dispatch(changeJobStatus({id,status: 'visible'})).unwrap()
    setTimeout(() => {
      window.location.reload()
    }, 500);
  }

 
  const userMenu = (
    <Menu className="font-cairo">
      {dropDownData.map((item) => (
        <Menu.Item
          key={item.key}
          className="font-cairo"
          onClick={(e) => {
            if (item.key === 1) {
              router.push( `/JobsInformationPage/${id}/ViewJob`);
            }
            if (item.key === 2) {
              router.push( `/CandidatesForJob/${id}`);
            }
            if (item.key === 3) {
              if(status === "active") {
                handleNotActiveStatus()
              }else if(status === "not_active"  || status === "hidden" || status === "visible"){
                handleActiveStatus()
              }
            }
            if (item.key === 4) {
              if(status === "visible") {
                handleHideStatus()
              }else if(status === "hidden"  || status === "active" || status === "not_active"){
                handleVisibleStatus()
              }
            }
            if (item.key === 5) {
              rejectModal();
            }
          }}
        >
          <span className="border-b border-gray-100 font-cairo" >
         
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
          
          </span>
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

      {complainToggle && (
        <ComplaintModal onClose={complainModal} visible={complainModal} />
      )}
      {acceptToggle && (
        <AcceptModal visible={acceptModal} onClose={acceptModal} />
      )}
      {rejectToggle && (
        <ConfirmDelete
          visible={rejectModal}
          onClose={rejectModal}
          handleDelete={() => handleDeleteJobById(id)}
          jobTitle={title}
        />
      )}
    </>
  );
};

export default ApplicantDropDown;
