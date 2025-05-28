import { SlMagnifier } from "react-icons/sl";

export default function SearchBar() {
    return (
        <div className="flex justify-center mt-4">
            <div className="relative w-[90%]">
                <input 
                    type="text" 
                    placeholder="Encuentra un curso" 
                    className="w-full py-2 px-4 pr-16 rounded-full bg-[#29a3db] placeholder-white/50 text-white/90 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <div className="absolute right-0 top-0 h-full aspect-[1.5]"> {/* Relación de aspecto ovalado */}
                    <div className="bg-[#7BC7E9] h-full w-full flex items-center justify-center rounded-full">
                        <SlMagnifier className="text-white text-lg" />
                    </div>
                </div>
            </div>
        </div>
    );
}