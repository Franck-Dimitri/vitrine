<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Inertia\Response;

class HomeController extends Controller
{
    /**
     * Display the official landing page for Vitrine Consulting SARL (Module 1).
     */
    public function index(): Response
    {
        /** @var array<int, array<string, mixed>> $ecosystems */
        $ecosystems = [
            [
                'id' => 'cabougeou',
                'name' => 'CaBougeOu',
                'sector' => 'Événementiel & Loisirs',
                'tagline' => 'Vitrine, média et billetterie des sorties urbaines',
                'description' => 'La plateforme de référence pour découvrir, promouvoir et réserver les événements culturels, concerts, festivals et sorties en Afrique centrale.',
                'target' => 'Grand public, promoteurs d\'événements, noctambules, festivaliers',
                'metric' => '+180k Participants connectés',
                'category' => 'Loisirs',
                'year' => '2024',
                'badge' => 'Sorties & Billetterie',
                'accent' => '#00D084',
                'leader' => 'Directeur des Opérations Loisirs',
                'status' => 'Billetterie active',
                'image' => 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=80',
                'avatar' => 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
            ],
            [
                'id' => 'sabes-numerik',
                'name' => 'Sabes Numerik',
                'sector' => 'Tech & Solutions Numériques',
                'tagline' => 'Ingénierie logicielle & transformation technologique',
                'description' => 'Architectures web & mobiles sur mesure, systèmes SaaS et solutions de digitalisation d\'entreprise pensées pour les réalités opérationnelles africaines.',
                'target' => 'Entreprises, banques, startups, institutions en transformation',
                'metric' => '99.98% Uptime applicatif',
                'category' => 'Tech',
                'year' => '2023',
                'badge' => 'Ingénierie Logicielle',
                'accent' => '#00D084',
                'leader' => 'Lead Architect & Tech VP',
                'status' => 'Solutions déployées',
                'image' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80',
                'avatar' => 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
            ],
            [
                'id' => 'icilabouf',
                'name' => 'IciLaBouf',
                'sector' => 'Food & Gastronomie',
                'tagline' => 'La vitrine street food & découvertes culinaires',
                'description' => 'Immersion au cœur de la gastronomie urbaine, valorisation des talents de la restauration, critiques authentiques et découvertes des saveurs du terroir.',
                'target' => 'Foodies, passionnés de gastronomie, restaurateurs, marques agro',
                'metric' => '+95k Communauté foodie captive',
                'category' => 'Food',
                'year' => '2024',
                'badge' => 'Street Food & Guide',
                'accent' => '#00D084',
                'leader' => 'Responsable Éditorial Gastronomie',
                'status' => 'Média & Guide',
                'image' => 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80',
                'avatar' => 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
            ],
            [
                'id' => 'infobooster',
                'name' => 'InfoBooster',
                'sector' => 'Média & Curation d\'Information',
                'tagline' => 'L\'information vérifiée, actualités business & récits utiles',
                'description' => 'Curation rigoureuse de l\'actualité économique, analyses de marché et récits d\'impact pour éclairer les décideurs et citoyens exigeants.',
                'target' => 'Professionnels, cadres, décideurs, citoyens en quête de sens',
                'metric' => '+120k Lecteurs mensuels',
                'category' => 'Média',
                'year' => '2023',
                'badge' => 'Business & Décryptage',
                'accent' => '#00D084',
                'leader' => 'Rédacteur en Chef Business',
                'status' => 'Flux continu',
                'image' => 'https://images.unsplash.com/photo-1498654896293-37aacf113fd9?auto=format&fit=crop&w=1200&q=80',
                'avatar' => 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
            ],
            [
                'id' => 'projet-after-bac',
                'name' => 'Projet After Bac',
                'sector' => 'Éducation & Carrières',
                'tagline' => 'La boussole des parcours académiques et débouchés',
                'description' => 'Accompagnement orientation, cartographie des filières d\'excellence et passerelle directe entre la formation universitaire et l\'employabilité des jeunes.',
                'target' => 'Élèves, bacheliers, étudiants, universités, centres de formation',
                'metric' => '+45k Étudiants orientés',
                'category' => 'Éducation',
                'year' => '2024',
                'badge' => 'Orientation & Emploi',
                'accent' => '#00D084',
                'leader' => 'Directrice Insertion & Mentorat',
                'status' => 'Programme actif',
                'image' => 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80',
                'avatar' => 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=400&q=80',
            ],
            [
                'id' => 'monpro',
                'name' => 'MonPro',
                'sector' => 'Réseau Professionnel & Services',
                'tagline' => 'Interconnexion des artisans, freelances et entreprises',
                'description' => 'Le hub de confiance reliant les talents indépendants, prestataires de services qualifiés et entreprises à la recherche de compétences fiables.',
                'target' => 'Artisans, experts, freelances, TPE/PME en quête de prestataires',
                'metric' => '+3 200 Prestataires certifiés',
                'category' => 'B2B/B2C',
                'year' => '2023',
                'badge' => 'Réseau Artisans & Pro',
                'accent' => '#00D084',
                'leader' => 'Head of Community & Network',
                'status' => 'Mise en relation B2B',
                'image' => 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80',
                'avatar' => 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80',
            ],
            [
                'id' => 'stay-awake',
                'name' => 'Stay Awake',
                'sector' => 'Impact Social & Citoyenneté',
                'tagline' => 'La vitrine des initiatives communautaires inspirantes',
                'description' => 'Mise en lumière des actions d\'engagement citoyen, des projets associatifs et des dynamiques collectives qui transforment nos sociétés.',
                'target' => 'Militants associatifs, porteurs d\'initiatives, jeunesse engagée',
                'metric' => '+28 Initiatives financées',
                'category' => 'Impact',
                'year' => '2024',
                'badge' => 'Engagement Citoyen',
                'accent' => '#00D084',
                'leader' => 'Coordinatrice Programmes Impact',
                'status' => 'Impact social',
                'image' => 'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&w=1200&q=80',
                'avatar' => 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&q=80',
            ],
            [
                'id' => 'vitrine-ads',
                'name' => 'Vitrine Ads',
                'sector' => 'Régie Publicitaire & Médias',
                'tagline' => 'Monétisation d\'inventaires et campagnes d\'envergure',
                'description' => 'La régie centrale qui valorise les espaces digitaux, brand content et événements de l\'ensemble du groupe pour les plus grandes marques.',
                'target' => 'Directions marketing, chefs de marques, agences médias, annonceurs B2B',
                'metric' => '+25M Impressions / an',
                'category' => 'Régie',
                'year' => '2025',
                'badge' => 'Régie Centrale Groupe',
                'accent' => '#00D084',
                'leader' => 'Directeur Commercial & Monétisation',
                'status' => 'Régie Média Active',
                'image' => 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80',
                'avatar' => 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80',
            ],
        ];

        /** @var array<int, array<string, string>> $stats */
        $stats = [
            [
                'value' => '8',
                'prefix' => '+',
                'suffix' => '',
                'label' => 'Écosystèmes Actifs',
                'sublabel' => 'Marques & filiales autonomes',
            ],
            [
                'value' => '500',
                'prefix' => '+',
                'suffix' => 'K',
                'label' => 'Utilisateurs & Audiences',
                'sublabel' => 'Communautés captives touchées',
            ],
            [
                'value' => '50',
                'prefix' => '+',
                'suffix' => '',
                'label' => 'Partenaires Stratégiques',
                'sublabel' => 'Télécoms, Banques, Énergies',
            ],
            [
                'value' => '100',
                'prefix' => '',
                'suffix' => '%',
                'label' => 'Ancrage Panafricain',
                'sublabel' => 'Siège à Akwa, Douala (Cameroun)',
            ],
        ];

        /** @var array<int, array<string, string>> $services */
        $services = [
            [
                'title' => 'Stratégie & Conseil',
                'summary' => 'Audits opérationnels, business modeling digital et plans de transformation à fort impact.',
                'badge' => 'Gouvernance',
            ],
            [
                'title' => 'Développement Web & Mobile',
                'summary' => 'Architectures sur mesure (SaaS, applications mobiles natives/hybrides, API haute disponibilité).',
                'badge' => 'Ingénierie',
            ],
            [
                'title' => 'Marketing & Communication',
                'summary' => 'Gestion de réputation, acquisition omnicanale, social media et activations de notoriété.',
                'badge' => 'Influence',
            ],
            [
                'title' => 'Production Média & Contenus',
                'summary' => 'Tournage vidéo 4K, réalisation de spots institutionnels, reportages et motion design.',
                'badge' => 'Création',
            ],
            [
                'title' => 'Régie Publicitaire (Vitrine Ads)',
                'summary' => 'Monétisation d\'inventaires, campagnes display ciblées, parrainages et street marketing.',
                'badge' => 'Monétisation',
            ],
            [
                'title' => 'Conseil & Formation',
                'summary' => 'Programmes certifiants, ateliers intra-entreprises et upskilling des équipes marketing/tech.',
                'badge' => 'Académie',
            ],
        ];

        /** @var array<int, array<string, string>> $partners */
        $partners = [
            ['name' => 'MTN Cameroon', 'sector' => 'Télécoms', 'country' => 'Cameroun'],
            ['name' => 'Orange Middle East & Africa', 'sector' => 'Télécoms', 'country' => 'Afrique'],
            ['name' => 'United Bank for Africa (UBA)', 'sector' => 'Banque & Finance', 'country' => 'Panafricain'],
            ['name' => 'Société Générale Cameroun', 'sector' => 'Banque', 'country' => 'Cameroun'],
            ['name' => 'Eneo Cameroon', 'sector' => 'Énergie', 'country' => 'Cameroun'],
            ['name' => 'TotalEnergies', 'sector' => 'Énergie & Mobilité', 'country' => 'International'],
            ['name' => 'Canal+ Afrique', 'sector' => 'Médias & Broadcast', 'country' => 'Afrique'],
            ['name' => 'Afriland First Bank', 'sector' => 'Banque', 'country' => 'Cameroun'],
            ['name' => 'Dangote Group', 'sector' => 'Industrie', 'country' => 'Panafricain'],
            ['name' => 'Activa Assurances', 'sector' => 'Assurance', 'country' => 'Afrique'],
        ];

        return Inertia::render('Welcome', [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'ecosystems' => $ecosystems,
            'stats' => $stats,
            'services' => $services,
            'partners' => $partners,
            'company' => [
                'name' => 'Vitrine Consulting SARL',
                'legalForm' => 'SARL',
                'location' => 'Douala (Akwa), Cameroun',
                'tagline' => 'Nous construisons des vitrines. Nous créons des écosystèmes.',
                'mission' => 'Donner de la visibilité aux idées, aux marques et aux opportunités.',
                'phone' => '+237 600 00 00 00',
                'email' => 'contact@vitrineconsulting.com',
                'whatsapp' => '237690000000',
            ],
        ]);
    }
}
