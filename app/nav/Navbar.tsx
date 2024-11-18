import { AiOutlineCar } from "react-icons/ai";

export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 flex justify-between bg-white shadow-md py-5 px-5 items-center text-gray-800">
            <div className="flex items-center gap-2 text-3xl font-semibold text-red-500 cursor-pointer">
                <AiOutlineCar size={34} />
                <div>Carsties Auctions</div>
            </div>
            <div>Search</div>
            <div>Login</div>
        </header>
    );
}