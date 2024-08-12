"use client"
import React , {useState} from "react";
import Button from "../../Buttons/Button";
import { useTranslations } from "next-intl";
import Image from "next/image";
import boder from "/public/borderVector.svg";
import expborder from "/public/applicantexp.svg";
import skill from "/public/skills.svg";

function ApplicantModal() {

  const a = useTranslations("Applicant");
  return (
    <div className="responsive flex flex-col items-start justify-start gap-5 py-2 ">
      <div className="bg-lightGray flex items-center justify-evenly py-5 rounded-lg w-full">
        <div className="flex flex-col items-center justify-center gap-3">
          <h1 className="font-semibold text-xl text-Homeworld-600">
            {a("Speciality")}
          </h1>
          <p className="text-sm">محاسبة</p>
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
          <p className="text-sm">سنتين</p>
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
          هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا
          النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من
          النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.
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
            <div className="flex flex-col items-start justify-start gap-2">
              <h1 className="text-[#47C0AC]  text-xl font-semibold ">   {a("Experience")}</h1>
              <h1 className="text-Homeworld-600 text-base">12/3/2020</h1>
              <p className="text-base">
                هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد
                هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو
                العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها
                التطبيق.
              </p>
            </div>
            <div className="flex flex-col items-start justify-start gap-2">
              <h1 className="text-[#47C0AC]  text-xl font-semibold ">{a("Experience")}</h1>
              <h1 className="text-Homeworld-600 text-base">12/3/2020</h1>
              <p className="text-base">
                هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد
                هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو
                العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها
                التطبيق.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="py-5 rounded-lg  bg-lightGray w-full px-5 flex flex-col items-start justify-start gap-3">
        <div className="flex flex-col items-start justify-start gap-3">
          <h1 className="font-semibold text-xl text-Homeworld-600">
            {a("Education")}
          </h1>
          <p className="text-sm">بكالوريوس محاسبة</p>
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
          <div className="flex items-center justify-center gap-4">
          {a("Skills")}
            <Image
              src={skill}
              width={20}
              height={10}
              alt="border"
              className="w-20 h-[15px]"
            />
           {a("Skills")}
            <Image
              src={skill}
              width={20}
              height={10}
              alt="border"
              className="w-20 h-[15px]"
            />
             {a("Skills")}
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-3">
          <h1 className="font-semibold text-xl text-Homeworld-600">
          {a("Languages")}
          </h1>
          <div className="flex items-center justify-center gap-4">
            <h1> {a("Languages")}</h1>
            <Image
              src={skill}
              width={20}
              height={10}
              alt="border"
              className="w-20 h-[15px]"
            />
            <h1> {a("Languages")}</h1>
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
