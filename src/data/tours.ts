// src/data/tours.ts
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
  price?: number;
  schedule?: string;
  groupSize?: string;
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
  // POTOSI - TOUR DES MINES (PRINCIPAL)
  // ============================================
  {
    id: 'potosi-mining-tour',
    destination: 'potosi',
    titleEs: 'Tour a las Minas del Cerro Rico',
    titleEn: 'Cerro Rico Mines Tour',
    titleFr: 'Visite des Mines du Cerro Rico',
    descriptionEs: 'La atracción turística más importante de Potosí. Experiencia auténtica en minas activas del Cerro Rico con ex-mineros. Incluye visita al mercado minero donde podrás comprar dinamita. ¡No es para froussards!',
    descriptionEn: 'Potosí\'s most important tourist attraction. Authentic experience in active Cerro Rico mines with ex-miners. Includes visit to the mining market where you can buy dynamite. Not for the faint-hearted!',
    descriptionFr: 'L\'attraction touristique la plus importante de Potosí. Expérience authentique dans les mines actives du Cerro Rico avec d\'anciens mineurs. Visite du marché minier où vous pourrez acheter de la dynamite. Pas pour les âmes sensibles !',
    days: 1,
    nights: 0,
    image: '/Mines.jpeg',
    schedule: '08:45 y 13:30',
    groupSize: 'Máximo 8 personas',
    includesEs: [
      'Transporte privado (no necesitas bus)',
      'Equipo completo de seguridad (casco, chaqueta, lámpara frontal, botas de goma, pantalón)',
      'Guía experto ex-minero (español/inglés)',
      'Visita al Mercado Minero',
      'Acceso a minas auténticas (Caracoles, Candelaria-Rosario, Kunti)',
      'Posibilidad de explotar dinamita',
      'Almacenamiento seguro de tus pertenencias'
    ],
    includesEn: [
      'Private transport (no bus needed)',
      'Complete safety equipment (helmet, jacket, headlamp, rubber boots, pants)',
      'Expert ex-miner guide (Spanish/English)',
      'Visit to the Mining Market',
      'Access to authentic mines (Caracoles, Candelaria-Rosario, Kunti)',
      'Possibility to detonate dynamite',
      'Secure storage for your belongings'
    ],
    includesFr: [
      'Transport privé (pas besoin de bus)',
      'Équipement de sécurité complet (casque, veste, lampe frontale, bottes en caoutchouc, pantalon)',
      'Guide expert ancien mineur (espagnol/anglais)',
      'Visite du Marché Minier',
      'Accès aux mines authentiques (Caracoles, Candelaria-Rosario, Kunti)',
      'Possibilité de faire exploser de la dynamite',
      'Stockage sécurisé de vos affaires'
    ],
    highlightsEs: [
      '⛏️ Minas auténticas NO turísticas con mineros reales',
      '🧨 Compra dinamita en el Mercado Minero (¡puedes hacerla explotar!)',
      '🏔️ Cerro Rico (4200m) - Vistas espectaculares de Potosí',
      '👷 Guías ex-mineros con experiencia real',
      '📸 Experiencia fotográfica única',
      '⏰ Grupos pequeños (máx. 8 personas) - Sale con 1 solo turista',
      '🎒 Almacenamiento seguro incluido'
    ],
    highlightsEn: [
      '⛏️ Authentic NON-touristic mines with real miners',
      '🧨 Buy dynamite at the Mining Market (you can detonate it!)',
      '🏔️ Cerro Rico (4200m) - Spectacular views of Potosí',
      '👷 Ex-miner guides with real experience',
      '📸 Unique photographic experience',
      '⏰ Small groups (max. 8 people) - Departs with just 1 tourist',
      '🎒 Secure storage included'
    ],
    highlightsFr: [
      '⛏️ Mines authentiques NON touristiques avec de vrais mineurs',
      '🧨 Achetez de la dynamite au Marché Minier (vous pouvez la faire exploser !)',
      '🏔️ Cerro Rico (4200m) - Vues spectaculaires sur Potosí',
      '👷 Guides anciens mineurs avec expérience réelle',
      '📸 Expérience photographique unique',
      '⏰ Petits groupes (max. 8 personnes) - Part avec 1 seul touriste',
      '🎒 Stockage sécurisé inclus'
    ],
    itineraryEs: [
      {
        day: 1,
        title: '08:45 / 13:30 - Salida desde KOALA TOURS',
        description: 'El tour parte todos los días a las 08:45 am y 13:30 pm desde nuestra oficina central. Sale incluso con 1 solo turista (grupo máximo 8 personas). Traslado al depósito para equipamiento completo de seguridad.'
      },
      {
        day: 1,
        title: 'Warehouse - Equipamiento',
        description: 'Te equipamos con TODO el material necesario: botas de goma, pantalón especial, chaqueta, casco y lámpara frontal eléctrica. Tus otras pertenencias se almacenan de forma segura.'
      },
      {
        day: 1,
        title: 'Mercado Minero - Regalos para Mineros',
        description: 'Visita fascinante al mercado donde los mineros compran sus suministros. Aquí puedes comprar regalos auténticos para los mineros que trabajan: hojas de coca, cigarrillos, y ¡DINAMITA! Posibilidad de hacer explotar un cartucho bajo supervisión.'
      },
      {
        day: 1,
        title: 'Cerro Rico (4200m) - Las Minas',
        description: 'Transporte privado hasta las minas del Cerro Rico. IMPORTANTE: No son minas turísticas ni modernas - son minas AUTÉNTICAS donde trabajan mineros reales. Puedes elegir entre varias minas: Caracoles (vistas espectaculares de Potosí + lagunas Kari Kari), Candelaria-Rosario (mina colonial histórica), o Kunti. Experiencia con ex-mineros que conocen cada túnel.'
      }
    ],
    itineraryEn: [
      {
        day: 1,
        title: '08:45 / 13:30 - Departure from KOALA TOURS',
        description: 'The tour departs daily at 08:45 am and 1:30 pm from our main office. Departs even with just 1 tourist (maximum group 8 people). Transfer to the depot for complete safety equipment fitting.'
      },
      {
        day: 1,
        title: 'Warehouse - Equipment',
        description: 'We equip you with ALL necessary materials: rubber boots, special pants, jacket, helmet and electric headlamp. Your other belongings are stored securely.'
      },
      {
        day: 1,
        title: 'Mining Market - Gifts for Miners',
        description: 'Fascinating visit to the market where miners buy their supplies. Here you can buy authentic gifts for working miners: coca leaves, cigarettes, and DYNAMITE! Possibility to detonate a stick under supervision.'
      },
      {
        day: 1,
        title: 'Cerro Rico (4200m) - The Mines',
        description: 'Private transport to the Cerro Rico mines. IMPORTANT: These are NOT tourist or modern mines - they are AUTHENTIC mines where real miners work. You can choose between several mines: Caracoles (spectacular views of Potosí + Kari Kari lagoons), Candelaria-Rosario (historic colonial mine), or Kunti. Experience with ex-miners who know every tunnel.'
      }
    ],
    itineraryFr: [
      {
        day: 1,
        title: '08:45 / 13:30 - Départ de KOALA TOURS',
        description: 'Le tour part quotidiennement à 08h45 et 13h30 depuis notre bureau principal. Part même avec 1 seul touriste (groupe maximum 8 personnes). Transfert au dépôt pour équipement complet de sécurité.'
      },
      {
        day: 1,
        title: 'Entrepôt - Équipement',
        description: 'Nous vous équipons avec TOUT le matériel nécessaire : bottes en caoutchouc, pantalon spécial, veste, casque et lampe frontale électrique. Vos autres affaires sont stockées en sécurité.'
      },
      {
        day: 1,
        title: 'Marché Minier - Cadeaux pour les Mineurs',
        description: 'Visite fascinante du marché où les mineurs achètent leurs fournitures. Ici vous pouvez acheter des cadeaux authentiques pour les mineurs au travail : feuilles de coca, cigarettes, et DYNAMITE ! Possibilité de faire exploser un bâton sous supervision.'
      },
      {
        day: 1,
        title: 'Cerro Rico (4200m) - Les Mines',
        description: 'Transport privé jusqu\'aux mines du Cerro Rico. IMPORTANT : Ce ne sont PAS des mines touristiques ou modernes - ce sont des mines AUTHENTIQUES où travaillent de vrais mineurs. Vous pouvez choisir entre plusieurs mines : Caracoles (vues spectaculaires sur Potosí + lagunes Kari Kari), Candelaria-Rosario (mine coloniale historique), ou Kunti. Expérience avec d\'anciens mineurs qui connaissent chaque tunnel.'
      }
    ]
  },

  // ============================================
  // POTOSI - MINES + MUSÉE MINIER
  // ============================================
  {
    id: 'potosi-mining-museum',
    destination: 'potosi',
    titleEs: 'Tour Minas + Museo Minero "Ingenío Thuru"',
    titleEn: 'Mines + Mining Museum "Ingenío Thuru" Tour',
    titleFr: 'Tour Mines + Musée Minier "Ingenío Thuru"',
    descriptionEs: 'Combinación perfecta: minas auténticas del Cerro Rico + visita al fascinante Museo Minero con herramientas coloniales, colecciones de minerales y documentos históricos del siglo XIX.',
    descriptionEn: 'Perfect combination: authentic Cerro Rico mines + visit to the fascinating Mining Museum with colonial tools, mineral collections and 19th century historical documents.',
    descriptionFr: 'Combinaison parfaite : mines authentiques du Cerro Rico + visite du fascinant Musée Minier avec outils coloniaux, collections de minéraux et documents historiques du XIXe siècle.',
    days: 1,
    nights: 0,
    image: '/cerro-mines-potosi.jpg',
    schedule: '08:45 y 13:30',
    includesEs: [
      'Transporte privado',
      'Equipo de seguridad completo para la mina',
      'Guía especializado (español/inglés)',
      'Entrada al Museo Minero "Ingenío Thuru"',
      'Visita al Mercado Minero',
      'Acceso a las minas del Cerro Rico'
    ],
    includesEn: [
      'Private transport',
      'Complete safety equipment for the mine',
      'Specialized guide (Spanish/English)',
      'Entrance to Mining Museum "Ingenío Thuru"',
      'Visit to the Mining Market',
      'Access to Cerro Rico mines'
    ],
    includesFr: [
      'Transport privé',
      'Équipement de sécurité complet pour la mine',
      'Guide spécialisé (espagnol/anglais)',
      'Entrée au Musée Minier "Ingenío Thuru"',
      'Visite du Marché Minier',
      'Accès aux mines du Cerro Rico'
    ],
    highlightsEs: [
      '⛏️ Experiencia completa: minas + patrimonio cultural',
      '🏛️ Museo "Ingenío Thuru" en Cantumarca',
      '🔦 Herramientas coloniales y lámparas de carburo',
      '💎 Colecciones de minerales excepcionales',
      '📚 Libros contables del siglo XIX',
      '🎨 Sala Luis Sux con estatuas históricas',
      '⏰ Duración: 3-4 horas'
    ],
    highlightsEn: [
      '⛏️ Complete experience: mines + cultural heritage',
      '🏛️ "Ingenío Thuru" Museum in Cantumarca',
      '🔦 Colonial tools and carbide lamps',
      '💎 Exceptional mineral collections',
      '📚 19th century accounting books',
      '🎨 Luis Sux Hall with historical statues',
      '⏰ Duration: 3-4 hours'
    ],
    highlightsFr: [
      '⛏️ Expérience complète : mines + patrimoine culturel',
      '🏛️ Musée "Ingenío Thuru" à Cantumarca',
      '🔦 Outils coloniaux et lampes à carbure',
      '💎 Collections de minéraux exceptionnelles',
      '📚 Livres comptables du XIXe siècle',
      '🎨 Salle Luis Sux avec statues historiques',
      '⏰ Durée : 3-4 heures'
    ],
    itineraryEs: [
      {
        day: 1,
        title: 'Minas del Cerro Rico',
        description: 'Experiencia completa en las minas auténticas del Cerro Rico. Equipamiento de seguridad, visita al Mercado Minero (dinamita, coca, etc.) y exploración de minas activas con ex-mineros expertos.'
      },
      {
        day: 1,
        title: 'Museo Minero "Ingenío Thuru"',
        description: 'Visita al fascinante museo en Cantumarca. Descubre: herramientas coloniales originales, impresionantes lámparas de carburo, cofres históricos del siglo XVIII, libros de negocios del siglo XIX, colecciones de minerales de toda la región, Sala Luis Sux con estatuas y arte colonial, antiguo molino restaurado, sala de conferencias con exposiciones permanentes.'
      }
    ],
    itineraryEn: [
      {
        day: 1,
        title: 'Cerro Rico Mines',
        description: 'Complete experience in the authentic Cerro Rico mines. Safety equipment, visit to the Mining Market (dynamite, coca, etc.) and exploration of active mines with expert ex-miners.'
      },
      {
        day: 1,
        title: 'Mining Museum "Ingenío Thuru"',
        description: 'Visit to the fascinating museum in Cantumarca. Discover: original colonial tools, impressive carbide lamps, historical chests from the 18th century, 19th century business books, mineral collections from the entire region, Luis Sux Hall with statues and colonial art, restored old mill, conference room with permanent exhibitions.'
      }
    ],
    itineraryFr: [
      {
        day: 1,
        title: 'Mines du Cerro Rico',
        description: 'Expérience complète dans les mines authentiques du Cerro Rico. Équipement de sécurité, visite du Marché Minier (dynamite, coca, etc.) et exploration des mines actives avec d\'anciens mineurs experts.'
      },
      {
        day: 1,
        title: 'Musée Minier "Ingenío Thuru"',
        description: 'Visite du fascinant musée à Cantumarca. Découvrez : outils coloniaux originaux, impressionnantes lampes à carbure, coffres historiques du XVIIIe siècle, livres de commerce du XIXe siècle, collections de minéraux de toute la région, Salle Luis Sux avec statues et art colonial, ancien moulin restauré, salle de conférence avec expositions permanentes.'
      }
    ]
  },

  // ============================================
  // POTOSI - TARAPAYA (LAGUNE VOLCANIQUE)
  // ============================================
  {
    id: 'potosi-tarapaya',
    destination: 'potosi',
    titleEs: 'Tour a Tarapaya - Laguna Volcánica Termal',
    titleEn: 'Tarapaya Tour - Volcanic Thermal Lagoon',
    titleFr: 'Tour Tarapaya - Lagune Volcanique Thermale',
    descriptionEs: 'Relájate en aguas termales naturales calentadas volcánicamente (~50°C). Paisajes espectaculares con cono volcánico, fósiles antiguos y formaciones minerales únicas.',
    descriptionEn: 'Relax in natural hot springs heated volcanically (~50°C). Spectacular landscapes with volcanic cone, ancient fossils and unique mineral formations.',
    descriptionFr: 'Détendez-vous dans des sources thermales naturelles chauffées volcaniquement (~50°C). Paysages spectaculaires avec cône volcanique, fossiles anciens et formations minérales uniques.',
    days: 1,
    nights: 0,
    image: '/thermal.jpeg',
    includesEs: [
      'Transporte ida y vuelta',
      'Entrada a la laguna termal',
      'Refrescos incluidos',
      'Guía especializado',
      'Tiempo libre para relajarse'
    ],
    includesEn: [
      'Round-trip transport',
      'Entrance to the thermal lagoon',
      'Refreshments included',
      'Specialized guide',
      'Free time to relax'
    ],
    includesFr: [
      'Transport aller-retour',
      'Entrée à la lagune thermale',
      'Rafraîchissements inclus',
      'Guide spécialisé',
      'Temps libre pour se détendre'
    ],
    highlightsEs: [
      '♨️ Aguas termales naturales (~50°C)',
      '🌋 Cono volcánico con agua hirviente',
      '🏊 Esponjas termales para relajación',
      '🦴 Paisajes con fósiles antiguos',
      '💎 Formaciones minerales únicas',
      '📸 Entorno natural espectacular',
      '🧘 Experiencia wellness y naturaleza'
    ],
    highlightsEn: [
      '♨️ Natural hot springs (~50°C)',
      '🌋 Volcanic cone with boiling water',
      '🏊 Thermal sponges for relaxation',
      '🦴 Landscapes with ancient fossils',
      '💎 Unique mineral formations',
      '📸 Spectacular natural environment',
      '🧘 Wellness and nature experience'
    ],
    highlightsFr: [
      '♨️ Sources thermales naturelles (~50°C)',
      '🌋 Cône volcanique avec eau bouillante',
      '🏊 Éponges thermales pour la relaxation',
      '🦴 Paysages avec fossiles anciens',
      '💎 Formations minérales uniques',
      '📸 Environnement naturel spectaculaire',
      '🧘 Expérience bien-être et nature'
    ],
    itineraryEs: [
      {
        day: 1,
        title: 'Traslado a Tarapaya',
        description: 'Salida desde Potosí hacia la laguna volcánica de Tarapaya. Disfruta del paisaje andino durante el trayecto.'
      },
      {
        day: 1,
        title: 'Laguna Termal',
        description: 'Tiempo libre para relajarte en las aguas termales naturales calentadas volcánicamente a unos 50°C. Observa el impresionante cono volcánico con agua hirviente en el centro. Explora las formaciones minerales y fósiles antiguos del área.'
      },
      {
        day: 1,
        title: 'Retorno a Potosí',
        description: 'Después de la experiencia termal, regreso relajado a Potosí con refrescos incluidos.'
      }
    ],
    itineraryEn: [
      {
        day: 1,
        title: 'Transfer to Tarapaya',
        description: 'Departure from Potosí to the volcanic lagoon of Tarapaya. Enjoy the Andean landscape during the journey.'
      },
      {
        day: 1,
        title: 'Thermal Lagoon',
        description: 'Free time to relax in the natural hot springs heated volcanically to about 50°C. Observe the impressive volcanic cone with boiling water in the center. Explore the mineral formations and ancient fossils of the area.'
      },
      {
        day: 1,
        title: 'Return to Potosí',
        description: 'After the thermal experience, relaxed return to Potosí with refreshments included.'
      }
    ],
    itineraryFr: [
      {
        day: 1,
        title: 'Transfert à Tarapaya',
        description: 'Départ de Potosí vers la lagune volcanique de Tarapaya. Profitez du paysage andin pendant le trajet.'
      },
      {
        day: 1,
        title: 'Lagune Thermale',
        description: 'Temps libre pour vous détendre dans les sources thermales naturelles chauffées volcaniquement à environ 50°C. Observez l\'impressionnant cône volcanique avec eau bouillante au centre. Explorez les formations minérales et fossiles anciens de la zone.'
      },
      {
        day: 1,
        title: 'Retour à Potosí',
        description: 'Après l\'expérience thermale, retour détendu à Potosí avec rafraîchissements inclus.'
      }
    ]
  },

  // ============================================
  // POTOSI - CITY TOUR (4 CIRCUITS)
  // ============================================
  {
    id: 'potosi-city-tour',
    destination: 'potosi',
    titleEs: 'City Tour de Potosí - Patrimonio Colonial',
    titleEn: 'Potosí City Tour - Colonial Heritage',
    titleFr: 'City Tour de Potosí - Patrimoine Colonial',
    descriptionEs: '4 circuitos diferentes para descubrir el extraordinario patrimonio colonial de Potosí, declarada Patrimonio de la Humanidad por UNESCO. Iglesias barrocas, conventos históricos, casas coloniales y la famosa Casa de la Moneda.',
    descriptionEn: '4 different circuits to discover the extraordinary colonial heritage of Potosí, declared a UNESCO World Heritage Site. Baroque churches, historic convents, colonial houses and the famous Casa de la Moneda.',
    descriptionFr: '4 circuits différents pour découvrir l\'extraordinaire patrimoine colonial de Potosí, déclarée Site du Patrimoine Mondial de l\'UNESCO. Églises baroques, couvents historiques, maisons coloniales et la célèbre Casa de la Moneda.',
    days: 1,
    nights: 0,
    image: '/citytour-potosi.jpg',
    includesEs: [
      'Guía especializado en historia colonial',
      'Entradas a monumentos seleccionados',
      'Elección entre 4 circuitos diferentes',
      'Recorrido a pie por el centro histórico',
      'Explicaciones detalladas de cada sitio'
    ],
    includesEn: [
      'Specialized guide in colonial history',
      'Entrance fees to selected monuments',
      'Choice between 4 different circuits',
      'Walking tour through the historic center',
      'Detailed explanations of each site'
    ],
    includesFr: [
      'Guide spécialisé en histoire coloniale',
      'Entrées aux monuments sélectionnés',
      'Choix entre 4 circuits différents',
      'Visite à pied du centre historique',
      'Explications détaillées de chaque site'
    ],
    highlightsEs: [
      '🏛️ Casa de la Moneda - Tesoro colonial',
      '⛪ Iglesias barrocas del siglo XVII',
      '🏰 Conventos históricos (Santa Teresa, Santa Mónica, San Francisco)',
      '🎨 Arte y arquitectura colonial',
      '📜 4 circuitos temáticos diferentes',
      '🌆 Centro histórico UNESCO',
      '🏛️ Balcones coloniales icónicos'
    ],
    highlightsEn: [
      '🏛️ Casa de la Moneda - Colonial treasure',
      '⛪ 17th century baroque churches',
      '🏰 Historic convents (Santa Teresa, Santa Mónica, San Francisco)',
      '🎨 Colonial art and architecture',
      '📜 4 different thematic circuits',
      '🌆 UNESCO historic center',
      '🏛️ Iconic colonial balconies'
    ],
    highlightsFr: [
      '🏛️ Casa de la Moneda - Trésor colonial',
      '⛪ Églises baroques du XVIIe siècle',
      '🏰 Couvents historiques (Santa Teresa, Santa Mónica, San Francisco)',
      '🎨 Art et architecture coloniale',
      '📜 4 circuits thématiques différents',
      '🌆 Centre historique UNESCO',
      '🏛️ Balcons coloniaux emblématiques'
    ],
    itineraryEs: [
      {
        day: 1,
        title: 'Circuito 1 - Ruta del Oro y la Plata',
        description: 'Plaza 10 de Noviembre • Casa de la Moneda (imperdible tesoro colonial) • Torre de la Compañía • Convento Santa Teresa • Arco de Cobija • Arco de Mejillones • Iglesia Santa Bárbara • Iglesia San Benito • Ingenio Dolores • Iglesia Santo Domingo • Balcón del Ahorcado • Convento Santa Mónica • Casa del Sol (1791)'
      },
      {
        day: 1,
        title: 'Circuito 2 - Ruta de los Conventos',
        description: 'Catedral de Potosí • San Agustín • San Lorenzo (portada barroca famosa) • San Bernardo • Jerusalén • Balcón colonial • Mercado Artesanal • Teatro Modesto Omiste • Convento San Francisco (arquitectura impresionante)'
      },
      {
        day: 1,
        title: 'Circuito 3 - Ruta de las Casas Coloniales',
        description: 'Plaza 6 de Agosto • Catedral • Casa Antonio López Quiroga • Casa Condes de Carma • Balcón de la Esquina • Iglesia San Bernardo • Iglesia Jerusalén • Portada de los Leones • Iglesia San Juan de Dios • Iglesia de la Merced • Iglesia San Martín'
      },
      {
        day: 1,
        title: 'Circuito 4 - Ruta de los Ingenios',
        description: 'Plaza Principal • Iglesia Santo Domingo • Ingenio Dolores (molino colonial) • Iglesia Copacabana • Iglesia San Pedro • Iglesia San Sebastián • Ingenio San Marcos • Iglesia la Concepción • Iglesia San Juan Bautista • Iglesia San Martín • Iglesia la Merced'
      }
    ],
    itineraryEn: [
      {
        day: 1,
        title: 'Circuit 1 - Gold and Silver Route',
        description: 'Plaza 10 de Noviembre • Casa de la Moneda (unmissable colonial treasure) • Torre de la Compañía • Convento Santa Teresa • Arco de Cobija • Arco de Mejillones • Iglesia Santa Bárbara • Iglesia San Benito • Ingenio Dolores • Iglesia Santo Domingo • Balcón del Ahorcado • Convento Santa Mónica • Casa del Sol (1791)'
      },
      {
        day: 1,
        title: 'Circuit 2 - Convents Route',
        description: 'Potosí Cathedral • San Agustín • San Lorenzo (famous baroque façade) • San Bernardo • Jerusalén • Colonial balcony • Artisan Market • Modesto Omiste Theatre • Convento San Francisco (impressive architecture)'
      },
      {
        day: 1,
        title: 'Circuit 3 - Colonial Houses Route',
        description: 'Plaza 6 de Agosto • Cathedral • Antonio López Quiroga House • Condes de Carma House • Balcón de la Esquina • Iglesia San Bernardo • Iglesia Jerusalén • Portada de los Leones • Iglesia San Juan de Dios • Iglesia de la Merced • Iglesia San Martín'
      },
      {
        day: 1,
        title: 'Circuit 4 - Mills Route',
        description: 'Main Plaza • Iglesia Santo Domingo • Ingenio Dolores (colonial mill) • Iglesia Copacabana • Iglesia San Pedro • Iglesia San Sebastián • Ingenio San Marcos • Iglesia la Concepción • Iglesia San Juan Bautista • Iglesia San Martín • Iglesia la Merced'
      }
    ],
    itineraryFr: [
      {
        day: 1,
        title: 'Circuit 1 - Route de l\'Or et de l\'Argent',
        description: 'Plaza 10 de Noviembre • Casa de la Moneda (trésor colonial incontournable) • Torre de la Compañía • Convento Santa Teresa • Arco de Cobija • Arco de Mejillones • Iglesia Santa Bárbara • Iglesia San Benito • Ingenio Dolores • Iglesia Santo Domingo • Balcón del Ahorcado • Convento Santa Mónica • Casa del Sol (1791)'
      },
      {
        day: 1,
        title: 'Circuit 2 - Route des Couvents',
        description: 'Cathédrale de Potosí • San Agustín • San Lorenzo (façade baroque célèbre) • San Bernardo • Jerusalén • Balcon colonial • Marché Artisanal • Théâtre Modesto Omiste • Convento San Francisco (architecture impressionnante)'
      },
      {
        day: 1,
        title: 'Circuit 3 - Route des Maisons Coloniales',
        description: 'Plaza 6 de Agosto • Cathédrale • Maison Antonio López Quiroga • Maison Condes de Carma • Balcón de la Esquina • Iglesia San Bernardo • Iglesia Jerusalén • Portada de los Leones • Iglesia San Juan de Dios • Iglesia de la Merced • Iglesia San Martín'
      },
      {
        day: 1,
        title: 'Circuit 4 - Route des Moulins',
        description: 'Place Principale • Iglesia Santo Domingo • Ingenio Dolores (moulin colonial) • Iglesia Copacabana • Iglesia San Pedro • Iglesia San Sebastián • Ingenio San Marcos • Iglesia la Concepción • Iglesia San Juan Bautista • Iglesia San Martín • Iglesia la Merced'
      }
    ]
  },

  // ============================================
  // POTOSI - EXCURSION 4-5 JOURS UYUNI
  // ============================================
  {
    id: 'potosi-uyuni-expedition',
    destination: 'potosi',
    titleEs: 'Expedición 4-5 Días: Potosí - Uyuni - Lagunas Coloradas',
    titleEn: '4-5 Days Expedition: Potosí - Uyuni - Colored Lagoons',
    titleFr: 'Expédition 4-5 Jours : Potosí - Uyuni - Lagunes Colorées',
    descriptionEs: 'Aventura completa desde Potosí al Salar de Uyuni, Laguna Colorada, Laguna Verde, géiseres y paisajes surrealistas del altiplano boliviano. Incluye todo: transporte 4x4, alojamiento, comidas, guía y cocinero.',
    descriptionEn: 'Complete adventure from Potosí to Salar de Uyuni, Laguna Colorada, Laguna Verde, geysers and surreal landscapes of the Bolivian highlands. Everything included: 4x4 transport, accommodation, meals, guide and cook.',
    descriptionFr: 'Aventure complète de Potosí au Salar d\'Uyuni, Laguna Colorada, Laguna Verde, geysers et paysages surréalistes des hauts plateaux boliviens. Tout inclus : transport 4x4, hébergement, repas, guide et cuisinier.',
    days: 5,
    nights: 4,
    image: '/TourUyiniPotosi.jpg',
    includesEs: [
      'Transporte 4x4 privado (máximo 6 personas)',
      'Chofer experimentado',
      'Guía especializado',
      'Cocinero profesional',
      'Todas las comidas (desayuno, almuerzo, cena)',
      'Alojamiento todas las noches',
      'Todas las entradas a parques y reservas'
    ],
    includesEn: [
      'Private 4x4 transport (maximum 6 people)',
      'Experienced driver',
      'Specialized guide',
      'Professional cook',
      'All meals (breakfast, lunch, dinner)',
      'Accommodation all nights',
      'All park and reserve entrance fees'
    ],
    includesFr: [
      'Transport 4x4 privé (maximum 6 personnes)',
      'Chauffeur expérimenté',
      'Guide spécialisé',
      'Cuisinier professionnel',
      'Tous les repas (petit-déjeuner, déjeuner, dîner)',
      'Hébergement toutes les nuits',
      'Toutes les entrées aux parcs et réserves'
    ],
    highlightsEs: [
      '🏔️ Minas de Porco y Pulacayo (ruta minera histórica)',
      '🌊 Salar de Uyuni - Desierto de sal más grande del mundo',
      '🏝️ Isla del Pescado - Cactus gigantes milenarios',
      '🦩 Lagunas Colorada, Verde, Cañapa, Hedionda - Flamencos',
      '🌋 Géiseres Sol de Mañana (5000m)',
      '♨️ Aguas termales naturales',
      '🏔️ Volcán Licancabur (vista desde Laguna Verde)',
      '🏨 Hôtel de sel + alojamientos locales'
    ],
    highlightsEn: [
      '🏔️ Porco and Pulacayo mines (historic mining route)',
      '🌊 Salar de Uyuni - World\'s largest salt desert',
      '🏝️ Isla del Pescado - Millenary giant cacti',
      '🦩 Laguna Colorada, Verde, Cañapa, Hedionda - Flamingos',
      '🌋 Sol de Mañana Geysers (5000m)',
      '♨️ Natural hot springs',
      '🏔️ Licancabur Volcano (view from Laguna Verde)',
      '🏨 Salt hotel + local accommodations'
    ],
    highlightsFr: [
      '🏔️ Mines de Porco et Pulacayo (route minière historique)',
      '🌊 Salar d\'Uyuni - Plus grand désert de sel du monde',
      '🏝️ Isla del Pescado - Cactus géants millénaires',
      '🦩 Laguna Colorada, Verde, Cañapa, Hedionda - Flamants',
      '🌋 Geysers Sol de Mañana (5000m)',
      '♨️ Sources thermales naturelles',
      '🏔️ Volcan Licancabur (vue depuis Laguna Verde)',
      '🏨 Hôtel de sel + hébergements locaux'
    ],
    itineraryEs: [
      {
        day: 1,
        title: 'Día 1: Potosí → Uyuni',
        description: 'Salida temprano de Potosí. Visita a las históricas Minas de Porco. Cruce del río San Juan. Exploración de las Minas de Pulacayo (antigua mina de plata). Llegada a la ciudad de Uyuni. Noche en Uyuni.'
      },
      {
        day: 2,
        title: 'Día 2: Salar de Uyuni',
        description: 'Exploración completa del Salar de Uyuni. Visita a Colchani (casas de sal, artesanía local, proceso de extracción). Hotel de Sal (arquitectura única). Isla del Pescado con sus cactus gigantes milenarios. San Juan (cultivos de quinoa, avistamiento de llamas). Noche en alojamiento local.'
      },
      {
        day: 3,
        title: 'Día 3: Lagunas Coloradas',
        description: 'Ruta hacia el sur del altiplano. Laguna Seca. Laguna Cañapa (flamencos). Laguna Hedionda (paisajes surrealistas). Llegada a la impresionante Laguna Colorada (roja por microorganismos). Avistamiento de tres especies de flamencos. Noche en refugio cerca de la laguna.'
      },
      {
        day: 4,
        title: 'Día 4: Géiseres y Laguna Verde',
        description: 'Salida antes del amanecer hacia los Géiseres Sol de Mañana (5000m) - actividad volcánica impresionante. Salar de Chalviri. Baño opcional en aguas termales naturales. Laguna Verde (color esmeralda espectacular) al pie del Volcán Licancabur (5960m). Tarde libre para fotografía. Noche en alojamiento local.'
      },
      {
        day: 5,
        title: 'Día 5: Retorno',
        description: 'Ruta de regreso: Alota → Villa Mar → Uyuni. Tiempo para últimas fotos del Salar. Llegada a Uyuni. Traslado a Potosí. Fin de la expedición.'
      }
    ],
    itineraryEn: [
      {
        day: 1,
        title: 'Day 1: Potosí → Uyuni',
        description: 'Early departure from Potosí. Visit to the historic Porco Mines. Crossing of San Juan River. Exploration of Pulacayo Mines (old silver mine). Arrival in Uyuni city. Night in Uyuni.'
      },
      {
        day: 2,
        title: 'Day 2: Salar de Uyuni',
        description: 'Complete exploration of Salar de Uyuni. Visit to Colchani (salt houses, local crafts, extraction process). Salt Hotel (unique architecture). Isla del Pescado with its millenary giant cacti. San Juan (quinoa crops, llama spotting). Night in local accommodation.'
      },
      {
        day: 3,
        title: 'Day 3: Colored Lagoons',
        description: 'Route to the south of the highlands. Laguna Seca. Laguna Cañapa (flamingos). Laguna Hedionda (surreal landscapes). Arrival at the impressive Laguna Colorada (red from microorganisms). Spotting three species of flamingos. Night in refuge near the lagoon.'
      },
      {
        day: 4,
        title: 'Day 4: Geysers and Laguna Verde',
        description: 'Departure before dawn to Sol de Mañana Geysers (5000m) - impressive volcanic activity. Salar de Chalviri. Optional bath in natural hot springs. Laguna Verde (spectacular emerald color) at the foot of Licancabur Volcano (5960m). Free afternoon for photography. Night in local accommodation.'
      },
      {
        day: 5,
        title: 'Day 5: Return',
        description: 'Return route: Alota → Villa Mar → Uyuni. Time for last Salar photos. Arrival in Uyuni. Transfer to Potosí. End of expedition.'
      }
    ],
    itineraryFr: [
      {
        day: 1,
        title: 'Jour 1 : Potosí → Uyuni',
        description: 'Départ tôt de Potosí. Visite des Mines historiques de Porco. Traversée du fleuve San Juan. Exploration des Mines de Pulacayo (ancienne mine d\'argent). Arrivée à la ville d\'Uyuni. Nuit à Uyuni.'
      },
      {
        day: 2,
        title: 'Jour 2 : Salar d\'Uyuni',
        description: 'Exploration complète du Salar d\'Uyuni. Visite de Colchani (maisons de sel, artisanat local, processus d\'extraction). Hôtel de Sel (architecture unique). Isla del Pescado avec ses cactus géants millénaires. San Juan (cultures de quinoa, observation de lamas). Nuit en hébergement local.'
      },
      {
        day: 3,
        title: 'Jour 3 : Lagunes Colorées',
        description: 'Route vers le sud des hauts plateaux. Laguna Seca. Laguna Cañapa (flamants). Laguna Hedionda (paysages surréalistes). Arrivée à l\'impressionnante Laguna Colorada (rouge par micro-organismes). Observation de trois espèces de flamants. Nuit en refuge près de la lagune.'
      },
      {
        day: 4,
        title: 'Jour 4 : Geysers et Laguna Verde',
        description: 'Départ avant l\'aube vers les Geysers Sol de Mañana (5000m) - activité volcanique impressionnante. Salar de Chalviri. Bain optionnel dans sources thermales naturelles. Laguna Verde (couleur émeraude spectaculaire) au pied du Volcan Licancabur (5960m). Après-midi libre pour photographie. Nuit en hébergement local.'
      },
      {
        day: 5,
        title: 'Jour 5 : Retour',
        description: 'Route de retour : Alota → Villa Mar → Uyuni. Temps pour dernières photos du Salar. Arrivée à Uyuni. Transfert à Potosí. Fin de l\'expédition.'
      }
    ]
  },

  // ============================================
  // POTOSI - AVENTURE SUR MESURE
  // ============================================
  {
    id: 'potosi-custom',
    destination: 'potosi',
    titleEs: 'Aventura Histórica y Andina a Medida',
    titleEn: 'Custom Historic and Andean Adventure',
    titleFr: 'Aventure Historique et Andine Sur Mesure',
    descriptionEs: 'Diseñamos tu inmersión total en Potosí y sus alrededores. Perfecto para explorar rutas coloniales y andinas específicas, visitar lagunas, o enfocarse en el patrimoine minero en profundidad. 100% flexible.',
    descriptionEn: 'We design your total immersion in Potosí and its surroundings. Perfect for exploring specific colonial and Andean routes, visiting lagoons, or focusing on mining heritage in depth. 100% flexible.',
    descriptionFr: 'Nous concevons votre immersion totale à Potosí et ses environs. Parfait pour explorer des routes coloniales et andines spécifiques, visiter des lagunes, ou se concentrer sur le patrimoine minier en profondeur. 100% flexible.',
    days: 2,
    nights: 1,
    image: '/koalaPotosi.jpeg',
    includesEs: [
      'Guía privado especializado (trilingüe)',
      'Transporte privado según necesidad',
      'Alojamiento en hoteles seleccionados',
      'Comidas según el itinerario',
      'Itinerario 100% flexible y personalizado',
      'Entradas a todos los sitios',
      'Consulta previa para diseñar tu aventura'
    ],
    includesEn: [
      'Specialized private guide (trilingual)',
      'Private transport as needed',
      'Accommodation in selected hotels',
      'Meals according to itinerary',
      '100% flexible and personalized itinerary',
      'Entrance fees to all sites',
      'Prior consultation to design your adventure'
    ],
    includesFr: [
      'Guide privé spécialisé (trilingue)',
      'Transport privé selon besoin',
      'Hébergement en hôtels sélectionnés',
      'Repas selon l\'itinéraire',
      'Itinéraire 100% flexible et personnalisé',
      'Entrées à tous les sites',
      'Consultation préalable pour concevoir votre aventure'
    ],
    highlightsEs: [
      '🎨 Itinerario 100% diseñado según tus intereses',
      '🏛️ Profundización en patrimonio minero o colonial',
      '🏔️ Rutas andinas poco exploradas',
      '🌊 Lagunas de altura (Kari Kari, Tarapaya, otras)',
      '📸 Enfoque en fotografía o cultura según prefieras',
      '⏰ Sin prisas - a tu ritmo',
      '👥 Experiencia privada y personalizada'
    ],
    highlightsEn: [
      '🎨 100% itinerary designed according to your interests',
      '🏛️ Deep dive into mining or colonial heritage',
      '🏔️ Little-explored Andean routes',
      '🌊 High-altitude lagoons (Kari Kari, Tarapaya, others)',
      '📸 Focus on photography or culture as you prefer',
      '⏰ No rush - at your pace',
      '👥 Private and personalized experience'
    ],
    highlightsFr: [
      '🎨 Itinéraire 100% conçu selon vos intérêts',
      '🏛️ Plongée profonde dans le patrimoine minier ou colonial',
      '🏔️ Routes andines peu explorées',
      '🌊 Lagunes d\'altitude (Kari Kari, Tarapaya, autres)',
      '📸 Focus sur la photographie ou la culture selon vos préférences',
      '⏰ Sans hâte - à votre rythme',
      '👥 Expérience privée et personnalisée'
    ],
    itineraryEs: [
      {
        day: 1,
        title: 'Consulta y Diseño Personalizado',
        description: 'Este tour es completamente flexible. Trabajamos contigo para crear el itinerario perfecto según tus intereses: ¿Casa de la Moneda en profundidad? ¿Lagunas andinas como Kari Kari? ¿Sitios coloniales menos conocidos? ¿Combinación de patrimonio minero y cultural? ¿Fotografía de paisajes? Diseñamos juntos cada detalle: duración, ritmo, enfoque temático, nivel de actividad física, presupuesto.'
      },
      {
        day: 2,
        title: 'Tu Aventura Única',
        description: 'Nuestro guía experto gestiona toda la logística: transportes privados, entradas, horarios flexibles, reservas en hoteles o refugios seleccionados. Experiencia auténtica y fluida, completamente ajustada a las aventuras que elegiste. Ejemplos posibles: exploración profunda del Cerro Rico y su historia, ruta colonial por iglesias y conventos ocultos, excursión a lagunas de altura con paisajes espectaculares, combinación de cultura y naturaleza a tu medida.'
      }
    ],
    itineraryEn: [
      {
        day: 1,
        title: 'Consultation and Personalized Design',
        description: 'This tour is completely flexible. We work with you to create the perfect itinerary according to your interests: In-depth Casa de la Moneda? Andean lagoons like Kari Kari? Lesser-known colonial sites? Combination of mining and cultural heritage? Landscape photography? We design together every detail: duration, pace, thematic focus, physical activity level, budget.'
      },
      {
        day: 2,
        title: 'Your Unique Adventure',
        description: 'Our expert guide handles all logistics: private transport, entrance fees, flexible schedules, reservations at selected hotels or refuges. Authentic and smooth experience, completely tailored to the adventures you chose. Possible examples: deep exploration of Cerro Rico and its history, colonial route through hidden churches and convents, excursion to high-altitude lagoons with spectacular landscapes, combination of culture and nature tailored to you.'
      }
    ],
    itineraryFr: [
      {
        day: 1,
        title: 'Consultation et Conception Personnalisée',
        description: 'Ce tour est totalement flexible. Nous travaillons avec vous pour créer l\'itinéraire parfait selon vos intérêts : Casa de la Moneda en profondeur ? Lagunes andines comme Kari Kari ? Sites coloniaux moins connus ? Combinaison de patrimoine minier et culturel ? Photographie de paysages ? Nous concevons ensemble chaque détail : durée, rythme, focus thématique, niveau d\'activité physique, budget.'
      },
      {
        day: 2,
        title: 'Votre Aventure Unique',
        description: 'Notre guide expert gère toute la logistique : transports privés, entrées, horaires flexibles, réservations dans hôtels ou refuges sélectionnés. Expérience authentique et fluide, entièrement adaptée aux aventures que vous avez choisies. Exemples possibles : exploration profonde du Cerro Rico et son histoire, route coloniale par églises et couvents cachés, excursion vers lagunes d\'altitude avec paysages spectaculaires, combinaison de culture et nature sur mesure.'
      }
    ]
  },

  // ============================================
  // POTOSI - ORO DEL INCA TOUR
  // ============================================
  {
    id: 'potosi-oro-del-inca',
    destination: 'potosi',
    titleEs: 'Tour Oro del Inca - Circuito Completo',
    titleEn: 'Oro del Inca Tour - Complete Circuit',
    titleFr: 'Tour Oro del Inca - Circuit Complet',
    descriptionEs: 'Recorrido completo por los tesoros históricos y naturales de Potosí. Desde conventos coloniales hasta lagunas termales, este tour combina patrimonio cultural, historia minera y belleza natural en un día inolvidable.',
    descriptionEn: 'Complete tour of Potosí\'s historical and natural treasures. From colonial convents to thermal lagoons, this tour combines cultural heritage, mining history and natural beauty in an unforgettable day.',
    descriptionFr: 'Circuit complet des trésors historiques et naturels de Potosí. Des couvents coloniaux aux lagunes thermales, ce tour combine patrimoine culturel, histoire minière et beauté naturelle en une journée inoubliable.',
    days: 1,
    nights: 0,
    image: '/santatheresa.avif',
    schedule: '09:00',
    includesEs: [
      'Transporte durante todo el recorrido',
      'Guía especializado',
      'Entradas a todos los sitios',
      'Visita a conventos coloniales',
      'Exploración de ingenios mineros',
      'Acceso a lagunas termales'
    ],
    includesEn: [
      'Transport throughout the tour',
      'Specialized guide',
      'Entrance fees to all sites',
      'Visit to colonial convents',
      'Exploration of mining mills',
      'Access to thermal lagoons'
    ],
    includesFr: [
      'Transport pendant tout le circuit',
      'Guide spécialisé',
      'Entrées à tous les sites',
      'Visite de couvents coloniaux',
      'Exploration de moulins miniers',
      'Accès aux lagunes thermales'
    ],
    highlightsEs: [
      '⛪ Santa Teresa - Convento colonial del siglo XVII',
      '🏛️ Arcos de Cobija y Mejillones - Entradas históricas',
      '⚙️ Ingenios Mineros - Procesos de extracción',
      '🏘️ Cantumarca - Primera población indígena',
      '🕳️ La Puerta - Cueva del Diablo',
      '🏭 El Molino - Belleza arquitectónica',
      '♨️ Tarapaya - Aguas termales',
      '🌊 Laguna del Inca - Aguas termales naturales'
    ],
    highlightsEn: [
      '⛪ Santa Teresa - 17th century colonial convent',
      '🏛️ Cobija and Mejillones Arches - Historic entrances',
      '⚙️ Mining Mills - Extraction processes',
      '🏘️ Cantumarca - First indigenous settlement',
      '🕳️ La Puerta - Devil\'s Cave',
      '🏭 El Molino - Architectural beauty',
      '♨️ Tarapaya - Hot springs',
      '🌊 Laguna del Inca - Natural thermal waters'
    ],
    highlightsFr: [
      '⛪ Santa Teresa - Couvent colonial du XVIIe siècle',
      '🏛️ Arcs de Cobija et Mejillones - Entrées historiques',
      '⚙️ Moulins Miniers - Processus d\'extraction',
      '🏘️ Cantumarca - Première colonie indigène',
      '🕳️ La Puerta - Grotte du Diable',
      '🏭 El Molino - Beauté architecturale',
      '♨️ Tarapaya - Sources thermales',
      '🌊 Laguna del Inca - Eaux thermales naturelles'
    ],
    itineraryEs: [
      {
        day: 1,
        title: '09:00 - Inicio del Tour',
        description: 'Salida desde la oficina de Koala Tours. Primera parada en el Convento Santa Teresa, joya colonial del siglo XVII que aún alberga monjas de clausura. Arquitectura impresionante y arte sacro.'
      },
      {
        day: 1,
        title: 'Arcos Históricos e Ingenios',
        description: 'Visita a los Arcos de Cobija y Mejillones, antiguas entradas a la ciudad. Exploración de Ingenios Mineros para comprender los procesos históricos de extracción y procesamiento de minerales.'
      },
      {
        day: 1,
        title: 'Cantumarca y La Puerta',
        description: 'Recorrido por Cantumarca, donde habitó la primera población indígena de la zona. Visita a "La Puerta" para explorar la misteriosa cueva del diablo, llena de leyendas locales.'
      },
      {
        day: 1,
        title: 'El Molino y Aguas Termales',
        description: 'Observación de la belleza arquitectónica de El Molino. Finalización del tour en Tarapaya y Laguna del Inca, donde podrás relajarte en las aguas termales naturales (~50°C) y disfrutar del entorno volcánico único.'
      }
    ],
    itineraryEn: [
      {
        day: 1,
        title: '09:00 - Tour Start',
        description: 'Departure from Koala Tours office. First stop at Santa Teresa Convent, a 17th-century colonial jewel that still houses cloistered nuns. Impressive architecture and sacred art.'
      },
      {
        day: 1,
        title: 'Historic Arches and Mills',
        description: 'Visit to the Cobija and Mejillones Arches, ancient city entrances. Exploration of Mining Mills to understand the historical processes of mineral extraction and processing.'
      },
      {
        day: 1,
        title: 'Cantumarca and La Puerta',
        description: 'Tour through Cantumarca, where the first indigenous population of the area lived. Visit to "La Puerta" to explore the mysterious devil\'s cave, full of local legends.'
      },
      {
        day: 1,
        title: 'El Molino and Hot Springs',
        description: 'Observation of the architectural beauty of El Molino. Tour concludes at Tarapaya and Laguna del Inca, where you can relax in natural hot springs (~50°C) and enjoy the unique volcanic environment.'
      }
    ],
    itineraryFr: [
      {
        day: 1,
        title: '09:00 - Début du Tour',
        description: 'Départ du bureau de Koala Tours. Premier arrêt au Couvent Santa Teresa, joyau colonial du XVIIe siècle qui abrite encore des religieuses cloîtrées. Architecture impressionnante et art sacré.'
      },
      {
        day: 1,
        title: 'Arcs Historiques et Moulins',
        description: 'Visite des Arcs de Cobija et Mejillones, anciennes entrées de la ville. Exploration des Moulins Miniers pour comprendre les processus historiques d\'extraction et de traitement des minéraux.'
      },
      {
        day: 1,
        title: 'Cantumarca et La Puerta',
        description: 'Circuit à travers Cantumarca, où vivait la première population indigène de la zone. Visite de "La Puerta" pour explorer la mystérieuse grotte du diable, pleine de légendes locales.'
      },
      {
        day: 1,
        title: 'El Molino et Sources Thermales',
        description: 'Observation de la beauté architecturale d\'El Molino. Fin du tour à Tarapaya et Laguna del Inca, où vous pourrez vous détendre dans les sources thermales naturelles (~50°C) et profiter de l\'environnement volcanique unique.'
      }
    ]
  },

  // ============================================
  // POTOSI - FREE WALKING TOUR
  // ============================================
  {
    id: 'potosi-free-walking',
    destination: 'potosi',
    titleEs: 'Free Walking Tour - Centro Histórico',
    titleEn: 'Free Walking Tour - Historic Center',
    titleFr: 'Free Walking Tour - Centre Historique',
    descriptionEs: 'Tour a pie GRATUITO por el centro histórico de Potosí. Descubre los lugares más emblemáticos de la "Villa Imperial", su cultura, historia y arquitectura colonial. Duración aproximada: 2 horas. ¡Propina voluntaria según tu experiencia!',
    descriptionEn: 'FREE walking tour through Potosí\'s historic center. Discover the most emblematic places of the "Imperial Villa", its culture, history and colonial architecture. Approximate duration: 2 hours. Voluntary tip based on your experience!',
    descriptionFr: 'Tour à pied GRATUIT dans le centre historique de Potosí. Découvrez les lieux les plus emblématiques de la "Villa Impériale", sa culture, son histoire et son architecture coloniale. Durée approximative : 2 heures. Pourboire volontaire selon votre expérience !',
    days: 1,
    nights: 0,
    image: '/WalkingTour.jpg',
    schedule: '09:00 y 14:00',
    price: 0,
    includesEs: [
      'Guía local experto (español/inglés)',
      'Recorrido a pie de 2 horas',
      'Visita a 9 puntos emblemáticos',
      'Historias y anécdotas locales',
      'Recomendaciones de gastronomía local',
      'Sistema de propina voluntaria'
    ],
    includesEn: [
      'Expert local guide (Spanish/English)',
      '2-hour walking tour',
      'Visit to 9 emblematic points',
      'Local stories and anecdotes',
      'Local gastronomy recommendations',
      'Voluntary tip system'
    ],
    includesFr: [
      'Guide local expert (espagnol/anglais)',
      'Visite à pied de 2 heures',
      'Visite de 9 points emblématiques',
      'Histoires et anecdotes locales',
      'Recommandations gastronomiques locales',
      'Système de pourboire volontaire'
    ],
    highlightsEs: [
      '🏛️ Gobernación (Cabildo) - Poder administrativo',
      '🏛️ Alcaldía (Cajas Reales) - Edificio histórico',
      '💰 Primera Casa de la Moneda - Origen de la riqueza',
      '⛪ Basílica Catedral - Joya arquitectónica',
      '🌉 Arco de Cobija - Entrada histórica',
      '⛪ Convento Santa Teresa - Clausura activa',
      '🛍️ Mercado K\'hoas - Artesanía local',
      '🍦 Helados Artesanales - Sabores únicos',
      '🥟 Salteñas - Gastronomía potosina'
    ],
    highlightsEn: [
      '🏛️ Government Building (Cabildo) - Administrative power',
      '🏛️ City Hall (Cajas Reales) - Historic building',
      '💰 First Mint House - Origin of wealth',
      '⛪ Cathedral Basilica - Architectural jewel',
      '🌉 Cobija Arch - Historic entrance',
      '⛪ Santa Teresa Convent - Active cloister',
      '🛍️ K\'hoas Market - Local crafts',
      '🍦 Artisan Ice Cream - Unique flavors',
      '🥟 Salteñas - Potosí cuisine'
    ],
    highlightsFr: [
      '🏛️ Gouvernement (Cabildo) - Pouvoir administratif',
      '🏛️ Mairie (Cajas Reales) - Bâtiment historique',
      '💰 Première Maison de la Monnaie - Origine de la richesse',
      '⛪ Basilique Cathédrale - Joyau architectural',
      '🌉 Arc de Cobija - Entrée historique',
      '⛪ Couvent Santa Teresa - Cloître actif',
      '🛍️ Marché K\'hoas - Artisanat local',
      '🍦 Glaces Artisanales - Saveurs uniques',
      '🥟 Salteñas - Gastronomie de Potosí'
    ],
    itineraryEs: [
      {
        day: 1,
        title: '09:00 / 14:00 - Punto de Encuentro',
        description: 'Encuentro en la Plaza Principal. Introducción a la historia de Potosí, conocida como "Villa Imperial", y su importancia durante la época colonial como fuente principal de plata del Imperio Español.'
      },
      {
        day: 1,
        title: 'Circuito Histórico Colonial',
        description: 'Recorrido por: Gobernación (Cabildo) - centro de poder administrativo. Alcaldía en las antiguas Cajas Reales. Primera Casa de la Moneda - donde nació la riqueza potosina. Basílica Catedral - impresionante arquitectura religiosa. Arco de Cobija - entrada histórica a la ciudad.'
      },
      {
        day: 1,
        title: 'Patrimonio Religioso y Cultural',
        description: 'Visita al Convento Santa Teresa, uno de los conventos de clausura más antiguos y todavía activos. Explicación sobre la vida monástica y la arquitectura colonial religiosa. Paso por el Mercado Artesanal K\'hoas para conocer el arte local.'
      },
      {
        day: 1,
        title: 'Experiencia Gastronómica',
        description: 'Degustación opcional de Helados Artesanales con sabores únicos de la región. Introducción a las famosas Salteñas potosinas. El guía comparte las mejores recomendaciones locales. Tour finaliza con tiempo para preguntas. Propina voluntaria según tu experiencia (precio sugerido: lo que consideres justo).'
      }
    ],
    itineraryEn: [
      {
        day: 1,
        title: '09:00 / 14:00 - Meeting Point',
        description: 'Meeting at the Main Plaza. Introduction to Potosí\'s history, known as "Imperial Villa", and its importance during colonial times as the main source of silver for the Spanish Empire.'
      },
      {
        day: 1,
        title: 'Colonial Historic Circuit',
        description: 'Tour through: Government Building (Cabildo) - center of administrative power. City Hall in the old Royal Treasury. First Mint House - where Potosí\'s wealth was born. Cathedral Basilica - impressive religious architecture. Cobija Arch - historic city entrance.'
      },
      {
        day: 1,
        title: 'Religious and Cultural Heritage',
        description: 'Visit to Santa Teresa Convent, one of the oldest and still active cloistered convents. Explanation about monastic life and colonial religious architecture. Pass by the K\'hoas Artisan Market to discover local art.'
      },
      {
        day: 1,
        title: 'Gastronomic Experience',
        description: 'Optional tasting of Artisan Ice Cream with unique regional flavors. Introduction to the famous Potosí Salteñas. Guide shares the best local recommendations. Tour ends with time for questions. Voluntary tip based on your experience (suggested price: what you consider fair).'
      }
    ],
    itineraryFr: [
      {
        day: 1,
        title: '09:00 / 14:00 - Point de Rencontre',
        description: 'Rencontre à la Place Principale. Introduction à l\'histoire de Potosí, connue comme "Villa Impériale", et son importance pendant l\'époque coloniale comme source principale d\'argent de l\'Empire Espagnol.'
      },
      {
        day: 1,
        title: 'Circuit Historique Colonial',
        description: 'Circuit à travers : Gouvernement (Cabildo) - centre du pouvoir administratif. Mairie dans l\'ancien Trésor Royal. Première Maison de la Monnaie - où est née la richesse de Potosí. Basilique Cathédrale - architecture religieuse impressionnante. Arc de Cobija - entrée historique de la ville.'
      },
      {
        day: 1,
        title: 'Patrimoine Religieux et Culturel',
        description: 'Visite du Couvent Santa Teresa, l\'un des couvents cloîtrés les plus anciens et toujours actifs. Explication sur la vie monastique et l\'architecture coloniale religieuse. Passage par le Marché Artisanal K\'hoas pour découvrir l\'art local.'
      },
      {
        day: 1,
        title: 'Expérience Gastronomique',
        description: 'Dégustation optionnelle de Glaces Artisanales aux saveurs uniques de la région. Introduction aux fameuses Salteñas de Potosí. Le guide partage les meilleures recommandations locales. Le tour se termine avec du temps pour les questions. Pourboire volontaire selon votre expérience (prix suggéré : ce que vous considérez juste).'
      }
    ]
  },

  // ============================================
  // POTOSI - MIRADORES TOUR
  // ============================================
  {
    id: 'potosi-miradores',
    destination: 'potosi',
    titleEs: 'Tour de Miradores y Minas Panorámicas',
    titleEn: 'Viewpoints and Panoramic Mines Tour',
    titleFr: 'Tour des Points de Vue et Mines Panoramiques',
    descriptionEs: 'Experimenta Potosí desde las alturas. Este tour combina vistas panorámicas espectaculares, visitas a minas activas desde miradores estratégicos, y conocimiento profundo del patrimonio minero. Incluye Mercado Minero, Ingenio Thuru y Escuela de Platería.',
    descriptionEn: 'Experience Potosí from above. This tour combines spectacular panoramic views, visits to active mines from strategic viewpoints, and deep knowledge of mining heritage. Includes Mining Market, Thuru Mill and Silver School.',
    descriptionFr: 'Découvrez Potosí d\'en haut. Ce tour combine des vues panoramiques spectaculaires, des visites de mines actives depuis des points de vue stratégiques, et une connaissance approfondie du patrimoine minier. Inclut le Marché Minier, Moulin Thuru et École d\'Argenterie.',
    days: 1,
    nights: 0,
    image: '/PanoramicMines.jpg',
    schedule: '09:00',
    includesEs: [
      'Transporte a todos los miradores',
      'Guía especializado en minería',
      'Acceso a miradores panorámicos',
      'Visita al Mercado Minero',
      'Observación de minas activas desde miradores',
      'Entrada al Ingenio Thuru',
      'Visita a la Escuela de Platería'
    ],
    includesEn: [
      'Transport to all viewpoints',
      'Specialized mining guide',
      'Access to panoramic viewpoints',
      'Visit to Mining Market',
      'Observation of active mines from viewpoints',
      'Entrance to Ingenio Thuru',
      'Visit to the Silver School'
    ],
    includesFr: [
      'Transport vers tous les points de vue',
      'Guide spécialisé en mines',
      'Accès aux points de vue panoramiques',
      'Visite du Marché Minier',
      'Observation de mines actives depuis les points de vue',
      'Entrée à l\'Ingenio Thuru',
      'Visite de l\'École d\'Argenterie'
    ],
    highlightsEs: [
      '🛒 Mercado Minero - Venta de insumos para mineros',
      '📡 Mirador Antenas - Vista panorámica de toda Potosí',
      '⛏️ Mirador Mina Caracoles - Observación de mina activa',
      '🏔️ Mina Candelaria - Historia de mina tradicional',
      '⛰️ Mina Kunti - Explicación sobre extracción minera',
      '🌄 Mirador Pari Oreko - Vista del Cerro Rico y la ciudad',
      '⚙️ Ingenio Thuru - Proceso de refinamiento de minerales',
      '🥈 Escuela de Platería - Artesanía en plata en vivo'
    ],
    highlightsEn: [
      '🛒 Mining Market - Sale of mining supplies',
      '📡 Antenas Viewpoint - Panoramic view of all Potosí',
      '⛏️ Mina Caracoles Viewpoint - Active mine observation',
      '🏔️ Candelaria Mine - Traditional mine history',
      '⛰️ Kunti Mine - Mining extraction explanation',
      '🌄 Pari Oreko Viewpoint - View of Cerro Rico and the city',
      '⚙️ Ingenio Thuru - Mineral refining process',
      '🥈 Silver School - Live silverwork craftsmanship'
    ],
    highlightsFr: [
      '🛒 Marché Minier - Vente de fournitures minières',
      '📡 Point de Vue Antenas - Vue panoramique de tout Potosí',
      '⛏️ Point de Vue Mina Caracoles - Observation de mine active',
      '🏔️ Mine Candelaria - Histoire de mine traditionnelle',
      '⛰️ Mine Kunti - Explication sur l\'extraction minière',
      '🌄 Point de Vue Pari Oreko - Vue du Cerro Rico et de la ville',
      '⚙️ Ingenio Thuru - Processus de raffinage des minéraux',
      '🥈 École d\'Argenterie - Artisanat d\'argent en direct'
    ],
    itineraryEs: [
      {
        day: 1,
        title: '09:00 - Mercado Minero',
        description: 'Inicio del tour en el fascinante Mercado Minero. Aquí los mineros compran todos sus insumos: dinamita, coca, cigarrillos, herramientas. Aprende sobre la cultura minera y las tradiciones que se mantienen vivas. Oportunidad de comprar regalos simbólicos para los mineros.'
      },
      {
        day: 1,
        title: 'Circuito de Miradores Panorámicos',
        description: 'MIRADOR ANTENAS: Ascenso al punto más alto con vista panorámica 360° de Potosí. MIRADOR MINA CARACOLES: Observación privilegiada de una mina activa desde las alturas, con explicaciones sobre las operaciones mineras. MIRADOR PARI OREKO: Vista espectacular del imponente Cerro Rico (4200m) y toda la ciudad histórica a tus pies.'
      },
      {
        day: 1,
        title: 'Visita a Minas Históricas',
        description: 'MINA CANDELARIA: Exploración de esta histórica mina tradicional, con relatos sobre su importancia durante la época colonial. MINA KUNTI: Explicación detallada sobre técnicas de extracción minera, tanto históricas como actuales. Comprensión del trabajo diario de los mineros cooperativistas.'
      },
      {
        day: 1,
        title: 'Patrimonio Industrial y Artesanal',
        description: 'INGENIO THURU: Visita al museo del proceso de refinamiento de minerales. Observa maquinaria colonial y aprende cómo se procesaba la plata. ESCUELA DE PLATERÍA: Finalización del tour observando artesanos trabajando la plata en vivo. Técnicas ancestrales que se transmiten de generación en generación. Posibilidad de adquirir piezas únicas de platería local.'
      }
    ],
    itineraryEn: [
      {
        day: 1,
        title: '09:00 - Mining Market',
        description: 'Tour starts at the fascinating Mining Market. Here miners buy all their supplies: dynamite, coca, cigarettes, tools. Learn about mining culture and traditions that remain alive. Opportunity to buy symbolic gifts for miners.'
      },
      {
        day: 1,
        title: 'Panoramic Viewpoints Circuit',
        description: 'ANTENAS VIEWPOINT: Ascent to the highest point with 360° panoramic view of Potosí. MINA CARACOLES VIEWPOINT: Privileged observation of an active mine from above, with explanations about mining operations. PARI OREKO VIEWPOINT: Spectacular view of the imposing Cerro Rico (4200m) and the entire historic city at your feet.'
      },
      {
        day: 1,
        title: 'Visit to Historic Mines',
        description: 'CANDELARIA MINE: Exploration of this historic traditional mine, with stories about its importance during colonial times. KUNTI MINE: Detailed explanation of mining extraction techniques, both historical and current. Understanding of the daily work of cooperative miners.'
      },
      {
        day: 1,
        title: 'Industrial and Artisan Heritage',
        description: 'INGENIO THURU: Visit to the mineral refining process museum. Observe colonial machinery and learn how silver was processed. SILVER SCHOOL: Tour concludes by watching artisans working silver live. Ancestral techniques passed down through generations. Possibility to acquire unique pieces of local silverwork.'
      }
    ],
    itineraryFr: [
      {
        day: 1,
        title: '09:00 - Marché Minier',
        description: 'Le tour commence au fascinant Marché Minier. Ici les mineurs achètent toutes leurs fournitures : dynamite, coca, cigarettes, outils. Apprenez sur la culture minière et les traditions qui restent vivantes. Opportunité d\'acheter des cadeaux symboliques pour les mineurs.'
      },
      {
        day: 1,
        title: 'Circuit des Points de Vue Panoramiques',
        description: 'POINT DE VUE ANTENAS : Ascension au point le plus haut avec vue panoramique à 360° sur Potosí. POINT DE VUE MINA CARACOLES : Observation privilégiée d\'une mine active d\'en haut, avec explications sur les opérations minières. POINT DE VUE PARI OREKO : Vue spectaculaire de l\'imposant Cerro Rico (4200m) et toute la ville historique à vos pieds.'
      },
      {
        day: 1,
        title: 'Visite de Mines Historiques',
        description: 'MINE CANDELARIA : Exploration de cette mine traditionnelle historique, avec récits sur son importance pendant l\'époque coloniale. MINE KUNTI : Explication détaillée des techniques d\'extraction minière, historiques et actuelles. Compréhension du travail quotidien des mineurs coopératifs.'
      },
      {
        day: 1,
        title: 'Patrimoine Industriel et Artisanal',
        description: 'INGENIO THURU : Visite du musée du processus de raffinage des minéraux. Observez la machinerie coloniale et apprenez comment l\'argent était traité. ÉCOLE D\'ARGENTERIE : Le tour se termine en observant des artisans travailler l\'argent en direct. Techniques ancestrales transmises de génération en génération. Possibilité d\'acquérir des pièces uniques d\'argenterie locale.'
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