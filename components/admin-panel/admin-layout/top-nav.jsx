"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  IoNotifications,
  IoPersonCircleSharp,
  IoSettingsSharp,
} from "react-icons/io5";
import TopNavLinkComponent from "./top-nav-links";
import { ToggleSideMenu } from "@/zustand/admin-menu-state";
import { FiMenu } from "react-icons/fi";

const TopNavigation = () => {
  const pathName = usePathname();
  const pathSegments = pathName.split("/").filter(Boolean);
  const secondParams = pathSegments[1];
  const setActive = ToggleSideMenu((state) => state.setActive);


  return (
    <>
      <div className="flex flex-col-reverse w-full justify-between gap-6 md:flex-row md:items-center pt-3">
        <div className="capitalize w-full lg:w-2/5">
          <ol className="flex flex-wrap items-center justify-start w-full bg-opacity-60 rounded-md bg-transparent p-0 transition-all">
            <li className="flex items-center text-blue-gray-900 antialiased font-sans text-sm font-normal leading-normal cursor-pointer transition-colors duration-300 hover:text-light-blue-500">
              <Link
                href={"/admin"}
                className={`${pathName == "/admin" ? "text-blue-customer" : "text-gray-customer"}`}
              >
                dashboard
              </Link>
              <span className="font-normal text-md mx-2 text-gray-customer">/</span>
            </li>
            <li className="flex items-center text-white-customer antialiased font-sans text-sm font-normal leading-normal cursor-pointer transition-colors duration-300 ">
              <Link href={"/admin"}>{secondParams ? secondParams : null}</Link>
            </li>
          </ol>
          <h6 className="text-blue-active-customer">{secondParams}</h6>
        </div>
        <div className="flex items-center justify-end w-3/5">
          <div className="mr-auto md:mr-4 md:w-56 ">
            <div className="relative w-full min-w-[200px] h-10">
              <input
                className="h-full w-full border-blue-customer border-[1px] rounded px-2 outline-none focus:shadow-sm focus:shadow-blue-customer focus:placeholder:text-blue-hover-customer transition-all duration-300 placeholder:text-xs text-sm text-blue-active-customer"
                type="search"
                placeholder="search your item..."
              />
            </div>
          </div>
          <Link href={"ka"}>
            <button className="align-middle select-none font-sans font-bold text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-gray-customer hover:text-white-customer active:bg-blue-white-active-customer hidden items-center gap-1 px-4 lg:flex normal-case">
              <IoPersonCircleSharp className="h-5 w-5" />
              Sign Up
            </button>
          </Link>
          <TopNavLinkComponent href={"/admin"} icon={<FiMenu />} resposiveChange={true} setActive={setActive} />
          <TopNavLinkComponent href={"/admin"} icon={<IoPersonCircleSharp />} resposiveChange={true}/>
          <TopNavLinkComponent href={"/admin"} icon={<IoNotifications />} />
          <TopNavLinkComponent href={"/admin"} icon={<IoSettingsSharp />} />
        </div>
      </div>
    </>
  );
};

export default TopNavigation;
