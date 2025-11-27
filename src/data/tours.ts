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
  {
    id: 'uyuni-express',
    destination: 'uyuni',
    titleEs: 'Inmersión Express',
    titleEn: 'Express Immersion',
    titleFr: 'Immersion Express',
    descriptionEs: 'Ideal para quienes tienen poco tiempo. Visita del Cementerio de trenes, el pueblo de Colchani, el Museo de Sal y la isla de Incahuasi. Aprovecha el atardecer para fotos espectaculares sobre la blancura infinita.',
    descriptionEn: 'Ideal for those with limited time. Visit the Train Cemetery, Colchani village, Salt Museum and Incahuasi Island. Take advantage of sunset for spectacular photos on the infinite whiteness.',
    descriptionFr: 'Idéal pour ceux qui ont peu de temps. Visite du Cimetière des trains, du village de Colchani, du Musée du Sel et de l\'île d\'Incahuasi. Profitez du coucher de soleil pour des photos spectaculaires sur la blancheur infinie.',
    days: 1,
    nights: 0,
    image: '/salar-tour1.jpg',
    includesEs: ['Transporte 4x4', 'Guía trilingüe certificado', 'Almuerzo', 'Cementerio de trenes', 'Colchani', 'Museo de Sal', 'Isla Incahuasi', 'Fotos de atardecer'],
    includesEn: ['4x4 Transport', 'Certified trilingual guide', 'Lunch', 'Train Cemetery', 'Colchani', 'Salt Museum', 'Incahuasi Island', 'Sunset photos'],
    includesFr: ['Transport 4x4', 'Guide trilingue certifié', 'Déjeuner', 'Cimetière des trains', 'Colchani', 'Musée du Sel', 'Île d\'Incahuasi', 'Photos du coucher de soleil'],
    highlightsEs: ['Cementerio de trenes', 'Colchani', 'Isla Incahuasi', 'Atardecer en el Salar', 'Fotos espectaculares'],
    highlightsEn: ['Train Cemetery', 'Colchani', 'Incahuasi Island', 'Sunset on the Salar', 'Spectacular photos'],
    highlightsFr: ['Cimetière des trains', 'Colchani', 'Île d\'Incahuasi', 'Coucher de soleil sur le Salar', 'Photos spectaculaires'],
    itineraryEs: [
      {
        day: 1,
        title: 'Aventura de un día completo',
        description: 'Comenzamos visitando el famoso Cementerio de trenes históricos. Continuamos hacia el pueblo de Colchani y su Museo de Sal. Exploramos el vasto Salar hasta llegar a la impresionante Isla Incahuasi con sus cactus gigantes. Terminamos con una sesión de fotos durante el espectacular atardecer sobre la blancura infinita.'
      }
    ],
    itineraryEn: [
      {
        day: 1,
        title: 'Full day adventure',
        description: 'We start by visiting the famous historic Train Cemetery. We continue to Colchani village and its Salt Museum. We explore the vast Salar until reaching the impressive Incahuasi Island with its giant cacti. We finish with a photo session during the spectacular sunset over the infinite whiteness.'
      }
    ],
    itineraryFr: [
      {
        day: 1,
        title: 'Aventure d\'une journée complète',
        description: 'Nous commençons par visiter le célèbre Cimetière des trains historiques. Nous continuons vers le village de Colchani et son Musée du Sel. Nous explorons le vaste Salar jusqu\'à atteindre l\'impressionnante île d\'Incahuasi avec ses cactus géants. Nous terminons par une session photo lors du spectaculaire coucher de soleil sur la blancheur infinie.'
      }
    ]
  },
  {
    id: 'uyuni-classic',
    destination: 'uyuni',
    titleEs: 'El Clásico Completo',
    titleEn: 'The Complete Classic',
    titleFr: 'Le Classique Complet',
    descriptionEs: 'Cubre lo esencial del Salar y comienza la exploración de las Lagunas Coloridas el segundo día. Noche en alojamiento rústico. El tour más popular para una excelente panorámica de la región.',
    descriptionEn: 'Covers the essentials of the Salar and begins exploring the Colored Lagoons on the second day. Night in rustic accommodation. The most popular tour for an excellent overview of the region.',
    descriptionFr: 'Couvre les essentiels du Salar et commence l\'exploration des Lagunes Colorées le deuxième jour. Nuit en hébergement rustique. Le tour le plus populaire pour un excellent aperçu de la région.',
    days: 2,
    nights: 1,
    image: '/salar-2d-tour1.jpg',
    includesEs: ['Transporte 4x4', 'Guía trilingüe experimentado', 'Alojamiento rústico (1 noche)', 'Todas las comidas', 'Cementerio de trenes', 'Colchani', 'Isla Incahuasi', 'Lagunas Coloradas'],
    includesEn: ['4x4 Transport', 'Experienced trilingual guide', 'Rustic accommodation (1 night)', 'All meals', 'Train Cemetery', 'Colchani', 'Incahuasi Island', 'Colored Lagoons'],
    includesFr: ['Transport 4x4', 'Guide trilingue expérimenté', 'Hébergement rustique (1 nuit)', 'Tous les repas', 'Cimetière des trains', 'Colchani', 'Île d\'Incahuasi', 'Lagunes Colorées'],
    highlightsEs: ['Salar de Uyuni', 'Isla Incahuasi', 'Lagunas coloridas', 'Géothermia', 'Puesta de sol épica'],
    highlightsEn: ['Salar de Uyuni', 'Incahuasi Island', 'Colored lagoons', 'Geothermal activity', 'Epic sunset'],
    highlightsFr: ['Salar de Uyuni', 'Île d\'Incahuasi', 'Lagunes colorées', 'Activité géothermique', 'Coucher de soleil épique'],
    itineraryEs: [
      {
        day: 1,
        title: 'Inmersión en el Salar',
        description: 'Salida desde Uyuni visitando el Cementerio de trenes y Colchani. Conducimos hacia el corazón del Salar, explorando sus extensiones infinitas de sal blanca. Visitamos la Isla Incahuasi con sus cactus milenarios. Atardecer espectacular sobre el Salar. Noche en alojamiento rústico.'
      },
      {
        day: 2,
        title: 'Lagunas Coloridas y regreso',
        description: 'Después del desayuno, nos dirigimos hacia las impresionantes lagunas de colores variados. Observamos flamencos rosados en su hábitat natural. Visitamos zonas geotérmicas con géiseres activos. Regreso a Uyuni por la tarde.'
      }
    ],
    itineraryEn: [
      {
        day: 1,
        title: 'Salar Immersion',
        description: 'Departure from Uyuni visiting the Train Cemetery and Colchani. We drive towards the heart of the Salar, exploring its infinite expanses of white salt. We visit Incahuasi Island with its millennial cacti. Spectacular sunset over the Salar. Night in rustic accommodation.'
      },
      {
        day: 2,
        title: 'Colored Lagoons and return',
        description: 'After breakfast, we head towards the impressive multi-colored lagoons. We observe pink flamingos in their natural habitat. We visit geothermal areas with active geysers. Return to Uyuni in the afternoon.'
      }
    ],
    itineraryFr: [
      {
        day: 1,
        title: 'Immersion dans le Salar',
        description: 'Départ d\'Uyuni en visitant le Cimetière des trains et Colchani. Nous conduisons vers le cœur du Salar, explorant ses étendues infinies de sel blanc. Nous visitons l\'île d\'Incahuasi avec ses cactus millénaires. Coucher de soleil spectaculaire sur le Salar. Nuit en hébergement rustique.'
      },
      {
        day: 2,
        title: 'Lagunes Colorées et retour',
        description: 'Après le petit-déjeuner, nous nous dirigeons vers les impressionnantes lagunes aux couleurs variées. Nous observons les flamants roses dans leur habitat naturel. Nous visitons des zones géothermiques avec des geysers actifs. Retour à Uyuni dans l\'après-midi.'
      }
    ]
  },
  {
    id: 'uyuni-custom',
    destination: 'uyuni',
    titleEs: 'Aventura Andina a Medida',
    titleEn: 'Custom Andean Adventure',
    titleFr: 'Aventure Andine Sur Mesure',
    descriptionEs: 'Diseñado para fotógrafos, excursionistas o quienes desean explorar zonas aisladas (ej: Ruta de las Joyas, volcanes). Personalizamos el itinerario, las comidas y los alojamientos (incluidos hoteles de sal).',
    descriptionEn: 'Designed for photographers, hikers or those wanting to explore isolated areas (e.g., Route of Jewels, volcanoes). We customize the itinerary, meals and accommodations (including salt hotels).',
    descriptionFr: 'Conçu pour les photographes, les randonneurs ou ceux qui veulent explorer des zones isolées (ex: Route des Joyaux, volcans). Nous personnalisons l\'itinéraire, les repas et les hébergements (y compris les hôtels de sel).',
    days: 3,
    nights: 2,
    image: '/salar-custum-tour1.jpg',
    includesEs: ['Transporte 4x4 privado', 'Guía trilingüe especializado', 'Alojamiento personalizado (incluye hoteles de sal)', 'Todas las comidas gourmet', 'Itinerario flexible', 'Zonas remotas', 'Fotografía profesional', 'Equipo especializado'],
    includesEn: ['Private 4x4 Transport', 'Specialized trilingual guide', 'Personalized accommodation (includes salt hotels)', 'All gourmet meals', 'Flexible itinerary', 'Remote areas', 'Professional photography', 'Specialized equipment'],
    includesFr: ['Transport 4x4 privé', 'Guide trilingue spécialisé', 'Hébergement personnalisé (comprend hôtels de sel)', 'Tous les repas gastronomiques', 'Itinéraire flexible', 'Zones reculées', 'Photographie professionnelle', 'Équipement spécialisé'],
    highlightsEs: ['Itinerario personalizado', 'Hoteles de sal', 'Zonas remotas', 'Volcanes', 'Ruta de las Joyas', 'Fotografía profesional'],
    highlightsEn: ['Custom itinerary', 'Salt hotels', 'Remote areas', 'Volcanoes', 'Route of Jewels', 'Professional photography'],
    highlightsFr: ['Itinéraire personnalisé', 'Hôtels de sel', 'Zones reculées', 'Volcans', 'Route des Joyaux', 'Photographie professionnelle'],
    itineraryEs: [
      {
        day: 1,
        title: 'Diseño personalizado - Día 1',
        description: 'El itinerario se diseña completamente según tus intereses: fotografía de amaneceres/atardeceres, exploración de volcanes, visita a comunidades remotas, o rutas menos transitadas. Incluye alojamiento en hotel de sal de lujo si lo deseas.'
      },
      {
        day: 2,
        title: 'Diseño personalizado - Día 2',
        description: 'Continuación de tu aventura personalizada. Opciones incluyen: ascenso a volcanes, exploración de la Ruta de las Joyas (lagunas remotas), sesiones fotográficas en horarios específicos, o visitas culturales a comunidades locales.'
      }
    ],
    itineraryEn: [
      {
        day: 1,
        title: 'Custom design - Day 1',
        description: 'The itinerary is completely designed according to your interests: sunrise/sunset photography, volcano exploration, visits to remote communities, or less traveled routes. Includes accommodation in luxury salt hotel if desired.'
      },
      {
        day: 2,
        title: 'Custom design - Day 2',
        description: 'Continuation of your personalized adventure. Options include: volcano ascents, exploration of the Route of Jewels (remote lagoons), photo sessions at specific times, or cultural visits to local communities.'
      }
    ],
    itineraryFr: [
      {
        day: 1,
        title: 'Conception personnalisée - Jour 1',
        description: 'L\'itinéraire est entièrement conçu selon vos intérêts : photographie des levers/couchers de soleil, exploration de volcans, visites de communautés reculées, ou routes moins fréquentées. Comprend l\'hébergement dans un hôtel de sel de luxe si désiré.'
      },
      {
        day: 2,
        title: 'Conception personnalisée - Jour 2',
        description: 'Continuation de votre aventure personnalisée. Les options incluent : ascensions de volcans, exploration de la Route des Joyaux (lagunes reculées), sessions photo à des horaires spécifiques, ou visites culturelles dans des communautés locales.'
      }
    ]
  },
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