import SearchBar from '../components/SearchBar'

export default function Header() {
    return (
        <header className="relative bg-white rounded-b-[4rem] w-[28.4rem] h-[20.5rem] pb-2">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[60%] h-8 bg-black rounded-b-2xl"></div> 
            <div className="pt-6 p-6"> 
                <img src="src\assets\img\LogoCisco.png" alt="Cisco Logo" className="mx-5 mt-5 w-18" /> 
                <div className="px-[5%] pt-8">
                   <h1 className="text-[#33ADE7] font-semilight text-3xl text-left tracking-wider uppercase font-sans">
  BIENVENIDO
</h1>

                    <h2 className="text-[#29a3db] font-bold text-3xl text-left">[NOMBRE]!</h2>
                </div>
                <div className="mt-4 pt-0.5"> 
                    <SearchBar />
                </div>
            </div>
        </header>
    )
}