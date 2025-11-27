// src/pages/RoomDetail.tsx
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { Language, getTranslation } from '../data/translations';
import { getHostalByDestination } from '../data/hostals';
import { Users, Maximize2, DollarSign, ArrowLeft, MessageCircle, Check } from 'lucide-react';

export default function RoomDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const location = useLocation();
  
  const getCurrentLang = (): Language => {
    const pathLang = location.pathname.split('/')[1];
    if (pathLang === 'en' || pathLang === 'fr' || pathLang === 'es') {
      return pathLang;
    }
    return 'es';
  };

  const lang = getCurrentLang();
  
  // Détermine si c'est Uyuni ou Potosi depuis l'URL
  const destination = location.pathname.includes('uyuni') ? 'uyuni' : 'potosi';
  const hostal = getHostalByDestination(destination);
  const room = hostal?.rooms.find(r => r.id === id);

  if (!room || !hostal) {
    return (
      <div className="min-h-screen pt-16 bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-900 mb-4">
            {lang === 'es' ? 'Habitación no encontrada' : lang === 'en' ? 'Room not found' : 'Chambre non trouvée'}
          </h1>
          <button
            onClick={() => navigate(-1)}
            className="text-amber-600 hover:text-amber-700 font-semibold"
          >
            {lang === 'es' ? 'Volver' : lang === 'en' ? 'Go back' : 'Retour'}
          </button>
        </div>
      </div>
    );
  }

  const getName = () => {
    switch (lang) {
      case 'en': return room.nameEn;
      case 'fr': return room.nameFr;
      default: return room.nameEs;
    }
  };

  const getDescription = () => {
    switch (lang) {
      case 'en': return room.descriptionEn;
      case 'fr': return room.descriptionFr;
      default: return room.descriptionEs;
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

  const getWhatsAppNumber = () => {
    if (destination.toLowerCase() === 'potosi') {
      return '59172401884';
    } else if (destination.toLowerCase() === 'uyuni') {
      return '59161913121';
    }
    // Numéro par défaut
    return '59172401884';
  };

  const getWhatsAppDisplayNumber = () => {
    if (destination.toLowerCase() === 'potosi') {
      return '+591 72401884';
    } else if (destination.toLowerCase() === 'uyuni') {
      return '+591 61913121';
    }
    return '+591 72401884';
  };

  const handleWhatsAppReservation = () => {
    const message = lang === 'es' 
      ? `Hola, me gustaría reservar la habitación "${getName()}" por $${room.price}/noche.`
      : lang === 'en'
      ? `Hello, I would like to book the "${getName()}" room for $${room.price}/night.`
      : `Bonjour, je voudrais réserver la chambre "${getName()}" pour $${room.price}/nuit.`;
    
    const phoneNumber = getWhatsAppNumber();
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen pt-16 bg-slate-50">
      {/* Header avec bouton retour */}
      <div className="bg-white border-b border-slate-200 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-slate-600 hover:text-amber-600 transition-colors font-medium"
          >
            <ArrowLeft size={20} />
            {lang === 'es' ? 'Volver' : lang === 'en' ? 'Back' : 'Retour'}
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Galerie d'images */}
          <div className="space-y-4">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={room.image}
                alt={getName()}
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute top-6 right-6 bg-amber-500 text-white px-6 py-3 rounded-full font-bold text-2xl shadow-xl">
                ${room.price}
              </div>
            </div>
          </div>

          {/* Détails de la chambre */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">{getName()}</h1>
              <p className="text-xl text-slate-700 leading-relaxed">{getDescription()}</p>
            </div>

            {/* Informations clés */}
            <div className="grid grid-cols-3 gap-6 py-8 border-y border-slate-200">
              <div className="text-center">
                <div className="flex justify-center mb-3">
                  <DollarSign size={32} className="text-amber-600" />
                </div>
                <div className="text-3xl font-bold text-slate-900">${room.price}</div>
                <div className="text-sm text-slate-600 mt-1">{getTranslation(lang, 'uyuni.perNight')}</div>
              </div>

              <div className="text-center">
                <div className="flex justify-center mb-3">
                  <Users size={32} className="text-amber-600" />
                </div>
                <div className="text-lg font-bold text-slate-900">{getCapacityText()}</div>
                <div className="text-sm text-slate-600 mt-1">{getTranslation(lang, 'uyuni.capacity')}</div>
              </div>

              <div className="text-center">
                <div className="flex justify-center mb-3">
                  <Maximize2 size={32} className="text-amber-600" />
                </div>
                <div className="text-3xl font-bold text-slate-900">{room.surface}</div>
                <div className="text-sm text-slate-600 mt-1">m²</div>
              </div>
            </div>

            {/* Équipements */}
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                {lang === 'es' ? 'Comodidades' : lang === 'en' ? 'Amenities' : 'Équipements'}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {room.amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center gap-3 text-slate-700">
                    <Check size={20} className="text-green-600 flex-shrink-0" />
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bouton de réservation WhatsApp */}
            <div className="pt-6">
              <button
                onClick={handleWhatsAppReservation}
                className="w-full bg-green-600 hover:bg-green-700 text-white px-8 py-5 rounded-xl font-bold text-xl transition-all flex items-center justify-center gap-3 shadow-lg hover:shadow-xl hover:scale-105"
              >
                <MessageCircle size={28} />
                {lang === 'es' ? 'Reservar por WhatsApp' : lang === 'en' ? 'Book via WhatsApp' : 'Réserver par WhatsApp'}
              </button>
              <p className="text-center text-sm text-slate-600 mt-4">
                {lang === 'es' ? 'Contacto directo: ' : lang === 'en' ? 'Direct contact: ' : 'Contact direct : '}
                {getWhatsAppDisplayNumber()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}