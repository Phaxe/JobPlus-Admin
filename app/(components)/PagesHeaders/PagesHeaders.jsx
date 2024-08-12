
import React from "react";
import Button from "../Buttons/Button";
import {Link} from "../../../Navigation";


function PagesHeaders({ currentPage, prevPage, pageName ,currentPageClass,HomePage,toPrev,buttonclass,buttonName, goTo}) {


  return (
    <div className="flex items-center justify-between  h-full py-8 mt-5 responsive px-10 font-cairo ">
      <div className="flex flex-col items-start justify-center gap-8">
        <p className="text-gray-400 font-semibold text-base max-md:text-xs">
          <Link className="text-Homeworld-600 font-semibold text-base max-md:text-xs" href={"/"}>{HomePage} / </Link>
           <Link className={currentPageClass} href={toPrev}>{prevPage}  {" "}</Link>{currentPage}
        </p>
        <h1 className="text-xl font-bold max-md:text-xs">{pageName}</h1>
      </div>
      <div>
        <Link href={goTo ? goTo : "/"}>
        <Button
       
       classProps={
         buttonclass
       }
       buttonText={buttonName}
     ></Button>
        </Link>
     
      </div>
    </div>
  );
}

export default PagesHeaders;
