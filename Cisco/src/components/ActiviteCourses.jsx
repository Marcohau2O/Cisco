import { NavLink } from 'react-router-dom';

export default function ActiveCourses() {
    return(
    <NavLink to="/Curso_1">
        <section>
            <h2 className="text-white font-bold text-xl mb-5">Cursos Activos</h2>
            <div className="bg-[#7FC5E8] rounded-3xl p-6  flex items-center gap-4">
                <div className="relative w-24 h-32">
                        <svg className="absolute top-0 left-0 h-32" viewBox="0 0 64 64">
                            
                            <circle
                                cx="32"
                                cy="32"
                                r="28"
                                stroke="rgba(255,255,255,0.3)"
                                strokeWidth="6"
                                fill="none"
                                strokeLinecap="round"
                            />
                            
                            <circle
                                cx="32"
                                cy="32"
                                r="28"
                                stroke="white"
                                strokeWidth="6"
                                fill="none"
                                strokeDasharray="175"
                                strokeDashoffset="87.5"
                                strokeLinecap="round"
                                transform="rotate(90 32 32)"
                            />
                        </svg>
                    <div className="absolute inset-0 flex items-center justify-center w-34 text-3xl text-white">
                        50%
                    </div>
                </div>
                <div className="ml-12">
                    <h3 className="text-white font-semibold text-3xl">Curso 1</h3>
                    <p className="text-[#F2F2F2] text-sm mb-8">Puro skibidi</p> 
                    <p className="text-[#F2F2F2] text-sm">Continuar lección 2</p>
                </div>
            </div>
        </section>
    </NavLink>
    );
}