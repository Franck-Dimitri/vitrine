export default function PartnersMarquee({ partners = [] }) {
    // Duplicate partners array to achieve seamless infinite loop
    const marqueeList = [...partners, ...partners];

    return (
        <section className="relative z-10 py-16 sm:py-20 border-y dark:border-white/10 border-slate-200 dark:bg-[#080D1A]/60 bg-slate-50/80 overflow-hidden pause-marquee transition-colors">
            <div className="max-w-7xl mx-auto px-6 mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#00D084]" />
                    <span className="text-xs font-mono uppercase tracking-widest dark:text-slate-300 text-slate-700">
                        Preuves Sociales & Partenaires
                    </span>
                </div>
                <p className="text-xs font-mono dark:text-slate-500 text-slate-500">
                    Annonceurs B2B • Banques • Énergies • Télécoms
                </p>
            </div>

            {/* Seamless Infinite Marquee Track with refined radius */}
            <div className="flex w-max animate-marquee gap-6">
                {marqueeList.map((partner, index) => (
                    <div
                        key={index}
                        className="px-6 py-3.5 rounded-lg sm:rounded-xl dark:bg-[#111C38]/70 bg-white border dark:border-slate-800 border-slate-200/80 shadow-sm flex items-center gap-3 shrink-0 hover:border-[#00D084]/50 transition-colors group cursor-default"
                    >
                        <div className="w-8 h-8 rounded-md dark:bg-[#080D1A] bg-slate-100 border dark:border-slate-700 border-slate-200 flex items-center justify-center font-display font-bold text-xs text-[#00D084] group-hover:border-[#00D084] transition-colors">
                            {partner.name.charAt(0)}
                        </div>
                        <div className="flex flex-col">
                            <span className="font-display font-semibold text-xs dark:text-white text-slate-900 group-hover:text-[#00D084] transition-colors whitespace-nowrap">
                                {partner.name}
                            </span>
                            <span className="text-[10px] font-mono dark:text-slate-400 text-slate-500 uppercase tracking-wider">
                                {partner.sector} • {partner.country}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
