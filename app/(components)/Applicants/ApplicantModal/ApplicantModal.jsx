"use client"
import React , {useState} from "react";
import Button from "../../Buttons/Button";
import { useTranslations } from "next-intl";
import Image from "next/image";
import boder from "/public/borderVector.svg";
import expborder from "/public/applicantexp.svg";
import skill from "/public/skills.svg";

function ApplicantModal({appData}) {
  const {
    qualifications = [],
    experiences = [],
    user_bio,
    
  } = appData || {};

  const userCv = appData?.user_cv;



  const academicMajorTitle =
    qualifications.length > 0 ? qualifications[0]?.academic_major?.title : "N/A";
  const acadimicQualification =
    qualifications.length > 0 ? qualifications[0]?.qualification?.name : "N/A";
  const graduationDate =
    qualifications.length > 0 ? qualifications[0]?.graduation_date : "N/A";
  const totalYears = experiences.reduce(
    (acc, experience) => acc + (experience.years_count || 0),
    0
  );
  const totalMonths = experiences.reduce(
    (acc, experience) => acc + (experience.months_count || 0),
    0
  );
  const courses = Array.isArray(appData?.courses)
    ? appData?.courses
    : [];

  // Display totals or default to "N/A" if there are no experiences
  const years = totalYears >= 0 ? totalYears : "N/A";
  const months = totalMonths >= 0 ? totalMonths : "N/A";

  const a = useTranslations("Applicant");
  const g = useTranslations("General");


  return (
    <div className="responsive flex flex-col items-start justify-start gap-5 py-2 ">
      <div className="bg-lightGray flex items-center justify-evenly py-5 rounded-lg w-full">
        <div className="flex flex-col items-center justify-center gap-3">
          <h1 className="font-semibold text-xl text-Homeworld-600">
            {a("Speciality")}
          </h1>
          <p className="text-sm">{academicMajorTitle}</p>
                  </div>

        <Image
          src={boder}
          width={2}
          height={1}
          alt="border"
          className="w-10 h-[70px]"
        />
        <div className="flex flex-col items-center justify-center gap-3">
          <h1 className="font-semibold text-xl text-Homeworld-600">
            {a("Experience")}
          </h1>
          <p className="text-sm">
            {years}
            {g("years")} {months} {g("months")}
          </p>
        </div>
        <Image
          src={boder}
          width={2}
          height={1}
          alt="border"
          className="w-10 h-[70px]"
        />
        <div className="flex flex-col items-center justify-center gap-3">
          <h1 className="font-semibold text-xl text-Homeworld-600">
            {a("Acceptance")}
          </h1>
          <p className="text-sm">80%</p>
        </div>
      </div>
      <div className="py-5 rounded-lg  bg-lightGray w-full px-5 flex flex-col items-start justify-start gap-3">
        <h1 className="font-semibold text-xl text-Homeworld-600">
          {a("Notice")}
        </h1>
        <p className="text-sm">
          {user_bio || "   هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من  النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق."}
        </p>
      </div>
      <div className="py-5 rounded-lg  bg-lightGray w-full px-5 flex flex-col items-start justify-start gap-3">
        <div>
          <h1 className="font-semibold text-xl text-Homeworld-600">
            {a("realExp")}
          </h1>
        </div>
        <div className="flex">
          <Image
            src={expborder}
            width={20}
            height={10}
            alt="border"
            className="w-20 h-[165px]"
          />
       <div className="flex flex-col gap-6">
            {appData?.experiences?.map((item) => (
              <div
                key={item.applicant_id}
                className="flex flex-col items-start justify-start gap-2"
              >
                <h1 className="text-[#47C0AC]  text-xl font-semibold ">
                  {" "}
                  {item.job_title}{" "}
                  <span className="text-[#47C0AC]  text-xl font-semibold ">
                    -
                  </span>
                  {item.company_name}{" "}
                </h1>
                {item.is_still_working === 1 ? (
                  <h1 className="text-Homeworld-600 text-base">
                    {item.start_date} <span>to present</span>
                  </h1>
                ) : (
                  <h1 className="text-Homeworld-600 text-base">
                    {item.is_still_working === 1 ? "to present" : item.end_date}
                  </h1>
                )}

                <p className="text-base">{item.job_tasks}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="py-5 rounded-lg  bg-lightGray w-full px-5 flex flex-col items-start justify-start gap-3">
        <div className="flex flex-col items-start justify-start gap-3">
          <h1 className="font-semibold text-xl text-Homeworld-600">
            {a("Education")}
          </h1>
          <p className="text-sm">
            {acadimicQualification} {academicMajorTitle} {graduationDate}
          </p>
        </div>
        <div className="flex flex-col items-start justify-start gap-3">
          <h1 className="font-semibold text-xl text-Homeworld-600">
            {a("Course")}
          </h1>
          <p className="text-sm">الدورات والشهادات</p>
        </div>
      </div>
      <div className="py-5 rounded-lg  bg-lightGray w-full px-5 flex flex-col items-start justify-start gap-3">
        <div className="flex flex-col items-start justify-start gap-3">
          <h1 className="font-semibold text-xl text-Homeworld-600">
          {a("Skills")}
          </h1>
          <div className="grid grid-cols-3 items-center justify-center gap-4">
            {appData?.skills?.map((item) => (
              <div key={item.id} className="flex">
                <h1>{item.skill.name}</h1>
                <Image
                  src={skill}
                  width={20}
                  height={10}
                  alt="border"
                  className="w-20 h-[15px]"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-3">
          <h1 className="font-semibold text-xl text-Homeworld-600">
          {a("Languages")}
          </h1>
          <div className="flex items-center justify-center gap-4">
            {appData?.languages?.map((lang) => (
              <div key={lang.id} className="flex">
                <h1>{lang.language || "لا يوجد"}</h1>
                <Image
                  src={skill}
                  width={20}
                  height={10}
                  alt="border"
                  className="w-20 h-[15px]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center gap-5 self-end">
        <Button
          classProps={
            "px-4 py-2  rounded-lg  text-Homeworld-600 bg-white border border-Homeworld-600"
          }
          buttonText={a("Download")}
        />
        <Button
          classProps={"px-4 py-2  rounded-lg  text-white bg-Homeworld-600"}
          buttonText={a("Extract")}
        />
      </div>
    </div>
  );
}

export default ApplicantModal;
