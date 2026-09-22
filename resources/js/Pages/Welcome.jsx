import { useState } from 'react';
import { Head } from '@inertiajs/react';
import { useTheme } from '@/hooks/useTheme';
import KotoNavbar from '@/Components/KotoNavbar';
import KotoHero from '@/Components/KotoHero';
import KotoEcosystems from '@/Components/KotoEcosystems';
import StatsCounter from '@/Components/StatsCounter';
import BivalentSection from '@/Components/BivalentSection';
import KotoNews from '@/Components/KotoNews';
import PartnersMarquee from '@/Components/PartnersMarquee';
import Footer from '@/Components/Footer';
import EcosystemDetailModal from '@/Components/EcosystemDetailModal';
import VideoModal from '@/Components/VideoModal';

export default function Welcome({
    auth,
    ecosystems = [],
    stats = [],
    services = [],
    partners = [],
    news = [],
    company = {},
}) {
    const { theme, toggleTheme, isDark } = useTheme();
    const [selectedEcosystem, setSelectedEcosystem] = useState(null);
    const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

    // Schema.org JSON-LD Corporate Metadata for Vitrine Consulting SARL
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: company.name || 'Vitrine Consulting SARL',
        alternateName: 'Vitrine Consulting',
        url: 'https://vitrineconsulting.com',
        logo: 'https://vitrineconsulting.com/logo.svg',
        slogan: company.tagline || 'Nous construisons des vitrines. Nous créons des écosystèmes.',
        description: company.mission || 'Donner de la visibilité aux idées, aux marques et aux opportunités.',
        address: {
            '@type': 'PostalAddress',
            streetAddress: "Quartier d'Affaires Akwa",
            addressLocality: 'Douala',
            addressCountry: 'CM',
        },
        contactPoint: {
            '@type': 'ContactPoint',
            telephone: company.phone || '+237 600 00 00 00',
            contactType: 'customer service',
            areaServed: 'Central Africa',
            availableLanguage: ['French', 'English'],
        },
        knowsAbout: [
            'Venture Building',
            'Digital Marketing',
            'Software Engineering',
            'Media Advertising',
            'Vitrine Ads',
        ],
    };

    return (
        <>
            <Head>
                <title>Vitrine Consulting SARL — Bâtisseur d'Écosystèmes & Régie Média</title>
                <meta
                    name="description"
                    content="Nous construisons des vitrines. Nous créons des écosystèmes. Holding et venture builder panafricain basé à Douala (Akwa, Cameroun) reliant 8 filiales d'envergure et la régie Vitrine Ads."
                />
                {/* OpenGraph & WhatsApp previews */}
                <meta property="og:title" content="Vitrine Consulting SARL — Bâtisseur d'Écosystèmes" />
                <meta
                    property="og:description"
                    content="Donner de la visibilité aux idées, aux marques et aux opportunités à travers l'Afrique centrale."
                />
                <meta property="og:type" content="website" />
                <meta property="og:locale" content="fr_FR" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Vitrine Consulting SARL" />
                <meta
                    name="twitter:description"
                    content="Nous construisons des vitrines. Nous créons des écosystèmes."
                />
                <script type="application/ld+json">
                    {JSON.stringify(jsonLd)}
                </script>
            </Head>

            <div className="min-h-screen dark:bg-[#080D1A] bg-[#FAFAFC] dark:text-slate-100 text-slate-900 selection:bg-[#00D084] selection:text-slate-950 font-sans relative transition-colors duration-500">
                {/* Fixed Permanent Navigation Bar (Always visible on scroll) */}
                <KotoNavbar
                    theme={theme}
                    toggleTheme={toggleTheme}
                    isDark={isDark}
                />

                {/* 1. Koto-Style Fullscreen Visual Hero with Showreel Trigger */}
                <KotoHero
                    isDark={isDark}
                    onOpenVideoModal={() => setIsVideoModalOpen(true)}
                />

                <main>
                    {/* 2. Editorial 8 Ecosystems Portfolio (Koto-style large visual cards) */}
                    <KotoEcosystems
                        ecosystems={ecosystems}
                        onSelectEcosystem={(eco) => setSelectedEcosystem(eco)}
                    />

                    {/* 3. Consolidated Group Performance Metrics (Animated Count-Up) */}
                    <StatsCounter stats={stats} />

                    {/* 4. Bivalent Organizational Architecture (Holding vs Filiales) */}
                    <BivalentSection />

                    {/* 5. Editorial News & Press (Matching Capture 1: Studio News) */}
                    <KotoNews news={news} />

                    {/* 6. Institutional Partners & Social Proofs (Infinite Marquee) */}
                    <PartnersMarquee partners={partners} />
                </main>

                {/* 7. Corporate Footer (Matching Capture 2: Contact & Studio card) */}
                <Footer company={company} />

                {/* 8. Ecosystem Detail Modal */}
                <EcosystemDetailModal
                    ecosystem={selectedEcosystem}
                    onClose={() => setSelectedEcosystem(null)}
                />

                {/* 9. Fullscreen Corporate Showreel Video Modal */}
                <VideoModal
                    isOpen={isVideoModalOpen}
                    onClose={() => setIsVideoModalOpen(false)}
                />
            </div>
        </>
    );
}
