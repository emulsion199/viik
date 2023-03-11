import Image from "next/image";
import React, { useReducer, useState } from "react";
import { BsList } from "react-icons/bs";
import { HiXMark } from "react-icons/hi2";
import MobileMenu from "../../Menu/Mobile/MobileMenu";
import ICON_CANCEL from "#assets/icons/line/cancel.svg";
import ICON_BURGER from "#assets/icons/line/burger.svg";
import LOGO from "#assets/logo/default.svg";

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useReducer((x) => !x, false);

  return (
    <>
      <div className="w-full h-16 row bg-black text-white text-sm justify-between items-center px-4">
        <button
          className="flex h-full justify-center items-center"
          onClick={setIsOpen}
        >
          {isOpen ? (
            <Image src={ICON_CANCEL} alt={"cancel"} width={24} height={24} />
          ) : (
            <Image src={ICON_BURGER} alt={"burger"} width={24} height={24} />
          )}
        </button>

        <div className="flex justify-center items-center  absolute left-[calc(50%-16px)]">
          <Image src={LOGO} alt={"logo"} width={29.51} height={26} />
        </div>

        <span className=" text-white text-sm">{"STYLING"}</span>
      </div>

      <div className="flex w-full absolute z-50 top-16">
        {isOpen && <MobileMenu />}
      </div>
    </>
  );
};

export default MobileNavbar;
