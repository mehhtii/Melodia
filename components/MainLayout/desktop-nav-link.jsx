"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoCompassOutline } from "react-icons/io5";

const NavbarLink = ({ icon, title, href }) => {
  const pathName = usePathname();
  return (
    <>
      <Link href={href} className="w-full">
        <li
          className={`${pathName == href ? "bg-pink-customer gap-1" : "hover:bg-blue-white-hover-customer hover:text-blue-hover-customer gap-2"} font-bold max-w-48 min-h-10 mt-1 mx-auto rounded-lg flex justify-start items-center  text-white-customer  transition duration-500`}
        >
          <span className={`ms-5 ${pathName == href ? "text-2xl" : ""}`}>{icon}</span>
          <span>{title}</span>
        </li>
      </Link>
    </>
  );
};

export default NavbarLink;
