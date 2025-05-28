export default function Categories() {
    const categories = ["Categoría 1", "Categoría 2", "Categoría 3", "Categoría 4"]

    return (
        <section className="mt-4">
            <h2 className="text-white font-bold text-lg mb-2">Categorias</h2>
            <div className="flex justify-between gap-2">
                {categories.map((cat, idx) => (
                    <div key={idx} className="flex flex-col items-center">
                        <div className="bg-[#88BADF] w-20 h-20 rounded-md"></div>
                        <p className="text-white text-xs mt-1">{cat}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}