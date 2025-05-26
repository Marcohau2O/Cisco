import { useState } from "react";
import { NavLink } from 'react-router-dom';
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import { IoIosArrowBack } from "react-icons/io";
import { FaStar, FaBook, FaGlobe } from "react-icons/fa";
import CourseTabs from "../components/componentsCurso/CourseTabs";
import Materials from "../components/componentsCurso/Materials";
import Reviews from "../components/componentsCurso/Reviews";

export default function Curso1() {
    const [checked, setChecked] = useState(false);

    const [activeTab, setActiveTab] = useState("materials");

    const data = [
        "Dato1", "Dato2", "Dato3", "Dato4", "Dato5", "Dato6", "Dato7", "Dato8"
    ];

    return (
        <>
            <div className="bg-white text-sky-500 rounded-b-3xl py-4 px-6 w-[28.4rem] h-[10rem] flex justify-between items-center">
                <NavLink to="/">
                    <button> 
                        <IoIosArrowBack size={50}/>
                    </button>
                </NavLink>

                <h2 className="text-4xl font-bold -mb-15">Curso 1</h2>
                
                <label className="cursor-pointer">
                    <input type="checkbox"
                    checked={checked}
                    onChange={() => setChecked(!checked)}
                    className="hidden"
                    />
                    {checked ? (
                        <BsBookmarkFill size={34} className="text-sky-500" />
                    ) : (
                        <BsBookmark size={34} className="text-sky-500" />  
                    )}
                </label>
            </div>

            <div className="bg-sky-300 h-[10rem] w-[28.4rem] flex items-center justify-center text-white text-lg font-semibold">
                VIDEO
            </div>

            <div className="grid grid-cols-2 text-white p-2">
                <div className="px-10 py-4 pb-3">
                    <h3 className="font-bold mb-2">Descripción</h3>
                    <p className="text-sm leading-tight md:w-1/2">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit torquent posuere,
                        est velit parturient dapibus mollis.
                    </p>
                </div>
                <div className="px-10 py-10">
                    <ul className="text-xs flex flex-col gap-2 md:w-1/2">
                        <li className="flex items-center gap-2">
                            <FaStar/>
                            <span>
                                Nivel: <strong>Iniciación</strong>
                            </span>
                        </li>
                        <li className="flex items-center gap-2">
                            <FaBook className="text-base" />
                            <span>4 Módulos</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <FaStar className="text-base" />
                            <span>91 valoraciones</span>
                        </li>
                        <li className="flex items-center gap-2">
                                <FaGlobe className="text-base" />
                                <span>Español, English</span>
                            </li>
                    </ul>
                </div>
            </div>

            <div className="bg-white/30 rounded-xl m-4 p-4 text-white w-[24rem]">
                <h4 className="font-semibold mb-2 text-center">Lo que aprenderás</h4>
                <div className="grid grid-cols-3 gap-2 text-sm text-center">
                    {data.map((item, idx) => (
                        <div key={idx}>✓ {item}</div>
                        ))}
                </div>
            </div>

            <div className="pb-15">
                <CourseTabs activeTab={activeTab} setActiveTab={setActiveTab} />
                {activeTab === "materials" ? <Materials /> : <Reviews />}
            </div>
        </>
    )
}