import { NavLink } from "react-router-dom";

export default function Settings() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-400 via-blue-500 to-blue-600">
      <div className="bg-white rounded-b-3xl px-4 py-6 mb-0">
        <div className="flex items-center justify-between">
          <button
            variant="ghost"
            size="icon"
            className="text-sky-500 hover:bg-sky-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <NavLink to="/">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />

              </NavLink>
            </svg>
          </button>
          <h1 className="text-xl font-semibold text-sky-500">Configuraciones</h1>
          <div className="w-10"></div>
        </div>
      </div>

      <div className="px-6 pt-8">
        <h2 className="text-white text-md font-semibold mb-4"> Configuraciones</h2>
        <p className="text-white text-sm leading-relaxed opacity-90">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste praesentium quia eaque,
          vel corrupti eligendi fugit possimus, ut illum nulla expedita, veritatis deleniti
          maxime eius voluptates nemo blanditiis voluptatum ullam!
        </p>
      </div>
    </div>
  );
}
