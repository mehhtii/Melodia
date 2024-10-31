"use client"
import { ToggleSideMenu } from "@/zustand/admin-menu-state";
import Link from "next/link";
import { FaHome } from "react-icons/fa";
import SideNavLink from "./side-nav-links";
import { IoMdMusicalNotes } from "react-icons/io";


const SideNav = () => {
  const activedSidebar = ToggleSideMenu(state=>state.active);
  return (
    <>
      <div className={`${activedSidebar ? "sm:left-0 -translate-x-0" : "-translate-x-80"} lg:-translate-x-0 bg-blue-customer shadow-sm sm:fixed  sm:min-w-72 sm:max-w-72 lg:relative lg:block lg:min-w-72 inset-0 z-50 my-4 ml-4 h-[calc(100vh-32px)]  rounded-xl transition-transform duration-300 xl:translate-x-0 border border-[#d0d0d0] px-3`}>
        <h5 className="h-10 w-full text-center mt-5 font-bold">admin dashboard</h5>
        <div className="w-full mt-6">
         <SideNavLink href={"/admin"} icon={<FaHome/>} title={"Dashboard"}/>
         <SideNavLink href={"/admin/tracks"} icon={<IoMdMusicalNotes/>} title={"Tracks"}/>
        </div>
      </div>
    </>
  );
};

export default SideNav;
