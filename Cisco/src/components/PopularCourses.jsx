import { FaStar } from "react-icons/fa";

export default function PopularCourses() {
    const courses = [
        { title: "Top Course 01", rating: "5.0" },
        { title: "Top Course 02", rating: "4.8" },
    ];

    return (
        <section className="mt-4">
            <h2 className="text-white font-bold text-lg mb-2">Cursos Populares</h2>
            <div className="grid grid-cols-2 gap-4">
                {courses.map((course, id) => (
                    <div key={id} className="bg-opacity-20 p-2 rounded-xl text-white">
                        <div className="aspect-square rounded-lg bg-[#95A4BD]"></div>
                        <h3 className="mt-2 text-sm font-semibold">{course.title}</h3>
                        <div className="flex items-center text-xs text-white opacity-80">
                            <FaStar className="text-white mr-1"/> 
                            <span>{course.rating}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}