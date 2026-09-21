import { useState } from 'react';
import {
    Building2,
    Network,
    ArrowRight,
    CheckCircle2,
    Cpu,
    Megaphone,
    Video,
    Briefcase,
    GraduationCap,
    Sparkles,
    Layers,
    Activity,
    Users,
} from 'lucide-react';

export default function BivalentAndServices({ services = [] }) {
    const [selectedDimension, setSelectedDimension] = useState('all'); // 'all' | 'holding' | 'filiales'
    const [activeCategory, setActiveCategory] = useState('Tous');

    const serviceIcons = {
        'Stratégie & Conseil': <Briefcase className="w-5 h-5 text-[#00D084]" />,
        'Développement Web & Mobile': <Cpu className="w-5 h-5 text-[#00D084]" />,
        'Marketing & Communication': <Megaphone className="w-5 h-5 text-[#00D084]" />,
        'Production Média & Contenus': <Video className="w-5 h-5 text-[#00D084]" />,
        'Régie Publicitaire (Vitrine Ads)': <Network className="w-5 h-5 text-[#00D084]" />,
        'Conseil & Formation': <GraduationCap className="w-5 h-5 text-[#00D084]" />,
    };

    const serviceTags = {
        'Stratégie & Conseil': ['Audits 360°', 'Business Modeling', 'Transformation CEMAC'],
        'Développement Web & Mobile': ['React & Laravel', 'SaaS Haute Dispo', 'APIs & Mobile'],
        'Marketing & Communication': ['Gestion de Réputation', 'Acquisition Omnicanale', 'Influence'],
        'Production Média & Contenus': ['Tournage 4K', 'Spots Institutionnels', 'Motion Design'],
        'Régie Publicitaire (Vitrine Ads)': ['Display Ciblé', 'Brand Content', 'Street Marketing'],
        'Conseil & Formation': ['Ateliers Intra-Entreprise', 'Upskilling Tech', 'Certifications'],
    };

    const serviceCategories = {
        'Stratégie & Conseil': 'Stratégie',
        'Développement Web & Mobile': 'Tech',
        'Marketing & Communication': 'Média',
        'Production Média & Contenus': 'Média',
        'Régie Publicitaire (Vitrine Ads)': 'Média',
        'Conseil & Formation': 'Stratégie',
    };

    const filteredServices = activeCategory === 'Tous'
        ? services
        : services.filter((s) => serviceCategories[s.title] === activeCategory);

    return (
        <section id="organisation" className="relative z-10 w-full px-6 sm:px-10 lg:px-14 xl:px-16 py-24 sm:py-32 transition-colors">
            {/* ========================================================================= */}
            {/* PART 1: THE MODERN DYNAMIC BIVALENT MODEL                                 */}
            {/* ========================================================================= */}
            <div className="mb-28 sm:mb-36">
                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 pb-6 border-b dark:border-white/10 border-slate-200 gap-6">
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <span className="w-2 h-2 rounded-full bg-[#00D084] animate-pulse" />
                            <span className="text-xs font-mono uppercase tracking-widest text-[#00D084] font-semibold">
                                ARCHITECTURE ORGANISATIONNELLE
                            </span>
                        </div>
                        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight dark:text-white text-slate-900">
                            Le Modèle Bivalent : Synergie & Agilité
                        </h2>
                    </div>

                    {/* Interactive Dimension Selector Tabs */}
                    <div className="flex items-center p-1 rounded-lg dark:bg-[#111317] bg-slate-200/80 border dark:border-white/10 border-slate-300 select-none self-start lg:self-end">
                        {[
                            { id: 'all', label: 'Vue Synoptique' },
                            { id: 'holding', label: 'Holding & Siège' },
                            { id: 'filiales', label: '8 Filiales Métiers' },
                        ].map((tab) => (
                            <button
                                key={tab.id}
                                type="button"
                                onClick={() => setSelectedDimension(tab.id)}
                                className={`px-3 sm:px-4 py-1.5 rounded-md text-xs font-mono uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                                    selectedDimension === tab.id
                                        ? 'bg-[#00D084] text-slate-950 font-semibold shadow-md'
                                        : 'dark:text-slate-400 text-slate-600 hover:text-slate-900 dark:hover:text-white'
                                }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Animated Synergy Data Bridge Banner */}
                <div className="mb-8 p-4 rounded-lg sm:rounded-xl dark:bg-[#0B132B]/60 bg-white border dark:border-white/10 border-slate-200/80 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono">
                    <div className="flex items-center gap-3">
                        <Activity className="w-4 h-4 text-[#00D084] shrink-0" />
                        <span className="dark:text-white/80 text-slate-800">
                            <strong className="text-[#00D084]">FLUX DE VALEUR INTERCONNECTED :</strong> Supervision stratégique & régie unifiée (Holding) ⇄ Audiences captives & contenus quotidiens (Filiales).
                        </span>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                        <span className="px-2.5 py-1 rounded-md dark:bg-white/5 bg-slate-100 dark:text-slate-300 text-slate-700 text-[11px]">
                            Uptime 99.98%
                        </span>
                        <span className="px-2.5 py-1 rounded-md bg-[#00D084]/15 text-[#00D084] font-semibold text-[11px]">
                            CEMAC Ready
                        </span>
                    </div>
                </div>

                {/* 2 Interactive Cards Layout with Dynamic Focus */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                    
                    {/* CARD 01: HOLDING & SIÈGE */}
                    <div
                        className={`lg:col-span-6 p-8 sm:p-10 rounded-lg sm:rounded-xl border transition-all duration-500 relative overflow-hidden flex flex-col justify-between ${
                            selectedDimension === 'filiales'
                                ? 'opacity-40 filter blur-[0.5px] scale-[0.99] dark:bg-[#0B132B]/30 bg-slate-100/50 dark:border-slate-800 border-slate-200'
                                : 'dark:bg-[#0B132B]/90 bg-white dark:border-white/15 border-slate-300 shadow-2xl hover:border-[#00D084]/60 hover:shadow-[#00D084]/5'
                        }`}
                    >
                        {/* Background Ambient Glow */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#00D084]/10 rounded-full blur-3xl pointer-events-none" />

                        <div>
                            {/* Top Badge & Metric */}
                            <div className="flex items-center justify-between mb-6">
                                <span className="text-[11px] font-mono px-3 py-1 rounded-md bg-[#00D084]/15 text-[#00D084] font-semibold uppercase tracking-wider border border-[#00D084]/30">
                                    DIMENSION 01 • FONCTIONNELLE
                                </span>
                                <span className="text-xs font-mono dark:text-slate-400 text-slate-500">
                                    Gouvernance & Siège Akwa
                                </span>
                            </div>

                            <h3 className="font-display font-light text-2xl sm:text-3xl lg:text-4xl dark:text-white text-slate-900 mb-3 tracking-tight">
                                Holding & Siège Institutionnel
                            </h3>
                            <p className="text-xs sm:text-sm font-sans font-[350] dark:text-[#94A3B8] text-slate-600 leading-relaxed mb-6">
                                Supervise la gouvernance financière et légale, conçoit les architectures cloud transverses, pilote les levées de fonds et centralise la monétisation via la régie publicitaire <strong className="dark:text-white text-slate-900 font-semibold">Vitrine Ads</strong>.
                            </p>

                            {/* Core Pillars Pills with Interactive Hover */}
                            <div className="space-y-3 pt-6 border-t dark:border-white/10 border-slate-200">
                                {[
                                    { text: 'Pilotage stratégique, audits et conformité légale', tag: 'Conseil' },
                                    { text: 'Infrastructures Cloud haute disponibilité et sécurité', tag: 'DevOps' },
                                    { text: 'Régie publicitaire centrale et monétisation d\'inventaires', tag: 'Vitrine Ads' },
                                    { text: 'Comité de direction et accompagnement des investisseurs', tag: 'Gouvernance' },
                                ].map((item, idx) => (
                                    <div
                                        key={idx}
                                        className="flex items-center justify-between p-2.5 rounded-md dark:bg-white/5 bg-slate-50 dark:hover:bg-white/10 hover:bg-slate-100 transition-colors"
                                    >
                                        <div className="flex items-center gap-2.5 text-xs font-sans dark:text-slate-200 text-slate-800">
                                            <CheckCircle2 className="w-4 h-4 text-[#00D084] shrink-0" />
                                            <span>{item.text}</span>
                                        </div>
                                        <span className="text-[10px] font-mono dark:text-slate-400 text-slate-500 uppercase tracking-wider hidden sm:inline">
                                            {item.tag}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Bottom Metric Bar */}
                        <div className="mt-8 pt-6 border-t dark:border-white/10 border-slate-200 flex items-center justify-between text-xs font-mono">
                            <span className="dark:text-slate-400 text-slate-500">
                                Rayonnement : <span className="text-[#00D084] font-semibold">Cameroun & CEMAC</span>
                            </span>
                            <span className="dark:text-slate-400 text-slate-500">
                                Statut : <span className="text-emerald-400 font-semibold">Siège Opérationnel</span>
                            </span>
                        </div>
                    </div>

                    {/* CARD 02: 8 FILIALES MÉTIERS */}
                    <div
                        className={`lg:col-span-6 p-8 sm:p-10 rounded-lg sm:rounded-xl border transition-all duration-500 relative overflow-hidden flex flex-col justify-between ${
                            selectedDimension === 'holding'
                                ? 'opacity-40 filter blur-[0.5px] scale-[0.99] dark:bg-[#0B132B]/30 bg-slate-100/50 dark:border-slate-800 border-slate-200'
                                : 'dark:bg-[#0B132B]/90 bg-white dark:border-white/15 border-slate-300 shadow-2xl hover:border-[#00D084]/60 hover:shadow-[#00D084]/5'
                        }`}
                    >
                        {/* Background Ambient Glow */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

                        <div>
                            {/* Top Badge & Metric */}
                            <div className="flex items-center justify-between mb-6">
                                <span className="text-[11px] font-mono px-3 py-1 rounded-md dark:bg-white/10 bg-slate-200 dark:text-slate-200 text-slate-800 font-semibold uppercase tracking-wider border dark:border-white/10 border-slate-300">
                                    DIMENSION 02 • OPÉRATIONNELLE
                                </span>
                                <span className="text-xs font-mono text-[#00D084] font-semibold">
                                    8 Marques Autonomes
                                </span>
                            </div>

                            <h3 className="font-display font-light text-2xl sm:text-3xl lg:text-4xl dark:text-white text-slate-900 mb-3 tracking-tight">
                                8 Filiales Métiers Spécialisées
                            </h3>
                            <p className="text-xs sm:text-sm font-sans font-[350] dark:text-[#94A3B8] text-slate-600 leading-relaxed mb-6">
                                Des équipes agiles sur le terrain et en ligne qui animent des communautés captives, conçoivent des solutions logicielles, produisent des médias à fort impact et monétisent les usages quotidiens.
                            </p>

                            {/* Subsidiaries Chips Grid */}
                            <div className="pt-4 border-t dark:border-white/10 border-slate-200">
                                <span className="text-[10px] font-mono uppercase tracking-widest dark:text-slate-400 text-slate-500 font-bold block mb-3">
                                    ÉCOSYSTÈMES SOUS LA HOLDING :
                                </span>
                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                                    {[
                                        { name: 'CaBougeOu', sector: 'Sorties' },
                                        { name: 'Sabes Numerik', sector: 'Tech' },
                                        { name: 'IciLaBouf', sector: 'Food' },
                                        { name: 'InfoBooster', sector: 'Média' },
                                        { name: 'Projet After Bac', sector: 'Éducation' },
                                        { name: 'MonPro', sector: 'B2B' },
                                        { name: 'Stay Awake', sector: 'Impact' },
                                        { name: 'Vitrine Ads', sector: 'Régie' },
                                    ].map((sub, idx) => (
                                        <div
                                            key={idx}
                                            className="p-2.5 rounded-md dark:bg-white/5 bg-slate-50 border dark:border-white/5 border-slate-200/80 hover:border-[#00D084]/50 hover:bg-[#00D084]/5 transition-all text-center group cursor-default"
                                        >
                                            <span className="font-display font-semibold text-xs dark:text-white text-slate-900 block truncate group-hover:text-[#00D084] transition-colors">
                                                {sub.name}
                                            </span>
                                            <span className="text-[9px] font-mono dark:text-slate-400 text-slate-500 uppercase tracking-wider block mt-0.5">
                                                {sub.sector}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Bottom Metric Bar */}
                        <div className="mt-8 pt-6 border-t dark:border-white/10 border-slate-200 flex items-center justify-between text-xs font-mono">
                            <span className="dark:text-slate-400 text-slate-500">
                                Audiences cumulées : <span className="text-[#00D084] font-semibold">+500 000 usagers</span>
                            </span>
                            <span className="dark:text-slate-400 text-slate-500">
                                Modèle : <span className="dark:text-white text-slate-800 font-semibold">Venture Builder</span>
                            </span>
                        </div>
                    </div>

                </div>
            </div>

            {/* ========================================================================= */}
            {/* PART 2: THE MODERN DYNAMIC 6 SERVICES WITH KOTO INDEXING                   */}
            {/* ========================================================================= */}
            <div id="services">
                {/* Header with Category Filter */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 pb-6 border-b dark:border-white/10 border-slate-200 gap-6">
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <Sparkles className="w-3.5 h-3.5 text-[#00D084]" />
                            <span className="text-xs font-mono uppercase tracking-widest text-[#00D084] font-semibold">
                                CATALOGUE HOLDING & SERVICES
                            </span>
                        </div>
                        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight dark:text-white text-slate-900">
                            Nos 6 Domaines d'Expertise
                        </h2>
                    </div>

                    {/* Filter Category Pills */}
                    <div className="flex flex-wrap items-center gap-2 select-none self-start lg:self-end">
                        {['Tous', 'Tech', 'Média', 'Stratégie'].map((cat) => (
                            <button
                                key={cat}
                                type="button"
                                onClick={() => setActiveCategory(cat)}
                                className={`px-3 py-1.5 rounded-md text-xs font-mono uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                                    activeCategory === cat
                                        ? 'bg-[#00D084] text-slate-950 font-semibold shadow-md'
                                        : 'dark:bg-white/5 bg-slate-200/80 dark:text-slate-400 text-slate-600 hover:text-slate-900 dark:hover:text-white border dark:border-white/5 border-slate-300'
                                }`}
                            >
                                {cat === 'Tous' ? 'Toutes les expertises' : cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* 6 Dynamic Editorial Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {filteredServices.map((service, index) => {
                        const tags = serviceTags[service.title] || ['Expertise Groupe'];
                        const indexFormatted = String(index + 1).padStart(2, '0');

                        return (
                            <div
                                key={index}
                                className="p-8 rounded-lg sm:rounded-xl dark:bg-[#0B132B]/85 bg-white border dark:border-white/10 border-slate-200/80 shadow-md flex flex-col justify-between group hover:border-[#00D084]/60 hover:shadow-2xl hover:shadow-[#00D084]/10 hover:-translate-y-1.5 transition-all duration-500 cursor-pointer"
                            >
                                <div>
                                    {/* Top Row: Monumental Index Number + Icon */}
                                    <div className="flex items-center justify-between mb-6">
                                        <span className="font-display font-light text-3xl sm:text-4xl text-[#00D084] tracking-tighter opacity-90 group-hover:scale-105 transition-transform">
                                            {indexFormatted}
                                        </span>
                                        <div className="w-10 h-10 rounded-md dark:bg-white/5 bg-slate-100 border dark:border-white/10 border-slate-200 flex items-center justify-center text-[#00D084] group-hover:bg-[#00D084] group-hover:text-slate-950 transition-colors">
                                            {serviceIcons[service.title] || <Cpu className="w-5 h-5 text-[#00D084]" />}
                                        </div>
                                    </div>

                                    {/* Title & Summary */}
                                    <div className="mb-4">
                                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-md dark:bg-white/5 bg-slate-100 dark:text-slate-400 text-slate-600 uppercase tracking-wider block w-max mb-2">
                                            {service.badge}
                                        </span>
                                        <h3 className="font-display font-light text-xl sm:text-2xl dark:text-white text-slate-900 group-hover:text-[#00D084] transition-colors leading-snug">
                                            {service.title}
                                        </h3>
                                    </div>

                                    <p className="text-xs sm:text-sm font-sans font-[350] dark:text-[#94A3B8] text-slate-600 leading-relaxed mb-6">
                                        {service.summary}
                                    </p>

                                    {/* Micro Tags Deliverables on hover */}
                                    <div className="flex flex-wrap gap-1.5 mb-6">
                                        {tags.map((tag, tIdx) => (
                                            <span
                                                key={tIdx}
                                                className="text-[10px] font-mono px-2 py-0.5 rounded-md dark:bg-white/5 bg-slate-100 dark:text-slate-300 text-slate-700 border dark:border-white/5 border-slate-200"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Bottom Direct WhatsApp Action Link */}
                                <a
                                    href={`https://wa.me/237690000000?text=Bonjour%20Vitrine%20Consulting,%20je%20souhaite%20solliciter%20votre%20expertise%20en%20${encodeURIComponent(service.title)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-between text-xs font-mono dark:text-slate-400 text-slate-500 group-hover:text-[#00D084] transition-colors pt-4 border-t dark:border-white/10 border-slate-200 cursor-pointer"
                                >
                                    <span>Solliciter cette expertise</span>
                                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform text-[#00D084]" />
                                </a>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
