import { useState } from 'react';
import { Building2, Network, ArrowRight, CheckCircle2, Shield, Cpu, Megaphone, Video, Briefcase, GraduationCap } from 'lucide-react';

export default function BivalentAndServices({ services = [] }) {
    const [activeTab, setActiveTab] = useState('holding');

    const serviceIcons = {
        'Stratégie & Conseil': <Briefcase className="w-5 h-5 text-[#00D084]" />,
        'Développement Web & Mobile': <Cpu className="w-5 h-5 text-[#00D084]" />,
        'Marketing & Communication': <Megaphone className="w-5 h-5 text-[#00D084]" />,
        'Production Média & Contenus': <Video className="w-5 h-5 text-[#00D084]" />,
        'Régie Publicitaire (Vitrine Ads)': <Network className="w-5 h-5 text-[#00D084]" />,
        'Conseil & Formation': <GraduationCap className="w-5 h-5 text-[#00D084]" />,
    };

    return (
        <section id="organisation" className="relative z-10 w-full px-6 sm:px-10 lg:px-14 xl:px-16 py-20 lg:py-28">
            {/* PART 1: THE BIVALENT MODEL (HOLDING VS OPERATIONAL) */}
            <div className="mb-24">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b dark:border-white/10 border-slate-200 gap-4">
                    <div>
                        <span className="text-xs font-mono uppercase tracking-widest text-[#00D084] flex items-center gap-1.5 mb-2">
                            <Building2 className="w-3.5 h-3.5" />
                            Architecture Organisationnelle
                        </span>
                        <h2 className="font-display text-3xl sm:text-4xl font-light dark:text-white text-slate-900">
                            Le Modèle Bivalent : Synergie & Agilité
                        </h2>
                    </div>
                    <p className="text-xs font-mono dark:text-slate-400 text-slate-500 max-w-md">
                        Un cadre institutionnel solide au service d'entités métiers spécialisées et autonomes sur le terrain.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Dimension Fonctionnelle Card */}
                    <div className="p-8 sm:p-10 rounded-lg dark:bg-[#111C38]/60 bg-white border dark:border-slate-800 border-slate-200/80 shadow-sm relative overflow-hidden group hover:border-[#00D084]/40 transition-all duration-500">
                        <div className="absolute top-0 right-0 w-48 h-48 bg-[#00D084]/5 rounded-full blur-3xl pointer-events-none" />
                        <div className="flex items-center justify-between mb-6">
                            <span className="text-xs font-mono px-3 py-1 rounded-full dark:bg-white/5 bg-slate-100 dark:border-white/10 border-slate-200 text-[#00D084] uppercase tracking-wider">
                                Dimension 01
                            </span>
                            <span className="text-xs font-mono dark:text-slate-400 text-slate-500">Stratégie & Gouvernance</span>
                        </div>

                        <h3 className="font-display text-2xl font-semibold dark:text-white text-slate-900 mb-3">
                            Holding & Siège Institutionnel
                        </h3>
                        <p className="text-xs sm:text-sm font-sans font-[350] dark:text-[#94A3B8] text-slate-600 leading-relaxed mb-6">
                            Supervise la gouvernance financière et légale, conçoit les architectures technologiques transverses et pilote la centralisation commerciale ainsi que la régie Vitrine Ads.
                        </p>

                        <div className="space-y-3 pt-4 border-t dark:border-white/10 border-slate-200">
                            {[
                                'Pilotage stratégique et levées de fonds',
                                'Conformité légale et gouvernance financière',
                                'Infrastructures Cloud & Sécurité unifiées',
                                'Régie publicitaire centrale (Vitrine Ads)',
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-center gap-2.5 text-xs dark:text-slate-300 text-slate-700">
                                    <CheckCircle2 className="w-4 h-4 text-[#00D084] shrink-0" />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Dimension Opérationnelle Card */}
                    <div className="p-8 sm:p-10 rounded-lg dark:bg-[#111C38]/60 bg-white border dark:border-slate-800 border-slate-200/80 shadow-sm relative overflow-hidden group hover:border-[#00D084]/40 transition-all duration-500">
                        <div className="absolute top-0 right-0 w-48 h-48 bg-[#0B132B] rounded-full blur-3xl pointer-events-none" />
                        <div className="flex items-center justify-between mb-6">
                            <span className="text-xs font-mono px-3 py-1 rounded-md dark:bg-white/5 bg-slate-100 dark:border-white/10 border-slate-200 text-emerald-500 dark:text-emerald-300 uppercase tracking-wider">
                                Dimension 02
                            </span>
                            <span className="text-xs font-mono dark:text-slate-400 text-slate-500">Terrain & Communautés</span>
                        </div>

                        <h3 className="font-display text-2xl font-semibold dark:text-white text-slate-900 mb-3">
                            8 Filiales Métiers Spécialisées
                        </h3>
                        <p className="text-xs sm:text-sm font-sans font-[350] dark:text-[#94A3B8] text-slate-600 leading-relaxed mb-6">
                            Des équipes spécialisées déployées sur le terrain et en ligne, qui exécutent, créent des communautés captives, génèrent du contenu et délivrent de la valeur spécifique.
                        </p>

                        <div className="space-y-3 pt-4 border-t dark:border-white/10 border-slate-200">
                            {[
                                'Ancrage direct avec les cibles et usagers',
                                'Création de valeur sectorielle dédiée',
                                'Production quotidienne de contenu et d\'événements',
                                'Agilité opérationnelle et réactivité locale',
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-center gap-2.5 text-xs dark:text-slate-300 text-slate-700">
                                    <CheckCircle2 className="w-4 h-4 text-[#00D084] shrink-0" />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* PART 2: THE 6 TRANSVERSE SERVICES */}
            <div id="services">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b dark:border-white/10 border-slate-200 gap-4">
                    <div>
                        <span className="text-xs font-mono uppercase tracking-widest text-[#00D084] flex items-center gap-1.5 mb-2">
                            <Network className="w-3.5 h-3.5" />
                            Catalogue Holding
                        </span>
                        <h2 className="font-display text-3xl sm:text-4xl font-light dark:text-white text-slate-900">
                            Nos 6 Domaines d'Expertise
                        </h2>
                    </div>
                    <p className="text-xs font-mono dark:text-slate-400 text-slate-500 max-w-md">
                        Services d'ingénierie, de conseil et de communication activables pour les marques et partenaires externes.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="p-8 rounded-lg dark:bg-[#111C38]/60 bg-white border dark:border-slate-800 border-slate-200/80 shadow-sm flex flex-col justify-between group hover:border-[#00D084]/40 transition-all duration-500 hover:-translate-y-1"
                        >
                            <div>
                                <div className="flex items-center justify-between mb-6">
                                    <div className="w-10 h-10 rounded-md dark:bg-[#080D1A] bg-slate-100 border dark:border-slate-700 border-slate-200 flex items-center justify-center group-hover:border-[#00D084] transition-colors">
                                        {serviceIcons[service.title] || <Cpu className="w-5 h-5 text-[#00D084]" />}
                                    </div>
                                    <span className="text-[10px] font-mono px-2.5 py-1 rounded-md dark:bg-white/5 bg-slate-100 dark:text-slate-400 text-slate-600 dark:border-white/5 border-slate-200">
                                        {service.badge}
                                    </span>
                                </div>

                                <h3 className="font-display font-semibold text-lg dark:text-white text-slate-900 mb-2 group-hover:text-[#00D084] transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-xs font-sans font-[350] dark:text-[#94A3B8] text-slate-600 leading-relaxed mb-6">
                                    {service.summary}
                                </p>
                            </div>

                            <a
                                href="#contact"
                                className="inline-flex items-center gap-1.5 text-xs font-mono dark:text-slate-400 text-slate-500 group-hover:text-[#00D084] transition-colors pt-4 border-t dark:border-white/10 border-slate-200"
                            >
                                <span>Solliciter cette expertise</span>
                                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
