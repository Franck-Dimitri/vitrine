import { ArrowUpRight, Plus } from 'lucide-react';

export default function Footer({ company = {} }) {
    const subsidiaries = [
        { name: 'Vitrine Ads', href: '#ecosystems' },
        { name: 'CaBougeOu', href: '#ecosystems' },
        { name: 'Sabes Numerik', href: '#ecosystems' },
        { name: 'IciLaBouf', href: '#ecosystems' },
        { name: 'InfoBooster', href: '#ecosystems' },
        { name: 'Projet After Bac', href: '#ecosystems' },
        { name: 'MonPro', href: '#ecosystems' },
        { name: 'Stay Awake', href: '#ecosystems' },
        { name: 'LinkedIn', href: 'https://linkedin.com', external: true },
        {
            name: 'WhatsApp Business',
            href: `https://wa.me/${company.whatsapp || '237690000000'}?text=Bonjour%20Vitrine%20Consulting`,
            external: true,
        },
    ];

    return (
        <footer id="contact" className="relative z-10 w-full px-6 sm:px-10 lg:px-14 xl:px-16 pt-24 pb-12 dark:bg-[#000000] bg-slate-50 transition-colors border-t dark:border-white/10 border-slate-200">
            {/* Main 2-Column Grid matching Koto's exact layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-20">
                
                {/* 1. LEFT COLUMN: Contact Title + Subtitle + Studio Photo Anchor */}
                <div className="lg:col-span-5 flex flex-col justify-between">
                    <div>
                        <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight dark:text-white text-slate-900 leading-none mb-3">
                            Contact
                        </h2>
                        <p className="font-display text-2xl sm:text-3xl lg:text-4xl font-light dark:text-white/40 text-slate-400 leading-snug">
                            Presse et carrières
                        </p>
                    </div>

                    {/* Studio / Office Photo Card (Matching Koto's SAY HELLO LA@KOTO.COM card) */}
                    <div className="mt-14 sm:mt-20 max-w-xs">
                        <a
                            href={`https://wa.me/${company.whatsapp || '237690000000'}?text=Bonjour%20Vitrine%20Consulting,%20je%20souhaite%20échanger%20avec%20le%20siège`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block relative rounded-lg overflow-hidden dark:bg-white/5 bg-slate-200 border dark:border-white/10 border-slate-300 group shadow-lg cursor-pointer"
                        >
                            {/* Studio Exterior Photo (Douala Akwa headquarters vibe) */}
                            <div className="aspect-[4/3] w-full overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"
                                    alt="Siège Vitrine Consulting Douala Akwa"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.28,0,0,1)]"
                                />
                            </div>

                            {/* Dark Gradient Overlay for Crisp Text Readability */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />

                            {/* Bottom Label Overlay: SAY HELLO / DOUALA@VITRINECONSULTING.COM */}
                            <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between text-white">
                                <div>
                                    <span className="text-[10px] font-mono tracking-widest uppercase block text-white/70">
                                        SAY HELLO
                                    </span>
                                    <span className="text-xs font-mono font-semibold tracking-wide text-white group-hover:text-[#00D084] transition-colors">
                                        DOUALA@VITRINECONSULTING.COM
                                    </span>
                                </div>
                                <div className="w-5 h-5 rounded-sm bg-white/15 flex items-center justify-center text-white/80 group-hover:bg-[#00D084] group-hover:text-black transition-colors shrink-0">
                                    <ArrowUpRight className="w-3 h-3 stroke-[2.5]" />
                                </div>
                            </div>
                        </a>
                    </div>
                </div>

                {/* 2. RIGHT COLUMN: 3 Rows separated by hairline dividers */}
                <div className="lg:col-span-7 flex flex-col justify-start">
                    
                    {/* Row 1: Press + Media */}
                    <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 py-8 border-t dark:border-white/10 border-slate-300">
                        <div className="sm:col-span-4">
                            <span className="font-sans text-sm dark:text-white text-slate-900 font-medium">
                                Presse + Médias
                            </span>
                        </div>
                        <div className="sm:col-span-8 flex flex-col gap-1">
                            <p className="font-sans text-sm dark:text-[#94A3B8] text-slate-600 font-[350]">
                                Pour information, Kit Média et ressources de marque.
                            </p>
                            <a
                                href={`mailto:${company.email || 'press@vitrineconsulting.com'}`}
                                className="font-sans text-sm dark:text-white/80 text-slate-800 hover:text-[#00D084] dark:hover:text-[#00D084] transition-colors self-start mt-1"
                            >
                                {company.email || 'press@vitrineconsulting.com'}
                            </a>
                        </div>
                    </div>

                    {/* Row 2: Recruitment */}
                    <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 py-8 border-t dark:border-white/10 border-slate-300">
                        <div className="sm:col-span-4">
                            <span className="font-sans text-sm dark:text-white text-slate-900 font-medium">
                                Recrutement
                            </span>
                        </div>
                        <div className="sm:col-span-8 flex flex-col gap-1">
                            <p className="font-sans text-sm dark:text-[#94A3B8] text-slate-600 font-[350]">
                                Une holding, huit filiales, des opportunités d'excellence.
                            </p>
                            <a
                                href={`https://wa.me/${company.whatsapp || '237690000000'}?text=Bonjour,%20je%20souhaite%20postuler%20chez%20Vitrine%20Consulting`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-sans text-sm dark:text-white/80 text-slate-800 hover:text-[#00D084] dark:hover:text-[#00D084] transition-colors self-start mt-1 underline-offset-4 hover:underline"
                            >
                                Travailler avec nous
                            </a>
                        </div>
                    </div>

                    {/* Row 3: Channels */}
                    <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 py-8 border-t dark:border-white/10 border-slate-300">
                        <div className="sm:col-span-4">
                            <span className="font-sans text-sm dark:text-white text-slate-900 font-medium">
                                Channels
                            </span>
                        </div>
                        <div className="sm:col-span-8">
                            <div className="flex flex-col gap-2 font-sans text-sm dark:text-[#94A3B8] text-slate-600">
                                {subsidiaries.map((sub, idx) => (
                                    <a
                                        key={idx}
                                        href={sub.href}
                                        target={sub.external ? '_blank' : undefined}
                                        rel={sub.external ? 'noopener noreferrer' : undefined}
                                        className="hover:text-[#00D084] dark:hover:text-white transition-colors py-0.5 self-start"
                                    >
                                        {sub.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>

            </div>

            {/* Bottom Copyright & Legal Line matching Koto's footer bar */}
            <div className="pt-8 border-t dark:border-white/10 border-slate-300 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans dark:text-white/40 text-slate-500">
                <div>
                    © 2015–2026 {company.name || 'Vitrine Consulting SARL'}
                </div>

                <div className="flex items-center gap-6">
                    <a href="#" className="hover:text-[#00D084] transition-colors">
                        Politique de confidentialité
                    </a>
                    <a href="#" className="hover:text-[#00D084] transition-colors">
                        Conditions d'utilisation
                    </a>
                    <a href="#" className="hover:text-[#00D084] transition-colors">
                        Cookies
                    </a>
                    <button
                        type="button"
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="w-5 h-5 rounded-full dark:bg-white/10 bg-slate-200 flex items-center justify-center hover:bg-[#00D084] hover:text-black dark:hover:bg-[#00D084] dark:hover:text-black transition-colors"
                        title="Haut de page"
                    >
                        <Plus className="w-3 h-3 rotate-45 stroke-[2.5]" />
                    </button>
                </div>
            </div>
        </footer>
    );
}
