"use client";
import { GoPerson } from "react-icons/go";
import ResponsiveMenuLinks from "./responsive-menu-links";
import { FaRegHeart } from "react-icons/fa";
import { BsClockHistory, BsMusicNoteList } from "react-icons/bs";
import { MdOutlineLibraryAdd, MdOutlineLogout } from "react-icons/md";
import { TbSettings } from "react-icons/tb";
import { ResponsiveMenulists } from "@/zustand/responsive-menu-state";

const ResponsiveMenu = () => {
  const activedMenu = ResponsiveMenulists((state) => state.active);
  const setActivedMenu = ResponsiveMenulists((state) => state.setActived);
  return (
    <>
      <div
        className={`min-h-screen background-modal absolute p-0 m-0  top-0 ${activedMenu ? "w-full opacity-100" : "opacity-0"}`}
      >
        <div className={`${activedMenu ? "w-1/2 opacity-100" : "w-0 opacity-0"} transition duration-700 min-h-screen bg-blur absolute m-0 top-0 shadow-lg shadow-pink-customer overflow-y-scroll`}>
          <div className="responsive-logo w-full min-h-14 flex justify-center items-center mt-4">
            <h1 className="text-pink-customer">Melodies</h1>
          </div>
          <div className="w-5/6 mx-auto min-h-[1px] bg-pink-customer block"></div>
          <ul className={`mt-7 w-5/6  mx-auto`}>
            <ResponsiveMenuLinks
              href={"/"}
              title={"Account"}
              icon={<GoPerson className="text-xl font-bold" />}
              timeAnime={0.2}
            />
            <ResponsiveMenuLinks
              href={"/"}
              title={"Favourite"}
              icon={<FaRegHeart className="text-xl font-bold" />}
              timeAnime={0.3}
            />
            <ResponsiveMenuLinks
              href={"/"}
              title={"History"}
              icon={<BsClockHistory className="text-xl font-bold" />}
              timeAnime={0.4}
            />
            <ResponsiveMenuLinks
              href={"/"}
              title={"Playlist"}
              icon={<BsMusicNoteList className="text-xl font-bold" />}
              timeAnime={0.6}
            />
            <ResponsiveMenuLinks
              href={"/"}
              title={"Add Playlist"}
              icon={<MdOutlineLibraryAdd className="text-xl font-bold" />}
              timeAnime={0.7}
            />
            <ResponsiveMenuLinks
              href={"/"}
              title={"Logout"}
              icon={<MdOutlineLogout className="text-xl font-bold" />}
              timeAnime={0.8}
            />
            <ResponsiveMenuLinks
              href={"/"}
              classname={true}
              title={"Setting"}
              icon={<TbSettings className="text-xl font-bold" />}
            />
          </ul>
        </div>
        <div onClick={setActivedMenu} className="w-1/2 absolute right-0 h-screen"></div>
      </div>
    </>
  );
};

export default ResponsiveMenu;
