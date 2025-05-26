import { NavLink } from 'react-router-dom';

export default function ActiveCourses() {
    return(
    <NavLink to="/Curso_1">
        <section>
            <h2 className="text-white font-bold text-lg mb-2">Cursos Activos</h2>
            <div className=" bg-[#9ad1ec] rounded-xl p-4 flex items-center gap-4">
                <div className="relative w-16 h-16">
                    <svg className="absolute top-0 left-0 w-full h-full">
                        <circle
                        cx="32"
                        cy="32"
                        r="28"
                        stroke="white"
                        strokeWidth="6"
                        fill="none"
                        strokeDasharray="175"
                        strokeDashoffset="87.5"
                        />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center text-xl font-bold text-white">
                        50%
                    </div>
                </div>
                <div>
                    <h3 className="text-white font-bold text-lg">Curso 1</h3>
                    <p className="text-white text-sm">Puro skibidi</p>
                    <p className="text-white text-sm">Continuar lección 2</p>
                </div>
            </div>
        </section>
    </NavLink>
    );
}