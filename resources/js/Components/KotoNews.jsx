export default function KotoNews({ news = [] }) {
    if (!news || news.length === 0) {
        return null;
    }

    const [featured, ...secondary] = news;

    return (
        <section id="news" className="relative z-10 w-full px-6 sm:px-10 lg:px-14 xl:px-16 py-20 lg:py-28 transition-colors">
            {/* Header matching Koto's: STUDIO NEWS PRESS, TALKS, AND EVENTS    [ VIEW ALL ] */}
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-10 pb-4 border-b dark:border-white/10 border-slate-200 gap-4">
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                    <h2 className="text-xs sm:text-sm font-mono uppercase font-bold tracking-widest dark:text-white text-slate-900">
                        ACTUALITÉS GROUPE
                    </h2>
                    <span className="text-xs sm:text-sm font-mono uppercase tracking-widest dark:text-white/40 text-slate-400">
                        PRESSE, TRIBUNES & ÉVÉNEMENTS
                    </span>
                </div>

                <a
                    href="#contact"
                    className="text-xs font-mono uppercase tracking-widest dark:text-white/60 text-slate-500 hover:text-[#00D084] dark:hover:text-[#00D084] transition-colors shrink-0"
                >
                    [ TOUT VOIR ]
                </a>
            </div>

            {/* Asymmetric 3-Column Layout: 1 Large Lead Card (6 cols) + 2 Secondary Cards (3 cols each) */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10">
                {/* 1. Large Lead Card (Matching Damian Borchok / APAC Lead card) */}
                {featured && (
                    <article className="md:col-span-6 lg:col-span-6 flex flex-col group cursor-pointer">
                        <div className="relative rounded-lg sm:rounded-xl overflow-hidden aspect-[16/10] sm:aspect-[16/10.5] dark:bg-[#0B132B] bg-slate-200 border dark:border-white/10 border-slate-200/80">
                            <img
                                src={featured.image}
                                alt={featured.title}
                                loading="lazy"
                                className="w-full h-full object-cover filter grayscale contrast-105 group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.28,0,0,1)]"
                            />
                        </div>

                        <div className="mt-5 flex flex-col">
                            <h3 className="font-display font-light text-xl sm:text-2xl lg:text-[26px] dark:text-white text-slate-900 leading-snug tracking-tight group-hover:text-[#00D084] transition-colors mb-2.5">
                                {featured.title}
                            </h3>
                            {featured.summary && (
                                <p className="font-sans font-[350] text-xs sm:text-sm dark:text-[#94A3B8] text-slate-600 leading-relaxed line-clamp-3 mb-4">
                                    {featured.summary}
                                </p>
                            )}
                            <div className="flex items-center gap-3">
                                <span className="text-[10px] font-mono px-2 py-0.5 rounded-md dark:bg-white/10 bg-slate-200 dark:text-white text-slate-800 font-bold uppercase tracking-wider">
                                    {featured.category || 'PRESSE'}
                                </span>
                                <span className="text-xs font-mono dark:text-slate-400 text-slate-500">
                                    {featured.date}
                                </span>
                            </div>
                        </div>
                    </article>
                )}

                {/* 2 & 3. Secondary Cards (Matching Koto's Stereo Acquisition & Instagram cards) */}
                {secondary.map((item) => (
                    <article key={item.id} className="md:col-span-3 lg:col-span-3 flex flex-col group cursor-pointer">
                        <div className="relative rounded-lg sm:rounded-xl overflow-hidden aspect-[16/10] sm:aspect-[16/10.5] dark:bg-[#0B132B] bg-slate-200 border dark:border-white/10 border-slate-200/80">
                            <img
                                src={item.image}
                                alt={item.title}
                                loading="lazy"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.28,0,0,1)]"
                            />
                        </div>

                        <div className="mt-5 flex flex-col">
                            <h3 className="font-display font-light text-base sm:text-lg dark:text-white text-slate-900 leading-snug tracking-tight group-hover:text-[#00D084] transition-colors mb-4">
                                {item.title}
                            </h3>
                            <div className="flex items-center gap-3 mt-auto">
                                <span className="text-[10px] font-mono px-2 py-0.5 rounded-md dark:bg-white/10 bg-slate-200 dark:text-white text-slate-800 font-bold uppercase tracking-wider">
                                    {item.category || 'PRESS'}
                                </span>
                                <span className="text-xs font-mono dark:text-slate-400 text-slate-500">
                                    {item.date}
                                </span>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
