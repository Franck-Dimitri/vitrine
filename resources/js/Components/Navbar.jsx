import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';

export default function Navbar({ auth }) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [hoveredLink, setHoveredLink] = useState(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 40);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { href: '#ecosystems', label: 'Écosystèmes', swap: '8 Filiales Métiers' },
        { href: '#services', label: 'Expertises', swap: 'Ce que nous faisons' },
        { href: '#bivalent', label: 'Organisation', swap: 'Holding vs Filiales' },
        { href: '#stats', label: 'Impact', swap: 'Chiffres Clés' },
        { href: '#contact', label: 'Contact', swap: 'Échangez avec nous' },
    ];

    return (
        <>
            {/* Morphing Floating Glass Pill Navbar (Fixed Top-Left) */}
            <header className="fixed top-4 left-4 sm:top-6 sm:left-6 z-40 transition-all duration-500 ease-[cubic-bezier(0.28,0,0,1)]">
                <nav
                    className={`glass-pill rounded-full transition-all duration-500 ease-[cubic-bezier(0.28,0,0,1)] flex items-center p-1.5 sm:p-2 ${
                        isScrolled
                            ? 'shadow-2xl shadow-black/80 bg-[#080D1A]/90 border-slate-700/60'
                            : 'bg-[#080D1A]/70 border-white/10'
                    }`}
                >
                    {/* Brand Monogram & Name */}
                    <a
                        href="#"
                        className="flex items-center gap-3 pl-1 pr-3 py-1 rounded-full group transition-all"
                    >
                        <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gradient-to-tr from-[#00D084] to-[#0B132B] p-0.5 shadow-lg shadow-[#00D084]/20 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                            <div className="w-full h-full bg-[#080D1A] rounded-full flex items-center justify-center font-display font-extrabold text-[#00D084] text-sm">
                                V
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-display font-bold text-xs sm:text-sm tracking-tight text-white flex items-center gap-1 leading-none">
                                Vitrine <span className="text-[#00D084]">Consulting</span>
                            </span>
                            <span className="text-[9px] font-mono text-[#94A3B8] tracking-widest uppercase mt-0.5">
                                Holding
                            </span>
                        </div>
                    </a>

                    {/* Desktop Navigation Links with Text-Swap */}
                    <div className="hidden lg:flex items-center gap-1 pl-2 pr-2 border-l border-white/10 ml-2">
                        {navLinks.map((link, idx) => (
                            <a
                                key={idx}
                                href={link.href}
                                onMouseEnter={() => setHoveredLink(idx)}
                                onMouseLeave={() => setHoveredLink(null)}
                                className="relative px-3.5 py-1.5 rounded-full overflow-hidden text-xs font-mono transition-colors group"
                            >
                                <div className="relative h-4 overflow-hidden">
                                    {/* Default Text */}
                                    <div
                                        className={`transition-transform duration-300 ease-[cubic-bezier(0.15,0,0.15,1)] ${
                                            hoveredLink === idx
                                                ? '-translate-y-5 opacity-0'
                                                : 'translate-y-0 text-slate-300'
                                        }`}
                                    >
                                        {link.label}
                                    </div>
                                    {/* Swapped Text on Hover */}
                                    <div
                                        className={`absolute top-0 left-0 transition-transform duration-300 ease-[cubic-bezier(0.15,0,0.15,1)] ${
                                            hoveredLink === idx
                                                ? 'translate-y-0 text-[#00D084] font-medium'
                                                : 'translate-y-5 opacity-0'
                                        }`}
                                    >
                                        {link.swap}
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>

                    {/* Action CTA Button */}
                    <div className="hidden sm:flex items-center gap-2 pl-2">
                        <a
                            href="#contact"
                            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#00D084] hover:bg-[#00B875] text-[#080D1A] text-xs font-semibold tracking-wide transition-all duration-300 shadow-lg shadow-[#00D084]/20 hover:scale-[1.02] active:scale-[0.98]"
                        >
                            <span>Vitrine Ads</span>
                            <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
                        </a>
                    </div>

                    {/* Mobile Hamburger Toggle */}
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="lg:hidden w-8 h-8 rounded-full flex items-center justify-center text-slate-300 hover:text-white hover:bg-white/5 transition ml-1"
                        aria-label="Ouvrir le menu"
                    >
                        {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
                    </button>
                </nav>
            </header>

            {/* Fullscreen Mobile Drawer */}
            {mobileOpen && (
                <div className="fixed inset-0 z-30 lg:hidden bg-[#080D1A]/95 backdrop-blur-2xl flex flex-col justify-between p-8 pt-28">
                    <div className="flex flex-col gap-6">
                        <span className="text-xs font-mono uppercase tracking-widest text-[#00D084] flex items-center gap-2">
                            <Sparkles className="w-3.5 h-3.5" />
                            Navigation Corporate
                        </span>

                        <nav className="flex flex-col gap-4">
                            {navLinks.map((link, idx) => (
                                <a
                                    key={idx}
                                    href={link.href}
                                    onClick={() => setMobileOpen(false)}
                                    className="text-2xl sm:text-3xl font-display font-light text-slate-200 hover:text-[#00D084] transition flex items-center justify-between py-2 border-b border-white/5"
                                >
                                    <span>{link.label}</span>
                                    <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">
                                        {link.swap}
                                    </span>
                                </a>
                            ))}
                        </nav>
                    </div>

                    <div className="flex flex-col gap-4 pt-8 border-t border-white/10">
                        <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                            <span>Siège Douala (Akwa)</span>
                            <span className="text-[#00D084]">8 Écosystèmes</span>
                        </div>
                        <a
                            href="#contact"
                            onClick={() => setMobileOpen(false)}
                            className="w-full py-3.5 rounded-full bg-[#00D084] hover:bg-[#00B875] text-[#080D1A] font-semibold text-center text-sm shadow-xl shadow-[#00D084]/20 transition"
                        >
                            Accéder à Vitrine Ads / Devis
                        </a>
                    </div>
                </div>
            )}
        </>
    );
}
