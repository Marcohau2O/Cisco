import { MdHomeFilled } from "react-icons/md";
import { FaUser } from "react-icons/fa6";
import { HiMiniCog6Tooth } from "react-icons/hi2";

export default function ButtomNav() {
    return (
        <nav className="w-full flex justify-around py-4 mx-6 bg-white shadow-inner fixed bottom-0">
            <button className="text-sky-500 text-4xl"> <MdHomeFilled/> </button>
            <button className="text-sky-500 text-4xl"> <FaUser/> </button>
            <button className="text-sky-500 text-4xl"> <HiMiniCog6Tooth /> </button>
        </nav>
    )
}