import React from "react";
import Button from "../Buttons/Button";
import { Link } from "../../../Navigation";
import { useLocale } from "next-intl";

function PagesHeaders({
  currentPage,
  prevPage,
  pageName,
  currentPageClass,
  HomePage,
  toPrev,
  buttonclass,
  buttonName,
  goTo,
  buttonName2,
  buttonclass2,
  notice,
  noticeClass,
  searchFields,
  disabled
}) {
  const locale = useLocale()
  return (
    <div className={`flex items-center justify-between  h-full py-8 mt-5 responsive px-10 font-cairo `}>
      <div className="flex flex-col items-start justify-center gap-8">
        <p className="text-gray-400 font-semibold text-base max-md:text-xs">
          <Link
            className="text-Homeworld-600 font-semibold text-base max-md:text-xs"
            href={"/"}
          >
            {HomePage} /{" "}
          </Link>
          <Link className={currentPageClass} href={toPrev}>
            {prevPage}{" "}
          </Link>
          {currentPage}
        </p>
        <h1 className="text-xl font-bold max-md:text-xs">{pageName}</h1>
        {searchFields}
      </div>
      <div className="flex items-center justify-center gap-5 relative ">
        <div >
          <Link href={goTo ? goTo : "/"}>
            <Button  disabled={disabled} classProps={buttonclass2} buttonText={buttonName2}></Button>
          </Link>
          
        </div>
        <Link href={goTo ? goTo : "/"}>
          <Button classProps={buttonclass} buttonText={buttonName}></Button>
        </Link>
        <div className={`w-[136px] text-center bg-lightGray absolute ${locale === "ar" ? "right-0" : "left-0"}  top-[50px] rounded-lg ${noticeClass}`}>
            <p className="text-[12px] p-5 ">{notice}</p>
          </div>
         
      </div>
    </div>
  );
}

export default PagesHeaders;
