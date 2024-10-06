"use client";
import React, { useEffect, useState } from "react";

import LoginForm from "../../(components)/LoginForm/LoginForm";
import { useRouter } from "@/Navigation";
import { useSelector } from "react-redux";
import { useLocale } from "next-intl";
import BeatLoader from "react-spinners/BeatLoader"
const LoginPage = () => {

  const router = useRouter();
  const locale = useLocale()
  const { isLoggedIn } = useSelector((state) => state.auth);


  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   // Step 2: Mimic a loading process with a timeout (e.g., 2 seconds)
  //   const timer = setTimeout(() => {
  //     setLoading(false); // Set loading to false after 2 seconds
  //   }, 2000);

  //   const localePath = locale === 'ar' ? '/' : '/';
  //   if (isLoggedIn) {
  //     router.push(localePath); // Redirect based on the locale
  //   } else {
  //     router.push("/loginpage"); // Redirect based on the locale
  //   }

  //   // Clean up the timeout when the component is unmounted
  //   return () => clearTimeout(timer);
  // }, [isLoggedIn, router, locale]);

  // Step 3: Show spinner while loading is true
  // if (loading) {
  //   return (
  //     <div className="flex items-center justify-center w-full h-screen m-auto">
  //       <BeatLoader color="#1984E5" size={30} />
  //     </div>
  //   );
  // }

  return (

     <div>
      <LoginForm />
    </div>

  );
};

export default LoginPage;
