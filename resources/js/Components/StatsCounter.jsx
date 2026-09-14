import { useEffect, useState, useRef } from 'react';
import { TrendingUp, ShieldCheck, Globe, Users } from 'lucide-react';

export default function StatsCounter({ stats = [] }) {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const icons = [
        <Layers className="w-5 h-5 text-[#00D084]" />,
        <Users className="w-5 h-5 text-[#00D084]" />,
        <ShieldCheck className="w-5 h-5 text-[#00D084]" />,
        <Globe className="w-5 h-5 text-[#00D084]" />,
    ];

    return (
        <section id="stats" ref={sectionRef} className="relative z-10 w-full px-6 sm:px-10 lg:px-14 xl:px-16 py-20 lg:py-28">
            {/* Section Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b dark:border-white/10 border-slate-200 gap-4">
                <div>
                    <span className="text-xs font-mono uppercase tracking-widest text-[#00D084] flex items-center gap-1.5 mb-2">
                        <TrendingUp className="w-3.5 h-3.5" />
                        Performance Consolidée
                    </span>
                    <h2 className="font-display text-3xl sm:text-4xl font-light dark:text-white text-slate-900">
                        L'Envergure Opérationnelle du Groupe
                    </h2>
                </div>
                <p className="text-xs font-mono dark:text-slate-400 text-slate-500 max-w-md">
                    Données consolidées reflétant l'audience, la pénétration terrain et les partenariats stratégiques en zone CEMAC.
                </p>
            </div>

            {/* 4-Column Stat Bento */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                    <div
                        key={index}
                        className="p-8 rounded-lg dark:bg-[#111C38]/60 bg-white border dark:border-slate-800 border-slate-200/80 shadow-sm flex flex-col justify-between group hover:border-[#00D084]/40 transition-all duration-500 hover:-translate-y-1"
                    >
                        <div className="flex items-center justify-between mb-6">
                            <span className="text-xs font-mono dark:text-slate-500 text-slate-400">
                                0{index + 1}
                            </span>
                            <div className="w-9 h-9 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-[#00D084] group-hover:scale-110 transition-transform">
                                <span className="w-2 h-2 rounded-full bg-[#00D084]" />
                            </div>
                        </div>

                        <div>
                            {/* Animated Value Display */}
                            <div className="font-display text-5xl sm:text-6xl font-light dark:text-white text-slate-900 tracking-tight mb-2 flex items-baseline">
                                <span className="text-[#00D084] font-normal text-3xl sm:text-4xl mr-1">
                                    {stat.prefix}
                                </span>
                                <span className={isVisible ? 'animate-fadeIn' : 'opacity-80'}>
                                    {stat.value}
                                </span>
                                <span className="text-[#00D084] font-normal text-3xl sm:text-4xl ml-0.5">
                                    {stat.suffix}
                                </span>
                            </div>

                            <h3 className="font-display font-semibold text-base dark:text-slate-200 text-slate-800 group-hover:text-[#00D084] transition-colors">
                                {stat.label}
                            </h3>
                            <p className="text-xs font-sans font-[350] dark:text-[#94A3B8] text-slate-500 mt-1">
                                {stat.sublabel}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

function Layers(props) {
    return (
        <svg
            {...props}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <polygon points="12 2 2 7 12 12 22 7 12 2" />
            <polyline points="2 17 12 22 22 17" />
            <polyline points="2 12 12 17 22 12" />
        </svg>
    );
}
