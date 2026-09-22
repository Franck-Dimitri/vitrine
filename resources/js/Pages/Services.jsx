import { useState, useEffect, useRef } from 'react';
import AppLayout from '@/Layouts/AppLayout';
import { ArrowUpRight, ArrowLeft, ArrowRight } from 'lucide-react';

export default function Services({
    disciplines = [],
    partners = [],
    testimonials = [],
    company = {},
}) {
    // -------------------------------------------------------------------------
    // 1. Dynamic Scroll Tracking for Disciplines (Matching Koto Asymmetric Feed)
    // -------------------------------------------------------------------------
    const [activeIndex, setActiveIndex] = useState(0);
    const cardsRef = useRef([]);

    useEffect(() => {
        let ticking = false;

        const updateActiveCard = () => {
            if (!cardsRef.current || cardsRef.current.length === 0) return;

            const triggerY = window.innerHeight * 0.45;
            let current = 0;

            for (let i = 0; i < cardsRef.current.length; i++) {
                const card = cardsRef.current[i];
                if (!card) continue;
                const rect = card.getBoundingClientRect();
                if (rect.top <= triggerY) {
                    current = i;
                }
            }

            setActiveIndex(current);
        };

        const onScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    updateActiveCard();
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', onScroll, { passive: true });

        updateActiveCard();
        const timeout = setTimeout(updateActiveCard, 200);

        return () => {
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', onScroll);
            clearTimeout(timeout);
        };
    }, [disciplines]);

    const activeDiscipline = disciplines[activeIndex] || disciplines[0] || {};

    const scrollToCard = (index) => {
        const target = cardsRef.current[index];
        if (target) {
            const yOffset = -window.innerHeight * 0.12;
            const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    const scrollToSection = (id) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    // -------------------------------------------------------------------------
    // 2. Testimonial State & Controls
    // -------------------------------------------------------------------------
    const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

    const nextTestimonial = () => {
        setCurrentTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const activeTestimonial = testimonials[currentTestimonialIndex] || testimonials[0];

    // Duplicate partner list for seamless infinite marquee loop
    const marqueeList = [...partners, ...partners];

    // -------------------------------------------------------------------------
    // 3. Crisp Vector / Stylized Brand Logos for Clients (Matching Koto Capture 2)
    // -------------------------------------------------------------------------
    const renderClientLogo = (name) => {
        const lower = name.toLowerCase();

        if (lower.includes('mtn')) {
            return (
                <div className="flex items-center justify-center">
                    <svg className="h-9 w-24" viewBox="0 0 100 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <ellipse cx="50" cy="20" rx="46" ry="17" stroke="currentColor" strokeWidth="2.5" />
                        <text x="50" y="26" textAnchor="middle" fill="currentColor" fontFamily="Outfit, sans-serif" fontWeight="900" fontSize="18" letterSpacing="1">
                            MTN
                        </text>
                    </svg>
                </div>
            );
        }

        if (lower.includes('orange')) {
            return (
                <div className="flex items-center gap-2.5">
                    <div className="w-5 h-5 bg-[#FF7900] rounded-xs shrink-0 shadow-xs" />
                    <span className="font-display font-bold text-2xl tracking-tighter text-current lowercase">
                        orange
                    </span>
                </div>
            );
        }

        if (lower.includes('uba') || lower.includes('united bank')) {
            return (
                <div className="flex items-center gap-2">
                    <div className="w-7 h-7 bg-[#D71920] rounded-xs flex items-center justify-center text-white font-extrabold text-[11px] shadow-xs">
                        UBA
                    </div>
                    <span className="font-display font-extrabold text-xl tracking-wider text-current">
                        UBA
                    </span>
                </div>
            );
        }

        if (lower.includes('société générale') || lower.includes('societe generale')) {
            return (
                <div className="flex items-center gap-2.5">
                    <div className="w-6 h-6 flex flex-col rounded-xs overflow-hidden border border-current/20 shrink-0">
                        <div className="h-3 w-6 bg-[#E2001A]" />
                        <div className="h-3 w-6 bg-black dark:bg-white" />
                    </div>
                    <div className="flex flex-col">
                        <span className="font-display font-bold text-[11px] tracking-wider text-current leading-tight">
                            SOCIETE
                        </span>
                        <span className="font-display font-bold text-[11px] tracking-wider text-current leading-tight">
                            GENERALE
                        </span>
                    </div>
                </div>
            );
        }

        if (lower.includes('canal')) {
            return (
                <div className="px-3 py-1 dark:bg-white dark:text-black bg-black text-white font-display font-black text-sm tracking-widest rounded-xs flex items-center gap-0.5 shadow-xs">
                    <span>CANAL</span>
                    <span className="text-[#00D084]">+</span>
                </div>
            );
        }

        if (lower.includes('total')) {
            return (
                <div className="flex items-center gap-2">
                    <svg className="w-6 h-6 text-current shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <circle cx="12" cy="12" r="9" strokeDasharray="14 6" />
                    </svg>
                    <span className="font-display font-bold text-base tracking-tight text-current">
                        TotalEnergies
                    </span>
                </div>
            );
        }

        if (lower.includes('dangote')) {
            return (
                <span className="font-display font-black text-xl tracking-widest text-current uppercase">
                    DANGOTE
                </span>
            );
        }

        if (lower.includes('activa')) {
            return (
                <div className="flex items-center gap-2">
                    <span className="font-display font-extrabold text-lg tracking-wider text-current">
                        ACTIVA
                    </span>
                    <span className="text-[9px] font-mono uppercase px-1.5 py-0.5 rounded-xs bg-[#00D084]/20 text-[#00D084] font-bold">
                        ASSUR
                    </span>
                </div>
            );
        }

        if (lower.includes('afriland')) {
            return (
                <div className="flex items-center gap-2">
                    <svg className="w-6 h-6 text-current shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>
                    <div className="flex flex-col">
                        <span className="font-display font-bold text-xs tracking-wide text-current">
                            Afriland
                        </span>
                        <span className="text-[9px] font-mono uppercase text-current/70 -mt-0.5">
                            First Bank
                        </span>
                    </div>
                </div>
            );
        }

        if (lower.includes('eneo')) {
            return (
                <div className="flex items-center gap-1.5">
                    <span className="font-display font-black text-2xl tracking-tighter text-current">
                        eneo
                    </span>
                    <div className="w-2 h-2 rounded-full bg-[#00D084] animate-pulse" />
                </div>
            );
        }

        return (
            <span className="font-display font-bold text-base tracking-wide text-current uppercase">
                {name}
            </span>
        );
    };

    return (
        <AppLayout
            title="Nos Services & Expertises — Vitrine Consulting SARL | Stratégie, Digital, Régie Ads"
            description="Découvrez l'ensemble de nos expertises transversales : Stratégie, Ingénierie logicielle, Régie publicitaire Vitrine Ads, Production média et Académie."
            company={company}
        >
            {/* ========================================================================= */}
            {/* 1. HERO SECTION (Split Thesis & Quick Anchor Bar)                         */}
            {/* ========================================================================= */}
            <section className="relative w-full pt-36 sm:pt-44 pb-12 px-6 sm:px-10 lg:px-14 xl:px-16 overflow-hidden">
                {/* Top Split: Title (Left) vs Bold Thesis (Right) */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-14">
                    <div className="lg:col-span-5">
                        <h1 className="font-display font-light text-5xl sm:text-6xl lg:text-7xl dark:text-white text-slate-900 tracking-tight leading-none">
                            Nos expertises
                        </h1>
                    </div>

                    <div className="lg:col-span-7">
                        <p className="font-display font-light text-2xl sm:text-3xl lg:text-4xl dark:text-white/90 text-slate-800 leading-snug tracking-tight">
                            Stratégie. Digital. Régie Ads. Production Média. Une force de frappe unifiée pour bâtir des marques dominantes en Afrique centrale.
                        </p>
                    </div>
                </div>

                {/* (JUMP TO) Navigation Bar in Monospace */}
                <div className="pt-6 pb-6 border-t dark:border-white/10 border-slate-200 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs font-mono select-none">
                    <span className="dark:text-white/40 text-slate-400 uppercase tracking-widest font-medium">
                        (JUMP TO)
                    </span>
                    {disciplines.map((d, idx) => (
                        <button
                            key={d.id}
                            type="button"
                            onClick={() => scrollToCard(idx)}
                            className={`transition-colors uppercase tracking-wider font-semibold cursor-pointer ${
                                activeIndex === idx
                                    ? 'text-[#00D084]'
                                    : 'dark:text-white text-slate-800 hover:text-[#00D084] dark:hover:text-[#00D084]'
                            }`}
                        >
                            {d.name}
                        </button>
                    ))}
                    <button
                        type="button"
                        onClick={() => scrollToSection('clients')}
                        className="dark:text-white text-slate-800 hover:text-[#00D084] dark:hover:text-[#00D084] transition-colors uppercase tracking-wider font-semibold cursor-pointer"
                    >
                        CLIENTS
                    </button>
                </div>

                {/* Full-width Panoramic Abstract / Architectural Banner */}
                <div className="w-full aspect-[21/8] sm:aspect-[24/7] rounded-lg sm:rounded-xl overflow-hidden dark:bg-[#0B132B] bg-slate-200 border dark:border-white/10 border-slate-300 shadow-2xl relative">
                    <img
                        src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=2400&q=85"
                        alt="Vitrine Consulting Architectures d'Excellence"
                        className="w-full h-full object-cover filter contrast-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                </div>
            </section>

            {/* ========================================================================= */}
            {/* 2. DYNAMIC SCROLLING SERVICES: PURE TYPOGRAPHIC & ARCHITECTURAL           */}
            {/*    (Exact layout matching Koto captures 1 & 2 without full media cards)   */}
            {/* ========================================================================= */}
            <section id="services-feed" className="relative z-10 w-full px-6 sm:px-10 lg:px-14 xl:px-16 py-20 sm:py-28">
                
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start relative w-full">

                    {/* 1. LEFT COLUMN: Sticky Side Panel */}
                    <div className="hidden lg:flex lg:col-span-4 sticky top-24 h-[calc(100vh-8rem)] self-start flex-col justify-between select-none pb-6">
                        
                        {/* Top: "NOS SERVICES / CE QUE NOUS FAISONS" */}
                        <div>
                            <div className="flex items-center gap-2.5 mb-4 text-xs font-mono uppercase tracking-widest font-bold">
                                <span className="dark:text-white text-slate-900">NOS SERVICES</span>
                                <span className="dark:text-white/40 text-slate-400">/</span>
                                <span className="dark:text-white/50 text-slate-500 font-normal">CE QUE NOUS FAISONS</span>
                            </div>

                            <p className="font-sans font-[350] text-sm sm:text-base dark:text-[#94A3B8] text-slate-600 leading-relaxed max-w-sm mb-6">
                                En tant que partenaire stratégique et holding opérationnelle, nous intervenons avec nos filiales et équipes dédiées sur l'ensemble de la chaîne de valeur :
                            </p>

                            {/* Active Index Counter & Quick Jump Indicators */}
                            <div className="flex items-center gap-3">
                                <span className="text-xs font-mono dark:text-[#00D084] text-emerald-700 font-semibold">
                                    0{activeIndex + 1} / 0{disciplines.length}
                                </span>
                                <div className="flex items-center gap-1.5">
                                    {disciplines.map((d, idx) => (
                                        <button
                                            key={d.id}
                                            type="button"
                                            onClick={() => scrollToCard(idx)}
                                            className={`h-1.5 rounded-xs transition-all duration-300 cursor-pointer ${
                                                activeIndex === idx
                                                    ? 'w-7 bg-[#00D084]'
                                                    : 'w-2 dark:bg-white/20 bg-slate-300 hover:dark:bg-white/40 hover:bg-slate-400'
                                            }`}
                                            title={`Aller à ${d.name}`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Bottom Floating Visual Card (Matching Screenshot 1 & 2 bottom-left preview - enlarged for better presence) */}
                        <div className="w-full max-w-[360px] xl:max-w-[400px] rounded-xl overflow-hidden border dark:border-white/15 border-slate-300 dark:bg-[#111317] bg-white shadow-2xl group transition-all duration-500">
                            <div className="aspect-[4/3] sm:aspect-[16/11] min-h-[210px] overflow-hidden relative">
                                <img
                                    key={`thumb-${activeDiscipline.id}`}
                                    src={activeDiscipline.visual?.image}
                                    alt={activeDiscipline.visual?.client}
                                    className="w-full h-full object-cover filter contrast-105 group-hover:scale-105 transition-transform duration-700 animate-fadeIn"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />
                                <div className="absolute bottom-3.5 left-4 right-4 flex items-center justify-between text-xs font-mono text-white">
                                    <div>
                                        <span className="text-[10px] text-[#00D084] font-bold uppercase tracking-widest block mb-0.5">
                                            {activeDiscipline.visual?.label}
                                        </span>
                                        <span className="text-xs uppercase tracking-wider font-semibold opacity-95 truncate max-w-[240px] block">
                                            {activeDiscipline.visual?.client}
                                        </span>
                                    </div>
                                    <div className="w-7 h-7 rounded-md bg-white/15 backdrop-blur-md flex items-center justify-center text-[#00D084] group-hover:bg-[#00D084] group-hover:text-black transition-colors shrink-0">
                                        <ArrowUpRight className="w-4 h-4" />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* 2. RIGHT COLUMN: Disciplines Feed (Without big card images - 100% typographic matching Koto) */}
                    <div className="col-span-1 lg:col-span-8 flex flex-col gap-28 sm:gap-36 lg:gap-44">
                        
                        {/* Mobile Only Header */}
                        <div className="lg:hidden pb-4 border-b dark:border-white/10 border-slate-200 mb-8">
                            <div className="flex items-center gap-2 mb-1 text-xs font-mono uppercase tracking-widest text-[#00D084]">
                                <span>NOS SERVICES</span>
                                <span>•</span>
                                <span>5 DISCIPLINES</span>
                            </div>
                            <h2 className="font-display text-3xl font-light dark:text-white text-slate-900">
                                Ce que nous faisons
                            </h2>
                        </div>

                        {disciplines.map((d, index) => (
                            <article
                                key={d.id}
                                ref={(el) => (cardsRef.current[index] = el)}
                                id={d.id}
                                className="pt-10 border-t dark:border-white/10 border-slate-200 scroll-mt-28"
                            >
                                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 lg:gap-12 items-start">
                                    
                                    {/* Center Column: Discipline Name (Matching Koto's 'Strategy', 'Brand', etc.) */}
                                    <div className="md:col-span-4 lg:col-span-4">
                                        <h2 className="font-display font-light text-3xl sm:text-4xl lg:text-5xl dark:text-white text-slate-900 tracking-tight leading-none md:sticky md:top-28">
                                            {d.name}
                                        </h2>
                                    </div>

                                    {/* Right Column: Thesis + Hairlines + Subthesis (Matching Koto's right column) */}
                                    <div className="md:col-span-8 lg:col-span-8 flex flex-col">
                                        
                                        {/* Top Bold Editorial Thesis */}
                                        <p className="font-display font-light text-2xl sm:text-3xl lg:text-4xl dark:text-white/95 text-slate-900 leading-snug tracking-tight mb-10">
                                            {d.thesis}
                                        </p>

                                        {/* Hairline Deliverables List */}
                                        <div className="divide-y dark:divide-white/10 divide-slate-200 border-y dark:border-white/10 border-slate-200">
                                            {d.deliverables.map((item, idx) => (
                                                <div
                                                    key={idx}
                                                    className="py-3.5 flex items-center justify-between text-sm sm:text-base font-sans font-[350] dark:text-slate-200 text-slate-800 hover:text-[#00D084] dark:hover:text-[#00D084] transition-colors cursor-default group"
                                                >
                                                    <span className="group-hover:translate-x-1.5 transition-transform duration-200">
                                                        {item}
                                                    </span>
                                                    <span className="text-xs font-mono opacity-30 group-hover:opacity-100 text-[#00D084] transition-opacity">
                                                        +
                                                    </span>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Subthesis Transitional Paragraph (Matching Koto's second text block) */}
                                        {d.subthesis && (
                                            <p className="font-display font-light text-lg sm:text-xl lg:text-2xl dark:text-[#94A3B8] text-slate-600 leading-relaxed mt-10 mb-6">
                                                {d.subthesis}
                                            </p>
                                        )}

                                        {/* Direct WhatsApp Action Link */}
                                        <div className="mt-4">
                                            <a
                                                href={`https://wa.me/${company.whatsapp || '237690000000'}?text=Bonjour%20Vitrine%20Consulting,%20je%20souhaite%20activer%20le%20pôle%20${encodeURIComponent(d.name)}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#00D084] hover:underline font-semibold"
                                            >
                                                <span>Activer cette expertise avec notre équipe</span>
                                                <ArrowUpRight className="w-3.5 h-3.5" />
                                            </a>
                                        </div>

                                    </div>

                                </div>
                            </article>
                        ))}
                    </div>

                </div>
            </section>

            {/* ========================================================================= */}
            {/* 3. CLIENTS: SINGLE CONTINUOUS LINE WITH VECTOR LOGOS (Matching Capture 2)  */}
            {/* ========================================================================= */}
            <section id="clients" className="mt-20 pt-20 pb-20 border-t dark:border-white/10 border-slate-200 overflow-hidden dark:bg-[#07090E] bg-[#FAFAFC] transition-colors">
                <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 mb-12">
                    {/* Header Label */}
                    <div className="flex items-center gap-3 mb-4 text-xs font-mono uppercase tracking-widest dark:text-slate-400 text-slate-500">
                        <span className="dark:text-white text-slate-900 font-bold">CLIENTS</span>
                        <span>•</span>
                        <span>PARTENAIRES STRATÉGIQUES</span>
                    </div>

                    <h2 className="font-display font-light text-3xl sm:text-4xl lg:text-5xl dark:text-white text-slate-900 tracking-tight max-w-4xl leading-snug">
                        Nos clients. Des partenaires aux côtés des marques qui façonnent la culture et des bâtisseurs d'avenir.
                    </h2>
                </div>

                {/* Single Continuous Scrolling Row of Connected Cells with 1px Hairline Borders */}
                <div className="relative w-full overflow-hidden pause-marquee border-y dark:border-white/10 border-slate-200/90 dark:bg-[#0A0D14] bg-white">
                    <div className="flex w-max animate-marquee">
                        {marqueeList.map((client, idx) => (
                            <div
                                key={idx}
                                className="w-56 sm:w-64 h-28 sm:h-32 border-r dark:border-white/10 border-slate-200 flex items-center justify-center p-6 shrink-0 transition-colors duration-300 dark:bg-[#0A0D14] bg-white hover:dark:bg-[#121624] hover:bg-slate-50 group cursor-default"
                            >
                                <div className="opacity-75 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300 dark:text-white text-slate-900 flex items-center justify-center">
                                    {renderClientLogo(client.name)}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ========================================================================= */}
            {/* 4. TESTIMONIALS & CASE STUDY: CINEMATIC FULL WIDTH (Matching Capture 4)    */}
            {/* ========================================================================= */}
            {activeTestimonial && (
                <section className="py-24 sm:py-32 border-t dark:border-white/10 border-slate-200 px-6 sm:px-10 lg:px-14 xl:px-16 dark:bg-[#06080D] bg-[#F4F5F7] transition-colors">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
                        
                        {/* Left Column: Big Vertical Poster / Cinematic Case Study (Matching Capture 4 Abolisher) */}
                        <div className="lg:col-span-5">
                            <div className="relative rounded-lg sm:rounded-xl overflow-hidden aspect-[3/4] min-h-[460px] sm:min-h-[520px] max-w-md mx-auto lg:mx-0 bg-black border dark:border-white/15 border-slate-300 shadow-2xl group select-none">
                                {/* Cinematic Background Media */}
                                <img
                                    src={activeTestimonial.caseStudy.image}
                                    alt={activeTestimonial.caseStudy.title}
                                    className="w-full h-full object-cover filter contrast-110 opacity-80 group-hover:scale-105 transition-transform duration-1000 ease-[cubic-bezier(0.28,0,0,1)]"
                                />
                                
                                {/* Deep Contrast Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent pointer-events-none" />

                                {/* Top Large Distressed / Architectural Wordmark (Matching 'ABOLISHER' in Capture 4) */}
                                <div className="absolute top-8 left-8 right-8 z-10">
                                    <h3 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight uppercase leading-none drop-shadow-2xl">
                                        {activeTestimonial.caseStudy.title}
                                    </h3>
                                    <p className="text-[11px] font-mono text-[#00D084] uppercase tracking-widest mt-2.5 font-bold">
                                        {activeTestimonial.caseStudy.badge}
                                    </p>
                                </div>

                                {/* Bottom Metadata on Image */}
                                <div className="absolute bottom-6 left-8 right-8 z-10 flex items-center justify-between text-[11px] font-mono text-white/70">
                                    <span>VITRINE CONSULTING</span>
                                    <span>ÉTUDE DE CAS</span>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Editorial Quote + Pagination + Attribution (Matching Capture 4 Right) */}
                        <div className="lg:col-span-7 flex flex-col justify-between py-2">
                            {/* Counter & Arrows Bar */}
                            <div className="flex items-center justify-between pb-6 border-b dark:border-white/10 border-slate-300/80 mb-10 font-mono text-xs select-none">
                                <span className="dark:text-white/60 text-slate-500 font-semibold">
                                    0{currentTestimonialIndex + 1} / 0{testimonials.length}
                                </span>

                                <div className="flex items-center gap-2">
                                    <button
                                        type="button"
                                        onClick={prevTestimonial}
                                        className="w-9 h-9 rounded-md dark:bg-white/10 bg-slate-200 hover:bg-[#00D084] hover:text-slate-950 dark:hover:text-slate-950 flex items-center justify-center transition-colors cursor-pointer"
                                        title="Témoignage précédent"
                                    >
                                        <ArrowLeft className="w-4 h-4" />
                                    </button>
                                    <button
                                        type="button"
                                        onClick={nextTestimonial}
                                        className="w-9 h-9 rounded-md dark:bg-white/10 bg-slate-200 hover:bg-[#00D084] hover:text-slate-950 dark:hover:text-slate-950 flex items-center justify-center transition-colors cursor-pointer"
                                        title="Témoignage suivant"
                                    >
                                        <ArrowRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>

                            {/* Quote Marks & Editorial Content */}
                            <div className="mb-12">
                                <span className="font-serif text-5xl sm:text-6xl text-[#00D084] leading-none block mb-4 select-none">
                                    “
                                </span>
                                <blockquote className="font-display font-light text-2xl sm:text-3xl lg:text-4xl dark:text-white text-slate-900 leading-snug tracking-tight">
                                    {activeTestimonial.quote}
                                </blockquote>
                            </div>

                            {/* Author & Organization in Uppercase Monospace (Matching Capture 4) */}
                            <div className="pt-4">
                                <span className="text-xs sm:text-sm font-mono uppercase font-bold tracking-widest dark:text-white text-slate-900 block">
                                    {activeTestimonial.author}
                                </span>
                                <span className="text-xs font-mono uppercase tracking-wider dark:text-slate-400 text-slate-500 block mt-1">
                                    {activeTestimonial.organization}
                                </span>
                            </div>
                        </div>

                    </div>
                </section>
            )}

            {/* ========================================================================= */}
            {/* 5. FINAL CONTACT CTA (Holding Synergy & Initiation)                      */}
            {/* ========================================================================= */}
            <section className="py-20 border-t dark:border-white/10 border-slate-200 px-6 sm:px-10 lg:px-14 xl:px-16 dark:bg-[#080D1A] bg-white">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-8">
                    <div>
                        <span className="text-xs font-mono uppercase tracking-widest text-[#00D084] block mb-2 font-bold">
                            Démarrer une mission
                        </span>
                        <h3 className="font-display font-light text-3xl sm:text-4xl dark:text-white text-slate-900 tracking-tight">
                            Prêt à mobiliser nos expertises pour votre organisation ?
                        </h3>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 shrink-0">
                        <a
                            href={`https://wa.me/${company.whatsapp || '237690000000'}?text=Bonjour%20Vitrine%20Consulting,%20nous%20souhaitons%20solliciter%20vos%20expertises`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#00D084] hover:bg-[#00B875] text-slate-950 font-mono text-xs uppercase tracking-wider font-bold transition-all shadow-md shadow-[#00D084]/20"
                        >
                            <span>Contacter la Holding</span>
                            <ArrowUpRight className="w-4 h-4" />
                        </a>
                        <a
                            href="/#contact"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg dark:bg-white/10 bg-slate-100 hover:bg-slate-200 dark:hover:bg-white/20 dark:text-white text-slate-900 font-mono text-xs uppercase tracking-wider transition-all border dark:border-white/10 border-slate-300"
                        >
                            <span>Formulaire de contact</span>
                        </a>
                    </div>
                </div>
            </section>
        </AppLayout>
    );
}
