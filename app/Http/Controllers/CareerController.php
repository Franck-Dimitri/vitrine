<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;

class CareerController extends Controller
{
    /**
     * Display the Careers / Recruitment page (CdCF 7.0).
     */
    public function index(): Response
    {
        $openPositions = [
            [
                'id' => 'lead-architect-mobile',
                'title' => 'Lead Mobile Architect (React Native / iOS)',
                'filiale' => 'Sabes Numerik',
                'location' => 'Douala (Akwa) • Hybride',
                'type' => 'CDI',
                'department' => 'Ingénierie & Tech',
                'experience' => '5+ ans',
                'summary' => 'Conception d\'architectures mobiles haute performance et sécurisation des flux de transactions.',
            ],
            [
                'id' => 'responsable-billetterie',
                'title' => 'Responsable Billetterie & Partenariats Festivals',
                'filiale' => 'CaBougeOu',
                'location' => 'Douala • Terrain',
                'type' => 'CDI',
                'department' => 'Opérations & Loisirs',
                'experience' => '3+ ans',
                'summary' => 'Développement du réseau d\'organisateurs et coordination des accès billetterie sur les grands événements.',
            ],
            [
                'id' => 'head-media-monetization',
                'title' => 'Directeur de Clientèle Régie Publicitaire',
                'filiale' => 'Vitrine Ads',
                'location' => 'Douala / Yaoundé',
                'type' => 'CDI',
                'department' => 'Commercial & Médias',
                'experience' => '4+ ans',
                'summary' => 'Commercialisation des inventaires digitaux et brand content auprès des grandes marques télécoms et bancaires.',
            ],
            [
                'id' => 'journaliste-business',
                'title' => 'Rédacteur Économique & Curation de Contenu',
                'filiale' => 'InfoBooster',
                'location' => 'Douala • Plein temps',
                'type' => 'CDI',
                'department' => 'Média & Éditorial',
                'experience' => '2+ ans',
                'summary' => 'Rédaction de dossiers d\'analyse économique et interviews de chefs d\'entreprises en zone CEMAC.',
            ],
            [
                'id' => 'creative-video-producer',
                'title' => 'Vidéaste & Motion Designer 4K',
                'filiale' => 'Vitrine Consulting (Holding)',
                'location' => 'Douala (Akwa)',
                'type' => 'CDI',
                'department' => 'Production Média',
                'experience' => '3+ ans',
                'summary' => 'Réalisation de spots corporate, captations d\'événements et assets graphiques pour les 8 marques.',
            ],
            [
                'id' => 'stage-growth-marketing',
                'title' => 'Stage Pré-Emploi : Growth Marketing & Social Media',
                'filiale' => 'IciLaBouf',
                'location' => 'Douala',
                'type' => 'Stage (6 mois)',
                'department' => 'Marketing',
                'experience' => 'Débutant talentueux',
                'summary' => 'Animation des communautés foodies et création de contenus courts immersifs sur TikTok et Instagram.',
            ],
        ];

        $benefits = [
            [
                'title' => 'Impact Panafricain Réel',
                'description' => 'Votre travail touche des centaines de milliers d\'usagers à travers le Cameroun et l\'Afrique centrale.',
            ],
            [
                'title' => 'Synergie Multi-Filiales',
                'description' => 'Évoluez entre tech, médias, régie publicitaire et événementiel au sein d\'un écosystème dynamique.',
            ],
            [
                'title' => 'Cadre Moderne au Cœur d\'Akwa',
                'description' => 'Bureaux équipés, culture du résultat, flexibilité hybride et matériel informatique haut de gamme.',
            ],
            [
                'title' => 'Montée en Compétences Accélérée',
                'description' => 'Programmes certifiants, mentorat interne et accès direct aux comités exécutifs du groupe.',
            ],
        ];

        return Inertia::render('Careers', [
            'positions' => $openPositions,
            'benefits' => $benefits,
            'filiales' => ['Toutes', 'Sabes Numerik', 'CaBougeOu', 'Vitrine Ads', 'InfoBooster', 'IciLaBouf', 'Holding'],
            'company' => [
                'name' => 'Vitrine Consulting SARL',
                'location' => 'Douala (Akwa), Cameroun',
                'phone' => '+237 600 00 00 00',
                'email' => 'rh@vitrineconsulting.com',
                'whatsapp' => '237690000000',
            ],
        ]);
    }
}
