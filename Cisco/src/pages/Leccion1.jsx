import { NavLink } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { CgNotes } from "react-icons/cg";
import EvaluacionItem from "../components/componentsLesccion/EvaluacionItem";

const Leccion_1 = () => {
  return (
    <div className="w-full max-w-md mx-auto text-sky-300 overflow-hidden">
      <div className="relative w-[28.rem]">
      <header className="bg-white rounded-b-[3rem] w-full h-[10rem] z-10 relative">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[60%] h-8 bg-black rounded-b-2xl" />

        <div className="flex items-center h-full px-6 pt-10">
          <NavLink to="/" className="text-sky-500 mr-4">
            <IoIosArrowBack size={30} />
          </NavLink> 
          <h2 className="text-3xl font-bold text-[#33ADE7] tracking-wider uppercase">
            Lección 1
          </h2>
        </div>
      </header>

      
      <div className="-mt-12 bg-sky-300 h-60 flex items-center justify-center text-white font-semibold text-xl  z-0 relative">
        <h1 className="flex justify-center items-center ">Imagen</h1>
      </div>
    </div>

      <div className="px-6 py-8 m-4 text-white">
        <h3 className="font-bold mb-2 text-lg">Titulo de tema</h3>
        <p className="text-sm leading-tight mb-4">
          Lorem ipsum dolor sit amet consectetur adipiscing elit torquent
          posuere, est velit parturient dapibus, est velit parturient dapibus
          mollis.
        </p>

        <div className="flex items-center justify-center">
          <img
            src="src\assets\img\Grafica.png"
            alt="imagen de industrial"
            className="w-[23rem] h-[10rem] border-black bg-white shadow-xl rounded-lg"
          />
        </div>

        <h3 className="font-bold mb-2 text-lg pt-5">Titulo de tema</h3>
        <p className="text-sm leading-tight mb-4">
          Lorem ipsum dolor sit amet consectetur adipiscing elit torquent
          posuere, est velit parturient dapibus, est velit parturient dapibus
          mollis.
        </p>

        <p className="text-sm leading-tight mb-4">
          Lorem ipsum dolor sit amet consectetur adipiscing elit torquent
          posuere, est velit parturient dapibus.
        </p>

        <div className="p- text-white">
          <div className="bg-white/20 rounded-xl px-4 py-3 mb-6 w-[23rem] flex items-start space-x-4">
            <CgNotes size={30} className="text-white mt-1" />
            <div className="flex flex-col">
              <h2 className="font-bold mb-1 text-sm">Actividad 1</h2>
              <p className="text-xs leading-tight">
                Lorem ipsum dolor sit amet consectetur
              </p>
            </div>
          </div>
        </div>

        <ul className="text-sm leading-tight mb-3">
          <p className="text-sm leading-tight mb-2">
            Lorem ipsum dolor sit amet consectetur adipiscing elit torquent
            posuere, est velit parturient dapibus.
          </p>

          <li className="p-2">
            -Praesent imperdiet viverra enim nec pharetra.
          </li>

          <li className="p-2">
            -Maecenas volutpat porta odio, luctus vehicula turpis malesuada.
          </li>

          <li className="p-2">
            -Integer mi lorem, posuere vitae maximus quis, convallis vel nisi.
          </li>
        </ul>

        <p className="text-sm leading-tight mb-4">
          Lorem ipsum dolor sit amet consectetur adipiscing elit torquent
          posuere, est velit parturient dapibus.
        </p>
        {/* <p className="text-sm leading-tight mb-4">
                         Lorem ipsum dolor sit amet consectetur adipiscing elit torquent posuere,
                         est velit parturient dapibus, est velit parturient dapibus mollis.
                     </p>
     
                     <p className="text-sm leading-tight mb-4">
                         Lorem ipsum dolor sit amet consectetur adipiscing elit torquent posuere,
                         est velit parturient dapibus, est velit parturient dapibus mollis.
                     </p> */}

        <div className=" pb-15">
          <EvaluacionItem />
        </div>
      </div>
    </div>
  );
};

export default Leccion_1;
