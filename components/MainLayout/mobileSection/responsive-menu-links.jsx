import Link from "next/link";
import { motion } from "framer-motion";
import { ResponsiveMenulists } from "@/zustand/responsive-menu-state";

const ResponsiveMenuLinks = ({
  icon,
  title,
  href,
  classname = false,
  timeAnime,
}) => {
  const activedMenu = ResponsiveMenulists((state) => state.active);
  return (
    <>
      <Link href={href}>
        <motion.li
          initial={{ x: -10, opacity: 0 }}
          whileInView={{
            x: activedMenu ? 0 : -15,
            opacity: activedMenu ? 1 : 0,
          }}
          transition={{ duration: timeAnime }}
          className={`${classname ? "absolute bottom-0 w-4/5 text-pink-customer active:text-blue-active-customer active:bg-blue-white-active-customer" : ""} flex items-center gap-1 text-blue-customer active:bg-blue-active-customer active:text-pink-customer mt-3 py-1 px-2  rounded`}
        >
          {icon}
          <span className="text-lg">{title}</span>
        </motion.li>
        <div className="min-h-[0.7px] bg-blue-white-active-customer"></div>
      </Link>
    </>
  );
};

export default ResponsiveMenuLinks;
