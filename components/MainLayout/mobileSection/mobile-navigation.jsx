"use client"
import { ResponsiveMenulists, SearchModalState } from "@/zustand/responsive-menu-state";
import { usePathname } from "next/navigation";
import { BsList, BsSearch } from "react-icons/bs";

const MobileNavigation = () => {
  const pathName= usePathname();
  const pageTitle = pathName.replace(/^\/+/ , '');
  const setActivedMenu = ResponsiveMenulists(state=>state.setActived);
  const setShowModal = SearchModalState((state)=>state.setShowModal);
  
  return (
    <>
      <div className="w-1/6 flex justify-end items-center md:hidden">
        <BsSearch onClick={setShowModal} className="text-blue-customer text-xl font-extrabold" />
      </div>
      <div className="w-4/6 flex items-center justify-center md:hidden">
        <h1 className="text-blue-customer text-2xl font-extrabold">
          {pathName == "/" ? "Home" : pageTitle} <span className="text-pink-customer text-2xl">page</span>
        </h1>
      </div>
      <div className="w-1/6 flex justify-start items-center md:hidden">
        <BsList onClick={setActivedMenu} className="text-3xl font-extrabold cursor-pointer text-pink-customer" />
      </div>
    </>
  );
};

export default MobileNavigation;
