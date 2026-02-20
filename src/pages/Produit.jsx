import { FaTruck } from "react-icons/fa";
import { PiRabbitThin } from "react-icons/pi";
import { PiPlant } from "react-icons/pi";
import { FaHandHoldingHeart } from "react-icons/fa";
import { FaMedal } from "react-icons/fa";
import { GiCardboardBoxClosed } from "react-icons/gi";

import { useState } from "react";

const star = <svg className="w-4 h-4 text-amber-500" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>;
const starEmpty = <svg className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>;

export default function Produit() {
    const [current, setCurrent] = useState(0);
    
    // "%" c'est modulo, si à 0 alors est a la fin de la liste
    const prev = () => setCurrent((i) => (i - 1 + 3) % 3);
    const next = () => setCurrent((i) => (i + 1) % 3);

    return (
        <div  className="min-h-screen min-w-360 font-sans text-gray-800">
            <section className="bg-[url(/img/hero_section.png)] bg-center bg-size-[auto_789px] bg-no-repeat relative min-h-130 min-w-360">
                    <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 flex flex-col justify-end gap-12">
                        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
                            Mieloria<br />
                            <span className="text-bee">Crème de Jour</span> — Éclat<br />
                            Naturel & Hydratation<br />
                            au Miel
                        </h1>
                        <button className="bg-honey text-white font-bold px-8 py-4 rounded-full shadow-lg w-fit hover:shadow-bee/40 hover:scale-105 transition-all duration-300 text-sm tracking-wide" >
                            <p>Commander Maintenant — 29,90 €</p>
                        </button>
                    </div>   
            </section>

            <section className="bg-breakwhite border-y border-bee min-w-360 justify-self-center">
                <div className="max-w-4xl mx-auto px-6 py-6 flex items-center justify-around gap-6">
                    <div className="flex items-center gap-3 text-gray-700">
                        <span className="text-3xl"><PiPlant className="w-8 h-8"/></span>
                        <span className="font-semibold tracking-wide text-sm">Ingrédients Naturels</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-700">
                        <span className="text-3xl"><PiRabbitThin className="w-8 h-8"/></span>
                        <span className="font-semibold tracking-wide text-sm">Lorem Ipsum</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-700">
                        <span className="text-3xl"><FaTruck className="w-8 h-8"/></span>
                        <span className="font-semibold tracking-wide text-sm">Livraison Rapide</span>
                    </div>
                </div>
            </section>

            <section className="max-w-360 mx-auto px-6 py-20 bg-breakwhite">
                <h2 className="text-4xl font-bold text-center text-gray-800 mb-14">Pourquoi Choisir Mieloria ?</h2>
                <div className="grid grid-cols-3 gap-10">
                    <div className="group flex gap-4 items-start p-6 rounded-2xl hover:bg-bee/40 transition-all duration-300 hover:shadow-md">
                        <div className="text-4xl group-hover:scale-110 transition-transform duration-300"><FaHandHoldingHeart className="w-8 h-8"/></div>
                        <div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Ingrédients naturels</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">Mieloria sélectionne uniquement des ingrédients d'origine naturelle, sans parabènes ni conservateurs artificiels.</p>
                        </div>
                    </div>
                    <div className="group flex gap-4 items-start p-6 rounded-2xl hover:bg-bee/40 transition-all duration-300 hover:shadow-md">
                        <div className="text-4xl group-hover:scale-110 transition-transform duration-300"><FaMedal  className="w-8 h-8"/></div>
                        <div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Hydratation au Miel</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">Notre formule unique à base de miel bio nourrit la peau en profondeur pour un éclat naturel et durable.</p>
                        </div>
                    </div>
                    <div className="group flex gap-4 items-start p-6 rounded-2xl hover:bg-bee/40 transition-all duration-300 hover:shadow-md">
                        <div className="text-4xl group-hover:scale-110 transition-transform duration-300"><GiCardboardBoxClosed className="w-8 h-8"/></div>
                        <div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Livraison rapide</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">Mieloria s'engage à livrer votre commande en 24 à 48h pour une expérience client optimale.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-breakwhite min-w-360 justify-self-center py-16 px-6">
                <div className="max-w-215 mx-auto">
                    <div className="flex items-center gap-6">
                        <button onClick={prev} className="w-10 h-10 rounded-full border-2 border-bee text-honey hover:bg-bee/50 flex items-center justify-center transition-colors text-lg font-bold shrink-0">‹</button>

                        <div className="flex flex-1 gap-4 items-center">
                            <div className="flex gap-3 shrink-0">
                                <button onClick={() => setCurrent(0)}>
                                    <img src="/img/placeholder_account.png" alt="Sophie M." className={`rounded-full transition-all duration-300 object-cover ${current === 0 ? "w-16 h-16 border-4 border-grass shadow-lg" : "w-12 h-12 border-2 border-breakwhite opacity-60 hover:opacity-80"}`} />
                                </button>
                                <button onClick={() => setCurrent(1)}>
                                    <img src="/img/placeholder_account.png" alt="Camille R." className={`rounded-full transition-all duration-300 object-cover ${current === 1 ? "w-16 h-16 border-4 border-grass shadow-lg" : "w-12 h-12 border-2 border-breakwhite opacity-60 hover:opacity-80"}`} />
                                </button>
                                <button onClick={() => setCurrent(2)}>
                                    <img src="/img/placeholder_account.png" alt="Léa T." className={`rounded-full transition-all duration-300 object-cover ${current === 2 ? "w-16 h-16 border-4 border-grass shadow-lg" : "w-12 h-12 border-2 border-breakwhite opacity-60 hover:opacity-80"}`} />
                                </button>
                            </div>

                            <div className="bg-breakwhite rounded-2xl p-6 shadow-md flex-1 border border-honey/50">
                                {current === 0 && (
                                    <>
                                        <p className="text-gray-700 italic text-sm leading-relaxed mb-3">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."</p>
                                        <div className="flex items-center gap-3">
                                            <div className="flex gap-0.5">{star}{star}{star}{star}{star}</div>
                                            <span className="text-xs text-gray-500 font-semibold">Sophie M.</span>
                                        </div>
                                    </>
                                )}
                                {current === 1 && (
                                    <>
                                        <p className="text-gray-700 italic text-sm leading-relaxed mb-3">"Pellentesque habitant morbi tristique senectus et netus malesuada fames ac turpis egestas."</p>
                                        <div className="flex items-center gap-3">
                                            <div className="flex gap-0.5">{star}{star}{star}{star}{star}</div>
                                            <span className="text-xs text-gray-500 font-semibold">Camille R.</span>
                                        </div>
                                    </>
                                )}
                                {current === 2 && (
                                    <>
                                        <p className="text-gray-700 italic text-sm leading-relaxed mb-3">"Vestibulum ante ipsum primis in faucibus orci luctus ultrices posuere cubilia curae."</p>
                                        <div className="flex items-center gap-3">
                                            <div className="flex gap-0.5">{star}{star}{star}{star}{starEmpty}</div>
                                            <span className="text-xs text-gray-500 font-semibold">Léa T.</span>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                        <button onClick={next} className="w-10 h-10 rounded-full border-2 border-[--bee] text-[--honey] hover:bg-[--bee]/50 flex items-center justify-center transition-colors text-lg font-bold shrink-0">›</button>
                    </div>
                </div>
            </section>
        </div>
    );
}