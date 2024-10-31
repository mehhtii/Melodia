import "@/styles/navbar.css";
import MobileNavigation from "./mobileSection/mobile-navigation";
import { RiHome5Line } from "react-icons/ri";
import {
  IoCompassOutline,
  IoPersonCircleOutline,
  IoTimeOutline,
} from "react-icons/io5";
import { FaCompactDisc, FaRegHeart } from "react-icons/fa";
import { GiBackwardTime } from "react-icons/gi";
import NavbarLink from "./desktop-nav-link";
import { BsMusicNoteList } from "react-icons/bs";
import { MdOutlineLibraryAdd, MdOutlineLogout } from "react-icons/md";
import { TbSettings } from "react-icons/tb";
import MobileBottomBar from "./mobileSection/Mobile-bottom-bar";
import ResponsiveMenu from "./mobileSection/responsive-menu";
import MobileSearchBox from "./mobileSection/mobile-search-component";

const Navigation = () => {
  return (
    <>
      <div className="navbar w-96 mobile_navabr_h mx-auto flex md:w-64 md:shadow-[0_35px_34px_-15px_rgba(0,0,0,0.3)] md:shadow-pink-customer md:min-h-svh md:border-r-pink-customer md:border-r-2 md:mx-0 md:block md:overflow-y-scroll">
        <div className="text-center w-full pt-7 hidden md:block">
          <h1 className="text-pink-customer font-extrabold text-2xl">
            Melodies
          </h1>
        </div>
        <div className="w-4/5 mx-auto px-1 pt-4 text-start hidden md:block">
          <small className={`text-pink-customer ms-1 `}>menu</small>
          <ul className="mt-3 mb-2">
            <NavbarLink href={"/"} icon={<RiHome5Line />} title={"Home"} />
            <NavbarLink
              href={"/discover"}
              icon={<IoCompassOutline />}
              title={"Discover"}
            />
            <NavbarLink
              href={"/albums"}
              icon={<FaCompactDisc />}
              title={"Albums"}
            />
            <NavbarLink
              href={"/artists"}
              icon={<IoPersonCircleOutline />}
              title={"Artists"}
            />
          </ul>

          <small className={`text-pink-customer ms-1 `}>Library</small>
          <ul className="mt-3 mb-2">
            <NavbarLink
              href={"/resnt-added"}
              icon={<IoTimeOutline />}
              title={"Resnt Added"}
            />
            <NavbarLink
              href={"/most-played"}
              icon={<GiBackwardTime />}
              title={"Most played"}
            />
          </ul>

          <small className={`text-pink-customer ms-1`}>
            Playlist and favorites
          </small>
          <ul className="mt-4 mb-2">
            <NavbarLink
              href={"/favorites"}
              icon={<FaRegHeart />}
              title={"Your favorites"}
            />
            <NavbarLink
              href={"/playlist"}
              icon={<BsMusicNoteList />}
              title={"Your playlist"}
            />
            <NavbarLink
              href={"/add-playlist"}
              icon={<MdOutlineLibraryAdd />}
              title={"Add playlist"}
            />
          </ul>

          <small className={`text-pink-customer ms-1`}>General</small>
          <ul className="mt-4 mb-2">
            <NavbarLink
              href={"/setting"}
              icon={<TbSettings />}
              title={"Setting"}
            />
            <NavbarLink
              href={"/logout"}
              icon={<MdOutlineLogout />}
              title={"Logout"}
            />
          </ul>
        </div>

        <MobileNavigation />
        <MobileBottomBar />
      </div>
      <ResponsiveMenu />
      <MobileSearchBox/>
    </>
  );
};

export default Navigation;
