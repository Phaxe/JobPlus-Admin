"use client";
import React from "react";
import { useLocale } from "next-intl";
import { Menu, Dropdown, Button,ConfigProvider } from "antd";
import backIconGreen from "/public/Back-icon-green.svg";
import { usePathname, Link } from "./Navigation";
import Image from "next/image";
import { CiLock, CiLogout } from "react-icons/ci";
import "./Terms.css";
import { logout } from "@/app/ReduxStore/Slices/authSlice";
import { useDispatch } from "react-redux";
import {  useRouter} from "@/Navigation";
const Navbar = () => {

  const locale = useLocale();
  const pathName = usePathname();
  const localeEn = "en";
  const localeAr = "ar";
  const router = useRouter()
  const dispatch = useDispatch();
  const handleLotOut = () =>{
    dispatch(logout())
    setTimeout(() => {
      router.push("/  ")
    }, 1500);
  }
  

  const languageMenu = (
    <Menu>
      <Menu.Item>
        <Link
          locale={localeEn}
          href={`/${pathName}`}
          className={locale === "ar" ? "visible" : "hidden"}
        >
          <span className="text-base">
            {" "}
            {locale === "ar" ? "English" : "Arabic"}
          </span>
        </Link>
        <Link
          locale={localeAr}
          href={`/${pathName}`}
          className={locale === "en" ? "visible" : "hidden"}
        >
          <span className="text-base">
            {" "}
            {locale === "ar" ? "English" : "Arabic"}
          </span>
        </Link>
      </Menu.Item>
    </Menu>
  );

  return (

      <div className="w-full h-20 px-10 flex items-center justify-between border-b border-gray-300 z-50 bg-white">
      <div className="p-5">
        <Image
          priority
          src="/logo.png"
          width={150}
          height={100}
          className="p-5 object-cover"
          alt="Logo-image"
        />
      </div>
      <div className="flex items-center justify-center">
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
              boxShadow: "none",
            }}
          >
            <span className="text-base  ">
              {" "}
              {locale === "ar" ? "Arabic" : "English"}{" "}
            </span>
            <Image
              src={backIconGreen}
              width={25}
              height={10}
              alt="back-icon "
              className=" "
            />
          </Button>
        </Dropdown>
      <div className="px-2 cursor-pointer" onClick={handleLotOut}>
      <Image
          alt="actions-icon"
          src="/logout.svg"
          width={20}
          height={5}
          className="object-cover"
        />
      </div>
      </div>
    </div>

  );
};

export default Navbar;
