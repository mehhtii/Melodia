import Link from "next/link";

const TopNavLinkComponent = ({
  href,
  icon,
  resposiveChange = null,
  setActive,
}) => {
  
  return (
    <>
      <Link href={href} onClick={setActive}>
        <button
          className={`${resposiveChange ? "lg:hidden" : "block"} relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-gray-customer hover:text-white-customer  active:bg-blue-white-active-customer`}
        >
          <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 text-lg">
            {icon}
          </span>
        </button>
      </Link>
    </>
  );
};

export default TopNavLinkComponent;
