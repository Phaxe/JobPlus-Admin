"use client";
import React, { useEffect, useState } from "react";

import InputForm from "../InputForm/InputForm";
import Button from "../Buttons/Button";
import ReusableSelectInput from "./ReusableSelectInput/ReusableSelectInput";
import { useFormik } from "formik";
import { useTranslations } from "next-intl";
import CustomDateInput from "../DateInput/DateInput";
import "./addjob.css";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCategories,
  fetchCities,
  fetchContract,
  fetchDisabilityTypes,
  fetchLanguages,
  fetchSkills,
  fetchStudyFields,
  fetchStudyMajors,
  fetchWorkTimes,
} from "@/app/ReduxStore/Slices/inputsSlices/inputTypeSlice";

const AddJobForm = () => {
//   const dispatch = useDispatch();
//   const { token } = useSelector((state) => state.auth);
//   useEffect(() => {
//     if (token) {
//       dispatch(fetchDisabilityTypes());
//       dispatch(fetchStudyMajors());
//       dispatch(fetchStudyFields());
//       dispatch(fetchContract())
//       dispatch(fetchLanguages())
//       dispatch(fetchSkills())
//       dispatch(fetchCities())
//       dispatch(fetchCategories())
//       dispatch(fetchWorkTimes())
//     }
//   }, [dispatch, token]);
  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
    { value: "option4", label: "Option 4" },
  ];

  // const { data, loading, error } = useSelector(
  //   (state) => state.inputTypes.disabilityTypes
  // );
  // const disabilityTypes = data?.data || []; // Safely access data.data
  // const disabilityTypesOptions = disabilityTypes.map((type) => ({
  //   value: type.id,
  //   label: type.title,
  // }));
  // const { data: studyMajors } = useSelector(
  //   (state) => state.inputTypes.studyMajors
  // );
  // const studyMajorsTypes = studyMajors?.data || [];
  // const studyMajorsType = studyMajorsTypes.map((type) => ({
  //   value: type.id,
  //   label: type.title,
  // }));
  // const { data: studyFields } = useSelector(
  //   (state) => state.inputTypes.studyFields
  // );
  // const studyFieldsTypes = studyFields?.data || [];
  // const studyFieldsType = studyFieldsTypes.map((type) => ({
  //   value: type.id,
  //   label: type.name,
  // }));
  // const { data: contractTypes } = useSelector(
  //   (state) => state.inputTypes.contractTypes
  // )
  // const allContractTypes = contractTypes?.data || [];
  // const contactType = allContractTypes.map((type) => ({
  //   value: type.id,
  //   label: type.name,
  // }));
  // const { data: languagesTypes } = useSelector(
  //   (state) => state.inputTypes.languagesTypes
  // )
  // const allLanguagesTypes = languagesTypes?.data || [];
  // const languageType = allLanguagesTypes.map((type) => ({
  //   value: type.id,
  //   label: type.title,
  // }));
  // const { data: skillsTypes } = useSelector(
  //   (state) => state.inputTypes.skillsTypes
  // )
  // const allSkillsTypes = skillsTypes?.data || [];
  // const skillType = allSkillsTypes.map((type) => ({
  //   value: type.id,
  //   label: type.name,
  // }));
  // const { data: citiesTypes } = useSelector(
  //   (state) => state.inputTypes.citiesTypes
  // )
  // const allCitiesTypes = citiesTypes?.data || [];
  // const cityType = allCitiesTypes.map((type) => ({
  //   value: type.id,
  //   label: type.name,
  // }));
  // const { data: categoriesTypes } = useSelector(
  //   (state) => state.inputTypes.categoriesTypes
  // )
  // const allCategoriesTypes = categoriesTypes?.data || [];
  // const categoryType = allCategoriesTypes.map((type) => ({
  //   value: type.id,
  //   label: type.name,
  // }));
  // const { data: workTimes } = useSelector(
  //   (state) => state.inputTypes.workTimes
  // )
  // const allWorkTimes = workTimes?.data || [];
  // const workTime = allWorkTimes.map((type) => ({
  //   value: type.id,
  //   label: type.title,
  // }));
  
  
 




  

  const g = useTranslations("General");
  const j = useTranslations("AddJob");

  // FORM VALIDATIONS
  const v = useTranslations("ValidationErrors");
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

  };
  const formik = useFormik({
    initialValues: {
      title: "",
      requirements: "",
      monthly_salary: "",
      end_date: "",
      work_time_id: "",
      contract_id: "",
      category_id: "",
      major_id: "",
      experiance: "",
      candidate_numbers: "",
      status: "",
      disability: "",
      languages: [],
      qualifications: [],
      city: [],
      disability_list: [],
    },
    validate,
    onSubmit,
  });
  const [checked, setChecked] = useState(null);

  const handleCheckboxChange = (value) => {
    setChecked(value);
  };
  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  // if (error) {
  //   return <div>Error: {error}</div>;
  // }
  return (
    <main className=" h-full ">
      <form
        onSubmit={formik.handleSubmit}
        className="py-5 flex flex-col items-start justify-start gap-10"
      >
        <div className="flex flex-col items-start justify-start gap-5 bg-lightGray rounded-lg px-5   responsive">
          <div className="w-full">
            <h1 className="text-Homeworld-600 font-semibold py-6 text-xl ">
              {j("jobDescribtion")}
            </h1>
            <InputForm
              labelName="اسم الشركة"
              inputPlaceholder={j("jobTitle")}
              name="title"
              formik={formik}
              astrix={"*"}
            />
        
          </div>

          <div className="grid items-center justify-center grid-cols-2 gap-10 w-full">
          <InputForm
              labelName={j("jobTitle")}
              inputPlaceholder={j("jobTitle")}
              name="title"
              formik={formik}
              astrix={"*"}
            />
                  <ReusableSelectInput
              label="مجال العمل"
              classWidth={"w-full"}
              placeholder={j("educationDegree")}
              options={options}
              name="major_id"
              formik={formik}
              astrix="*"
              notice={""}
            />
            <ReusableSelectInput
              label={j("educationDegree")}
              classWidth={"w-full"}
              placeholder={j("educationDegree")}
              options={options}
              name="major_id"
              formik={formik}
              astrix="*"
              notice={""}
            />
            <ReusableSelectInput
              label={j("educationFeild")}
              classWidth={"w-full"}
              placeholder={j("educationFeild")}
              options={options}
              name="jobCategory"
              formik={formik}
              astrix="*"
              notice={""}
            />

            <ReusableSelectInput
              label={j("contractType")}
              classWidth={"w-full"}
              placeholder={j("contractType")}
              options={options}
              name="contract_id"
              formik={formik}
              astrix="*"
              notice={""}
            />

            <ReusableSelectInput
              label={j("jobView")}
              classWidth={"w-full"}
              placeholder={j("jobView")}
              options={options}
              name="category_id"
              formik={formik}
              astrix="*"
              notice={""}
            />
            <ReusableSelectInput
              label={j("jobHours")}
              classWidth={"w-full"}
              placeholder={j("jobHours")}
              options={options}
              name='work_time_id'
              formik={formik}
              astrix="*"
              notice={""}
            />
            <ReusableSelectInput
              label={j("jobLocation")}
              classWidth={"w-full"}
              placeholder={j("jobLocation")}
              options={options}
              name='city'
              formik={formik}
              astrix="*"
              notice={""}
            />

            <div className=" w-full col-span-2 ">
              <h1 className="py-5">
                {j("jobPrief")} <span className="text-red-500">*</span>
              </h1>
              <div className="w-full">
                <textarea
                  id="w3review"
                  name="w3review"
                  classNam="w-full border border-gray-300 rounded-lg p-4"
                  placeholder={j("jobPrief")}
                ></textarea>
              </div>
            </div>

            <div className="flex  items-start justify-start col-span-2 gap-10 ">
           <InputForm
              labelName={j("expYears")}
              inputPlaceholder={j("expYears")}
              name="title"
              formik={formik}
              astrix={"*"}
              inputClass={"w-full"}
            />
            
            </div>
            <ReusableSelectInput
              label={j("language")}
              classWidth={"w-full"}
              placeholder={j("language")}
              options={options}
              name='languages'
              formik={formik}
              astrix="*"
              notice={""}
            />
            <ReusableSelectInput
              label={j("skills")}
              classWidth={"w-full"}
              placeholder={j("skills")}
              options={options}
              name="jobCategory"
              formik={formik}
              astrix="*"
              notice={""}
            />
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-14 w-full bg-lightGray rounded-lg px-5  ">
          <div className="w-full">
            <h1 className="text-Homeworld-600 font-semibold py-6 text-lg">
              {j("salaryInfo")}
            </h1>
            <div className="grid items-start justify-start grid-cols-2 gap-10  max-md:grid-cols-1">
              <InputForm
                labelName={j("monthSalary")}
                inputPlaceholder={j("monthSalary")}
                name="company_user"
                formik={formik}
                inputClass={"w-full"}
              />
              <InputForm
                labelName={j("hourSalary")}
                inputPlaceholder={j("hourSalary")}
                name="mobile_number"
                formik={formik}
                inputClass={"w-full"}
              />
            </div>
          </div>
        </div>
        <div className=" bg-lightGray rounded-lg px-5 responsive h-[305px]">
          <h1 className="text-Homeworld-600 font-semibold py-6 text-xl">
            {j("disablity")}
          </h1>
          <div className="flex items-start justify-start gap-5">
            <div className="flex  items-center justify-center gap-10 py-5">
              <label className="flex items-center justify-center gap-2">
                <input
                  className="custom-checkbox"
                  type="checkbox"
                  checked={checked === "checkbox1"}
                  onChange={() => handleCheckboxChange("checkbox1")}
                />
                <p> {j("Available")}</p>
              </label>

              <label className="flex items-center justify-center gap-2">
                <input
                  className="custom-checkbox"
                  type="checkbox"
                  checked={checked === "checkbox2"}
                  onChange={() => handleCheckboxChange("checkbox2")}
                />
                <p> {j("unAvailable")}</p>
              </label>
            </div>
          </div>
          <ReusableSelectInput
            label={j("disType")}
            classWidth={"w-full"}
            placeholder={j("disType")}
            options={options}
            name="jobCategory"
            formik={formik}
            astrix="*"
            notice={""}
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-14  bg-lightGray rounded-lg px-5  responsive">
          <div className="w-full">
            <h1 className="text-Homeworld-600 font-semibold py-6 text-lg">
              {j("applyInfo")}
            </h1>
            <div className="grid items-start justify-start grid-cols-2 gap-10  max-md:grid-cols-1">
              <InputForm
                labelName={j("applicantNumber")}
                inputPlaceholder={j("applicantNumber")}
                name="company_user"
                formik={formik}
                inputClass={"w-full"}
              />
              <CustomDateInput
                inputType={"date"}
                labelName={j("endDate")}
                name="mobile_number"
                formik={formik}
                inputClass={"w-auto mt-4"}
              />
            </div>
          </div>
        </div>

        <Button
          classProps={
            "py-4 px-4 rounded-lg hover:shadow-xl w-[150px] hover:duration-300 duration-300 text-white bg-Homeworld-700 self-end"
          }
          buttonText={g("Save")}
        ></Button>
      </form>
    </main>
  );
};

export default AddJobForm;
