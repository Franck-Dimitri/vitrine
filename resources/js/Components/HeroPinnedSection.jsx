import { useState } from 'react';
import { Play, ArrowDown, ArrowUpRight, CheckCircle2, Sparkles, Eye, Users, Layers, ExternalLink } from 'lucide-react';

export default function HeroPinnedSection({ ecosystems = [], onOpenVideo, onSelectEcosystem }) {
    const [hoveredCard, setHoveredCard] = useState(null);

    return (
        <section id="ecosystems" className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 pt-20 sm:pt-28">
            {/* Background Ambient Green and Navy Orbs */}
            <div className="absolute top-10 left-1/4 w-[600px] h-[500px] bg-[#00D084]/10 rounded-full blur-[160px] pointer-events-none -z-10" />
            <div className="absolute top-1/2 right-10 w-[500px] h-[600px] bg-[#0B132B] rounded-full blur-[140px] pointer-events-none -z-10" />

            {/* Koto-Style 16-Column Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-16 gap-8 lg:gap-12">
                {/* LEFT COLUMN: Pinned / Sticky Manifest & Holding Anchor (6 cols on md) */}
                <div className="md:col-span-6 md:sticky md:top-0 md:h-screen flex flex-col justify-between py-6 md:py-16 md:pr-4">
                    {/* Top Group: Monospace Tags & Manifest Statement */}
                    <div className="flex flex-col">
                        {/* Monospace Badge Cluster */}
                        <div className="flex flex-wrap items-center gap-2 mb-6">
                            <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[#00D084] uppercase tracking-wider">
                                [VENTURE BUILDER]
                            </span>
                            <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 uppercase tracking-wider">
                                [HOLDING SIÈGE]
                            </span>
                            <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-slate-400 uppercase tracking-wider">
                                [DOUALA, CAMEROUN]
                            </span>
                        </div>

                        {/* Monumental Condensed Display Title (Koto style) */}
                        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white leading-[1.05] mb-6">
                            Nous construisons des <span className="font-normal text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-400">vitrines</span>.
                            <br />
                            Nous créons des{' '}
                            <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#00D084] via-emerald-300 to-teal-200">
                                écosystèmes
                            </span>.
                        </h1>

                        {/* Narrative Pitch */}
                        <p className="text-sm sm:text-base font-sans font-[350] text-[#94A3B8] leading-relaxed mb-8 max-w-lg">
                            Donner de la visibilité aux idées, aux marques et aux opportunités à travers l'Afrique centrale.
                            Structure bivalente alliant <strong className="text-slate-200 font-medium">Dimension Fonctionnelle</strong> (Holding / Siège) et{' '}
                            <strong className="text-slate-200 font-medium">Dimension Opérationnelle</strong> (8 filiales métiers de terrain).
                        </p>

                        {/* Dual Action CTA Pills */}
                        <div className="flex flex-wrap items-center gap-3 mb-8">
                            <a
                                href="#ecosystems-list"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#00D084] hover:bg-[#00B875] text-[#080D1A] text-xs font-semibold tracking-wide transition-all duration-300 shadow-xl shadow-[#00D084]/20 hover:scale-[1.02] active:scale-[0.98]"
                            >
                                <span>Explorer les 8 filiales</span>
                                <ArrowDown className="w-3.5 h-3.5" />
                            </a>
                            <a
                                href="#contact"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass-pill hover:bg-white/10 text-slate-200 hover:text-white text-xs font-medium tracking-wide transition-all duration-300"
                            >
                                <span>Travailler avec nous</span>
                                <ArrowUpRight className="w-3.5 h-3.5 text-[#00D084]" />
                            </a>
                        </div>
                    </div>

                    {/* Bottom Group: Video Showreel Button & Live Tracker */}
                    <div className="pt-6 border-t border-white/10 mt-auto">
                        <button
                            onClick={onOpenVideo}
                            className="group flex items-center gap-3.5 text-left w-full p-2.5 rounded-2xl glass-card hover:border-[#00D084]/40 transition-all duration-300"
                        >
                            <div className="relative w-11 h-11 rounded-full bg-[#00D084]/15 border border-[#00D084]/40 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-[#00D084] transition-all duration-300">
                                <Play className="w-4 h-4 text-[#00D084] group-hover:text-[#080D1A] transition-colors fill-current ml-0.5" />
                                <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#00D084] animate-ping opacity-75" />
                            </div>
                            <div>
                                <div className="text-xs font-semibold text-white group-hover:text-[#00D084] transition flex items-center gap-1.5">
                                    <span>Visionner le film institutionnel</span>
                                    <span className="text-[10px] font-mono text-slate-400 font-normal">[2:15]</span>
                                </div>
                                <p className="text-[11px] text-slate-400 font-mono mt-0.5">
                                    Présentation du groupe & de la vision panafricaine
                                </p>
                            </div>
                        </button>
                    </div>
                </div>

                {/* RIGHT COLUMN: Free Scrolling Fluid Ecosystems Showcase (10 cols on md) */}
                <div id="ecosystems-list" className="md:col-span-10 flex flex-col gap-10 md:gap-14 py-6 md:py-16">
                    <div className="flex items-center justify-between pb-4 border-b border-white/10">
                        <div>
                            <span className="text-xs font-mono uppercase tracking-widest text-[#00D084] flex items-center gap-1.5 mb-1">
                                <Layers className="w-3.5 h-3.5" />
                                Portfolio Actif
                            </span>
                            <h2 className="font-display text-2xl sm:text-3xl font-light text-white">
                                Les 8 Écosystèmes du Groupe
                            </h2>
                        </div>
                        <span className="text-xs font-mono text-slate-400">
                            Afrique centrale • 2026
                        </span>
                    </div>

                    {/* Staggered Ecosystem Cards (Koto inspired) */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
                        {ecosystems.map((eco, index) => (
                            <div
                                key={eco.id}
                                id={`eco-${eco.id}`}
                                onMouseEnter={() => setHoveredCard(eco.id)}
                                onMouseLeave={() => setHoveredCard(null)}
                                className={`rounded-3xl overflow-hidden glass-card transition-all duration-500 flex flex-col group ${
                                    hoveredCard === eco.id
                                        ? 'border-[#00D084]/50 shadow-2xl shadow-[#00D084]/10 -translate-y-1'
                                        : 'hover:border-slate-700'
                                }`}
                            >
                                {/* Media Container with Real Photography */}
                                <div className="relative aspect-[16/10] overflow-hidden bg-[#0B132B]">
                                    <img
                                        src={eco.image}
                                        alt={eco.name}
                                        loading="lazy"
                                        className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.28,0,0,1)] group-hover:scale-105"
                                    />
                                    {/* Gradient Scrim */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#080D1A] via-[#080D1A]/30 to-transparent" />

                                    {/* Sector Tag Floating Top-Left */}
                                    <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                                        <span className="text-[10px] font-mono px-3 py-1 rounded-full bg-[#080D1A]/80 backdrop-blur-md border border-white/10 text-white uppercase tracking-wider">
                                            {eco.sector}
                                        </span>
                                    </div>

                                    {/* Number / Year Badge Top-Right */}
                                    <div className="absolute top-4 right-4 z-10">
                                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/10 backdrop-blur-md text-[#00D084]">
                                            0{index + 1}
                                        </span>
                                    </div>

                                    {/* Leader Avatar & Status Pill Bottom */}
                                    <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between">
                                        <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-[#080D1A]/80 backdrop-blur-md border border-white/10">
                                            <img
                                                src={eco.avatar}
                                                alt={eco.leader}
                                                className="w-5 h-5 rounded-full object-cover border border-[#00D084]"
                                            />
                                            <span className="text-[11px] font-mono text-slate-300">
                                                {eco.leader}
                                            </span>
                                        </div>

                                        <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-emerald-500/20 text-[#00D084] border border-emerald-500/30">
                                            {eco.status}
                                        </span>
                                    </div>
                                </div>

                                {/* Content Details */}
                                <div className="p-6 flex flex-col flex-grow justify-between">
                                    <div>
                                        <div className="flex items-center justify-between mb-2">
                                            <h3 className="font-display font-bold text-xl text-white group-hover:text-[#00D084] transition-colors">
                                                {eco.name}
                                            </h3>
                                            <span className="text-xs font-mono text-slate-400">
                                                {eco.badge}
                                            </span>
                                        </div>

                                        <p className="text-xs font-medium text-emerald-400/90 font-mono mb-3">
                                            « {eco.tagline} »
                                        </p>

                                        <p className="text-xs font-sans font-[350] text-[#94A3B8] leading-relaxed mb-5 line-clamp-3">
                                            {eco.description}
                                        </p>
                                    </div>

                                    {/* Metric & Interaction Footer */}
                                    <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                                        <div className="flex flex-col">
                                            <span className="text-[10px] font-mono text-slate-500 uppercase">
                                                Impact / Métrique Clé
                                            </span>
                                            <span className="text-xs font-semibold text-white font-mono">
                                                {eco.metric}
                                            </span>
                                        </div>

                                        <button
                                            onClick={() => onSelectEcosystem && onSelectEcosystem(eco)}
                                            className="px-3.5 py-1.5 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 text-xs font-mono text-slate-300 hover:text-white transition flex items-center gap-1.5"
                                        >
                                            <span>Détails</span>
                                            <ArrowUpRight className="w-3.5 h-3.5 text-[#00D084]" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
