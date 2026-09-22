<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;

class ServicesController extends Controller
{
    /**
     * Display the dedicated Services page (calqued on Koto.com/services).
     */
    public function index(): Response
    {
        $disciplines = [
            [
                'id' => 'strategie',
                'name' => 'Stratégie',
                'thesis' => 'Une réflexion stratégique claire qui aide les marques et institutions à définir leur identité, leur valeur ajoutée et leur cap de croissance en Afrique centrale.',
                'subthesis' => 'Des fondations solides et une plateforme de marque articulée pour donner du sens et de l\'autorité à chaque prise de parole.',
                'deliverables' => [
                    'Positionnement & Plateforme de Marque',
                    'Audits Opérationnels & Études d\'Impact',
                    'Architecture de Portefeuille & Multi-Filiales',
                    'Naming, Nomenclature & Identité Verbale',
                    'Stratégie de Campagnes & Messages Clés',
                    'Proposition de Valeur Employeur (EVP)',
                    'Stratégie Éditoriale & Brand Content',
                    'Cadrage Business Model Digital & UX',
                ],
                'visual' => [
                    'image' => 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
                    'label' => 'CASE STUDY',
                    'client' => 'HOLDING STRATEGY',
                ],
            ],
            [
                'id' => 'digital',
                'name' => 'Digital',
                'thesis' => 'Des architectures logicielles et produits numériques sur mesure pensés pour les réalités opérationnelles africaines. Stables, utiles et pérennes.',
                'subthesis' => 'Des interfaces intuitives et des socles techniques sécurisés conçus pour créer des connexions fiables et soutenir la croissance.',
                'deliverables' => [
                    'Architectures Web & Cloud Scalables (99.98% Uptime)',
                    'Développement d\'Applications Mobiles (iOS & Android)',
                    'Conception de Plateformes SaaS Métiers',
                    'Intégrations API Bancaires, Télécoms & Paiements (MoMo/OM)',
                    'Design Systems & Interfaces UI/UX Avancées',
                    'Audits de Sécurité Applicative & Pentesting',
                    'Bases de Données Distribuées & Haute Disponibilité',
                    'Maintenance Critique & Monitoring Opérationnel',
                ],
                'visual' => [
                    'image' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
                    'label' => 'SABES NUMERIK',
                    'client' => 'CORE BANKING CLOUD',
                ],
            ],
            [
                'id' => 'regie-ads',
                'name' => 'Régie Ads',
                'thesis' => 'Monétisation d\'inventaires et campagnes publicitaires d\'envergure reliant les grandes marques aux audiences les plus engagées de la sous-région.',
                'subthesis' => 'Une audience captive de plus de 500 000 utilisateurs activée avec une mesure rigoureuse du retour sur investissement.',
                'deliverables' => [
                    'Réseau Display & Emplacements Premium Panafricains',
                    'Opérations Spéciales & Brand Content Sur-Mesure',
                    'Parrainages de Rubriques & Événements Majeurs',
                    'Activation de Notoriété & Street Marketing Urbain',
                    'Curation & Ciblage d\'Audiences Captives (+500k usagers)',
                    'Billetterie Intégrée & Monétisation de Festivals',
                    'Reporting d\'Attribution & Mesure de Performance',
                    'Kit Média Dédié pour Annonceurs B2B et Agences',
                ],
                'visual' => [
                    'image' => 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80',
                    'label' => 'VITRINE ADS',
                    'client' => '25M IMPRESSIONS / AN',
                ],
            ],
            [
                'id' => 'production',
                'name' => 'Production',
                'thesis' => 'Récits audiovisuels et créations de contenus qui captivent, valorisent l\'humain et hissent les marques au plus haut niveau de perception.',
                'subthesis' => 'Du tournage 4K au sound design cinématique, des récits audiovisuels qui ancrent les marques dans la culture.',
                'deliverables' => [
                    'Tournage Vidéo 4K & Réalisation de Spots Institutionnels',
                    'Films Manifestes & Interviews Exécutives de Dirigeants',
                    'Reportages Photo Corporate & Événementiels',
                    'Motion Design, Animations 2D/3D & Titrages Épurés',
                    'Production de Podcasts & Contenus Audio de Marque',
                    'Post-Production, Étalonnage Cinématique & Sound Design',
                    'Formats Courts Verticaux (TikTok, Reels, Shorts)',
                    'Gestion de Banques d\'Images Propriétaires',
                ],
                'visual' => [
                    'image' => 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80',
                    'label' => 'SHOWREEL 4K',
                    'client' => 'MEDIA FACTORY',
                ],
            ],
            [
                'id' => 'academie',
                'name' => 'Académie',
                'thesis' => 'Programmes certifiants et ateliers de montée en compétences pour préparer les cadres et talents aux exigences technologiques de demain.',
                'subthesis' => 'Un transfert continu de compétences de pointe pour hisser les talents locaux aux plus hauts standards internationaux.',
                'deliverables' => [
                    'Ateliers Intra-Entreprises sur-mesure (Marketing & Tech)',
                    'Upskilling des Équipes en Ingénierie Logicielle',
                    'Masterclasses en Stratégie de Marque & Communication',
                    'Programmes d\'Orientation Académique & Insertion Jeunes',
                    'Accompagnement Managérial & Mentorat de Dirigeants',
                    'Formations Certifiantes en Gestion de Projets Digitaux',
                ],
                'visual' => [
                    'image' => 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80',
                    'label' => 'AFTER BAC',
                    'client' => '+45K ÉTUDIANTS',
                ],
            ],
        ];

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

        $testimonials = [
            [
                'id' => 1,
                'quote' => "Travailler avec Vitrine Consulting a transformé notre capacité à engager les jeunes actifs en zone CEMAC. Leur maîtrise combinée de l'ingénierie logicielle et de la régie publicitaire apporte un niveau de rigueur et d'impact inédit dans la sous-région.",
                'author' => 'Directeur de la Transformation Digitale',
                'organization' => 'Groupe Télécom Leader Panafricain',
                'caseStudy' => [
                    'title' => 'SABES NUMERIK CORE CLOUD',
                    'badge' => 'ÉTUDE DE CAS BANQUE & TÉLÉCOM',
                    'image' => 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80',
                ],
            ],
            [
                'id' => 2,
                'quote' => "La régie Vitrine Ads et les plateformes média comme CaBougeOu et InfoBooster nous permettent d'atteindre des audiences captives avec une authenticité et une précision que les régies traditionnelles ne peuvent égaler.",
                'author' => 'Directrice Régionale de Marque',
                'organization' => 'Institution Bancaire Multinationale',
                'caseStudy' => [
                    'title' => 'VITRINE ADS & CABOUGEOU',
                    'badge' => 'ÉTUDE DE CAS BILLETTERIE & BRAND',
                    'image' => 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=80',
                ],
            ],
        ];

        return Inertia::render('Services', [
            'disciplines' => $disciplines,
            'partners' => $partners,
            'testimonials' => $testimonials,
            'company' => [
                'name' => 'Vitrine Consulting SARL',
                'legalForm' => 'SARL',
                'location' => 'Douala (Akwa), Cameroun',
                'tagline' => 'Nous construisons des vitrines. Nous créons des écosystèmes.',
                'phone' => '+237 600 00 00 00',
                'email' => 'contact@vitrineconsulting.com',
                'whatsapp' => '237690000000',
            ],
        ]);
    }
}
