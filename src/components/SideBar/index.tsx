"use client";
import Link from "next/link";
import { useState } from "react";
import { BiHomeCircle, BiSearch } from "react-icons/bi";
import { IoMdExit } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";

export const SideBar = () => {
  const [step, setStep] = useState(1);
  return (
    <section className="w-80 h-full flex flex-col justify-center items-center px-20 py-5">
      <div className="w-full flex justify-center">
        <h1 className="text-white text-2xl font-bold">
          TH <span className="text-[#6680C0]">MOVIES</span>
        </h1>
      </div>
      <div className="w-full flex flex-col justify-center items-center text-[#76737a] mt-10 pb-5 border-[#76737a] border-b-[0.3px]">
        <div className="w-full flex p-3 justify-start">
          <p className="text-xs font-extralight">MENU</p>
        </div>
        <Link href="/" className="w-full flex px-3 py-1 justify-start">
          <p
            onClick={() => setStep(1)}
            className={`text-md font-normal flex justify-start items-center gap-2 ${
              step === 1 ? "underline text-[#6680C0]" : ""
            }`}
          >
            <BiHomeCircle className={`text-xl mb-1`} />
            Home
          </p>
        </Link>
        <div className="w-full flex px-3 py-1 justify-start">
          <button
            onClick={() => setStep(2)}
            className={`text-md font-normal flex justify-start items-center gap-2 ${
              step === 2 ? "underline text-[#6680C0]" : ""
            }`}
          >
            <BiSearch className="text-2xl " />
            Search
          </button>
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items-center text-[#76737a] mt-3 pb-5 ">
        <Link href="/" className="w-full flex px-3 py-1 justify-start">
          <p
            onClick={() => setStep(3)}
            className={`text-md font-normal flex justify-start items-center gap-2 ${
              step === 3 ? "underline text-[#6680C0]" : ""
            }`}
          >
            <IoSettingsOutline className="text-xl mb-1" />
            Settings
          </p>
        </Link>
        <div className="w-full flex px-3 py-1 justify-start">
          <button
            onClick={() => setStep(3)}
            className={`text-md font-normal flex justify-start items-center gap-2 ${
              step === 4 ? "underline text-[#6680C0]" : ""
            }`}
          >
            <IoMdExit className="text-2xl " />
            Exit
          </button>
        </div>
      </div>

      <div className="w-full flex justify-center items-center text-[#76737a] mt-3 pb-5 bottom-10 absolute">
        <div className="w-full flex justify-center gap-3 items-center">
          <div className="bg-[#76737a] w-14 h-14 rounded-full"></div>
          <div className="flex flex-col justify-center">
            <p className="text-lg text-white">Matheus</p>
            <p className="text-sm font-extralight">test@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
  );
};
