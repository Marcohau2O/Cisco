export default function SearchBar() {
    return (
        <div className="mt-4 mb-4">
            <div className="flex items-center bg-[#29a3db] rounded-full shadow">
                <input type="text" 
                placeholder="Encuentra un curso"
                className="flex-1 outline-none text-gray-300 "
                />
                <button className="bg-[#9ad1ec] rounded-full h-12 px-5">
                    🔍
                </button>
            </div>
        </div>
    )
}