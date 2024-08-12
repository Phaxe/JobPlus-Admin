"use client";
import React, { useState } from "react";
import { useLocale } from "next-intl";
import { Menu, Dropdown, Button } from "antd";

import backIconGreen from "/public/Back-icon-green.svg";
import { Link, usePathname } from "./Navigation";
import Image from "next/image";



const MainNavBar = ({showBorder, showLogo}) => {
  const locale = useLocale();
  const pathName = usePathname();
  const localeEn = "en"
  const localeAr = "ar"


  const languageMenu = (
    <Menu>
 
        <Menu.Item >
          <Link locale={localeEn} href={`/${pathName}`} className={locale === "ar" ? "visible" : "hidden"}>
           <span className="text-base">  {locale === "ar" ? "English" : "Arabic"}</span>
          </Link>
          <Link locale={localeAr} href={`/${pathName}`} className={locale === "en" ? "visible" : "hidden"}>
           <span className="text-base">  {locale === "ar" ? "English" : "Arabic"}</span>
          </Link>
        </Menu.Item>
    
    </Menu>
  );

  return (
    <div className={`"w-full h-20 px-10 flex items-center justify-between z-50  ${showBorder} "`}>
       <div className="p-5">
        <Image
          priority
          src="/logo.png"
          width={150}
          height={100}
          className={`"p-5 object-cover " ${showLogo}`}
          alt="Logo-image"
        />
      </div>
      <div className="flex items-center">
        <Dropdown
          overlay={languageMenu}
          trigger={["click"]}
          style={{ border: "2px" }}
         
        >
          <Button
            style={{
              border: "none",
              color: "black",
              fontSize: "18px",
              fontWeight: "600",
              boxShadow:"none"
            }}
          >
           <span className="text-base font-normal "> {locale === "ar" ? "Arabic" : "English"}{" "}</span>
           <Image
              src={backIconGreen}
              width={25}
              height={10}
              alt="back-icon "
              className=" "
            />
          </Button>
        </Dropdown>
      
      </div>

    </div>
  );
};

export default MainNavBar;
