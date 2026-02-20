import { Link } from "react-router";
import { IoCartOutline } from "react-icons/io5";

export default function Header() {
    return (
        <header className="sticky top-0 z-50 bg-breakwhite">
            <div className="max-w-360 mx-auto px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <img className="max-w-60" src="/img/logo_mieloria_vertical.png" alt="Logo Mieloria Vertical" />
                </div>
                <nav className="flex items-center gap-8">
                    <Link to="/" className="text-sm tracking-wide hover:text-amber-700 transition-colors text-amber-700 border-b-2 border-amber-600 pb-0.5">Produits</Link>
                    <Link to="/" className="text-sm tracking-wide hover:text-amber-700 transition-colors text-gray-600">Ressources</Link>
                    <Link to="/" className="text-sm tracking-wide hover:text-amber-700 transition-colors text-gray-600">Contact</Link>
                </nav>
                <button className="flex items-center gap-2 text-gray-700 hover:text-amber-700 transition-colors relative">
                    <IoCartOutline className="w-5 h-5"/>
                    <span className="text-sm hidden sm:inline">Panier</span>
                </button>
            </div>
        </header>
    )
}