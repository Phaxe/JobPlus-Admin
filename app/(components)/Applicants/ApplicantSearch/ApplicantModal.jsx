// components/SearchModal.js
import React from "react";
import InputForm from "../../InputForm/InputForm";
import { useLocale, useTranslations } from "next-intl";
import { useFormik } from "formik";
import ReusableSelectInput from "../../ReusableSelectInput/ReusableSelectInput";
import Image from "next/image";
import Close from "/public/close.svg";
import CustomDateInput from "../../DateInput/DateInput";
import CountryCodes from "../../countryCodes/CountryCodes";

const SearchModal = ({ visible, onClose }) => {
  const locale = useLocale()
  const j = useTranslations("AddJob");
  const g = useTranslations("General");
  const a = useTranslations("Applicant");
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
        className="fixed inset-0 bg-black opacity-50"
        onClick={onClose}
      ></div>
      <div className="bg-white  2xl:h-[800px] xl:[650px] relative p-6 rounded-2xl z-50">
        <button
          className={`${locale === "ar" ? "absolute top-6 left-4 " :"absolute top-6 right-4 " }`}
          onClick={onClose}
        >
          <Image src={Close} alt="Search Icon" width={24} height={24} />
        </button>

        <h2 className={`${locale === "ar" ? "text-right font-bold text-lg mb-4" : "text-left font-bold text-lg mb-4"}`}>{g("Filter")}</h2>

        <div className="grid items-center justify-center grid-cols-3 gap-5">
          <InputForm
            labelName={j("jobTitle")}
            inputPlaceholder={j("jobTitle")}
            name="full_name"
            formik={formik}
          />
          <CustomDateInput
            inputType={"date"}
            labelName={a("applicantDate")}
            name="mobile_number"
            formik={formik}
            inputClass={"w-auto mt-0"}
          />
          <ReusableSelectInput
            classWidth={"w-full"}
            options={options}
            label={a("Speciality")}
            placeholder={a("Speciality")}
            onChange={(e) => e.event.target}
            notice={""}
          />
          <ReusableSelectInput
            classWidth={"w-full"}
            options={options}
            label={j("educationDegree")}
            placeholder={j("educationDegree")}
            onChange={(e) => e.event.target}
            notice={""}
          />
          <ReusableSelectInput
            classWidth={"w-full"}
            options={options}
            label={a("Age")}
            placeholder={a("Age")}
            onChange={(e) => e.event.target}
            notice={""}
          />
          <ReusableSelectInput
            classWidth={"w-full"}
            options={options}
            label={a("Gender")}
            placeholder={a("Gender")}
            onChange={(e) => e.event.target}
            notice={""}
          />
          <ReusableSelectInput
            classWidth={"w-full"}
            options={options}
            label={a("Acceptance")}
            placeholder={a("Acceptance")}
            onChange={(e) => e.event.target}
            notice={""}
          />
          <ReusableSelectInput
            classWidth={"w-full"}
            options={options}
            label={a("City")}
            placeholder={a("City")}
            onChange={(e) => e.event.target}
            notice={""}
          />
          <ReusableSelectInput
            classWidth={"w-full"}
            options={options}
            label={a("Disability")}
            placeholder={a("Disability")}
            onChange={(e) => e.event.target}
            notice={""}
          />
          <ReusableSelectInput
            classWidth={"w-full"}
            options={options}
            label={a("Status")}
            placeholder={a("Status")}
            onChange={(e) => e.event.target}
            notice={""}
          />
          <div>
            <div className="flex  items-start justify-start col-span-2 gap-2 ">
              <ReusableSelectInput
                options={options}
                label={a("expYears")}
                placeholder={a("expYears")}
                classWidth={"w-26"}
                onChange={(e) => e.event.target}
              />
              <ReusableSelectInput
                options={options}
                label={""}
                placeholder={a("expYears")}
                classWidth={"w-52 mt-5"}
                onChange={(e) => e.event.target}
                
              />
            </div>
          </div>
          <ReusableSelectInput
            classWidth={"w-full"}
            options={options}
            label={a("Languages")}
            placeholder={a("Languages")}
            onChange={(e) => e.event.target}
            notice={""}
          />
          <InputForm
            labelName={a("applicantName")}
            inputPlaceholder={a("applicantName")}
            name="full_name"
            formik={formik}
          />

          <div className="relative flex items-start justify-center w-full flex-col mt-2">
            <label htmlFor="" className="mb-2">
              {a("Phone")}
            </label>
            <input
              type="phone"
              id="mobile_number"
              name="mobile_number"
              placeholder={a("Phone")}
              className=" border rounded p-2 h-14 w-full pl-[5.75rem]"
              required={true}
              value={formik.values.mobile_number}
              onChange={formik.handleChange}
            />

            <CountryCodes inputClass={"top-9"} />
          </div>
        </div>

        <div className="flex justify-end gap-5  mt-6 w-full">
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
