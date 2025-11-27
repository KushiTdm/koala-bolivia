export interface Tour {
  id: string;
  destination: 'uyuni' | 'potosi';
  titleEs: string;
  titleEn: string;
  titleFr: string;
  descriptionEs: string;
  descriptionEn: string;
  descriptionFr: string;
  days: number;
  nights: number;
  image: string;
  includesEs: string[];
  includesEn: string[];
  includesFr: string[];
  highlightsEs: string[];
  highlightsEn: string[];
  highlightsFr: string[];
  itineraryEs: { day: number; title: string; description: string }[];
  itineraryEn: { day: number; title: string; description: string }[];
  itineraryFr: { day: number; title: string; description: string }[];
}

export const tours: Tour[] = [
  // ============================================
  // UYUNI - UNIQUE TOUR PERSONNALISÉ
  // ============================================
  {
    id: 'uyuni-custom',
    destination: 'uyuni',
    titleEs: 'Expedición Personalizada al Salar',
    titleEn: 'Custom Salar Expedition',
    titleFr: 'Expédition Personnalisée au Salar',
    descriptionEs: 'Olvídate de los tours masivos. Diseñamos tu aventura única en el Salar de Uyuni, explorando lugares secretos donde otros no van. Nuestro guía experto se adapta completamente a tu ritmo, tus pasiones y tus ganas de descubrir.',
    descriptionEn: 'Forget mass tours. We design your unique adventure in the Salar de Uyuni, exploring secret places where others don\'t go. Our expert guide adapts completely to your pace, your passions and your desire to discover.',
    descriptionFr: 'Oubliez les tours de masse. Nous concevons votre aventure unique dans le Salar d\'Uyuni, en explorant des lieux secrets où les autres ne vont pas. Notre guide expert s\'adapte complètement à votre rythme, vos passions et vos envies de découverte.',
    days: 3,
    nights: 2,
    image: '/salar-custum-tour1.jpg',
    includesEs: [
      'Transporte 4x4 privado',
      'Guía trilingüe experimentado y flexible',
      'Alojamiento personalizado (hoteles de sal disponibles)',
      'Todas las comidas adaptadas a tus preferencias',
      'Itinerario 100% flexible según tus intereses',
      'Acceso a zonas poco frecuentadas',
      'Tiempo sin prisas para fotografía',
      'Equipo especializado incluido'
    ],
    includesEn: [
      'Private 4x4 transport',
      'Experienced and flexible trilingual guide',
      'Personalized accommodation (salt hotels available)',
      'All meals adapted to your preferences',
      '100% flexible itinerary according to your interests',
      'Access to less frequented areas',
      'Unhurried time for photography',
      'Specialized equipment included'
    ],
    includesFr: [
      'Transport 4x4 privé',
      'Guide trilingue expérimenté et flexible',
      'Hébergement personnalisé (hôtels de sel disponibles)',
      'Tous les repas adaptés à vos préférences',
      'Itinéraire 100% flexible selon vos intérêts',
      'Accès aux zones peu fréquentées',
      'Temps sans hâte pour la photographie',
      'Équipement spécialisé inclus'
    ],
    highlightsEs: [
      '🌋 Volcán Tunupa - Vista panorámica sin multitudes',
      '🚴 Isla Piapia en bicicleta hasta Incahuasi',
      '🏝️ Islas secretas del Salar poco visitadas',
      '📸 Sesiones fotográficas en lugares vírgenes',
      '⏰ A tu ritmo, sin prisas ni grupos grandes',
      '🎨 Itinerario diseñado según tus pasiones'
    ],
    highlightsEn: [
      '🌋 Tunupa Volcano - Panoramic view without crowds',
      '🚴 Piapia Island by bike to Incahuasi',
      '🏝️ Secret islands of the Salar rarely visited',
      '📸 Photo sessions in pristine locations',
      '⏰ At your pace, no rush or large groups',
      '🎨 Itinerary designed according to your passions'
    ],
    highlightsFr: [
      '🌋 Volcan Tunupa - Vue panoramique sans foules',
      '🚴 Île Piapia à vélo jusqu\'à Incahuasi',
      '🏝️ Îles secrètes du Salar peu visitées',
      '📸 Sessions photo dans des endroits vierges',
      '⏰ À votre rythme, sans hâte ni grands groupes',
      '🎨 Itinéraire conçu selon vos passions'
    ],
    itineraryEs: [
      {
        day: 1,
        title: '🗺️ Tu Aventura, Tus Reglas',
        description: 'Creamos juntos el itinerario perfecto para ti. ¿Prefieres fotografía de amaneceres épicos? ¿Te apasiona el ciclismo explorando islas remotas como Piapia? ¿Quieres conquistar el Volcán Tunupa para vistas sin igual? ¿Buscas la tranquilidad de rincones donde no llegan los tours masivos? Tu guía diseña cada día según tus deseos, adaptándose a tu energía y curiosidad.'
      },
      {
        day: 2,
        title: '🚴 Ejemplos de Experiencias Únicas',
        description: 'VOLCÁN TUNUPA: Ascenso opcional para contemplar el Salar desde las alturas, lejos de las multitudes. ISLA PIAPIA EN BICICLETA: Pedalea por la inmensidad blanca hasta Incahuasi, una experiencia íntima y auténtica. ISLAS SECRETAS: Exploramos rincones del Salar donde otros no van - tu guía conoce cada joya escondida. FOTOGRAFÍA SIN PRISAS: Tiempo ilimitado en cada spot para capturar LA foto perfecta, sin grupos presionando.'
      },
      {
        day: 3,
        title: '✨ Flexibilidad Total',
        description: '¿Quieres quedarte más tiempo en un lugar que te fascina? ¿Cambiar de planes según el clima o tu inspiración? ¿Madrugar para el amanecer perfecto o relajarte hasta tarde? Tu guía se adapta completamente. Alojamiento en hoteles de sal de lujo disponibles, o refugios rústicos auténticos - tú decides. Comidas personalizadas según tus preferencias. Esta es TU expedición.'
      }
    ],
    itineraryEn: [
      {
        day: 1,
        title: '🗺️ Your Adventure, Your Rules',
        description: 'We create together the perfect itinerary for you. Do you prefer epic sunrise photography? Are you passionate about cycling exploring remote islands like Piapia? Want to conquer Tunupa Volcano for unparalleled views? Looking for the tranquility of corners where mass tours don\'t reach? Your guide designs each day according to your wishes, adapting to your energy and curiosity.'
      },
      {
        day: 2,
        title: '🚴 Examples of Unique Experiences',
        description: 'TUNUPA VOLCANO: Optional ascent to contemplate the Salar from the heights, far from the crowds. PIAPIA ISLAND BY BIKE: Pedal through the white immensity to Incahuasi, an intimate and authentic experience. SECRET ISLANDS: We explore corners of the Salar where others don\'t go - your guide knows every hidden gem. UNHURRIED PHOTOGRAPHY: Unlimited time at each spot to capture THE perfect photo, without groups rushing you.'
      },
      {
        day: 3,
        title: '✨ Total Flexibility',
        description: 'Want to stay longer in a place that fascinates you? Change plans according to weather or your inspiration? Wake up early for the perfect sunrise or relax until late? Your guide adapts completely. Accommodation in luxury salt hotels available, or authentic rustic refuges - you decide. Personalized meals according to your preferences. This is YOUR expedition.'
      }
    ],
    itineraryFr: [
      {
        day: 1,
        title: '🗺️ Votre Aventure, Vos Règles',
        description: 'Nous créons ensemble l\'itinéraire parfait pour vous. Préférez-vous la photographie de levers de soleil épiques ? Êtes-vous passionné de vélo explorant des îles reculées comme Piapia ? Voulez-vous conquérir le Volcan Tunupa pour des vues incomparables ? Cherchez-vous la tranquillité de coins où les tours de masse n\'arrivent pas ? Votre guide conçoit chaque jour selon vos souhaits, s\'adaptant à votre énergie et votre curiosité.'
      },
      {
        day: 2,
        title: '🚴 Exemples d\'Expériences Uniques',
        description: 'VOLCAN TUNUPA : Ascension optionnelle pour contempler le Salar depuis les hauteurs, loin des foules. ÎLE PIAPIA À VÉLO : Pédalez à travers l\'immensité blanche jusqu\'à Incahuasi, une expérience intime et authentique. ÎLES SECRÈTES : Nous explorons des recoins du Salar où les autres ne vont pas - votre guide connaît chaque joyau caché. PHOTOGRAPHIE SANS HÂTE : Temps illimité à chaque spot pour capturer LA photo parfaite, sans groupes qui vous pressent.'
      },
      {
        day: 3,
        title: '✨ Flexibilité Totale',
        description: 'Vous voulez rester plus longtemps dans un endroit qui vous fascine ? Changer de plans selon la météo ou votre inspiration ? Vous lever tôt pour le lever de soleil parfait ou vous détendre jusqu\'à tard ? Votre guide s\'adapte complètement. Hébergement dans des hôtels de sel de luxe disponibles, ou refuges rustiques authentiques - vous décidez. Repas personnalisés selon vos préférences. Ceci est VOTRE expédition.'
      }
    ]
  },

  // ============================================
  // POTOSI TOURS (inchangés)
  // ============================================
  {
    id: 'potosi-cerro-rico',
    destination: 'potosi',
    titleEs: 'Visita del Cerro Rico y las Minas (Acompañada)',
    titleEn: 'Visit to Cerro Rico and the Mines (Accompanied)',
    titleFr: 'Visite du Cerro Rico et des Mines (Accompagnée)',
    descriptionEs: 'Una experiencia impactante con guías locales. Descubre las condiciones de trabajo en la famosa "montaña rica" que moldeó la historia mundial.',
    descriptionEn: 'An impactful experience with local guides. Discover working conditions in the famous "rich mountain" that shaped world history.',
    descriptionFr: 'Une expérience marquante avec des guides locaux. Découvrez les conditions de travail dans la célèbre "montagne riche" qui a façonné l\'histoire mondiale.',
    days: 1,
    nights: 0,
    image: '/cerro-mines-potosi.jpg',
    includesEs: ['Guía local trilingüe', 'Equipo de seguridad', 'Almuerzo', 'Acceso a minas', 'Museo de plata'],
    includesEn: ['Trilingual local guide', 'Safety equipment', 'Lunch', 'Mine access', 'Silver museum'],
    includesFr: ['Guide local trilingue', 'Équipement de sécurité', 'Déjeuner', 'Accès aux mines', 'Musée de l\'argent'],
    highlightsEs: ['Cerro Rico', 'Minas de plata', 'Mineros locales', 'Historia minera', 'Vistas panorámicas'],
    highlightsEn: ['Cerro Rico', 'Silver mines', 'Local miners', 'Mining history', 'Panoramic views'],
    highlightsFr: ['Cerro Rico', 'Mines d\'argent', 'Mineurs locaux', 'Histoire minière', 'Vues panoramiques'],
    itineraryEs: [
      {
        day: 1,
        title: 'Exploración de la historia minera',
        description: 'Visitamos las minas activas del Cerro Rico. Nos encontramos con mineros locales y aprendemos sobre sus vidas. Visitamos el museo de plata. Almuerzo típico incluido.'
      }
    ],
    itineraryEn: [
      {
        day: 1,
        title: 'Exploration of mining history',
        description: 'We visit the active mines of Cerro Rico. We meet local miners and learn about their lives. We visit the silver museum. Typical lunch included.'
      }
    ],
    itineraryFr: [
      {
        day: 1,
        title: 'Exploration de l\'histoire minière',
        description: 'Nous visitons les mines actives du Cerro Rico. Nous rencontrons des mineurs locaux et découvrons leurs vies. Nous visitons le musée de l\'argent. Déjeuner typique inclus.'
      }
    ]
  },
  {
    id: 'potosi-heritage',
    destination: 'potosi',
    titleEs: 'Patrimonio UNESCO: Tour Histórico de Potosí',
    titleEn: 'UNESCO Heritage: Historic Tour of Potosí',
    titleFr: 'Patrimoine UNESCO : Tour Historique de Potosí',
    descriptionEs: 'Explora la Casa de la Moneda, las iglesias barrocas y las calles coloniales. Ideal para comprender el esplendor pasado de la ciudad.',
    descriptionEn: 'Explore the Mint, baroque churches and colonial streets. Perfect for understanding the city\'s past splendor.',
    descriptionFr: 'Explorez la Casa de la Moneda, les églises baroques et les rues coloniales. Idéal pour comprendre la splendeur passée de la ville.',
    days: 1,
    nights: 0,
    image: '/citytour-potosi.jpg',
    includesEs: ['Guía especializado', 'Entrada a museos', 'Tour a pie', 'Almuerzo'],
    includesEn: ['Specialist guide', 'Museum entrance', 'Walking tour', 'Lunch'],
    includesFr: ['Guide spécialisé', 'Entrée des musées', 'Tour à pied', 'Déjeuner'],
    highlightsEs: ['Casa de la Moneda', 'Catedral Metropolitana', 'Iglesia de San Francisco', 'Arquitectura colonial', 'Plaza principal'],
    highlightsEn: ['Casa de la Moneda', 'Metropolitan Cathedral', 'San Francisco Church', 'Colonial architecture', 'Main square'],
    highlightsFr: ['Casa de la Moneda', 'Cathédrale Métropolitaine', 'Église de San Francisco', 'Architecture coloniale', 'Place principale'],
    itineraryEs: [
      {
        day: 1,
        title: 'Tour histórico de Potosí',
        description: 'Comenzamos con la Casa de la Moneda, donde se acuñaban las monedas de plata. Visitamos la Catedral Metropolitana y otras iglesias coloniales. Tour a pie por las calles históricas. Almuerzo en un restaurante local.'
      }
    ],
    itineraryEn: [
      {
        day: 1,
        title: 'Historic tour of Potosí',
        description: 'We start with the Mint, where silver coins were minted. We visit the Metropolitan Cathedral and other colonial churches. Walking tour through historic streets. Lunch at a local restaurant.'
      }
    ],
    itineraryFr: [
      {
        day: 1,
        title: 'Tour historique de Potosí',
        description: 'Nous commençons par la Casa de la Moneda, où les pièces d\'argent ont été frappées. Nous visitons la Cathédrale Métropolitaine et autres églises coloniales. Tour à pied dans les rues historiques. Déjeuner dans un restaurant local.'
      }
    ]
  },
  {
    id: 'potosi-custom',
    destination: 'potosi',
    titleEs: 'Aventura Histórica a Medida',
    titleEn: 'Custom Historic Adventure',
    titleFr: 'Aventure Historique Sur Mesure',
    descriptionEs: 'Diseñamos tu inmersión total en Potosí y sus alrededores. Perfecto para explorar rutas coloniales y andinas específicas, visitar lagunas, o enfocarse en el patrimonio minero en profundidad.',
    descriptionEn: 'We design your total immersion in Potosí and its surroundings. Perfect for exploring specific colonial and Andean routes, visiting lagoons, or focusing on mining heritage in depth.',
    descriptionFr: 'Nous concevons votre immersion totale à Potosí et ses environs. Parfait pour explorer des routes coloniales et andines spécifiques, visiter des lagunes, ou se concentrer sur le patrimoine minier en profondeur.',
    days: 2,
    nights: 1,
    image: '/alacarte-potosi.jpg',
    includesEs: ['Guía privado especializado trilingüe', 'Transporte 4x4 (para salidas fuera de la ciudad)', 'Alojamiento en hostales seleccionados', 'Todas las comidas', 'Itinerario flexible', 'Entradas personalizadas'],
    includesEn: ['Specialized private trilingual guide', '4x4 Transport (for trips outside the city)', 'Accommodation in selected hostels', 'All meals', 'Flexible itinerary', 'Personalized entrances'],
    includesFr: ['Guide privé spécialisé trilingue', 'Transport 4x4 (pour sorties hors ville)', 'Hébergement en auberges sélectionnées', 'Tous les repas', 'Itinéraire flexible', 'Entrées personnalisées'],
    highlightsEs: ['Itinerario flexible', 'Rutas andinas', 'Lagunas', 'Patrimonio minero profundo', 'Arquitectura colonial específica', 'Fotografía'],
    highlightsEn: ['Flexible itinerary', 'Andean routes', 'Lagoons', 'Deep mining heritage', 'Specific colonial architecture', 'Photography'],
    highlightsFr: ['Itinéraire flexible', 'Routes andines', 'Lagunes', 'Patrimoine minier profond', 'Architecture coloniale spécifique', 'Photographie'],
    itineraryEs: [
      {
        day: 1,
        title: 'Consulta y Diseño del Tour',
        description: 'El itinerario de este tour es completamente flexible y se crea en colaboración contigo. Trabajaremos juntos para definir las rutas, los lugares de interés (ej: lagunas andinas, minas específicas, sitios coloniales menos conocidos) y la duración, adaptándonos a tus intereses y presupuesto.'
      },
      {
        day: 2,
        title: 'Exploración Personalizada (Continuación)',
        description: 'Continuación del itinerario diseñado. Nuestro guía experto se encargará de gestionar los transportes, entradas y logística para garantizar una experiencia auténtica y fluida, completamente ajustada a las aventuras que elegiste.'
      }
    ],
    itineraryEn: [
      {
        day: 1,
        title: 'Consultation and Tour Design',
        description: 'The itinerary for this tour is completely flexible and created in collaboration with you. We will work together to define the routes, places of interest (e.g., Andean lagoons, specific mines, lesser-known colonial sites) and duration, adapting to your interests and budget.'
      },
      {
        day: 2,
        title: 'Personalized Exploration (Continuation)',
        description: 'Continuation of the designed itinerary. Our expert guide will handle transport, entrance fees, and logistics to guarantee an authentic and smooth experience, completely tailored to the adventures you chose.'
      }
    ],
    itineraryFr: [
      {
        day: 1,
        title: 'Consultation et Conception du Circuit',
        description: 'L\'itinéraire de ce tour est totalement flexible et créé en collaboration avec vous. Nous travaillerons ensemble pour définir les routes, les lieux d\'intérêt (ex: lagunes andines, mines spécifiques, sites coloniaux moins connus) et la durée, en nous adaptant à vos intérêts et à votre budget.'
      },
      {
        day: 2,
        title: 'Exploration Personnalisée (Suite)',
        description: 'Suite de l\'itinéraire conçu. Notre guide expert se chargera de la gestion des transports, des entrées et de la logistique pour garantir une expérience authentique et fluide, entièrement adaptée aux aventures que vous avez choisies.'
      }
    ]
  }
];

export const getToursByDestination = (destination: 'uyuni' | 'potosi'): Tour[] => {
  return tours.filter(tour => tour.destination === destination);
};

export const getTourById = (id: string): Tour | undefined => {
  return tours.find(tour => tour.id === id);
};