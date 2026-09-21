import { useState } from 'react';
import AppLayout from '@/Layouts/AppLayout';
import EcosystemDetailModal from '@/Components/EcosystemDetailModal';
import { ArrowUpRight, Sparkles, Filter } from 'lucide-react';

export default function Work({
    ecosystems = [],
    categories = [],
    company = {},
}) {
    const [selectedCategory, setSelectedCategory] = useState('Tous');
    const [selectedEcosystem, setSelectedEcosystem] = useState(null);

    const filteredList = selectedCategory === 'Tous'
        ? ecosystems
        : ecosystems.filter((eco) => eco.category === selectedCategory || eco.badge?.includes(selectedCategory));

    return (
        <AppLayout
            title="Work — Nos 8 Écosystèmes | Vitrine Consulting SARL"
            description="Explorez le portfolio complet des 8 filiales et marques de Vitrine Consulting : CaBougeOu, Sabes Numerik, IciLaBouf, InfoBooster, Projet After Bac, MonPro, Stay Awake, Vitrine Ads."
            company={company}
        >
            {/* 1. HERO TITLE */}
            <section className="relative w-full pt-36 sm:pt-44 pb-12 sm:pb-16 px-6 sm:px-10 lg:px-14 xl:px-16">
                <div className="max-w-5xl">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="text-xs font-mono uppercase tracking-widest text-[#00D084] font-semibold">
                            PORTFOLIO DES MARQUES ACTIVES
                        </span>
                        <span className="text-xs font-mono dark:text-slate-500 text-slate-400">•</span>
                        <span className="text-xs font-mono dark:text-slate-400 text-slate-500">
                            8 Écosystèmes & Filiales
                        </span>
                    </div>

                    <h1 className="font-display font-light text-4xl sm:text-6xl lg:text-7xl dark:text-white text-slate-900 tracking-tight leading-[1.08] mb-6">
                        Des plateformes vivantes, <br />
                        <span className="text-[#00D084]">des communautés réelles.</span>
                    </h1>

                    <p className="font-sans font-[350] text-base sm:text-lg dark:text-[#94A3B8] text-slate-600 leading-relaxed max-w-2xl">
                        Chaque entité du groupe a été conçue pour répondre à un usage précis : billetterie et sorties urbaines, ingénierie logicielle, gastronomie locale, éducation ou monétisation média.
                    </p>
                </div>
            </section>

            {/* 2. DYNAMIC CATEGORY FILTER TABS */}
            <section className="px-6 sm:px-10 lg:px-14 xl:px-16 mb-12 sticky top-20 z-30 py-3 backdrop-blur-xl dark:bg-[#080D1A]/80 bg-[#FAFAFC]/80 border-y dark:border-white/10 border-slate-200">
                <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
                    <div className="flex items-center gap-1.5 text-xs font-mono dark:text-slate-400 text-slate-500 mr-2 shrink-0">
                        <Filter className="w-3.5 h-3.5 text-[#00D084]" />
                        <span className="uppercase tracking-wider">Filtre :</span>
                    </div>

                    {categories.map((cat, idx) => (
                        <button
                            key={idx}
                            type="button"
                            onClick={() => setSelectedCategory(cat)}
                            className={`px-3.5 py-1.5 rounded-md text-xs font-mono uppercase tracking-wider transition-all duration-300 shrink-0 cursor-pointer ${
                                selectedCategory === cat
                                    ? 'bg-[#00D084] text-slate-950 font-semibold shadow-md'
                                    : 'dark:bg-white/5 bg-slate-200/80 dark:text-slate-400 text-slate-600 hover:text-slate-900 dark:hover:text-white border dark:border-white/5 border-slate-300'
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </section>

            {/* 3. ECOSYSTEMS CARDS GRID */}
            <section className="px-6 sm:px-10 lg:px-14 xl:px-16 pb-32">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {filteredList.map((eco, index) => (
                        <article
                            key={eco.id}
                            id={`eco-${eco.id}`}
                            onClick={() => setSelectedEcosystem(eco)}
                            className="group flex flex-col cursor-pointer"
                        >
                            {/* Media Banner Card */}
                            <div className="relative aspect-[16/10] w-full rounded-lg sm:rounded-xl overflow-hidden dark:bg-[#0B132B] bg-slate-200 border dark:border-white/10 border-slate-200 shadow-xl group-hover:border-[#00D084]/60 transition-all duration-700">
                                <img
                                    src={eco.image}
                                    alt={eco.name}
                                    loading="lazy"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-[cubic-bezier(0.28,0,0,1)]"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t dark:from-[#080D1A]/90 from-black/75 via-black/25 to-transparent pointer-events-none" />

                                {/* Center Wordmark */}
                                <div className="absolute inset-0 flex items-center justify-center p-6 text-center pointer-events-none">
                                    <h3 className="font-display font-light text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight drop-shadow-lg group-hover:scale-105 transition-transform duration-500">
                                        {eco.name}
                                    </h3>
                                </div>

                                {/* Top Badges */}
                                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10 pointer-events-none">
                                    <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md text-white border border-white/10">
                                        {eco.sector}
                                    </span>
                                    <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-md bg-[#00D084] text-slate-950 font-semibold">
                                        {eco.badge}
                                    </span>
                                </div>

                                {/* Bottom Metric Bar */}
                                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between z-10 pointer-events-none">
                                    <div>
                                        <span className="text-xs font-mono text-[#00D084] block font-semibold">
                                            {eco.metric}
                                        </span>
                                        <span className="text-[11px] font-mono text-white/80 block mt-0.5">
                                            « {eco.tagline} »
                                        </span>
                                    </div>
                                    <div className="w-8 h-8 rounded-md bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-[#00D084] group-hover:text-black transition-colors shrink-0">
                                        <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                                    </div>
                                </div>
                            </div>

                            {/* Narrative Below Card */}
                            <div className="mt-4 flex flex-col">
                                <p className="font-sans font-[350] text-xs sm:text-sm dark:text-[#94A3B8] text-slate-600 leading-relaxed line-clamp-2">
                                    {eco.description}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            {/* Ecosystem Detail Modal */}
            <EcosystemDetailModal
                ecosystem={selectedEcosystem}
                onClose={() => setSelectedEcosystem(null)}
            />
        </AppLayout>
    );
}
