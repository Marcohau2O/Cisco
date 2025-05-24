import SearchBar from '../components/SearchBar'

export default function Header() {
    return (
        <header className="text-center bg-white rounded-b-4xl w-[28.4rem] h-[17rem]">
            <img src="/cisco-logo.png" alt="Cisco Logo" className="m-10 w-16 mx-auto" />
            <h1 className="text-[#87c1e4] font-semibold text-lg">BIENVENIDO</h1>
            <h2 className="text-[#29a3db] font-bold text-2xl">[NOMBRE]!</h2>
            <SearchBar />
        </header>
    )
}