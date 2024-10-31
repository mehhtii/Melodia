import Link from "next/link";
import { FaCompactDisc } from "react-icons/fa";
import { IoCompassOutline } from "react-icons/io5";
import { RiHome5Line } from "react-icons/ri";
import { VscLibrary } from "react-icons/vsc";
import MobileBottomBarLink from "./mobile-bottom-links";

const MobileBottomBar = () => {
  return (
    <>
      <div className="mobile_bottom_bar fixed flex items-center bottom-0 right-0 left-0 rounded-t-3xl w-full md:hidden">
        <ul className="flex w-full justify-around items-center">
         <MobileBottomBarLink href={"/"} icon={<RiHome5Line className="text-3xl"/>} title={"Home"}/>
         <MobileBottomBarLink href={"/discover"} icon={<IoCompassOutline className="text-3xl"/>} title={"Discover"}/>
         <MobileBottomBarLink href={"/albums"} icon={<FaCompactDisc className="text-3xl"/>} title={"Albums"}/>
         <MobileBottomBarLink href={"/library"} icon={<VscLibrary className="text-3xl"/>} title={"Library"}/>
        </ul>
      </div>
    </>
  );
};

export default MobileBottomBar;
