<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;

class AboutController extends Controller
{
    /**
     * Display the About page (CdCF 2.0).
     */
    public function index(): Response
    {
        $pillars = [
            [
                'number' => '01',
                'title' => 'Transparence & Gouvernance',
                'description' => 'Comptes audités, gouvernance saine et comités de direction multidisciplinaires assurant la confiance des bailleurs et partenaires institutionnels.',
                'tag' => 'Gouvernance',
            ],
            [
                'number' => '02',
                'title' => 'Impact & Utilité Réelle',
                'description' => 'Chaque projet incubé doit résoudre un problème concret d\'employabilité, de digitalisation, de mobilité ou d\'accès à l\'information en Afrique centrale.',
                'tag' => 'Mission',
            ],
            [
                'number' => '03',
                'title' => 'Excellence Technologique',
                'description' => 'Architectures Cloud scalables, disponibilité applicative de 99.98% et respect strict des normes de sécurité des données bancaires et télécoms.',
                'tag' => 'Ingénierie',
            ],
            [
                'number' => '04',
                'title' => 'Ancrage Panafricain',
                'description' => 'Conception au Cameroun, déploiement dans la sous-région CEMAC et ambition continentale avec les meilleurs talents locaux.',
                'tag' => 'Territoire',
            ],
        ];

        $milestones = [
            [
                'year' => '2023',
                'title' => 'Fondation de la Holding',
                'description' => 'Création de Vitrine Consulting SARL à Douala (Akwa) pour structurer le portefeuille technologique et lancer Sabes Numerik et InfoBooster.',
            ],
            [
                'year' => '2024',
                'title' => 'Expansion Événementielle & Food',
                'description' => 'Lancement de CaBougeOu et IciLaBouf, franchissant la barre des 250 000 usagers captifs sur les sorties et la gastronomie.',
            ],
            [
                'year' => '2025',
                'title' => 'Unification Régie & Vitrine Ads',
                'description' => 'Consolidation de la régie publicitaire centrale Vitrine Ads et structuration du modèle bivalent pour les grands annonceurs.',
            ],
            [
                'year' => '2026',
                'title' => 'Accélération Panafricaine',
                'description' => '8 filiales actives, déploiement des solutions SaaS bancaires et partenariats stratégiques avec les leaders télécoms.',
            ],
        ];

        return Inertia::render('About', [
            'pillars' => $pillars,
            'milestones' => $milestones,
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
