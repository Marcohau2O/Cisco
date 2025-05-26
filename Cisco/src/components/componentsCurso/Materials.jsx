import { NavLink } from "react-router-dom";
import { FaCheck } from "react-icons/fa";

export default function Materials() {
    const chapters = [
        { title: "Capítulo 1", completed: true, tasksDone: 8, totalTasks: 8 },
        { title: "Capítulo 2", completed: false, tasksDone: 4, totalTasks: 8 },
        { title: "Capítulo 3", completed: false, tasksDone: 2, totalTasks: 8 },
        { title: "Capítulo 4", completed: false, tasksDone: 2, totalTasks: 8 },
    ];

  return (
    <NavLink to="/leccion_1">
        <div className="p-4 text-white">
        {chapters.map((chapter, index) => {
            const progress = Math.round((chapter.tasksDone / chapter.totalTasks) * 100);
            return (
            <div
                key={index}
                className="bg-white/20 rounded-xl px-4 py-3 mb-6 w-[23rem] flex justify-between items-center"
            >
                <div>
                <h3 className="font-bold text-lg">{chapter.title}</h3>
                <p className="text-sm">
                    {chapter.completed
                    ? "Completada"
                    : `${chapter.tasksDone} de ${chapter.totalTasks} tareas completadas`}
                </p>
                </div>

                <div className="w-10 h-10 relative">
                {chapter.completed ? (
                    <div className="w-full h-full rounded-full bg-white flex items-center justify-center text-blue-600 text-xl">
                    <FaCheck />
                    </div>
                ) : (
                    <svg viewBox="0 0 36 36" className="w-full h-full">
                    <path
                        className="text-white/30"
                        d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3.8"
                    />
                    <path
                        className="text-white"
                        d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3.8"
                        strokeDasharray={`${progress}, 100`}
                    />
                    <text
                        x="18"
                        y="20.35"
                        className="fill-white text-[10px]"
                        textAnchor="middle"
                    >
                        {progress}%
                    </text>
                    </svg>
                )}
                </div>
            </div>
            );
        })}
        </div>
    </NavLink>
  );
}