"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

const MobileBottomBarLink = ({href,title,icon}) => {
    const pathName = usePathname();
    return ( 
        <>
         <Link href={href} >
            <li className={`${pathName == href ? "text-pink-customer" : "text-blue-customer hover:text-blue-hover-customer"} flex justify-center items-center gap-2 flex-col`}>
              <span>
                {icon}
              </span>
              <span>{title}</span>
            </li>
          </Link>
        </>
     );
}
 
export default MobileBottomBarLink;