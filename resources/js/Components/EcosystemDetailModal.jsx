import { useEffect } from 'react';
import { X, ArrowUpRight, CheckCircle2, Users, Layers, ExternalLink, ShieldCheck } from 'lucide-react';

export default function EcosystemDetailModal({ ecosystem, onClose }) {
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };
        if (ecosystem) {
            document.body.style.overflow = 'hidden';
            window.addEventListener('keydown', handleKeyDown);
        }
        return () => {
            document.body.style.overflow = 'unset';
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [ecosystem, onClose]);

    if (!ecosystem) {
        return null;
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-[#080D1A]/85 backdrop-blur-xl transition-opacity animate-fadeIn"
                onClick={onClose}
            />

            {/* Modal Dialog */}
            <div className="relative z-10 w-full max-w-2xl rounded-3xl bg-[#0B132B] border border-slate-700/80 shadow-2xl shadow-black overflow-hidden flex flex-col animate-fadeIn">
                {/* Image Banner */}
                <div className="relative aspect-[16/9] w-full bg-[#080D1A] overflow-hidden">
                    <img
                        src={ecosystem.image}
                        alt={ecosystem.name}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B132B] via-[#0B132B]/40 to-transparent" />

                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 p-2.5 rounded-full bg-[#080D1A]/80 hover:bg-[#080D1A] text-slate-300 hover:text-white transition backdrop-blur-md border border-white/10"
                    >
                        <X className="w-4 h-4" />
                    </button>

                    <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between">
                        <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#080D1A]/80 backdrop-blur-md border border-white/10 text-[#00D084] uppercase tracking-wider">
                            {ecosystem.sector}
                        </span>
                        <span className="text-xs font-mono text-emerald-400 bg-emerald-500/20 px-3 py-1 rounded-full border border-emerald-500/30">
                            {ecosystem.status}
                        </span>
                    </div>
                </div>

                {/* Body Content */}
                <div className="p-6 sm:p-8 flex flex-col gap-6">
                    <div>
                        <h3 className="font-display font-bold text-2xl sm:text-3xl text-white mb-1">
                            {ecosystem.name}
                        </h3>
                        <p className="text-xs sm:text-sm font-mono text-[#00D084] mb-4">
                            « {ecosystem.tagline} »
                        </p>
                        <p className="text-xs sm:text-sm font-sans font-[350] text-slate-300 leading-relaxed">
                            {ecosystem.description}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/10 text-xs">
                        <div className="p-3.5 rounded-xl bg-white/5 border border-white/5">
                            <span className="font-mono text-slate-400 uppercase text-[10px] block mb-1">
                                Cible / Audience Visée
                            </span>
                            <span className="text-slate-200 font-medium">
                                {ecosystem.target}
                            </span>
                        </div>
                        <div className="p-3.5 rounded-xl bg-white/5 border border-white/5">
                            <span className="font-mono text-slate-400 uppercase text-[10px] block mb-1">
                                Métrique d'Impact
                            </span>
                            <span className="text-[#00D084] font-mono font-semibold">
                                {ecosystem.metric}
                            </span>
                        </div>
                    </div>

                    {/* Action Bar */}
                    <div className="flex items-center justify-between pt-4 border-t border-white/10">
                        <div className="flex items-center gap-2">
                            <img
                                src={ecosystem.avatar}
                                alt={ecosystem.leader}
                                className="w-6 h-6 rounded-full object-cover border border-[#00D084]"
                            />
                            <span className="text-xs font-mono text-slate-400">
                                {ecosystem.leader}
                            </span>
                        </div>

                        <a
                            href="#contact"
                            onClick={onClose}
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#00D084] hover:bg-[#00B875] text-[#080D1A] text-xs font-semibold tracking-wide transition shadow-lg shadow-[#00D084]/20"
                        >
                            <span>Activer avec Vitrine Ads</span>
                            <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
