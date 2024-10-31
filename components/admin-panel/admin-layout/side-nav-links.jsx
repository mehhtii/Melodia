import Link from "next/link";

const SideNavLink = ({href,icon,title}) => {
    return ( 
        <>
         <Link href={href}>
            <button className="align-middle mt-4 select-none font-sans font-bold text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-sm py-3 rounded-lg bg-gradient-to-tr from-gray-customer to-dark-customer  text-white-customer shadow-md shadow-[#000000ba] hover:shadow-lg hover:shadow-dark-customer active:opacity-[0.85] w-full flex items-center gap-4 px-4 capitalize">
                {icon}
              <p className="w-5 h-5 text-inherit">{title}</p>
            </button>
          </Link>
        </>
     );
}
 
export default SideNavLink;