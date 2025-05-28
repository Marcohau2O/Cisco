import { IoIosArrowBack } from "react-icons/io";
import { NavLink } from "react-router-dom";

export default function Settings() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#47B4E2] to-[#544197] flex flex-col">
      <div className="w-full relative">

        <div className="bg-white rounded-b-3xl max-w-4xl mx-auto px-6 md:px-20 py-6 ">
          <div className="flex items-center justify-between">
            <NavLink to="/">
              <button>
                <IoIosArrowBack size={40} />
              </button>
            </NavLink>
            <h1 className="text-3xl font-semibold text-sky-500 mt-8">Configuración</h1>
            <div className="w-10"></div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto w-full px-6 md:px-20 pt-8 text-left">
        <h2 className="text-white text-sm font-semibold ">Configuración</h2>
        <p className="text-white text-sm text-[12px] grid grid-cols-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Iste praesentium quia vel corrupti eligendi fugit possimus,
          ut illum nulla expedita, veritatis deleniti maxime eius
          voluptates nemo blanditiis voluptatum ullam!
        </p>
      </div>
    </div>
  );
}