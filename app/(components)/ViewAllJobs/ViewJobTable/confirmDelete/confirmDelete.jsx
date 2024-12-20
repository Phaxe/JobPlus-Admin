"use client"
import React from "react";

import { useTranslations, useLocale } from "next-intl";

import Image from "next/image";
import Close from "/public/close.svg";
import AlertIcon from "/public/alert.svg";
import { useRouter } from "next/router";
const ConfirmDelete = ({ visible, onClose,handleDelete,jobTitle }) => {

const g = useTranslations("Applicant")
const locale = useLocale()

  if (!visible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 ">
      <div
        className="fixed inset-0 bg-black opacity-50  "
        onClick={onClose}
      ></div>
      <div className="bg-white  relative p-6 rounded-3xl  ">
        <button
            className={` ${
                locale === "ar" ? "absolute top-6 left-7 " : "absolute top-6 right-7 "
              }`}
          onClick={onClose}
        >
          <Image src={Close} alt="close-icon" width={24} height={24} />
        </button>

        <div className="flex flex-col items-center justify-center mt-10 mb-5 gap-5 w-[500px] ">
     <div>
     <Image src={AlertIcon} alt="close-icon" width={50} height={50} />
     </div>
     <div>
     <h1 className="text-2xl font-semibold text-darkGray text-center">{g("deletejob")}{" "}{jobTitle}</h1>
     </div>


        <div className="w-full">
        <button className="px-8 py-3 w-full col-span-2 mt-2 bg-red-500 text-white rounded-lg" onClick={handleDelete}>
        {g("deleteconfirm")}
          </button>
        </div>
        </div>
      
   
     
   
      
      </div>
    </div>
  );
};

export default ConfirmDelete;
