import { useState, useEffect, useRef } from 'react';
import { Sun, Moon, Plus, Minus } from 'lucide-react';

export default function KotoNavbar({ theme, toggleTheme, isDark }) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('HOME');
    const [timeString, setTimeString] = useState('');
    const menuRef = useRef(null);

    // Live Douala (UTC+1) Clock
    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const hours = String(now.getHours()).padStart(2, '0');
            const minutes = String(now.getMinutes()).padStart(2, '0');
            setTimeString(`${hours}:${minutes} UTC+1`);
        };
        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    // Track scroll position to collapse into the Koto Pill Menu
    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            if (scrollY > 60) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }

            // Determine active section name for the pill label
            const ecoSection = document.getElementById('ecosystems');
            const orgSection = document.getElementById('organisation');
            const statsSection = document.getElementById('stats');
            const contactSection = document.getElementById('contact');

            if (contactSection && contactSection.getBoundingClientRect().top <= 300) {
                setActiveSection('CONTACT');
            } else if (statsSection && statsSection.getBoundingClientRect().top <= 300) {
                setActiveSection('CHIFFRES');
            } else if (orgSection && orgSection.getBoundingClientRect().top <= 300) {
                setActiveSection('ORGANISATION');
            } else if (ecoSection && ecoSection.getBoundingClientRect().top <= 300) {
                setActiveSection('ÉCOSYSTÈMES');
            } else {
                setActiveSection('HOME');
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setIsMenuOpen(false);
            }
        };
        if (isMenuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isMenuOpen]);

    const subsidiaries = [
        { name: 'CABOUGEOU', id: 'eco-cabougeou' },
        { name: 'SABES NUMERIK', id: 'eco-sabes-numerik' },
        { name: 'ICILABOUF', id: 'eco-icilabouf' },
        { name: 'INFOBOOSTER', id: 'eco-infobooster' },
        { name: 'PROJET AFTER BAC', id: 'eco-projet-after-bac' },
        { name: 'MONPRO', id: 'eco-monpro' },
        { name: 'STAY AWAKE', id: 'eco-stay-awake' },
        { name: 'VITRINE ADS', id: 'eco-vitrine-ads' },
    ];

    const scrollToSection = (id) => {
        setIsMenuOpen(false);
        const target = document.getElementById(id);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <>
            {/* 1. TOP-LEVEL FULL NAVBAR (Visible when at the very top of Hero) */}
            <header
                className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-500 pointer-events-none ${
                    isScrolled
                        ? 'opacity-0 -translate-y-4'
                        : 'opacity-100 translate-y-0 py-6 sm:py-7 px-6 sm:px-10 lg:px-16'
                }`}
            >
                <div className="w-full flex items-center justify-between pointer-events-auto">
                    {/* Left: Brand Logo & Links */}
                    <div className="flex items-center gap-8 sm:gap-12">
                        <a href="#" className="flex items-center gap-2 group">
                            <span className="font-display font-extrabold text-2xl sm:text-3xl tracking-tighter text-[#00D084] group-hover:scale-105 transition-transform duration-300">
                                Vitrine
                            </span>
                        </a>

                        <nav className="hidden md:flex items-center gap-7 lg:gap-9 text-[11px] font-mono uppercase tracking-widest">
                            {[
                                { href: '#ecosystems', label: 'Écosystèmes' },
                                { href: '#organisation', label: 'Organisation' },
                                { href: '#stats', label: 'Chiffres' },
                                { href: '#services', label: 'Services' },
                                { href: '#contact', label: 'Contact' },
                            ].map((link, idx) => (
                                <a
                                    key={idx}
                                    href={link.href}
                                    className="dark:text-white/80 text-slate-800/80 hover:text-black dark:hover:text-[#00D084] transition-colors duration-200"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </nav>
                    </div>

                    {/* Right: Douala Time + Theme Toggle + Dots */}
                    <div className="flex items-center gap-4 sm:gap-7 text-xs font-mono">
                        <span className="dark:text-white/80 text-slate-800/80 hidden sm:inline-block tracking-wider">
                            {timeString || '20:45 UTC+1'}
                        </span>

                        <button
                            type="button"
                            onClick={toggleTheme}
                            className="px-3 py-1.5 rounded-md dark:bg-white/10 bg-black/5 hover:dark:bg-white/20 hover:bg-black/10 backdrop-blur-md dark:text-white text-slate-900 border dark:border-white/15 border-slate-900/10 transition-all flex items-center gap-2 text-[11px] tracking-widest uppercase cursor-pointer"
                            title={isDark ? 'Passer en mode clair' : 'Passer en mode sombre'}
                        >
                            {isDark ? (
                                <>
                                    <Sun className="w-3.5 h-3.5 text-[#00D084]" />
                                    <span className="hidden sm:inline font-medium">Clair</span>
                                </>
                            ) : (
                                <>
                                    <Moon className="w-3.5 h-3.5 text-emerald-600" />
                                    <span className="hidden sm:inline font-medium">Sombre</span>
                                </>
                            )}
                        </button>

                        <div
                            className="grid grid-cols-2 gap-1 w-3.5 h-3.5 opacity-80 hover:opacity-100 transition-opacity cursor-pointer"
                            title="Menu complet"
                        >
                            <span className="w-1 h-1 rounded-sm dark:bg-white bg-slate-900" />
                            <span className="w-1 h-1 rounded-sm dark:bg-white bg-slate-900" />
                            <span className="w-1 h-1 rounded-sm dark:bg-white bg-slate-900" />
                            <span className="w-1 h-1 rounded-sm dark:bg-white bg-slate-900" />
                        </div>
                    </div>
                </div>
            </header>

            {/* 2. KOTO FLOATING PILL MENU ON SCROLL (Exact match of User's Image 1 & Image 2) */}
            <div
                ref={menuRef}
                className={`fixed top-6 left-6 sm:top-8 sm:left-10 z-50 transition-all duration-300 select-none ${
                    isScrolled
                        ? 'opacity-100 translate-y-0 pointer-events-auto'
                        : 'opacity-0 -translate-y-4 pointer-events-none'
                }`}
            >
                {!isMenuOpen ? (
                    /* COLLAPSED STATE (Image 1): [ Vitrine  HOME  + ] */
                    <button
                        type="button"
                        onClick={() => setIsMenuOpen(true)}
                        className="rounded-lg dark:bg-[#111317]/95 bg-white/95 backdrop-blur-md border dark:border-white/10 border-slate-900/10 shadow-2xl px-4 py-2.5 flex items-center gap-3.5 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer group"
                    >
                        <span className="font-display font-black text-sm sm:text-base tracking-tighter text-[#00D084]">
                            Vitrine
                        </span>
                        <span className="font-mono text-xs font-semibold dark:text-white/80 text-slate-700 tracking-wider">
                            {activeSection}
                        </span>
                        <div className="w-4 h-4 flex items-center justify-center text-slate-400 group-hover:text-[#00D084] transition-colors">
                            <Plus className="w-3.5 h-3.5 stroke-[2.5]" />
                        </div>
                    </button>
                ) : (
                    /* EXPANDED DROPDOWN MENU STATE (Image 2) */
                    <div className="w-64 sm:w-72 rounded-lg dark:bg-[#111317]/98 bg-white/98 backdrop-blur-2xl border dark:border-white/10 border-slate-900/10 shadow-2xl p-5 flex flex-col gap-6 animate-fadeIn">
                        {/* Top Header inside menu */}
                        <div className="flex items-center justify-between pb-3 border-b dark:border-white/10 border-slate-200">
                            <div className="flex items-center gap-3">
                                <span className="font-display font-black text-sm sm:text-base tracking-tighter text-[#00D084]">
                                    Vitrine
                                </span>
                                <span className="font-mono text-xs font-semibold dark:text-white/80 text-slate-700 tracking-wider">
                                    HOME
                                </span>
                            </div>
                            <button
                                type="button"
                                onClick={() => setIsMenuOpen(false)}
                                className="w-6 h-6 flex items-center justify-center text-slate-400 hover:text-white transition-colors cursor-pointer"
                                title="Fermer le menu"
                            >
                                <Minus className="w-4 h-4 stroke-[2.5]" />
                            </button>
                        </div>

                        {/* Main Navigation Pages */}
                        <nav className="flex flex-col gap-3 font-display text-base sm:text-lg font-light dark:text-white text-slate-900">
                            {[
                                { label: 'Écosystèmes', id: 'ecosystems' },
                                { label: 'Organisation', id: 'organisation' },
                                { label: 'Chiffres Clés', id: 'stats' },
                                { label: 'Services Transverses', id: 'services' },
                                { label: 'Contact & Siège', id: 'contact' },
                            ].map((item) => (
                                <button
                                    key={item.id}
                                    type="button"
                                    onClick={() => scrollToSection(item.id)}
                                    className="text-left hover:text-[#00D084] transition-colors flex items-center justify-between group cursor-pointer"
                                >
                                    <span>{item.label}</span>
                                    <span className="text-xs font-mono opacity-0 group-hover:opacity-100 text-[#00D084] transition-opacity">
                                        →
                                    </span>
                                </button>
                            ))}
                        </nav>

                        {/* Channels / Subsidiaries Sub-list (Image 2 layout) */}
                        <div className="pt-2 border-t dark:border-white/10 border-slate-200">
                            <span className="text-[10px] font-mono uppercase tracking-[0.2em] dark:text-slate-400 text-slate-500 font-bold block mb-2.5">
                                CHANNELS & FILIALES
                            </span>
                            <div className="flex flex-col gap-1.5 font-mono text-[11px] uppercase tracking-wider dark:text-slate-300 text-slate-700">
                                {subsidiaries.map((sub) => (
                                    <button
                                        key={sub.id}
                                        type="button"
                                        onClick={() => scrollToSection(sub.id)}
                                        className="text-left hover:text-[#00D084] transition-colors py-0.5 cursor-pointer"
                                    >
                                        {sub.name}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* 3. FLOATING TOP-RIGHT UTILITY PILL ON SCROLL (Douala time, Mode toggle, dots) */}
            <div
                className={`fixed top-6 right-6 sm:top-8 sm:right-10 z-50 transition-all duration-300 select-none ${
                    isScrolled
                        ? 'opacity-100 translate-y-0 pointer-events-auto'
                        : 'opacity-0 -translate-y-4 pointer-events-none'
                }`}
            >
                <div className="rounded-lg dark:bg-[#111317]/95 bg-white/95 backdrop-blur-md border dark:border-white/10 border-slate-900/10 shadow-2xl px-3.5 py-2 flex items-center gap-3 font-mono text-xs">
                    {/* Time */}
                    <span className="dark:text-white/80 text-slate-700 hidden sm:inline-block text-[11px]">
                        {timeString || '20:45 UTC+1'}
                    </span>

                    {/* Dark/Light Toggle */}
                    <button
                        type="button"
                        onClick={toggleTheme}
                        className="p-1 rounded-md hover:dark:bg-white/10 hover:bg-black/5 dark:text-white text-slate-800 transition-colors cursor-pointer"
                        title={isDark ? 'Mode clair' : 'Mode sombre'}
                    >
                        {isDark ? (
                            <Sun className="w-3.5 h-3.5 text-[#00D084]" />
                        ) : (
                            <Moon className="w-3.5 h-3.5 text-emerald-600" />
                        )}
                    </button>

                    {/* 4 dots */}
                    <div className="grid grid-cols-2 gap-0.5 w-2.5 h-2.5 opacity-70">
                        <span className="w-1 h-1 rounded-sm dark:bg-white bg-slate-900" />
                        <span className="w-1 h-1 rounded-sm dark:bg-white bg-slate-900" />
                        <span className="w-1 h-1 rounded-sm dark:bg-white bg-slate-900" />
                        <span className="w-1 h-1 rounded-sm dark:bg-white bg-slate-900" />
                    </div>
                </div>
            </div>
        </>
    );
}
