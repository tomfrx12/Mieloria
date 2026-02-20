import { Link } from "react-router";

import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { RiInstagramFill } from "react-icons/ri";
import { AiFillTikTok } from "react-icons/ai";

export default function Footer() {
    return (
        <footer className="bg-breakwhite border-t border-bee pt-12 pb-6 px-6">
            <div className="max-w-6xl mx-auto grid grid-cols-4 gap-10 mb-10">
                <div>
                    <h4 className="font-semibold mb-4 text-sm tracking-wider uppercase">Produits</h4>
                    <ul>
                        <li><Link to="/" className="text-sm text-gray-500 hover:text-honey transition-colors pb-2">Contact</Link></li>
                        <li><Link to="/" className="text-sm text-gray-500 hover:text-honey transition-colors pb-2">Politique de confidentialité</Link></li>
                        <li><Link to="/" className="text-sm text-gray-500 hover:text-honey transition-colors pb-2">Lorem Ipsum</Link></li>
                        <li><Link to="/" className="text-sm text-gray-500 hover:text-honey transition-colors pb-2">Lorem Ipsum</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold mb-4 text-sm tracking-wider uppercase">Ressources</h4>
                    <ul>
                        <li><Link to="/" className="text-sm text-gray-500 hover:text-honey transition-colors pb-2">Contact</Link></li>
                        <li><Link to="/" className="text-sm text-gray-500 hover:text-honey transition-colors pb-2">Politique de confidentialité</Link></li>
                        <li><Link to="/" className="text-sm text-gray-500 hover:text-honey transition-colors pb-2">Lorem Ipsum</Link></li>
                        <li><Link to="/" className="text-sm text-gray-500 hover:text-honey transition-colors pb-2">Lorem Ipsum</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold text-gray-800 mb-4 text-sm tracking-wider uppercase">Réseaux Sociaux</h4>
                    <div className="flex gap-3">
                        <Link to="/"><FaFacebook className="w-5 h-5 hover:scale-110"/></Link>
                        <Link to="/"><AiFillTwitterCircle className="w-5 h-5 hover:scale-110"/></Link>
                        <Link to="/"><RiInstagramFill className="w-5 h-5 hover:scale-110"/></Link>
                        <Link to="/"><AiFillTikTok className="w-5 h-5 hover:scale-110"/></Link>
                    </div>
                </div>
                <div>
                    <h4 className="font-semibold text-gray-800 mb-4 text-sm tracking-wider uppercase">Newsletter</h4>
                    <p className="text-xs text-gray-500 mb-3">Inscrivez-vous pour recevoir notre newsletter</p>
                    <div className="flex rounded-full overflow-hidden shadow-sm border border-bee">
                        <input type="email" placeholder="Enter your e-mail" className="flex-1 px-4 py-2 text-xs text-gray-700 bg-breakwhite"/>
                        <button className="bg-honey text-breakwhite text-xs font-bold px-4 py-2 whitespace-nowrap hover:opacity-90 transition-opacity">
                            Sign up
                        </button>
                    </div>
                </div>
            </div>
            <div className="border-t border-bee pt-4 text-center text-xs text-gray-400 tracking-wide">
                Propulsé par Mieloria
            </div>
        </footer>
    )
}