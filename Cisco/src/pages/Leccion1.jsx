import { NavLink } from "react-router-dom"
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io"
import { CgNotes } from "react-icons/cg";
import EvaluacionItem from "../components/componentsLesccion/EvaluacionItem";

export default function Leccion_1() {
    return(
        <>
        <div className="bg-white text-sky-500 rounded-b-3xl py- px-6 w-[28.4rem] h-[10rem] flex justify-between items-center">
            <NavLink to="/">
                <button> 
                    <IoIosArrowBack size={50}/>
                </button>
            </NavLink>

            <h2 className="text-4xl font-bold -mb-15 flex-grow text-center">Lección 1</h2>
        </div>

        <div className="bg-sky-300 h-[13rem] w-[28.4rem] flex items-center justify-center text-white text-lg font-semibold">
                Imagen
        </div>

            <div className="px-6 py-8 m-4 text-white">
                <h3 className="font-bold mb-2 text-lg">Titulo de tema</h3>
                <p className="text-sm leading-tight mb-4">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit torquent posuere,
                    est velit parturient dapibus, est velit parturient dapibus mollis.
                </p>

                <div className="flex items-center justify-center">
                    <img src="" alt="imagen de industrial" className="w-[23rem] h-[10rem] border-black bg-white shadow-xl rounded-lg"/>
                </div>

                <h3 className="font-bold mb-2 text-lg pt-5">Titulo de tema</h3>
                <p className="text-sm leading-tight mb-4">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit torquent posuere,
                    est velit parturient dapibus, est velit parturient dapibus mollis.
                </p>

                <p className="text-sm leading-tight mb-4">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit torquent posuere,
                    est velit parturient dapibus.
                </p>

                <div className="p-4 text-white">
                    <div className="bg-white/20 rounded-xl px-4 py-3 mb-6 w-[23rem] flex items-start space-x-4">
                        <CgNotes size={30} className="text-white mt-1"/>
                        <div className="flex flex-col">
                            <h2 className="font-bold mb-1 text-sm">Actividad 1</h2>
                            <p className="text-xs leading-tight">Lorem ipsum dolor sit amet consectetur</p>
                        </div>
                    </div>
                </div>

                <ul className="text-sm leading-tight mb-3">
                    <p className="text-sm leading-tight mb-2">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit torquent posuere,
                        est velit parturient dapibus.
                    </p>

                    <li className="p-2">-Praesent imperdiet viverra enim nec pharetra.</li>

                    <li className="p-2">-Maecenas volutpat porta odio, luctus vehicula turpis malesuada.</li>

                    <li className="p-2">-Integer mi lorem, posuere vitae maximus quis, convallis vel nisi.</li>
                </ul>

                <p className="text-sm leading-tight mb-4">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit torquent posuere,
                    est velit parturient dapibus.
                </p>
                {/* <p className="text-sm leading-tight mb-4">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit torquent posuere,
                    est velit parturient dapibus, est velit parturient dapibus mollis.
                </p>

                <p className="text-sm leading-tight mb-4">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit torquent posuere,
                    est velit parturient dapibus, est velit parturient dapibus mollis.
                </p> */}

                <div className="p-3 pb-15">
                    <EvaluacionItem/>
                </div>

            </div>
        </>
    )
}