"use client"
import { SearchModalState } from "@/zustand/responsive-menu-state";
import Link from "next/link";
import { BsSearch } from "react-icons/bs";

const DesktopTopNavFixed = () => {
  const setShowModal = SearchModalState((state) => state.setShowModal);
  return (
    <>
      <div className="absolute z-10 w-full h-auto hidden md:block">
        <div className="absolute top-10 right-0 left-0 mr-auto ml-auto w-10/12  flex items-center ">
          <div className="desktop_topnav_searchbox md:w-1/6 lg:w-2/6">
            <input
              type="search"
              placeholder="search for musics,Atrists..."
              className="w-full md:hidden lg:block py-[6px] px-2 pl-7 bg-dark-customer transition duration-200 text-blue-customer text-sm border border-blue-white-customer outline-none rounded-xl placeholder:text-sm focus:shadow-md focus:shadow-pink-customer"
            />
            <BsSearch className="absolute md:hidden lg:block left-2 cursor-pointer  top-0 bottom-0 mt-auto mb-auto text-blue-customer"/>
            <BsSearch onClick={setShowModal} className="absolute font-bold md:block lg:hidden left-2 cursor-pointer  top-0 bottom-0 mt-auto mb-auto text-blue-customer"/>
          </div>
          <div className="md:w-3/6 lg:w-2/6">
            <ul className="flex items-center md:gap-2 lg:gap-4 justify-center md:text-sm text-blue-white-customer">
                <Link href={"/discover"}><li>About Us</li></Link>
                <Link href={"/discover"}><li>Contact</li></Link>
                <Link href={"/discover"}><li>Premium</li></Link>
            </ul>
          </div>
          <div className=" w-2/6 flex gap-3">
          <button className="md:w-[80px] lg:w-[162px] md:h-7 lg:h-9 bg-transparent  rounded border border-pink-customer text-pink-customer hover:bg-pink-customer hover:text-blue-white-customer transition duration-300">Login</button>
          <button className="md:w-[80px] lg:w-[162px] md:h-7 lg:h-9 bg-pink-customer text-blue-white-customer rounded hover:bg-transparent hover:text-pink-customer hover:border hover:border-pink-customer transition duration-300">Sign Up</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopTopNavFixed;
