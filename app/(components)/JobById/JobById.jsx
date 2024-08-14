"use client";
import React, { useEffect } from "react";
import Navbar from "@/app/(components)/Navbar/Navbar";
import MySideBar from "@/app/(components)/MySideBar/MySideBar";
import PagesHeaders from "@/app/(components)/ComPagesHeaders/PagesHeaders";
import JobInfoHeader from "./JobInfoHeder";
import JobDesctibtion from "./JobDescribtion";
import ApplicantDescribtion from "./ApplicantDescribtion"
import { useTranslations } from "next-intl";
import { FaSquare } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobsID } from "@/app/ReduxStore/Slices/jobsSlice";
import { fetchProfile } from "@/app/ReduxStore/Slices/profileSlice";

const ViewJobs = ({ params }) => {
  const g = useTranslations("General");
  //   const { id } = params;
  //   const { token } = useSelector((state) => state.auth);

  //   const dispatch = useDispatch();

  //   useEffect(() => {
  //     if (token && id) {
  //       dispatch(fetchJobsID(id));
  //       dispatch(fetchProfile());
  //     }
  //   }, [dispatch, token, id]);
  //   const { data: profileData } = useSelector((state) => state.profile);
  //   const { data, loading, error } = useSelector((state) => state.jobs);
  //   const jobData = data?.data;

  //   if (loading) {
  //     return <div>Loading...</div>;
  //   }

  //   if (error) {
  //     return <div>Error: {error}</div>;
  //   }

  //   if (!jobData) {
  //     return <div>No job data found</div>;
  //   }
  //   const createDate = jobData.publish_date;
  //   const dateString = createDate.match(/^\d{4}-\d{2}-\d{2}/)[0]
  //   const endDate = jobData.end_date;
  //   const endDateString = endDate.match(/^\d{4}-\d{2}-\d{2}/)[0]

  //   console.log(endDateString);

  //   const workCity =
  //     jobData.location && jobData.location[0] ? jobData.location[0].city : "N/A";
  //   const education =
  //     jobData.qualifications && jobData.qualifications[0]
  //       ? jobData.qualifications[0].name
  //       : "N/A";

  return (
    <div className="w-full h-full">
      <Navbar />
      <div className="flex items-start justify-start w-full">
        <MySideBar />
        <div>
          <PagesHeaders
            goTo={"/EditJobPage"}
            buttonclass={
              "h-[48px] px-6 text-base border-Homeworld-600 border text-center text-white rounded-lg bg-Homeworld-600 hover:shadow-xl hover:duration-300 duration-300 w-full max-md:text-xs"
            }
            buttonclass2={"hidden"}
            buttonName="تعديل بيانات الوظيفة"
            currentPage="عرض تفاصيل وظيفة محاسب"
            prevPage={`${g("Jobs")}/`}
            pageName=""
            toPrev="/"
            HomePage={g("Home")}
            notice={g("excelNotice")}
            buttonName2={g("Excel")}
            noticeClass={"hidden"}
          />
          <JobInfoHeader
            jobTitle="   محاسب"
            companyName="شركة جوب بلس"
            publishDate="20 ديسمبر 2023"
            endDate="13 ديسمبر 2023"
          />
          <ApplicantDescribtion
           workTime="30"
           workCity="20"
           education="20"
           expYears="10"/>
          <JobDesctibtion
            workTime="صباحي"
            workCity="الرياض"
            education="محاسبة"
            expYears="اكثر من 6 سنوات"
            contractType="مرن"
            numberReq="30"
          />
          <div className="pr-10 responsive my-10 flex flex-col items-start justify-center gap-5">
            <h1 className="text-xl font-bold">الملخص الوظيفي</h1>
            <h1 className="text-base text-gray-500 leading-8">
              هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد
              هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو
              العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها
              التطبيق. هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد
              تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا
              النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى
              يولدها التطبيق.
            </h1>
          </div>
          <div className="pr-10 responsive my-10 flex flex-col items-start justify-center gap-5">
            <h1 className="text-xl font-bold">اللغات</h1>
        
              <h1>العربية</h1>
              <h1>الإنجليزية</h1>
          
              
       
          </div>
          <div className="pr-10 responsive my-10 flex flex-col items-start justify-center gap-5">
            <h1 className="text-xl font-bold">المهارات</h1>
            <h1 className="text-base text-gray-500 flex items-center justify-center gap-3">
              <span>
                <FaSquare size={5} />
              </span>
              مهارة
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewJobs;
