import { useState } from 'react';
import AppLayout from '@/Layouts/AppLayout';
import { Briefcase, MapPin, ArrowUpRight, CheckCircle2, Send, X, Check } from 'lucide-react';

export default function Careers({
    positions = [],
    benefits = [],
    filiales = [],
    company = {},
}) {
    const [selectedFiliale, setSelectedFiliale] = useState('Toutes');
    const [selectedJob, setSelectedJob] = useState(null);
    const [applicationSent, setApplicationSent] = useState(false);
    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const filteredPositions = selectedFiliale === 'Toutes'
        ? positions
        : positions.filter((pos) => pos.filiale.toLowerCase().includes(selectedFiliale.toLowerCase()));

    const handleApply = (e) => {
        e.preventDefault();
        setApplicationSent(true);
        setTimeout(() => {
            setApplicationSent(false);
            setSelectedJob(null);
            setForm({ name: '', email: '', phone: '', message: '' });
        }, 3000);
    };

    return (
        <AppLayout
            title="Carrières & Recrutement — Vitrine Consulting SARL | Rejoignez nos 8 filiales"
            description="Découvrez nos opportunités d'emploi et stages à Douala et en Afrique centrale dans la tech, les médias, l'événementiel et la régie publicitaire."
            company={company}
        >
            {/* 1. HERO TITLE */}
            <section className="relative w-full pt-36 sm:pt-44 pb-16 sm:pb-20 px-6 sm:px-10 lg:px-14 xl:px-16">
                <div className="max-w-5xl">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="text-xs font-mono uppercase tracking-widest text-[#00D084] font-semibold">
                            TALENTS & OPPORTUNITÉS RH
                        </span>
                        <span className="text-xs font-mono dark:text-slate-500 text-slate-400">•</span>
                        <span className="text-xs font-mono dark:text-slate-400 text-slate-500">
                            Douala, Yaoundé & CEMAC
                        </span>
                    </div>

                    <h1 className="font-display font-light text-4xl sm:text-6xl lg:text-7xl dark:text-white text-slate-900 tracking-tight leading-[1.08] mb-6">
                        Bâtissons les leaders <br />
                        <span className="text-[#00D084]">digitaux de demain.</span>
                    </h1>

                    <p className="font-sans font-[350] text-base sm:text-xl dark:text-[#94A3B8] text-slate-600 leading-relaxed max-w-3xl">
                        Travailler chez Vitrine Consulting, c'est intégrer un environnement d'ingénieurs, de créatifs et de stratèges passionnés, où chaque membre contribue directement à la croissance de nos 8 marques autonomes.
                    </p>
                </div>
            </section>

            {/* 2. WHY JOIN US - 4 BENEFITS */}
            <section className="py-16 border-t dark:border-white/10 border-slate-200 px-6 sm:px-10 lg:px-14 xl:px-16 dark:bg-[#080D1A]/50 bg-slate-50/50">
                <div className="max-w-7xl mx-auto">
                    <span className="text-xs font-mono uppercase tracking-widest text-[#00D084] block mb-8 font-semibold">
                        POURQUOI NOUS REJOINDRE
                    </span>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {benefits.map((benefit, idx) => (
                            <div
                                key={idx}
                                className="p-8 rounded-lg sm:rounded-xl dark:bg-[#0B132B]/80 bg-white border dark:border-white/10 border-slate-200 shadow-sm flex flex-col justify-between"
                            >
                                <div>
                                    <div className="w-8 h-8 rounded-md bg-[#00D084]/15 flex items-center justify-center text-[#00D084] mb-5">
                                        <CheckCircle2 className="w-4 h-4" />
                                    </div>
                                    <h3 className="font-display font-semibold text-base dark:text-white text-slate-900 mb-2">
                                        {benefit.title}
                                    </h3>
                                    <p className="text-xs font-sans font-[350] dark:text-[#94A3B8] text-slate-600 leading-relaxed">
                                        {benefit.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. JOB BOARD SECTION WITH DYNAMIC FILIALE FILTER */}
            <section id="postes" className="py-24 border-t dark:border-white/10 border-slate-200 px-6 sm:px-10 lg:px-14 xl:px-16">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 pb-6 border-b dark:border-white/10 border-slate-200 gap-6">
                        <div>
                            <span className="text-xs font-mono uppercase tracking-widest text-[#00D084] block mb-2 font-semibold">
                                POSTES VACANTS ({filteredPositions.length})
                            </span>
                            <h2 className="font-display font-light text-3xl sm:text-4xl dark:text-white text-slate-900 tracking-tight">
                                Opportunités Actives dans le Groupe
                            </h2>
                        </div>

                        {/* Filter by Subsidiary */}
                        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
                            {filiales.map((fil, idx) => (
                                <button
                                    key={idx}
                                    type="button"
                                    onClick={() => setSelectedFiliale(fil)}
                                    className={`px-3.5 py-1.5 rounded-md text-xs font-mono uppercase tracking-wider transition-all duration-300 shrink-0 cursor-pointer ${
                                        selectedFiliale === fil
                                            ? 'bg-[#00D084] text-slate-950 font-semibold shadow-md'
                                            : 'dark:bg-white/5 bg-slate-200/80 dark:text-slate-400 text-slate-600 hover:text-slate-900 dark:hover:text-white border dark:border-white/5 border-slate-300'
                                    }`}
                                >
                                    {fil}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Positions List */}
                    <div className="space-y-4">
                        {filteredPositions.map((job) => (
                            <div
                                key={job.id}
                                onClick={() => setSelectedJob(job)}
                                className="p-6 sm:p-8 rounded-lg sm:rounded-xl dark:bg-[#0B132B]/85 bg-white border dark:border-white/10 border-slate-200/90 shadow-sm hover:border-[#00D084]/60 hover:shadow-xl hover:shadow-[#00D084]/5 transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-6 cursor-pointer group"
                            >
                                <div className="max-w-2xl">
                                    <div className="flex flex-wrap items-center gap-3 mb-2">
                                        <span className="text-xs font-mono px-2.5 py-0.5 rounded-md bg-[#00D084]/15 text-[#00D084] font-semibold uppercase tracking-wider">
                                            {job.filiale}
                                        </span>
                                        <span className="text-xs font-mono dark:text-slate-400 text-slate-500">
                                            {job.type}
                                        </span>
                                        <span className="text-xs font-mono dark:text-slate-400 text-slate-500">•</span>
                                        <span className="text-xs font-mono dark:text-slate-400 text-slate-500 flex items-center gap-1">
                                            <MapPin className="w-3 h-3 text-[#00D084]" />
                                            {job.location}
                                        </span>
                                    </div>

                                    <h3 className="font-display font-semibold text-lg sm:text-xl dark:text-white text-slate-900 group-hover:text-[#00D084] transition-colors mb-2">
                                        {job.title}
                                    </h3>

                                    <p className="text-xs sm:text-sm font-sans font-[350] dark:text-[#94A3B8] text-slate-600 leading-relaxed">
                                        {job.summary}
                                    </p>
                                </div>

                                <div className="flex items-center gap-4 shrink-0 self-start md:self-center">
                                    <span className="text-xs font-mono dark:text-slate-400 text-slate-500 hidden sm:inline">
                                        Exp. {job.experience}
                                    </span>
                                    <button
                                        type="button"
                                        className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-slate-900 dark:bg-white/10 group-hover:bg-[#00D084] text-white group-hover:text-slate-950 text-xs font-mono uppercase tracking-wider transition-colors"
                                    >
                                        <span>Postuler</span>
                                        <ArrowUpRight className="w-3.5 h-3.5" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Spontaneous Application Banner */}
                    <div className="mt-16 p-8 sm:p-10 rounded-lg sm:rounded-xl dark:bg-[#111C38]/60 bg-white border dark:border-white/10 border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
                        <div>
                            <h3 className="font-display font-semibold text-lg sm:text-xl dark:text-white text-slate-900 mb-1">
                                Vous ne trouvez pas votre poste idéal ?
                            </h3>
                            <p className="text-xs sm:text-sm font-sans font-[350] dark:text-[#94A3B8] text-slate-600">
                                Envoyez une candidature spontanée directement au département des ressources humaines.
                            </p>
                        </div>
                        <a
                            href={`https://wa.me/${company.whatsapp || '237690000000'}?text=Bonjour%20RH%20Vitrine%20Consulting,%20je%20souhaite%20soumettre%20ma%20candidature%20spontanée`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-5 py-3 rounded-md bg-[#00D084] hover:bg-[#00B875] text-[#080D1A] text-xs font-semibold tracking-wider transition-all shrink-0 shadow-lg shadow-[#00D084]/20"
                        >
                            Candidature Spontanée (WhatsApp)
                        </a>
                    </div>
                </div>
            </section>

            {/* JOB APPLICATION MODAL */}
            {selectedJob && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
                    <div
                        className="absolute inset-0 bg-[#080D1A]/85 backdrop-blur-xl transition-opacity"
                        onClick={() => setSelectedJob(null)}
                    />

                    <div className="relative z-10 w-full max-w-lg rounded-lg sm:rounded-xl bg-[#0B132B] border border-slate-700/80 shadow-2xl p-6 sm:p-8 text-white flex flex-col animate-fadeIn">
                        <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                            <div>
                                <span className="text-[10px] font-mono text-[#00D084] uppercase tracking-wider block mb-0.5">
                                    CANDIDATURE • {selectedJob.filiale}
                                </span>
                                <h3 className="font-display font-semibold text-lg text-white">
                                    {selectedJob.title}
                                </h3>
                            </div>
                            <button
                                type="button"
                                onClick={() => setSelectedJob(null)}
                                className="p-2 rounded-md bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition"
                            >
                                <X className="w-4 h-4" />
                            </button>
                        </div>

                        {applicationSent ? (
                            <div className="py-12 flex flex-col items-center text-center">
                                <div className="w-12 h-12 rounded-full bg-[#00D084]/20 text-[#00D084] flex items-center justify-center mb-4">
                                    <Check className="w-6 h-6 stroke-[2.5]" />
                                </div>
                                <h4 className="font-display font-semibold text-lg text-white mb-1">
                                    Candidature transmise avec succès !
                                </h4>
                                <p className="text-xs font-sans text-slate-300 max-w-xs">
                                    L'équipe recrutement de {selectedJob.filiale} examinera votre profil et prendra contact avec vous.
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handleApply} className="space-y-4">
                                <div>
                                    <label className="block text-xs font-mono text-slate-300 uppercase mb-1">
                                        Nom & Prénom
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        value={form.name}
                                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                                        placeholder="Ex: Jean-Paul Mbianda"
                                        className="w-full px-3.5 py-2.5 rounded-md bg-white/5 border border-white/15 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#00D084]"
                                    />
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-xs font-mono text-slate-300 uppercase mb-1">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            required
                                            value={form.email}
                                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                                            placeholder="nom@email.com"
                                            className="w-full px-3.5 py-2.5 rounded-md bg-white/5 border border-white/15 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#00D084]"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-mono text-slate-300 uppercase mb-1">
                                            Téléphone / WhatsApp
                                        </label>
                                        <input
                                            type="tel"
                                            required
                                            value={form.phone}
                                            onChange={(e) => setForm({ ...form, phone: e.target.value })}
                                            placeholder="+237 600..."
                                            className="w-full px-3.5 py-2.5 rounded-md bg-white/5 border border-white/15 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#00D084]"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs font-mono text-slate-300 uppercase mb-1">
                                        Message & Lien Portfolio / LinkedIn
                                    </label>
                                    <textarea
                                        rows={3}
                                        value={form.message}
                                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                                        placeholder="Décrivez brièvement vos réalisations clés..."
                                        className="w-full px-3.5 py-2.5 rounded-md bg-white/5 border border-white/15 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#00D084]"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full py-3 rounded-md bg-[#00D084] hover:bg-[#00B875] text-slate-950 font-semibold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-[#00D084]/20"
                                >
                                    <span>Envoyer ma candidature</span>
                                    <Send className="w-3.5 h-3.5" />
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            )}
        </AppLayout>
    );
}
