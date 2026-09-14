import { useState, useEffect, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function KotoEcosystems({ ecosystems = [], onSelectEcosystem }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const cardsRef = useRef([]);

    // Bulletproof scroll tracking: detects which media card is active in the viewport
    useEffect(() => {
        let ticking = false;

        const updateActiveCard = () => {
            if (!cardsRef.current || cardsRef.current.length === 0) return;

            // Trigger line: 45% of viewport height (upper-middle focus zone)
            const triggerY = window.innerHeight * 0.45;
            let current = 0;

            for (let i = 0; i < cardsRef.current.length; i++) {
                const card = cardsRef.current[i];
                if (!card) continue;
                const rect = card.getBoundingClientRect();
                if (rect.top <= triggerY) {
                    current = i;
                }
            }

            setActiveIndex(current);
        };

        const onScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    updateActiveCard();
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', onScroll, { passive: true });

        // Initial check and delayed check after images load
        updateActiveCard();
        const timeout = setTimeout(updateActiveCard, 200);

        return () => {
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', onScroll);
            clearTimeout(timeout);
        };
    }, [ecosystems]);

    const activeEco = ecosystems[activeIndex] || ecosystems[0] || {};

    const scrollToCard = (index) => {
        const target = cardsRef.current[index];
        if (target) {
            const yOffset = -window.innerHeight * 0.12;
            const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    return (
        <section id="ecosystems" className="relative z-10 w-full px-6 sm:px-10 lg:px-14 xl:px-16 py-24 sm:py-32">
            
            {/* Full-width Grid Split-Screen Layout matching Koto's Our Work section */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-start relative w-full">

                {/* 1. LEFT COLUMN: Sticky Side Panel (anchored at BOTTOM-LEFT of viewport) */}
                <div className="hidden md:flex md:col-span-5 lg:col-span-4 sticky top-20 h-[calc(100vh-6rem)] self-start flex-col justify-end gap-5 pb-6 select-none">
                    
                    {/* Header: "Nos écosystèmes" + Active Entity Name */}
                    <div>
                        <div className="flex items-center gap-3 mb-1.5">
                            <span className="text-xl sm:text-2xl font-display font-light dark:text-white/60 text-slate-500">
                                Nos écosystèmes
                            </span>
                            <span className="text-xs font-mono px-2 py-0.5 rounded-md dark:bg-white/10 bg-slate-200 dark:text-[#00D084] text-emerald-700 font-medium">
                                0{activeIndex + 1} / 0{ecosystems.length}
                            </span>
                        </div>

                        {/* Large Headline with Animated Transition */}
                        <div className="min-h-[52px] flex items-center">
                            <h2
                                key={`name-${activeEco.id}`}
                                className="text-4xl sm:text-5xl lg:text-6xl font-display font-light tracking-tight dark:text-white text-slate-900 leading-none animate-fadeIn"
                            >
                                {activeEco.name}
                            </h2>
                        </div>
                    </div>

                    {/* Narrative Description (matching Koto's editorial body paragraph) */}
                    <div>
                        <div className="min-h-[110px]">
                            <p
                                key={`desc-${activeEco.id}`}
                                className="text-sm sm:text-base font-sans font-[350] dark:text-[#94A3B8] text-slate-600 leading-relaxed max-w-md animate-fadeIn"
                            >
                                {activeEco.description}
                            </p>
                        </div>

                        {/* Sector and Metric Info */}
                        <div className="mt-3.5 pt-3.5 border-t dark:border-white/10 border-slate-200 flex items-center gap-4 text-xs font-mono">
                            <span className="text-[#00D084] font-medium">
                                {activeEco.metric}
                            </span>
                            <span className="dark:text-slate-600 text-slate-400">•</span>
                            <span className="dark:text-slate-400 text-slate-500">
                                {activeEco.sector}
                            </span>
                        </div>

                        {/* Quick Jump Indicators (1 to 8) */}
                        <div className="flex items-center gap-1.5 mt-4">
                            {ecosystems.map((eco, idx) => (
                                <button
                                    key={eco.id}
                                    type="button"
                                    onClick={() => scrollToCard(idx)}
                                    className={`h-1.5 rounded-sm transition-all duration-300 cursor-pointer ${
                                        activeIndex === idx
                                            ? 'w-7 bg-[#00D084]'
                                            : 'w-2 dark:bg-white/20 bg-slate-300 hover:dark:bg-white/40 hover:bg-slate-400'
                                    }`}
                                    title={`Aller à ${eco.name}`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Bottom Metadata Box (crisp reduced border radius) */}
                    <div>
                        <div
                            onClick={() => onSelectEcosystem && onSelectEcosystem(activeEco)}
                            className="flex items-center gap-4 p-3 rounded-lg dark:bg-[#111317]/95 bg-white dark:border-white/10 border-slate-200/90 border shadow-sm cursor-pointer hover:border-[#00D084]/40 transition-all duration-300 max-w-md group"
                        >
                            <img
                                src={activeEco.avatar}
                                alt={activeEco.leader}
                                className="w-11 h-11 rounded-md object-cover border border-[#00D084]/40 group-hover:scale-105 transition-transform shrink-0"
                            />
                            <div className="flex-1 min-w-0">
                                <p className="text-xs font-semibold dark:text-white text-slate-900 truncate group-hover:text-[#00D084] transition-colors">
                                    « {activeEco.tagline} »
                                </p>
                                <p className="text-[10px] font-mono dark:text-slate-400 text-slate-500 uppercase tracking-wider mt-0.5">
                                    {activeEco.year} • {activeEco.badge}
                                </p>
                            </div>
                            <div className="w-6 h-6 rounded-md dark:bg-white/5 bg-slate-100 flex items-center justify-center text-[#00D084] group-hover:bg-[#00D084] group-hover:text-slate-950 transition-colors shrink-0">
                                <ArrowUpRight className="w-3.5 h-3.5" />
                            </div>
                        </div>
                    </div>

                </div>

                {/* 2. RIGHT COLUMN: Scrolling Feed of Full Media Cards */}
                <div className="col-span-1 md:col-span-7 lg:col-span-8 flex flex-col gap-16 sm:gap-24 lg:gap-32">
                    
                    {/* Mobile Only Header */}
                    <div className="md:hidden pb-4 border-b dark:border-white/10 border-slate-200">
                        <span className="text-xs font-mono uppercase tracking-widest text-[#00D084] block mb-1">
                            Portfolio Actif • 8 Filiales
                        </span>
                        <h2 className="font-display text-3xl font-light dark:text-white text-slate-900">
                            Nos Écosystèmes
                        </h2>
                    </div>

                    {ecosystems.map((eco, index) => {
                        const isActive = activeIndex === index;

                        return (
                            <div
                                key={eco.id}
                                ref={(el) => (cardsRef.current[index] = el)}
                                data-index={index}
                                id={`eco-${eco.id}`}
                                className="flex flex-col gap-4"
                            >
                                {/* Media Card Container (sleek architectural rounded-lg sm:rounded-xl) */}
                                <div
                                    onClick={() => onSelectEcosystem && onSelectEcosystem(eco)}
                                    className={`relative rounded-lg sm:rounded-xl overflow-hidden aspect-[16/10] min-h-[360px] sm:min-h-[460px] lg:min-h-[520px] dark:bg-[#0B132B] bg-slate-200 shadow-2xl cursor-pointer group transition-all duration-700 ${
                                        isActive
                                            ? 'ring-1.5 ring-[#00D084]/40 shadow-[#00D084]/10 scale-[1.006]'
                                            : 'opacity-90 hover:opacity-100'
                                    }`}
                                >
                                    {/* Background Image / Media */}
                                    <img
                                        src={eco.image}
                                        alt={eco.name}
                                        loading="lazy"
                                        className="w-full h-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.28,0,0,1)] group-hover:scale-105"
                                    />

                                    {/* Cinematic Ambient Dark Gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t dark:from-[#080D1A]/85 from-black/70 via-black/25 to-transparent transition-opacity" />

                                    {/* Center Wordmark (Matching Koto's Instagram / Amazon / Copilot+PC reel cards) */}
                                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none p-6 text-center select-none">
                                        <h3 className="font-display font-light text-4xl sm:text-6xl lg:text-7xl text-white tracking-tight drop-shadow-xl group-hover:scale-105 transition-transform duration-500">
                                            {eco.name}
                                        </h3>
                                    </div>

                                    {/* Top-Right Badge (reduced radius) */}
                                    <div className="absolute top-5 right-5 sm:top-6 sm:right-6 z-10">
                                        <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider px-3 py-1 rounded-md bg-black/70 text-white backdrop-blur-md border border-white/10">
                                            {eco.badge}
                                        </span>
                                    </div>

                                    {/* Bottom-Right "VIEW CASE" / Action Link (reduced radius) */}
                                    <div className="absolute bottom-5 right-5 sm:bottom-6 sm:right-6 z-10">
                                        <button
                                            type="button"
                                            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-white/15 hover:bg-white/30 text-white backdrop-blur-md text-xs font-mono uppercase tracking-wider transition-all border border-white/25 hover:border-white"
                                        >
                                            <span>Explorer</span>
                                            <ArrowUpRight className="w-3.5 h-3.5" />
                                        </button>
                                    </div>
                                </div>

                                {/* Mobile description card (Shown below the card on mobile screens only) */}
                                <div className="md:hidden p-4 rounded-lg dark:bg-white/5 bg-slate-100 dark:border-white/10 border-slate-200 border">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="font-display font-semibold text-lg dark:text-white text-slate-900">
                                            {eco.name}
                                        </h3>
                                        <span className="text-xs font-mono text-[#00D084]">
                                            {eco.metric}
                                        </span>
                                    </div>
                                    <p className="text-xs font-sans dark:text-[#94A3B8] text-slate-600 leading-relaxed mb-3">
                                        {eco.description}
                                    </p>
                                    <p className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400">
                                        « {eco.tagline} »
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}
