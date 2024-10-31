"use client";
import { SearchModalState } from "@/zustand/responsive-menu-state";
import { BsSearch } from "react-icons/bs";
import { FaWindowClose } from "react-icons/fa";

const MobileSearchBox = () => {
  const showModal = SearchModalState((state) => state.showModal);
  const setShowModal = SearchModalState((state) => state.setShowModal);
  return (
    <>
      <div
        className={`transition duration-300 ${showModal ? "w-full min-h-screen opacity-100 z-50" : "opacity-0 w-0 h-0"}  min-h-screen search_box absolute top-0`}
      >
        <div className="mx-auto w-4/5 mt-20 relative">
          <input
            type="search"
            placeholder="Find your music here"
            className="outline-none border-[1px] border-blue-customer focus:border-pink-customer focus:shadow-sm focus:shadow-pink-customer bg-dark-customer rounded-md py-2 px-2 w-full mx-auto block transition duration-300 text-blue-customer"
          />
          <BsSearch className="text-blue-customer absolute top-2 bottom-0 right-4 text-xl cursor-pointer" />
        </div>
        <FaWindowClose onClick={setShowModal} className="text-blue-white-active-customer absolute top-4 right-10 text-2xl" />
      </div>
    </>
  );
};

export default MobileSearchBox;
