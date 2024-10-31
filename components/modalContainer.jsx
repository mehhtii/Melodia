"use client"
import { IoMdCloseCircleOutline } from "react-icons/io";

const ModalContainer = ({
  children,
  btnText,
  title,
  modalTitle,
  modalTitleIcon,
  Icon,
}) => {
  return (
    <>
      <div className="absolute w-full h-full bg-[#2d2c2c68] top-0 left-0 z-50 flex items-center justify-center">
        <div className="w-3/5 h-4/5 relative overflow-y-scroll bg-white-customer px-6 py-4 rounded-xl">
          <div className="h-auto w-full flex justify-between">
            <div className="">
              <div className="text-3xl">{Icon}</div>
              <div className="flex items-center gap-1 text-gray-customer mt-3 ms-5">
                <span className=" ">{modalTitle}</span>
                {modalTitleIcon}
              </div>
              <h4 className="ms-12 font-bold">{title}</h4>
            </div>
            <div className="h-1/3 flex items-center gap-1 text-gray-customer cursor-pointer">
              <small>Close</small>
              <IoMdCloseCircleOutline className="font-bold text-3xl text-gray-customer" />
            </div>
          </div>
          <div className="h-auto bg-pink-customer py-2 ">{children}</div>
          <div className="h-auto">
            <button type="submit" className="w-1/6 bg-blue-customer text-white-customer hover:bg-transparent hover:text-blue-customer hover:border-blue-customer transition-all duration-300 shadow-sm hover:shadow-blue-customer border border-blue-white-customer rounded-lg py-2 px-3">
              {btnText}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalContainer;
