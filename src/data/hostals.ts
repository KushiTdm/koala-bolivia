export interface Room {
  id: string;
  nameEs: string;
  nameEn: string;
  nameFr: string;
  descriptionEs: string;
  descriptionEn: string;
  descriptionFr: string;
  capacity: number;
  capacityAdults: number;
  capacityChildren: number;
  surface: number;
  image: string;
  amenities: string[];
}

export interface Hostal {
  id: string;
  destination: 'uyuni' | 'potosi';
  nameEs: string;
  nameEn: string;
  nameFr: string;
  descriptionEs: string;
  descriptionEn: string;
  descriptionFr: string;
  image: string;
  rooms: Room[];
  email: string;
  phone: string;
  address: string;
}

// Hostals de Koala Bolivia (Données en dur)
export const hostals: Hostal[] = [
  {
    id: 'eucalyptus-uyuni',
    destination: 'uyuni',
    nameEs: 'Hostal Eucalyptus Uyuni',
    nameEn: 'Eucalyptus Hostal Uyuni',
    nameFr: 'Hostal Eucalyptus Uyuni',
    descriptionEs: 'Tu hogar en el corazón del altiplano boliviano. Con vistas espectaculares al Salar, nuestro hostal combina confort con autenticidad. Cada habitación está diseñada para ofrecerte una estancia cómoda después de tus aventuras en el desierto de sal.',
    descriptionEn: 'Your home in the heart of the Bolivian highlands. With spectacular views of the Salar, our hostel combines comfort with authenticity. Each room is designed to offer you a comfortable stay after your adventures in the salt desert.',
    descriptionFr: 'Votre foyer au cœur de l\'altiplano bolivien. Avec des vues spectaculaires sur le Salar, notre auberge combine le confort et l\'authenticité. Chaque chambre est conçue pour vous offrir un séjour confortable après vos aventures dans le désert de sel.',
    image: '/hostal-uyuni.jpg',
    rooms: [
      {
        id: 'room-simple',
        nameEs: 'Simple con baño privado',
        nameEn: 'Single with private bathroom',
        nameFr: 'Simple avec sdb privée',
        descriptionEs: 'Habitación individual con baño privado, perfecta para viajeros solitarios que buscan comodidad y privacidad.',
        descriptionEn: 'Single room with private bathroom, perfect for solo travelers seeking comfort and privacy.',
        descriptionFr: 'Chambre individuelle avec salle de bain privée, parfaite pour les voyageurs solitaires recherchant confort et intimité.',
        capacity: 2,
        capacityAdults: 2,
        capacityChildren: 0,
        surface: 15,
        image: '/simpleroom-uyuni.webp',
        amenities: ['Baño privado', 'Calefacción', 'Agua caliente', 'WiFi', 'Ventana']
      },
      {
        id: 'room-matrimonial',
        nameEs: 'Matrimonial con baño privado',
        nameEn: 'Queen with private bathroom',
        nameFr: 'Matrimoniale avec sdb privée',
        descriptionEs: 'Habitación con cama matrimonial y baño privado. Ideal para parejas que buscan una estancia romántica.',
        descriptionEn: 'Room with queen bed and private bathroom. Ideal for couples looking for a romantic stay.',
        descriptionFr: 'Chambre avec lit double et salle de bain privée. Idéal pour les couples recherchant un séjour romantique.',
        capacity: 3,
        capacityAdults: 2,
        capacityChildren: 1,
        surface: 25,
        image: '/doubleroom-uyuni.webp',
        amenities: ['Cama matrimonial', 'Baño privado', 'Calefacción', 'Agua caliente', 'WiFi', 'Vistas']
      },
      {
        id: 'room-doble',
        nameEs: 'Doble con baño privado',
        nameEn: 'Twin with private bathroom',
        nameFr: 'Double (Lits jumeaux) avec sdb privée',
        descriptionEs: 'Dos camas individuales con baño privado. Perfecta para amigos o familiares.',
        descriptionEn: 'Two single beds with private bathroom. Perfect for friends or family.',
        descriptionFr: 'Deux lits simples avec salle de bain privée. Parfait pour des amis ou de la famille.',
        capacity: 3,
        capacityAdults: 2,
        capacityChildren: 1,
        surface: 25,
        image: '/doubleroom-uyuni.webp',
        amenities: ['2 camas individuales', 'Baño privado', 'Calefacción', 'Agua caliente', 'WiFi']
      },
      {
        id: 'room-triple',
        nameEs: 'Triple con baño privado',
        nameEn: 'Triple with private bathroom',
        nameFr: 'Triple avec sdb privée',
        descriptionEs: 'Amplia habitación con tres camas y baño privado. Ideal para grupos pequeños o familias.',
        descriptionEn: 'Spacious room with three beds and private bathroom. Ideal for small groups or families.',
        descriptionFr: 'Chambre spacieuse avec trois lits et salle de bain privée. Idéal pour les petits groupes ou les familles.',
        capacity: 6,
        capacityAdults: 3,
        capacityChildren: 3,
        surface: 30,
        image: '/tripleroom-uyuni.webp',
        amenities: ['3 camas individuales', 'Baño privado', 'Calefacción', 'Agua caliente', 'WiFi', 'Espacio amplio']
      }
    ],
    email: 'eucalyptusuyuni@mail.com',
    phone: '+591 61913121',
    address: 'Calle Cabrera entre Santa Cruz y Colombia, Uyuni, Bolivia'
  },
  
  {
    id: 'eucalyptus-potosi',
    destination: 'potosi',
    nameEs: 'Hostal Eucalyptus Potosí',
    nameEn: 'Eucalyptus Hostal Potosí',
    nameFr: 'Hostal Eucalyptus Potosí',
    descriptionEs: 'Disfruta de nuestro mirador donde te ofrecemos cerveza fría y otras bebidas y observar el atardecer en la ciudad de Potosí. El hostal ofrece tarifas económicas, personal amable que habla inglés y francés, y servicio 24 horas.',
    descriptionEn: 'Enjoy our viewpoint where we offer cold beer and other drinks and watch the sunset over the city of Potosí. The hostel offers economic rates, friendly staff who speak English and French, and 24-hour service.',
    descriptionFr: 'Profitez de notre belvédère où nous proposons des bières fraîches et autres boissons tout en observant le coucher de soleil sur Potosí. L\'auberge offre des tarifs économiques, un personnel amical parlant anglais et français, et un service 24h/24.',
    image: '/hostal-eucaliptus-potosi-1.webp', 
    rooms: [
      {
        id: 'room-simple-potosi',
        nameEs: 'Simple con baño privado',
        nameEn: 'Single with private bathroom',
        nameFr: 'Simple avec sdb privée',
        descriptionEs: 'Habitación individual con baño privado. Comodidad y privacidad en Potosí.',
        descriptionEn: 'Single room with private bathroom. Comfort and privacy in Potosí.',
        descriptionFr: 'Chambre individuelle avec salle de bain privée. Confort et intimité à Potosí.',
        capacity: 2,
        capacityAdults: 1,
        capacityChildren: 1,
        surface: 15,
        image: '/standard-single-potosi.webp', 
        amenities: ['Baño privado', 'Calefacción', 'Agua caliente', 'WiFi', 'Vues']
      },
      {
        id: 'room-matrimonial-potosi',
        nameEs: 'Matrimonial con baño privado',
        nameEn: 'Queen with private bathroom',
        nameFr: 'Matrimoniale avec sdb privée',
        descriptionEs: 'Habitación con cama matrimonial y baño privado. Ideal para parejas.',
        descriptionEn: 'Room with queen bed and private bathroom. Ideal for couples.',
        descriptionFr: 'Chambre avec lit double et salle de bain privée. Idéal pour les couples.',
        capacity: 3,
        capacityAdults: 2,
        capacityChildren: 1,
        surface: 25,
        image: '/standard-double-potosi.webp',
        amenities: ['Cama matrimonial', 'Baño privado', 'Calefacción', 'Agua caliente', 'WiFi']
      },
      {
        id: 'room-doble-potosi',
        nameEs: 'Doble con baño privado',
        nameEn: 'Twin with private bathroom',
        nameFr: 'Double (Lits jumeaux) avec sdb privée',
        descriptionEs: 'Dos camas individuales con baño privado. Perfecta para amis ou voyageurs en solo.',
        descriptionEn: 'Two single beds with private bathroom. Perfect for friends or solo travelers.',
        descriptionFr: 'Deux lits simples avec salle de bain privée. Parfait pour les amis ou voyageurs solitaires.',
        capacity: 3,
        capacityAdults: 2,
        capacityChildren: 1,
        surface: 25,
        image: '/standard-twin-potosi.webp',
        amenities: ['2 camas individuales', 'Baño privado', 'Calefacción', 'Agua caliente', 'WiFi']
      },
      {
        id: 'room-triple-potosi',
        nameEs: 'Triple con baño privado',
        nameEn: 'Triple with private bathroom',
        nameFr: 'Triple avec sdb privée',
        descriptionEs: 'Habitación con tres camas y baño privado. Ideal para pequeños groupes.',
        descriptionEn: 'Room with three beds and private bathroom. Ideal for small groups.',
        descriptionFr: 'Chambre avec trois lits et salle de bain privée. Idéal pour les petits groupes.',
        capacity: 6,
        capacityAdults: 3,
        capacityChildren: 3,
        surface: 30,
        image: '/standard-triple-potosi.webp', 
        amenities: ['3 camas individuales', 'Baño privado', 'Calefacción', 'Agua caliente', 'WiFi', 'Espacio amplio']
      },
      {
        id: 'room-familial-potosi',
        nameEs: 'Familiar con baño privado (1 matrimonial & 1 single)',
        nameEn: 'Family room (1 queen & 1 single)',
        nameFr: 'Chambre Familiale avec sdb privée (1 double & 1 simple)',
        descriptionEs: 'Amplia habitación familiar con cama matrimonial y una cama individual, baño privado.',
        descriptionEn: 'Spacious family room with one queen bed and one single bed, private bathroom.',
        descriptionFr: 'Chambre familiale spacieuse avec un lit double et un lit simple, salle de bain privée.',
        capacity: 6,
        capacityAdults: 3,
        capacityChildren: 3,
        surface: 30,
        image: '/familyroom-potosi.webp', 
        amenities: ['Cama matrimonial + 1 simple', 'Baño privado', 'Calefacción', 'Agua caliente', 'WiFi', 'Vistas']
      }
    ],
    email: 'koalabolivia@hotmail.com',
    phone: '+59172401884',
    address: 'Linares Street 88A Frias, Potosi Bolivia'
  }
];

export const getHostalByDestination = (destination: 'uyuni' | 'potosi'): Hostal | undefined => {
  return hostals.find(hostal => hostal.destination === destination);
};