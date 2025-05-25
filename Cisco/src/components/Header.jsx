import SearchBar from '../components/SearchBar'

export default function Header() {
    return (
        <header className="text-center bg-white rounded-b-4xl w-[28.4rem] h-[17rem]">
            <img src="src\assets\img\LogoCisco.png" alt="Cisco Logo" className="m-5 w-18" />
            <h1 className="text-[#87c1e4] font-semibold text-3xl">BIENVENIDO</h1>
            <h2 className="text-[#29a3db] font-bold text-2xl">[NOMBRE]!</h2>
            <SearchBar />
        </header>
    )
}