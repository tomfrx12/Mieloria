import { Link } from "react-router";
import { IoCartOutline } from "react-icons/io5";

export default function Header() {
    return (
        <div className="bg-[#FAF4EA]">
            <div className="flex justify-between justify-self-center w-360 py-4">
                <img className="max-w-60" src="/img/logo_mieloria_vertical.png" alt="Logo Mieloria Vertical" />
                <div className="flex items-center gap-15">
                    <Link className="border-b-2 border-b-[#EBB912]">Produits</Link>
                    <Link>Ressources</Link>
                    <Link>Contact</Link>
                </div>
                <Link className="flex items-center gap-1">
                    <IoCartOutline className="w-5 h-5"/>
                    <p>Panier</p>
                </Link>
            </div>
        </div>
    )
}