import { useState, useEffect } from 'react';
import { Layers, ArrowRight, ExternalLink, Clock, ChevronRight } from 'lucide-react';

export default function EcosystemWidget({ ecosystems = [] }) {
    const [isOpen, setIsOpen] = useState(false);
    const [time, setTime] = useState('');

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            // Douala is WAT (UTC+1)
            const options = {
                timeZone: 'Africa/Douala',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: false,
            };
            setTime(new Intl.DateTimeFormat('fr-FR', options).format(now));
        };
        updateTime();
        const timer = setInterval(updateTime, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="fixed top-4 right-4 sm:top-6 sm:right-6 z-40">
            {/* Toggle Pill Button with 4 micro-dots (Koto style) */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="glass-pill rounded-full p-2 sm:px-3 sm:py-2 flex items-center gap-2 group hover:border-[#00D084]/40 transition-all duration-300"
                aria-label="Sélecteur d'écosystèmes"
            >
                <div className="grid grid-cols-2 gap-1 w-3.5 h-3.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00D084] group-hover:scale-125 transition-transform" />
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:scale-125 transition-transform delay-75" />
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 group-hover:scale-125 transition-transform delay-100" />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00D084] group-hover:scale-125 transition-transform delay-150" />
                </div>
                <span className="hidden sm:inline-block text-xs font-mono text-slate-300 uppercase tracking-wider group-hover:text-white transition">
                    Écosystèmes
                </span>
                <span className="hidden sm:inline-flex items-center px-1.5 py-0.5 rounded-full bg-white/10 text-[10px] font-mono text-[#00D084]">
                    8
                </span>
            </button>

            {/* Dropdown Panel */}
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <div
                        className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
                        onClick={() => setIsOpen(false)}
                    />

                    {/* Drawer Content */}
                    <div className="absolute right-0 top-12 z-50 w-[320px] sm:w-[380px] rounded-2xl bg-[#0B132B]/95 border border-slate-700/80 shadow-2xl shadow-black p-4 backdrop-blur-2xl animate-fadeIn">
                        <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-3">
                            <div>
                                <h4 className="font-display font-bold text-sm text-white flex items-center gap-1.5">
                                    <Layers className="w-4 h-4 text-[#00D084]" />
                                    <span>Les 8 Écosystèmes</span>
                                </h4>
                                <p className="text-[11px] font-mono text-slate-400">
                                    Filiales opérationnelles de Vitrine Consulting
                                </p>
                            </div>
                            <div className="flex items-center gap-1 text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded-full border border-emerald-500/20">
                                <Clock className="w-3 h-3" />
                                <span>Douala : {time}</span>
                            </div>
                        </div>

                        {/* List of 8 ecosystems */}
                        <div className="flex flex-col gap-1.5 max-h-[360px] overflow-y-auto pr-1">
                            {ecosystems.map((eco) => (
                                <a
                                    key={eco.id}
                                    href={`#eco-${eco.id}`}
                                    onClick={() => setIsOpen(false)}
                                    className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-[#00D084]/30 transition-all flex items-center justify-between group"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="w-7 h-7 rounded-lg bg-[#111C38] border border-slate-700 flex items-center justify-center text-xs font-bold text-[#00D084] group-hover:border-[#00D084] transition">
                                            {eco.name.charAt(0)}
                                        </div>
                                        <div>
                                            <div className="text-xs font-semibold text-white group-hover:text-[#00D084] transition flex items-center gap-1.5">
                                                {eco.name}
                                                <span className="text-[9px] font-mono text-slate-400 uppercase">
                                                    • {eco.category}
                                                </span>
                                            </div>
                                            <p className="text-[10px] text-slate-400 line-clamp-1">
                                                {eco.status}
                                            </p>
                                        </div>
                                    </div>
                                    <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-[#00D084] group-hover:translate-x-0.5 transition-transform" />
                                </a>
                            ))}
                        </div>

                        <div className="pt-3 border-t border-white/10 mt-3 flex items-center justify-between text-[11px]">
                            <span className="text-slate-400 font-mono">
                                Régie & Monétisation
                            </span>
                            <a
                                href="#contact"
                                onClick={() => setIsOpen(false)}
                                className="text-[#00D084] hover:underline font-semibold flex items-center gap-1"
                            >
                                <span>Lancer une campagne</span>
                                <ArrowRight className="w-3 h-3" />
                            </a>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}
