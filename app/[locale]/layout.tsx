import { Cairo } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import ReduxProvider from "../ReduxStore/ReduxProvider"
import "./globals.css";

const cairo = Cairo({ subsets: ["arabic"], display: "swap" });
export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();
  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"} >
      <body className={cairo.className}>
        <NextIntlClientProvider messages={messages}>
          <ReduxProvider>
            
              {children}
           
          </ReduxProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
