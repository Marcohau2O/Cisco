import { NavLink } from "react-router-dom";

export default function SavedCourses() {
  const saved = [
    { title: "Top Course 01" },
    { title: "Top Course 02" },
  ];

  return (
    <NavLink to="/Curso_1">
      <section className="mt-6">
        <h2 className="text-white font-bold text-lg mb-2">Guardados</h2>
        <div className="grid grid-cols-2 gap-4">
          {saved.map((item, idx) => (
            <div
              key={idx}
              className="bg-opacity-20 p-2 rounded-xl text-white"
            >
              <div className="aspect-square rounded-lg bg-[#95A4BD]"></div>
              <h3 className="mt-2 text-sm font-semibold">{item.title}</h3>
            </div>
          ))}
        </div>
      </section>
    </NavLink>
  );
}
