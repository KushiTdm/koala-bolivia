import { Link } from 'react-router-dom';
import { Tour } from '../data/tours';
import { Language } from '../data/translations';
import { Calendar, Users } from 'lucide-react';

interface TourCardProps {
  tour: Tour;
  lang: Language;
}

export default function TourCard({ tour, lang }: TourCardProps) {
  const getTitle = () => {
    switch (lang) {
      case 'en': return tour.titleEn;
      case 'fr': return tour.titleFr;
      default: return tour.titleEs;
    }
  };

  const getDescription = () => {
    switch (lang) {
      case 'en': return tour.descriptionEn;
      case 'fr': return tour.descriptionFr;
      default: return tour.descriptionEs;
    }
  };

  const bookLabel = lang === 'es' ? 'Ver detalles' : lang === 'en' ? 'View details' : 'Voir détails';

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
      <img src={tour.image} alt={getTitle()} className="w-full h-64 object-cover" />

      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-900 mb-3">{getTitle()}</h3>

        <p className="text-slate-600 text-sm mb-4 line-clamp-2">{getDescription()}</p>

        <div className={`grid ${tour.nights === 0 ? 'grid-cols-1' : 'grid-cols-2'} gap-3 mb-6 text-sm`}>
          <div className="flex items-center gap-2 text-slate-700">
            <Calendar size={16} className="text-amber-600" />
            <span>{tour.days} {tour.days === 1 ? (lang === 'es' ? 'día' : lang === 'en' ? 'day' : 'jour') : (lang === 'es' ? 'días' : lang === 'en' ? 'days' : 'jours')}</span>
          </div>
          {tour.nights > 0 && (
            <div className="flex items-center gap-2 text-slate-700">
              <Users size={16} className="text-amber-600" />
              <span>{tour.nights} {tour.nights === 1 ? (lang === 'es' ? 'noche' : lang === 'en' ? 'night' : 'nuit') : (lang === 'es' ? 'noches' : lang === 'en' ? 'nights' : 'nuits')}</span>
            </div>
          )}
        </div>

        <Link
          to={`/${lang}/tours/${tour.id}`}
          className="block w-full bg-amber-600 hover:bg-amber-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors text-center"
        >
          {bookLabel}
        </Link>
      </div>
    </div>
  );
}