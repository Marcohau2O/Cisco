import { NavLink } from 'react-router-dom';
import { MdHomeFilled } from "react-icons/md";
import { FaUser } from "react-icons/fa6";
import { HiMiniCog6Tooth } from "react-icons/hi2";

export default function ButtomNav() {
    const linkClass = "text-4xl";
    const active = "text-sky-600";
    const inactive = "text-sky-400";

    return (
        <nav className="w-full flex justify-around py-4 mx-6 bg-white shadow-inner fixed bottom-0">
            <NavLink to="/" className={({ isActive }) => `${linkClass} ${isActive ? active : inactive}`}>
                <MdHomeFilled />
            </NavLink>
            <NavLink to="/profile" className={({ isActive }) => `${linkClass} ${isActive ? active : inactive}`}>
                <FaUser />
            </NavLink>
            <NavLink to="/settings" className={({ isActive }) => `${linkClass} ${isActive ? active : inactive}`}>
                <HiMiniCog6Tooth />
            </NavLink>
        </nav>
    )
}