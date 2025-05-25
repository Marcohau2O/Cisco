export default function Categories() {
    const categories = ["Categoría 1", "Categoría 2", "Categoría 3", "Categoría 4"]

    return (
        <section className="mt-4">
            <h2 className="text-white font-bold text-lg mb-2">Categorias</h2>
            <div className="flex justify-between gap-2">
                { categories.map((cat, idx) => (
                    <div key={idx} className="bg-sky-300 w-20 h-20 rounded-md text-white text-xs text-center flex items-end justify-center pb-1">
                        {cat}
                    </div>
                ))}
            </div>
        </section>
    )
}