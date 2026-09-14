import { useState } from 'react';
import { MessageCircle, ArrowUpRight, Mail, MapPin, Phone, Send, Check } from 'lucide-react';

export default function Footer({ company = {} }) {
    const [newsletterEmail, setNewsletterEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);

    const handleNewsletter = (e) => {
        e.preventDefault();
        if (newsletterEmail.trim()) {
            setSubscribed(true);
            setTimeout(() => {
                setNewsletterEmail('');
                setSubscribed(false);
            }, 4000);
        }
    };

    return (
        <footer id="contact" className="relative z-10 border-t dark:border-white/10 border-slate-200 dark:bg-[#080D1A] bg-slate-50 pt-20 pb-12 transition-colors">
            <div className="w-full px-6 sm:px-10 lg:px-14 xl:px-16">
                {/* Upper Call to Action Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b dark:border-white/10 border-slate-200">
                    {/* Left Column: Brand & Direct WhatsApp Action */}
                    <div className="lg:col-span-6 flex flex-col justify-between">
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-[#00D084] to-[#0B132B] p-0.5 shadow-lg shadow-[#00D084]/20 flex items-center justify-center">
                                    <div className="w-full h-full dark:bg-[#080D1A] bg-white rounded-md flex items-center justify-center font-display font-extrabold text-[#00D084] text-lg">
                                        V
                                    </div>
                                </div>
                                <div>
                                    <div className="font-display font-bold text-lg dark:text-white text-slate-900">
                                        Vitrine <span className="text-[#00D084]">Consulting</span>
                                    </div>
                                    <span className="text-[10px] font-mono dark:text-slate-400 text-slate-500 uppercase tracking-widest block">
                                        Holding & Venture Builder Panafricain
                                    </span>
                                </div>
                            </div>

                            <p className="font-display text-2xl sm:text-3xl font-light dark:text-white text-slate-900 leading-snug mb-6 max-w-lg">
                                « Nous construisons des vitrines. Nous créons des écosystèmes. »
                            </p>
                            <p className="text-xs font-sans font-[350] dark:text-[#94A3B8] text-slate-600 leading-relaxed max-w-md mb-8">
                                Donner de la visibilité aux marques, accompagner les transformations technologiques et valoriser les talents en Afrique centrale.
                            </p>
                        </div>

                        {/* Direct WhatsApp CTA Button */}
                        <div className="flex flex-wrap items-center gap-4">
                            <a
                                href={`https://wa.me/${company.whatsapp || '237690000000'}?text=Bonjour%20Vitrine%20Consulting,%20je%20souhaite%20échanger%20avec%20votre%20équipe`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2.5 px-5 py-3 rounded-md bg-[#00D084] hover:bg-[#00B875] text-[#080D1A] text-xs font-semibold tracking-wide transition-all shadow-lg shadow-[#00D084]/20 hover:scale-[1.02] active:scale-[0.98]"
                            >
                                <MessageCircle className="w-4 h-4 fill-current" />
                                <span>Échanger sur WhatsApp Business</span>
                                <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
                            </a>
                        </div>
                    </div>

                    {/* Right Column: Physical Location & Newsletter */}
                    <div className="lg:col-span-6 flex flex-col justify-between gap-8">
                        {/* Physical Headquarters Address */}
                        <div className="p-8 rounded-lg dark:bg-[#111C38]/60 bg-white border dark:border-slate-800 border-slate-200/80 shadow-sm">
                            <h4 className="text-xs font-mono uppercase tracking-widest text-[#00D084] mb-4 flex items-center gap-2">
                                <MapPin className="w-3.5 h-3.5" />
                                Siège Social & Présence
                            </h4>
                            <div className="space-y-2 text-xs sm:text-sm dark:text-slate-300 text-slate-700 font-sans">
                                <p className="font-semibold dark:text-white text-slate-900">Vitrine Consulting SARL</p>
                                <p className="dark:text-slate-400 text-slate-500">Quartier d'Affaires Akwa, Douala — République du Cameroun</p>
                                <p className="dark:text-slate-400 text-slate-500 font-mono text-xs pt-2">
                                    Email : <a href={`mailto:${company.email}`} className="text-[#00D084] hover:underline">{company.email || 'contact@vitrineconsulting.com'}</a>
                                </p>
                            </div>
                        </div>

                        {/* Newsletter Subscription */}
                        <div className="p-8 rounded-lg dark:bg-[#111C38]/60 bg-white border dark:border-slate-800 border-slate-200/80 shadow-sm">
                            <h4 className="text-xs font-mono uppercase tracking-widest dark:text-slate-300 text-slate-700 mb-2 flex items-center gap-2">
                                <Mail className="w-3.5 h-3.5 text-[#00D084]" />
                                Veille Économique & Actualités Groupe
                            </h4>
                            <p className="text-xs dark:text-slate-400 text-slate-500 mb-4">
                                Recevez trimestriellement nos analyses de marché et le récapitulatif des 8 écosystèmes.
                            </p>

                            <form onSubmit={handleNewsletter} className="flex gap-2">
                                <input
                                    type="email"
                                    required
                                    value={newsletterEmail}
                                    onChange={(e) => setNewsletterEmail(e.target.value)}
                                    placeholder="votre.email@entreprise.com"
                                    className="flex-grow px-4 py-2.5 rounded-md dark:bg-[#080D1A] bg-slate-50 border dark:border-slate-700 border-slate-300 text-xs dark:text-white text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#00D084] transition"
                                />
                                <button
                                    type="submit"
                                    className="px-5 py-2.5 rounded-md dark:bg-white/10 bg-slate-900 hover:bg-[#00D084] hover:text-[#080D1A] text-white text-xs font-semibold transition-all flex items-center gap-1.5 shrink-0 cursor-pointer"
                                >
                                    {subscribed ? (
                                        <>
                                            <Check className="w-3.5 h-3.5 text-[#00D084]" />
                                            <span>Inscrit !</span>
                                        </>
                                    ) : (
                                        <>
                                            <span>S'abonner</span>
                                            <Send className="w-3.5 h-3.5" />
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                {/* Bottom Legal Copyright Bar */}
                <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono dark:text-slate-500 text-slate-500">
                    <div>
                        © 2026 <span className="dark:text-slate-300 text-slate-700 font-medium">Vitrine Consulting SARL</span>. Tous droits réservés.
                    </div>
                    <div className="flex items-center gap-6">
                        <span>Charte : Vert • Bleu Nuit • Blanc</span>
                        <span>Plateforme Officielle v1.0</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
