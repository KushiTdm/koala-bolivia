// src/components/RoomCard.tsx
import { Link, useLocation } from 'react-router-dom';
import { Room } from '../data/hostals';
import { Language } from '../data/translations';
import { Users, Maximize2 } from 'lucide-react';

interface RoomCardProps {
  room: Room;
  lang: Language;
}

export default function RoomCard({ room, lang }: RoomCardProps) {
  const location = useLocation();

  const getName = () => {
    switch (lang) {
      case 'en': return room.nameEn;
      case 'fr': return room.nameFr;
      default: return room.nameEs;
    }
  };

  const getCapacityText = () => {
    const adults = room.capacityAdults;
    const children = room.capacityChildren;
    
    if (lang === 'es') {
      return `${adults} ${adults === 1 ? 'Adulto' : 'Adultos'}${children > 0 ? `, ${children} ${children === 1 ? 'Niño' : 'Niños'}` : ''}`;
    } else if (lang === 'en') {
      return `${adults} ${adults === 1 ? 'Adult' : 'Adults'}${children > 0 ? `, ${children} ${children === 1 ? 'Child' : 'Children'}` : ''}`;
    } else {
      return `${adults} ${adults === 1 ? 'Adulte' : 'Adultes'}${children > 0 ? `, ${children} ${children === 1 ? 'Enfant' : 'Enfants'}` : ''}`;
    }
  };

  const bookLabel = lang === 'es' ? 'Reservar' : lang === 'en' ? 'Book' : 'Réserver';
  const destination = location.pathname.includes('uyuni') ? 'uyuni' : 'potosi';

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow flex flex-col h-full">
      <img src={room.image} alt={getName()} className="w-full h-64 object-cover" />

      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-bold text-slate-900 mb-3 min-h-[3.5rem]">{getName()}</h3>

        <div className="grid grid-cols-2 gap-3 mb-6 text-sm flex-1">
          <div className="flex items-center gap-2 text-slate-700">
            <Users size={16} className="text-amber-600" />
            <span>{getCapacityText()}</span>
          </div>
          <div className="flex items-center gap-2 text-slate-700">
            <Maximize2 size={16} className="text-amber-600" />
            <span>{room.surface} m²</span>
          </div>
        </div>

        {/* NOUVEAU CONTENEUR POUR CENTRER LE BOUTON HORIZONTALEMENT */}
        <div className="mt-auto">
            <Link
                to={`/${lang}/${destination}/rooms/${room.id}`}
                // MODIFICATIONS: Retrait de w-full et ajout de inline-block
                className="inline-block bg-amber-600 hover:bg-amber-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors text-center"
            >
                {bookLabel}
            </Link>
        </div>
      </div>
    </div>
  );
}