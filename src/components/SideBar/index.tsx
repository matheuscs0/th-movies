import Link from "next/link"
import { BiHomeCircle, BiSearch } from "react-icons/bi"
import { IoMdExit } from "react-icons/io"
import { IoSettingsOutline } from "react-icons/io5"


export const SideBar = () => {
    return (
        <section className="w-80 h-full flex flex-col justify-center items-center px-20 py-5">
            <div className="w-full flex justify-center">
                <h1 className="text-white text-2xl font-bold">TH <span className="text-[#6680C0]">MOVIES</span></h1>
            </div>
            <div className="w-full flex flex-col justify-center items-center text-[#76737a] mt-10 pb-5 border-b border-[#76737a]">
                <div className="w-full flex p-3 justify-start">
                    <p className="text-xs font-extralight">MENU</p>
                </div>
                <Link href='/' className="w-full flex px-3 py-1 justify-start">
                    <p className="text-md font-normal flex justify-start items-center gap-2"><BiHomeCircle className="text-xl mb-1"/>Home</p>
                </Link>
                <div className="w-full flex px-3 py-1 justify-start">
                    <button className="text-md font-normal flex justify-start items-center gap-1"><BiSearch className="text-2xl "/>Search</button>
                </div>

            </div>
            <div className="w-full flex flex-col justify-center items-center text-[#76737a] mt-3 pb-5 ">
            <Link href='/' className="w-full flex px-3 py-1 justify-start">
                    <p className="text-md font-normal flex justify-start items-center gap-2"><IoSettingsOutline className="text-xl mb-1"/>Settings</p>
                </Link>
                <div className="w-full flex px-3 py-1 justify-start">
                    <button className="text-md font-normal flex justify-start items-center gap-1"><IoMdExit  className="text-2xl "/>Exit</button>
                </div>
            </div>

        </section>
    )
}