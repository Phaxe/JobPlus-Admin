"use client"
import React from "react";
import InputForm from "../../InputForm/InputForm";
import { useLocale, useTranslations } from "next-intl";
import { useFormik } from "formik";
import ReusableSelectInput from "../../ReusableSelectInput/ReusableSelectInput";
import Image from "next/image";
import Close from "/public/close.svg";
const ComplaintModal = ({ visible, onClose }) => {
  const c = useTranslations("Complaint");
  const v = useTranslations("ValidationErrors")
  const locale = useLocale()
  const validate = (values) => {
    const namePattern =
      /^(?=.*[a-zA-Z\u0621-\u064A])(?=.*\d)?[a-zA-Z\u0621-\u064A\d]+(?:\s[a-zA-Z\u0621-\u064A\d]+)?$/;
    const companyNamePattren =
      /^(?!.*\s\s)[a-zA-Z\u0621-\u064A]+(?:\s[a-zA-Z\u0621-\u064A]+){0,1}$/;
    const mobilePhonePattren = /^\d{4,15}$/;
    const emailPattren =
      /^[\w-]+(\.[\w-]+)*@[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)*(\.[a-zA-Z]{2,})$/;
    const errors = {};
    if (!values.full_name) {
      errors.full_name = v("required");
    } else if (!namePattern.test(values.full_name)) {
      errors.full_name = v("fullName");
    }
    if (!values.company_user) {
      errors.company_user = v("required");
    } else if (!companyNamePattren.test(values.company_user)) {
      errors.company_user = v("companyName");
    }

    if (!values.email) {
      errors.email = v("required");
    } else if (!emailPattren.test(values.email)) {
      errors.email = v("email");
    }
    if (!values.mobile_number) {
      errors.mobile_number = v("required");
    } else if (!mobilePhonePattren.test(values.mobile_number)) {
      errors.mobile_number = v("mobileNumber");
    }
    return errors;
  };
  const onSubmit = async (values, { setSubmitting, setStatus }) => {
    console.log("here");
  };
  const formik = useFormik({
    initialValues: {
      full_name: "",
      company_user: "",
      email: "",
      mobile_number: "",
    },
    validate,
    onSubmit,
  });

  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
    { value: "option4", label: "Option 4" },
  ];
  if (!visible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 ">
      <div
        className="fixed inset-0 bg-black opacity-50  "
        onClick={onClose}
      ></div>
      <div className="bg-white w-[860px] h-[600px] relative p-6 rounded-3xl ">
        <button
          className={`${locale === "ar" ? "absolute top-6 left-4" : "absolute top-6 right-4"}`}
          onClick={onClose}
        >
          <Image src={Close} alt="close-icon" width={24} height={24} />
        </button>

        
        <div className="grid grid-cols-2  items-start justify-center mt-12">
            <div className="col-span-2 text-xl font-semibold"><h1>{c("sendComplainTo")}</h1></div>
          <div className="col-span-2">
            <InputForm
              labelName={c("complaintTitle")}
              inputPlaceholder={c("complaintTitle")}
              name="mobile_number"
              formik={formik}
              inputClass={"w-full py-0 mt-0"}
              astrix={"*"}
            />
          </div>
          <div className="col-span-2">
          <ReusableSelectInput
            classWidth={"w-full "}
            options={options}
            label={c("complaintReson")}
            placeholder={c("complaintReson")}
            onChange={(e) => e.event.target}
            astrix={"*"}
            notice={""}
          />
            </div>  
     
            <div className="w-full col-span-2">
                 <h1 className="py-5">{c("complaintSubject")} <span className="text-red-500">*</span></h1>
          <textarea
                id="w3review"
                name="w3review"
               
                
                className="w-full border border-gray-300 rounded-lg p-4"
                placeholder={c("complaintSubject")}
              ></textarea>
          </div>
          <button className="px-8 py-3 w-full col-span-2 mt-2 bg-Homeworld-600 text-white rounded-lg">
          {c("Send")}
          </button>
        </div>
   
     
   
      
      </div>
    </div>
  );
};

export default ComplaintModal;
