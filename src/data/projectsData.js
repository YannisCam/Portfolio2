import { CodeSquare } from "lucide-react";

export const projectsData = [
  {
    id: 1,
    title: 'Webdocumentaire Interactif',
    description: 'Webdocumentaire immersif explorant les réalités de la vie étudiante. Expérience interactive combinant vidéo, témoignages.',
    image: `${import.meta.env.BASE_URL}img/webdoc.jpg`,
    technologies: ['HTML', 'Bootstrap', 'Première Pro'],
    designUrl: '#',
    demoUrl: 'https://webdocumentaire-etudiant-meaux.vercel.app/',
    codeUrl: 'https://github.com/yoh4nyo/Webdocumentaire-etudiant-meaux',
    detailImage: `${import.meta.env.BASE_URL}img/webdoc.jpg`,
    date: 'Octobre 2024 - Decembre 2024',
    collaborateurs: ['Mathias Rakotomavo', 'Yohan Som', 'Alexandre Lopere'],
    competences: ['HTML', 'CSS', 'Bootstrap', 'Audiovisuel','Première Pro'],
    contexte: "Ce projet a été réalisé dans le cadre d'un projet universitaire, ou nous devions réaliser un webdocumentaire interactif sur un sujet de notre choix. Nous avons choisi de mettre en lumière les défis et le quotidien des étudiants à travers des témoignages et des vidéos.",
    objectifs: [
      'Créer un site web interactif',
      'Tourner et monter des temoignages vidéo',
      'Ecrire plusieurs articles de journal',
      'Heberger le site web en ligne'
    ],
    livrables: [
      'Site web interactif',
      'Vidéos montées et intégrées',
      '4 Articles de journal',
    ],
    defis: "Le defi principal a été de trouver des étudiants de situation différentes pour témoigner et organiser les tournages. De plus, la rédaction des articles de journaux n'a pas été facile car nous n'avions pas beaucoup de competences dans ce domaine.",
    resultats: "Le webdoc est en ligne, les vidéos s'enchaînent bien et les 4 articles aident à donner du contexte. On a clairement progressé en HTML/CSS, Bootstrap et sur le montage."
  },
  {
    id: 2,
    title: 'Easy Drive',
    description: 'Plateforme complète de suivi et gestion des candidats au permis de conduire. Statistiques intégrés pour le suivi de progression et la préparation aux examens.',
    image: `${import.meta.env.BASE_URL}img/ed.jpg`,
    technologies: ['Angular', 'PHP(API)', 'Blender'],
    designUrl: 'https://www.figma.com/design/MpRQMS2iaVRCIDW7pULDYt/EASY2DRIVE-WIREFRAME?node-id=0-1&t=irTgo06S6tzJpYPT-1',
    demoUrl: 'https://yoh4nyo.github.io/SAE_401_v2/',
    codeUrl: 'https://github.com/yoh4nyo/SAE_401_v2',
    detailImage: `${import.meta.env.BASE_URL}img/ed.jpg`,
    date: 'Janvier 2025 - Mars 2025',
    collaborateurs: ['Mathias Rakotomavo', 'Yohan Som', 'Alexandre Lopere'],
    competences: ['Angular', 'PHP(API)', 'Blender','Typescript','ChartJS','Figma'],

    contexte: "Ce projet a été réalisé dans le cadre d'un projet universitaire, ou nous devions réaliser une plateforme permettant aux candidats aux code de la route de consulter leurs resultats.",
    objectifs: [
      'Créer un site web ',
      'Mettre en place une API en PHP pour la gestion des données',
      'Créer un figma et une charte graphique',
      'Utiliser chartJS pour les statistiques et graphiques',
      'Heberger le site web en ligne'
    ],
    livrables: [
      'Site web hebergé en ligne',
      'API PHP fonctionnelle',
      'Figma pc et mobile',
    ],
    defis: "Relier l'API avec le front donc le Angular aura été une des choses les plus longues du aux nombreuses fonctionnalités. De plus l'implementation du ChartJS a été compliqué car nous n'avions jamais utilisé cette librairie auparavant.",
    resultats: "Le site est hebergé en ligne, l'API répond bien et les graphiques aident à lire les résultats. Les maquettes Figma (desktop/mobile) permet d'avoir une vision du site sur chaque plateforme."
  },
  {
    id: 3,
    title: 'Marina Magnétiseur',
    description: 'Site vitrine professionnel avec système de réservation en ligne et boutique de produits.',
    image: `${import.meta.env.BASE_URL}img/mm.jpg`,
    technologies: ['Angular', 'PHP(API)', 'Bootstrap'],
    designUrl: 'https://www.figma.com/design/xsqRUMe9W72i6kr5nzIJKf/Untitled?node-id=0-1&t=KEV18yNBj5SWQd93-1',
    demoUrl: 'https://marinamagnetiseur.alwaysdata.net/',
    codeUrl: '#',
    detailImage: `${import.meta.env.BASE_URL}img/mm.jpg`,
    date: 'Juillet 2025 - Aout 2025',
    collaborateurs: ['Aucun'],
    competences: ['Angular', 'PHP(API)','Typescript','Figma', 'Canva', 'Création Logo'],

    contexte: "Ce projet a été réalisé dans le cadre de mon stage de fin d'année, ou j'ai développé un site vitrine pour une magnétiseuse afin de lui permettre de présenter ses services et de gérer les rendez-vous en ligne. Mais aussi de lui créer une boutique en ligne pour vendre ses produits.",
    objectifs: [
      'Créer un site vitrine en Angular',
      'Créer une API en PHP pour la gestion des données',
      'Creéer un figma et une charte graphique complete (logo, couleurs, polices)',
      'Création d une affiche + carte de visite',
      'Heberger le site web en ligne'
    ],
    livrables: [
      'Site web vitrine complet',
      'Api PHP fonctionnelle',
      'Carte de visite et affiche',
    ],
    defis: "Créer une identité visuelle(logo, couleurs, typos) a partir de rien aura été la tache la plus compliqué car il fallait que mon maitre de stage valide et soit satisfaite de mon travail. Le site web a été simple a réalisé car je savais deja faire ce style de site",
    resultats: "Le site est en ligne avec la réservation et la boutique. La charte est livrée (logo, affiche, carte de visite) et tout est hébergé sur AlwaysData. J'ai pris la main sur Angular/TS, PHP et le design."
  },
  {
    id: 4,
    title: 'TxlForma',
    description: 'Plateforme dédiée à la vente de formations en présentiel.',
    image: `${import.meta.env.BASE_URL}img/txl.jpg`,
    technologies: ['React', 'Spring Boot', 'Bootstrap'],
    designUrl: 'https://www.figma.com/design/brMxnpRyxYbKdUEg7ScYlm/SAE_501?node-id=0-1&t=uqUk1GPwDzHmzXc6-1',
    demoUrl: '#',
    codeUrl: 'https://github.com/yoh4nyo/SAE_501',
    detailImage: `${import.meta.env.BASE_URL}img/txl.jpg`,
    date: 'début Octobre 2025 - début Janvier 2026',
    collaborateurs: ['Mathias Rakotomavo', 'Yohan Som', 'Alexandre Lopere'],
    competences: ['React', 'Spring Boot', 'Bootstrap','Figma','Blender', 'Java', 'JSX', ],
    
    contexte: "Ce projet a été réalisé dans le cadre d'un projet universitaire, ou nous devions réaliser un site permettant de vendre des formations mais aussi de gerer les cours en presentiel.",
    objectifs: [
      'Créer un site web en React',
      'Mettre en place une API avec Spring Boot pour la gestion des données',
      'Réaliser un figma et une charte graphique complète',
      'Heberger le site web en ligne',
      'Réalisation d une salle en 3d avec blender et l intégrer au site web'
    ],
    livrables: [
      'Site web portfolio complet',
      'Salle en 3d',
      'Figma complet',
      'Api Spring Boot fonctionnelle',
    ],
    defis: "Projet en cours",
    resultats: "Projet en cours"
  }
];

