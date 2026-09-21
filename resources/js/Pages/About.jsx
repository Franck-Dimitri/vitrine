import AppLayout from '@/Layouts/AppLayout';
import { Shield, Sparkles, Target, Award, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export default function About({
    pillars = [],
    milestones = [],
    company = {},
}) {
    return (
        <AppLayout
            title="À Propos — Vitrine Consulting SARL | Bâtisseur d'Écosystèmes"
            description="Holding et venture builder panafricain basé à Douala (Akwa, Cameroun). Découvrez notre histoire, nos 4 piliers de gouvernance et notre vision pour l'Afrique centrale."
            company={company}
        >
            {/* 1. EDITORIAL HERO SECTION */}
            <section className="relative w-full pt-36 sm:pt-44 pb-20 sm:pb-28 px-6 sm:px-10 lg:px-14 xl:px-16 overflow-hidden">
                <div className="max-w-5xl">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="text-xs font-mono uppercase tracking-widest text-[#00D084] font-semibold">
                            MANIFESTE & HISTOIRE DU GROUPE
                        </span>
                        <span className="text-xs font-mono dark:text-slate-500 text-slate-400">•</span>
                        <span className="text-xs font-mono dark:text-slate-400 text-slate-500">
                            Douala (Akwa), Cameroun
                        </span>
                    </div>

                    <h1 className="font-display font-light text-4xl sm:text-6xl lg:text-7xl dark:text-white text-slate-900 tracking-tight leading-[1.08] mb-8">
                        L'Afrique ne manque pas d'idées. <br />
                        <span className="text-[#00D084]">Elle a besoin de vitrines solides.</span>
                    </h1>

                    <p className="font-sans font-[350] text-base sm:text-xl dark:text-[#94A3B8] text-slate-600 leading-relaxed max-w-3xl">
                        Vitrine Consulting SARL est né d'une conviction fondamentale : pour transformer le potentiel économique et culturel de l'Afrique centrale en réussites pérennes, il est indispensable de marier la rigueur d'une holding de gouvernance avec l'agilité opérationnelle de filiales de terrain.
                    </p>
                </div>
            </section>

            {/* 2. THE DUAL STRUCTURE (HOLDING & VENTURE BUILDER) */}
            <section className="py-20 border-t dark:border-white/10 border-slate-200 px-6 sm:px-10 lg:px-14 xl:px-16">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                    <div className="lg:col-span-5">
                        <span className="text-xs font-mono uppercase tracking-widest text-[#00D084] block mb-2 font-semibold">
                            POSITIONNEMENT STRATÉGIQUE
                        </span>
                        <h2 className="font-display font-light text-3xl sm:text-4xl dark:text-white text-slate-900 leading-snug mb-6">
                            Holding Institutionnelle & Bâtisseur d'Entreprises
                        </h2>
                        <p className="font-sans font-[350] text-sm sm:text-base dark:text-[#94A3B8] text-slate-600 leading-relaxed mb-6">
                            Basée au cœur du quartier d'affaires d'Akwa à Douala, la holding incube, finance et accélère des marques indépendantes. Chaque entité opère avec ses propres équipes de terrain, tout en s'appuyant sur les infrastructures technologiques, la conformité légale et la régie commerciale centrale de la maison mère.
                        </p>
                        <div className="p-6 rounded-lg sm:rounded-xl dark:bg-white/5 bg-slate-100 border dark:border-white/10 border-slate-200">
                            <h3 className="font-display font-semibold text-sm dark:text-white text-slate-900 mb-1">
                                Notre promesse aux partenaires
                            </h3>
                            <p className="text-xs font-sans font-[350] dark:text-[#94A3B8] text-slate-600 leading-relaxed">
                                Fournir aux annonceurs, bailleurs de fonds et utilisateurs une gouvernance irréprochable et un accès direct aux audiences captives de la zone CEMAC.
                            </p>
                        </div>
                    </div>

                    <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="p-8 rounded-lg sm:rounded-xl dark:bg-[#0B132B]/80 bg-white border dark:border-white/10 border-slate-200 shadow-sm flex flex-col justify-between">
                            <div>
                                <span className="font-display font-light text-4xl text-[#00D084] block mb-4">01</span>
                                <h4 className="font-display font-semibold text-lg dark:text-white text-slate-900 mb-2">
                                    Venture Building
                                </h4>
                                <p className="text-xs font-sans font-[350] dark:text-[#94A3B8] text-slate-600 leading-relaxed">
                                    Conception de A à Z de plateformes digitales africaines (CaBougeOu, IciLaBouf, InfoBooster, Sabes Numerik).
                                </p>
                            </div>
                            <span className="text-[10px] font-mono text-[#00D084] uppercase tracking-wider mt-6 pt-4 border-t dark:border-white/10 border-slate-200 block">
                                8 marques actives
                            </span>
                        </div>

                        <div className="p-8 rounded-lg sm:rounded-xl dark:bg-[#0B132B]/80 bg-white border dark:border-white/10 border-slate-200 shadow-sm flex flex-col justify-between">
                            <div>
                                <span className="font-display font-light text-4xl text-[#00D084] block mb-4">02</span>
                                <h4 className="font-display font-semibold text-lg dark:text-white text-slate-900 mb-2">
                                    Régie Vitrine Ads
                                </h4>
                                <p className="text-xs font-sans font-[350] dark:text-[#94A3B8] text-slate-600 leading-relaxed">
                                    Monétisation d'inventaires publicitaires, activations de marques et campagnes display pour les grands groupes télécoms et bancaires.
                                </p>
                            </div>
                            <span className="text-[10px] font-mono text-[#00D084] uppercase tracking-wider mt-6 pt-4 border-t dark:border-white/10 border-slate-200 block">
                                +25M impressions / an
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. THE 4 ETHICAL & GOVERNANCE PILLARS (CdCF 4.4) */}
            <section className="py-24 border-t dark:border-white/10 border-slate-200 px-6 sm:px-10 lg:px-14 xl:px-16 dark:bg-[#080D1A]/50 bg-slate-50/50">
                <div className="max-w-3xl mb-16">
                    <span className="text-xs font-mono uppercase tracking-widest text-[#00D084] block mb-2 font-semibold">
                        PRINCIPES DE GESTION SAINE
                    </span>
                    <h2 className="font-display font-light text-3xl sm:text-4xl lg:text-5xl dark:text-white text-slate-900 tracking-tight">
                        Les 4 Piliers Éthiques de la Holding
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {pillars.map((pillar, idx) => (
                        <div
                            key={idx}
                            className="p-8 rounded-lg sm:rounded-xl dark:bg-[#0B132B]/90 bg-white border dark:border-white/10 border-slate-200 shadow-md flex flex-col justify-between group hover:border-[#00D084]/50 transition-all duration-300"
                        >
                            <div>
                                <div className="flex items-center justify-between mb-6">
                                    <span className="font-display font-light text-3xl text-[#00D084]">
                                        {pillar.number}
                                    </span>
                                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-md dark:bg-white/10 bg-slate-100 dark:text-slate-300 text-slate-700 uppercase">
                                        {pillar.tag}
                                    </span>
                                </div>

                                <h3 className="font-display font-semibold text-lg dark:text-white text-slate-900 mb-3 group-hover:text-[#00D084] transition-colors">
                                    {pillar.title}
                                </h3>

                                <p className="text-xs font-sans font-[350] dark:text-[#94A3B8] text-slate-600 leading-relaxed">
                                    {pillar.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 4. TIMELINE / MILESTONES (2023 - 2026) */}
            <section className="py-24 border-t dark:border-white/10 border-slate-200 px-6 sm:px-10 lg:px-14 xl:px-16">
                <div className="max-w-3xl mb-16">
                    <span className="text-xs font-mono uppercase tracking-widest text-[#00D084] block mb-2 font-semibold">
                        TRAJECTOIRE STRATÉGIQUE
                    </span>
                    <h2 className="font-display font-light text-3xl sm:text-4xl lg:text-5xl dark:text-white text-slate-900 tracking-tight">
                        La Genèse d'un Leader Écosystémique
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {milestones.map((milestone, idx) => (
                        <div key={idx} className="flex flex-col border-l-2 dark:border-white/15 border-slate-300 pl-6 relative">
                            <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full dark:bg-[#080D1A] bg-white border-2 border-[#00D084]" />
                            <span className="font-display text-3xl font-light text-[#00D084] mb-2">
                                {milestone.year}
                            </span>
                            <h4 className="font-display font-semibold text-base dark:text-white text-slate-900 mb-2">
                                {milestone.title}
                            </h4>
                            <p className="text-xs font-sans font-[350] dark:text-[#94A3B8] text-slate-600 leading-relaxed">
                                {milestone.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* 5. CALL TO ACTION TO WORK WITH US */}
            <section className="py-20 border-t dark:border-white/10 border-slate-200 px-6 sm:px-10 lg:px-14 xl:px-16 dark:bg-[#000000] bg-slate-900 text-white">
                <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
                    <span className="text-xs font-mono uppercase tracking-widest text-[#00D084] block mb-3 font-semibold">
                        COLLABORATION & INVESTISSEMENT
                    </span>
                    <h2 className="font-display font-light text-3xl sm:text-5xl tracking-tight mb-6">
                        Construisons ensemble votre prochaine vitrine en Afrique.
                    </h2>
                    <p className="font-sans font-[350] text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed mb-8">
                        Que vous soyez une marque en quête d'impact, une institution en transition numérique ou un investisseur ciblant la sous-région, échangez avec le comité de direction.
                    </p>
                    <a
                        href={`https://wa.me/${company.whatsapp || '237690000000'}?text=Bonjour%20la%20direction%20de%20Vitrine%20Consulting,%20je%20souhaite%20échanger%20sur%20un%20partenariat`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-md bg-[#00D084] hover:bg-[#00B875] text-[#080D1A] text-xs font-semibold tracking-wider transition-all shadow-xl shadow-[#00D084]/20 hover:scale-105"
                    >
                        <span>Échanger avec le Comité de Direction</span>
                        <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                    </a>
                </div>
            </section>
        </AppLayout>
    );
}
