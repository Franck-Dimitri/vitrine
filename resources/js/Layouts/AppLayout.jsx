import { Head } from '@inertiajs/react';
import { useTheme } from '@/hooks/useTheme';
import KotoNavbar from '@/Components/KotoNavbar';
import Footer from '@/Components/Footer';

export default function AppLayout({
    children,
    title = "Vitrine Consulting SARL — Bâtisseur d'Écosystèmes",
    description = "Nous construisons des vitrines. Nous créons des écosystèmes. Holding et venture builder panafricain basé à Douala (Akwa, Cameroun).",
    company = {
        name: 'Vitrine Consulting SARL',
        tagline: 'Nous construisons des vitrines. Nous créons des écosystèmes.',
        email: 'contact@vitrineconsulting.com',
        phone: '+237 600 00 00 00',
        whatsapp: '237690000000',
    },
}) {
    const { theme, toggleTheme, isDark } = useTheme();

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:type" content="website" />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>

            <div className="min-h-screen dark:bg-[#080D1A] bg-[#FAFAFC] dark:text-slate-100 text-slate-900 selection:bg-[#00D084] selection:text-slate-950 font-sans relative transition-colors duration-500 flex flex-col justify-between">
                {/* Fixed Permanent Navigation Bar */}
                <KotoNavbar
                    theme={theme}
                    toggleTheme={toggleTheme}
                    isDark={isDark}
                />

                {/* Page Content Slot */}
                <div className="w-full flex-grow">
                    {children}
                </div>

                {/* Shared Footer */}
                <Footer company={company} />
            </div>
        </>
    );
}
