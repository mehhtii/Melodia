import React from "react";
import SideNav from "@/components/admin-panel/admin-layout/side-nav";
import localFont from "next/font/local";
import "@/styles/globals.css";
import TopNavigation from "@/components/admin-panel/admin-layout/top-nav";


export const metadata = {
  title: "admin",
  description: "Generated by create next app",
};

const customFont = localFont({
  src: "../../../public/fonts/Poppins-Medium.ttf",
});
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={customFont.className}>
        <div className="min-h-screen flex w-full bg-dark-customer">
          <SideNav />
          <div className="ps-5 w-full">
            <TopNavigation/>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
