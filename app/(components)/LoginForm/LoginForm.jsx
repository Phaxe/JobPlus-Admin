// components/LoginForm.jsx
import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import { Icon } from 'react-icons-kit';
import useTogglePassword from '@/app/(hooks)/PasswordToggle/usePasswordToggle';
import MainNavBar from '../MainNavBar/MainNavBar';
import { useDispatch, useSelector } from 'react-redux';
import { Link,useRouter } from '@/Navigation';
import { login } from '../../ReduxStore/Slices/authSlice';

const LoginForm = ({ title, emailLabel, passwordLabel, loginButtonLabel, signupButtonLabel, onSignupClick }) => {
  const { type: passwordType, icon: passwordIcon, handleToggle: handlePasswordToggle } = useTogglePassword();
  const v = useTranslations("ValidationErrors");
  const locale = useLocale();
  const t = useTranslations("Register");
  const router = useRouter();
  const dispatch = useDispatch();
  const { loading, error:myError } = useSelector((state) => state.auth);

  // const validate = (values) => {
  //   const errors = {};
  //   const emailPattern = /^[\w-]+(\.[\w-]+)*@[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)*(\.[a-zA-Z]{2,})$/;
  //   const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

  //   if (!values.email) {
  //     errors.email = v("required");
  //   } else if (!emailPattern.test(values.email)) {
  //     errors.email = v("email");
  //   }
  //   if (!values.password) {
  //     errors.password = v("required");
  //   } else if (!passwordPattern.test(values.password)) {
  //     errors.password = v("loginPassword");
  //   }
  //   return errors;
  // };
const redirectToRegister = () =>{
  router.push("/Register")
}
  const onSubmit = async (values, { setSubmitting, setStatus }) => {
    try {
      await dispatch(login(values)).unwrap();
      router.push('/'); // Redirect after successful login
    } catch (error) {
      setStatus(error.message);
    } finally {
      setSubmitting(false);
    }
  };


  
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    // validate,
    onSubmit,
   
  });

  return (
    <>
      <MainNavBar />
      <div className="flex items-center justify-center 2xl:w-[1200px] mx-auto max-lg:flex-col gap-10">
        <div className="h-full p-5 flex flex-col items-start justify-center my-10">
          <Image src="/logo.png" width={200} height={200} className="p-2" alt="Logo-image" />
          {locale === "ar" ? (
            <div className="flex items-center justify-start px-5 gap-1 font-bold text-xl mt-10">
              <p className="">تسجيل الدخول</p>
            </div>
          ) : (
            <div className="flex items-center justify-start gap-1 font-bold text-xl">
              <p className="">Login </p>
            </div>
          )}

          <form onSubmit={formik.handleSubmit} method="post" className="p-5 flex flex-col items-center justify-center w-[400px]">
            <div className="flex flex-col w-full">
              <label htmlFor="email" className="py-2 font-semibold">{t("companyEmail")}</label>
              <input
                className="border rounded p-2 h-12 text-base"
                type="text"
                id="email"
                name="email"
                placeholder=" job@jobplus.com"
                required={true}
                value={formik.values.email}
                onChange={formik.handleChange}
              />
              <span className="text-red-500 py-2">
                {formik.errors.email ? <div>{formik.errors.email}</div> : null}
              </span>
            </div>
            <div className="flex flex-col relative w-full">
              <label htmlFor="password" className="py-2 font-semibold">{t("companyPassword")}</label>
              <input
                className={`border rounded p-2 h-12 text-base input-password`}
                type={passwordType}
                id="password"
                name="password"
                placeholder="Qwm28*)12"
                required={true}
                value={formik.values.password}
                onChange={formik.handleChange}
              />
              <span className="visibility-icon" onClick={handlePasswordToggle}>
                <Icon
                  className={
                    locale === "ar"
                      ? "absolute top-[59%] left-[5%] text-Melbourne-600"
                      : "absolute top-[59%] right-[5%] text-Melbourne-600"
                  }
                  icon={passwordIcon}
                  size={15}
                />
              </span>
            </div>
            <span className="text-red-500 py-2">
              {formik.errors.password ? <div>{formik.errors.password}</div> : null}
              {myError && <div style={{ color: 'red' }}>{v("WrongData")}</div>}
            </span>
            <Link href={"/ForgetPasswordPage"} className="self-end px-2 py-4 text-gray-500 font-semibold text-sm">
              <p>{t("ForgotPassword")}</p>
            </Link>
            <div className="flex flex-col gap-6 w-full m-auto">
              <button
                disabled={!formik.isValid || formik.isSubmitting || !formik.dirty}
                type="submit"
                onClick={formik.handleSubmit}
                className={`py-2 px-2 rounded-lg hover:shadow-xl hover:duration-300 duration-300 ${
                  !formik.isValid || formik.isSubmitting || !formik.dirty
                    ? "bg-white text-gray-300 border border-gray-300 cursor-not-allowed"
                    : "bg-Homeworld-700 text-white cursor-pointer"
                }`}
              // className=' bg-Homeworld-700 text-white cursor-pointer py-2 px-2 rounded-lg hover:shadow-xl hover:duration-300 duration-300'
              >
                {t("CompanyLogin")}
              </button>
              <Link href={"/Register"} className="py-2 px-2 bg-white text-center border-Homeworld-600 border rounded-lg text-Homeworld-600 hover:shadow-xl hover:duration-300 duration-300 w-full">
                {t("CreateCompanyAccount")}
              </Link>
            </div>
          </form>
        </div>

        <Image src="/Group1.png" width={600} height={600} className="object-cover" alt="Login-image" />
      </div>
    </>
  );
};

export default LoginForm;
