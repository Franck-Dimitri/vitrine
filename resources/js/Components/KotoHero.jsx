import { useState } from 'react';
import { Pause, Play, ArrowDownRight, ArrowUpRight, Film } from 'lucide-react';

export default function KotoHero({ isDark, onOpenVideoModal }) {
    const [isPlaying, setIsPlaying] = useState(true);

    // High-resolution photographic backgrounds (placeholder for showreel video)
    const bgImage = isDark
        ? 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=85' // Modern architectural luxury at dusk
        : 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2400&q=85'; // Sculptural glass & steel architectural symmetry

    return (
        <section className="relative w-full h-screen min-h-[640px] overflow-hidden select-none">
            {/* 1. Full Bleed Photographic Background (Video Placeholder) */}
            <div className="absolute inset-0 w-full h-full -z-10 overflow-hidden">
                <img
                    src={bgImage}
                    alt="Vitrine Consulting Architecture"
                    className={`w-full h-full object-cover transition-transform duration-1000 ease-out ${
                        isPlaying ? 'scale-100' : 'scale-105 filter brightness-90'
                    }`}
                />

                {/* Theme-Aware Atmospheric Contrast Overlays */}
                <div
                    className={`absolute inset-0 transition-opacity duration-700 ${
                        isDark
                            ? 'bg-[#080D1A]/65 mix-blend-multiply'
                            : 'bg-white/40 mix-blend-overlay'
                    }`}
                />
                <div
                    className={`absolute inset-0 transition-opacity duration-700 ${
                        isDark
                            ? 'bg-gradient-to-t from-[#080D1A] via-[#080D1A]/30 to-[#080D1A]/50'
                            : 'bg-gradient-to-t from-[#FAFAFC] via-[#FAFAFC]/40 to-white/60'
                    }`}
                />
            </div>

            {/* 2. Center Focal Brand Mark (Echoing Koto's iconic center reel) */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="relative flex flex-col items-center select-none opacity-90">
                    <button
                        type="button"
                        onClick={onOpenVideoModal}
                        className="pointer-events-auto w-32 h-32 sm:w-44 sm:h-44 rounded-full border dark:border-white/15 border-slate-900/10 flex items-center justify-center backdrop-blur-md dark:bg-white/5 bg-black/5 shadow-2xl hover:scale-105 active:scale-95 hover:border-[#00D084]/60 transition-all duration-500 cursor-pointer group"
                        title="Visionner le film institutionnel (Showreel)"
                    >
                        <span className="font-display font-extrabold text-6xl sm:text-7xl text-[#00D084] tracking-tighter group-hover:scale-110 transition-transform">
                            V
                        </span>
                    </button>
                    <span className="text-[10px] font-mono tracking-[0.35em] uppercase dark:text-white/60 text-slate-700 mt-4">
                        Holding • 8 Filiales • Régie Ads
                    </span>
                </div>
            </div>

            {/* 4. Bottom-Left Corner Headline (The Iconic Koto Layout) */}
            <div className="absolute bottom-10 left-6 sm:bottom-14 sm:left-12 z-20 max-w-3xl">
                <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight dark:text-white text-slate-950 leading-none mb-2">
                    Vitrine Consulting
                </h1>
                <p className="font-display text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight text-[#00D084] leading-none">
                    Nous créons des écosystèmes.
                </p>

                {/* Subtitle / 2 CTAs differentiated */}
                <div className="mt-7 flex flex-wrap items-center gap-6">
                    <a
                        href="#ecosystems"
                        className="text-xs font-mono dark:text-white/90 text-slate-800 hover:text-[#00D084] dark:hover:text-[#00D084] uppercase tracking-widest flex items-center gap-2 border-b dark:border-white/30 border-slate-900/30 pb-1 hover:border-[#00D084] transition-all"
                    >
                        <span>Explorer nos 8 écosystèmes</span>
                        <ArrowDownRight className="w-3.5 h-3.5 text-[#00D084]" />
                    </a>

                    <a
                        href="#contact"
                        className="text-xs font-mono dark:text-white/60 text-slate-600 hover:text-[#00D084] dark:hover:text-[#00D084] uppercase tracking-widest flex items-center gap-1.5 pb-1 transition-all"
                    >
                        <span>Travailler avec nous</span>
                        <ArrowUpRight className="w-3 h-3 stroke-[2.5]" />
                    </a>
                </div>
            </div>

            {/* 5. Bottom-Right Corner Video Showreel & Pause/Play Buttons */}
            <div className="absolute bottom-10 right-6 sm:bottom-14 sm:right-12 z-20 flex items-center gap-3">
                {onOpenVideoModal && (
                    <button
                        type="button"
                        onClick={onOpenVideoModal}
                        className="px-3.5 py-2 rounded-md border dark:border-white/20 border-slate-900/20 hover:border-[#00D084] flex items-center gap-2 dark:text-white text-slate-900 hover:text-[#00D084] transition-all backdrop-blur-md dark:bg-black/30 bg-white/50 text-xs font-mono uppercase tracking-wider cursor-pointer group shadow-sm"
                        title="Ouvrir le showreel vidéo"
                    >
                        <Film className="w-3.5 h-3.5 text-[#00D084] group-hover:scale-110 transition-transform" />
                        <span className="hidden sm:inline">Showreel</span>
                    </button>
                )}

                <button
                    type="button"
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="w-10 h-10 rounded-md border dark:border-white/20 border-slate-900/20 hover:border-[#00D084] flex items-center justify-center dark:text-white/80 text-slate-900 hover:text-[#00D084] transition-all backdrop-blur-md dark:bg-black/30 bg-white/50 shadow-sm cursor-pointer"
                    title={isPlaying ? 'Mettre en pause' : 'Reprendre'}
                >
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
                </button>
            </div>
        </section>
    );
}
