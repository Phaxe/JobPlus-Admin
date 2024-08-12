// components/SearchModal.js
import React from "react";
import InputForm from "../InputForm/InputForm";
import { useTranslations } from "next-intl";
import { useFormik } from "formik";
import ReusableSelectInput from "../ReusableSelectInput/ReusableSelectInput";
import DateInput from "../DateInput/DateInput";
import Image from "next/image";
import Close from "/public/close.svg";
const SearchModal = ({ visible, onClose }) => {
  const j = useTranslations("AddJob");
  const g = useTranslations("General");
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
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="fixed inset-0 bg-black opacity-50 "
        onClick={onClose}
      ></div>
      <div className="bg-white w-[860px] h-[540px] relative p-6 rounded-2xl ">
        <button
          className="absolute top-6 left-4 text-red-600"
          onClick={onClose}
        >
          <Image src={Close} alt="Search Icon" width={24} height={24} />
        </button>

        <h2 className="text-right font-bold text-lg mb-4">{g("Filter")}</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-2">
            <InputForm
              labelName={j("jobTitle")}
              inputPlaceholder={j("jobTitle")}
              name="mobile_number"
              formik={formik}
              inputClass={"w-[790px] py-2"}
            />
          </div>

          <ReusableSelectInput
            classWidth={"xl:w-[380px]"}
            options={options}
            label={j("jobStat")}
            placeholder={j("jobStat")}
            onChange={(e) => e.event.target}
            astrix={""}
            notice={""}
          />

          <ReusableSelectInput
            classWidth={"xl:w-[380px]"}
            options={options}
            label={j("City")}
            placeholder={j("City")}
            onChange={(e) => e.event.target}
            astrix={""}
            notice={""}
          />

          <DateInput
            inputClass="w-[380px]"
            labelName={j("From")}
            name={j("From")}
          />
          <DateInput
            inputClass="w-[380px]"
            labelName={j("To")}
            name={j("To")}
          />
        </div>
        <div className="flex justify-end gap-5 self-end mt-6 xl:w-[790px]">
          <button
            className="px-4 py-2 border rounded-lg border-Homeworld-600 text-Homeworld-600"
            onClick={onClose}
          >
            {g("goBack")}
          </button>
          <button className="px-8 py-2 bg-Homeworld-600 text-white rounded-lg">
            {g("Search")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
