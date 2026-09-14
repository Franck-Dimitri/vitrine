import { Head, Link } from '@inertiajs/react';
import { ArrowRight, CheckCircle2, Layers, Sparkles, Shield, Compass, Cpu, ExternalLink } from 'lucide-react';

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    const ecosystems = [
        { name: 'CaBougeOu', sector: 'Événementiel & Loisirs', tag: 'Sorties & Billetterie' },
        { name: 'Sabes Numerik', sector: 'Tech & Solutions', tag: 'Ingénierie Logicielle' },
        { name: 'IciLaBouf', sector: 'Food & Gastronomie', tag: 'Street Food & Découvertes' },
        { name: 'InfoBooster', sector: 'Média & Curation', tag: 'Actualités & Business' },
        { name: 'Projet After Bac', sector: 'Éducation & Carrières', tag: 'Orientation & Métiers' },
        { name: 'MonPro', sector: 'Réseau Professionnel', tag: 'Freelances & PME' },
        { name: 'Stay Awake', sector: 'Impact & Citoyenneté', tag: 'Engagement Jeunesse' },
        { name: 'Vitrine Ads', sector: 'Régie Publicitaire', tag: 'Monétisation Médias' },
    ];

    return (
        <>
            <Head title="Vitrine Consulting — Bâtisseur d'Écosystèmes" />

            <div className="min-h-screen bg-[#080D1A] text-slate-100 selection:bg-[#00D084] selection:text-slate-950 font-sans relative overflow-hidden">
                {/* Subtle Brand Glows */}
                <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-[#00D084]/10 rounded-full blur-[140px] pointer-events-none" />
                <div className="absolute top-1/3 -left-40 w-[500px] h-[500px] bg-[#0B132B] rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute bottom-10 right-0 w-[600px] h-[600px] bg-[#00D084]/5 rounded-full blur-[160px] pointer-events-none" />

                {/* Top Navigation */}
                <header className="relative z-10 max-w-7xl mx-auto px-6 py-6 flex items-center justify-between border-b border-slate-800/80">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#00D084] to-[#0B132B] p-0.5 shadow-lg shadow-[#00D084]/20 flex items-center justify-center">
                            <div className="w-full h-full bg-[#080D1A] rounded-[10px] flex items-center justify-center font-display font-extrabold text-[#00D084] text-xl">
                                V
                            </div>
                        </div>
                        <div>
                            <div className="font-display font-bold text-lg tracking-tight text-white flex items-center gap-1.5">
                                Vitrine <span className="text-[#00D084]">Consulting</span>
                            </div>
                            <span className="text-[10px] text-slate-400 uppercase tracking-widest block font-medium">
                                Holding & Venture Builder
                            </span>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium">
                            <span className="w-2 h-2 rounded-full bg-[#00D084] animate-pulse" />
                            Socle Opérationnel v1.0
                        </div>

                        {auth?.user ? (
                            <Link
                                href={route('dashboard')}
                                className="px-4 py-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-sm font-medium text-white transition border border-slate-700"
                            >
                                Dashboard
                            </Link>
                        ) : (
                            <div className="flex items-center gap-2">
                                <Link
                                    href={route('login')}
                                    className="px-4 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/50 transition"
                                >
                                    Connexion
                                </Link>
                                <Link
                                    href={route('register')}
                                    className="px-4 py-2 rounded-lg text-sm font-semibold bg-[#00D084] hover:bg-[#00B875] text-slate-950 transition shadow-lg shadow-[#00D084]/20"
                                >
                                    Espace Membre
                                </Link>
                            </div>
                        )}
                    </div>
                </header>

                {/* Hero Section */}
                <main className="relative z-10 max-w-7xl mx-auto px-6 pt-16 pb-24">
                    <div className="text-center max-w-3xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/60 border border-slate-700/60 text-slate-300 text-xs font-medium mb-6 backdrop-blur-md">
                            <Sparkles className="w-3.5 h-3.5 text-[#00D084]" />
                            <span>Plateforme Web Officielle & Hub Écosystèmes</span>
                        </div>

                        <h1 className="font-display text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight mb-6">
                            Nous construisons des <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400">vitrines</span>.
                            <br />
                            Nous créons des{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D084] via-emerald-400 to-teal-300">
                                écosystèmes
                            </span>.
                        </h1>

                        <p className="text-base sm:text-lg text-slate-400 leading-relaxed mb-8">
                            Donner de la visibilité aux idées, aux marques et aux opportunités à travers l'Afrique centrale.
                            Structure bivalente alliant <strong className="text-slate-200">Dimension Fonctionnelle</strong> (Holding / Siège) et{' '}
                            <strong className="text-slate-200">Dimension Opérationnelle</strong> (8 filiales métiers).
                        </p>

                        {/* Status Card */}
                        <div className="p-4 rounded-2xl bg-[#111C38]/80 border border-[#1E2D56] shadow-xl backdrop-blur-md text-left mb-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-[#00D084] flex items-center justify-center shrink-0">
                                    <CheckCircle2 className="w-5 h-5" />
                                </div>
                                <div>
                                    <h2 className="text-sm font-semibold text-white">
                                        Configuration et socle technique validés
                                    </h2>
                                    <p className="text-xs text-slate-400">
                                        Laravel {laravelVersion} • PHP {phpVersion} • React 18 • Inertia.js • Tailwind CSS • Base SQLite
                                    </p>
                                </div>
                            </div>
                            <div className="text-xs px-3 py-1.5 rounded-lg bg-emerald-500/10 text-[#00D084] font-medium border border-emerald-500/20 shrink-0">
                                Prêt pour le Module 1
                            </div>
                        </div>
                    </div>

                    {/* Ecosystems Grid Preview */}
                    <div className="mt-8">
                        <div className="flex items-center justify-between mb-6">
                            <div>
                                <h3 className="font-display font-bold text-xl text-white">
                                    Les 8 Écosystèmes du Groupe
                                </h3>
                                <p className="text-xs text-slate-400">
                                    Cartographie complète du portefeuille de marques et régie publicitaire
                                </p>
                            </div>
                            <span className="text-xs font-semibold text-[#00D084] flex items-center gap-1">
                                Portefeuille actif <ArrowRight className="w-3.5 h-3.5" />
                            </span>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            {ecosystems.map((eco, index) => (
                                <div
                                    key={index}
                                    className="p-5 rounded-2xl bg-[#0F172A]/70 border border-slate-800 hover:border-[#00D084]/40 hover:bg-[#111C38] transition-all duration-300 group"
                                >
                                    <div className="flex items-center justify-between mb-3">
                                        <span className="text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700/60 group-hover:border-[#00D084]/30 group-hover:text-[#00D084] transition">
                                            {eco.sector}
                                        </span>
                                        <span className="text-xs font-mono text-slate-500">0{index + 1}</span>
                                    </div>
                                    <h4 className="font-display font-bold text-lg text-white group-hover:text-[#00D084] transition">
                                        {eco.name}
                                    </h4>
                                    <p className="text-xs text-slate-400 mt-1">
                                        {eco.tag}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </main>

                {/* Footer */}
                <footer className="border-t border-slate-800/80 py-8 px-6 relative z-10">
                    <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
                        <div>
                            © 2026 <span className="text-slate-300 font-medium">Vitrine Consulting SARL</span> — Douala (Akwa), Cameroun. Tous droits réservés.
                        </div>
                        <div className="flex items-center gap-6">
                            <span>Charte : Vert • Bleu Foncé • Blanc</span>
                            <span>Architecture : Laravel + React + Inertia</span>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}
