import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { ChevronLeft, Calendar, MapPin, Users, Utensils, MessageCircle } from 'lucide-react';
import { Language, getTranslation } from '../data/translations';
import { getTourById } from '../data/tours';

gsap.registerPlugin(ScrollTrigger);

export default function TourDetail() {
  const params = useParams<{ lang?: string; id?: string }>();
  const navigate = useNavigate();
  const lang = (params.lang || 'es') as Language;
  const tour = getTourById(params.id || '');
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
        }
      );
    }

    const itinerary = contentRef.current?.querySelectorAll('[data-day]');
    if (itinerary) {
      gsap.fromTo(
        itinerary,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.15,
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 70%',
          },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  if (!tour) {
    return (
      <div className="min-h-screen pt-16 bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-900 mb-4">Tour Not Found</h1>
          <button
            onClick={() => navigate(`/${lang}`)}
            className="text-amber-600 hover:text-amber-700 font-semibold"
          >
            {lang === 'es' ? 'Volver al inicio' : lang === 'en' ? 'Back to home' : 'Retour à l\'accueil'}
          </button>
        </div>
      </div>
    );
  }

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

  const getIncludes = () => {
    switch (lang) {
      case 'en': return tour.includesEn;
      case 'fr': return tour.includesFr;
      default: return tour.includesEs;
    }
  };

  const getItinerary = () => {
    switch (lang) {
      case 'en': return tour.itineraryEn;
      case 'fr': return tour.itineraryFr;
      default: return tour.itineraryEs;
    }
  };

  const getHighlights = () => {
    switch (lang) {
      case 'en': return tour.highlightsEn;
      case 'fr': return tour.highlightsFr;
      default: return tour.highlightsEs;
    }
  };

  const getWhatsAppNumber = () => {
    if (tour.destination.toLowerCase() === 'potosi') {
      return '59161914606';
    } else if (tour.destination.toLowerCase() === 'uyuni') {
      return '59172401884';
    }
    // Numéro par défaut si la destination n'est ni Potosi ni Uyuni
    return '59172401884';
  };

  const handleWhatsApp = () => {
    const phoneNumber = getWhatsAppNumber();
    const message = encodeURIComponent(
      lang === 'es' 
        ? `Hola, me gustaría reservar el tour: ${getTitle()}`
        : lang === 'en'
        ? `Hi, I would like to book the tour: ${getTitle()}`
        : `Bonjour, je souhaite réserver le tour : ${getTitle()}`
    );
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const backLabel = lang === 'es' ? 'Volver' : lang === 'en' ? 'Back' : 'Retour';
  const includesLabel = getTranslation(lang, 'uyuni.includes');
  const daysLabel = getTranslation(lang, 'uyuni.days');
  const nightsLabel = getTranslation(lang, 'uyuni.nights');
  const priceLabel = getTranslation(lang, 'uyuni.price');
  const perPersonLabel = getTranslation(lang, 'uyuni.perPerson');
  const bookLabel = getTranslation(lang, 'uyuni.book');

  return (
    <div className="min-h-screen pt-16 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <button
          onClick={() => navigate(`/${lang}/${tour.destination}`)}
          className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-700 font-semibold mb-8"
        >
          <ChevronLeft size={20} />
          {backLabel}
        </button>

        <img
          src={tour.image}
          alt={getTitle()}
          className="w-full h-96 object-cover rounded-xl shadow-lg mb-12"
        />

        <div ref={contentRef}>
          <h1 className="text-4xl font-bold text-slate-900 mb-6">{getTitle()}</h1>

          <div className="grid md:grid-cols-3 gap-4 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center gap-2 text-amber-600 mb-2">
                <Calendar size={20} />
                <span className="font-semibold">{tour.days}</span>
              </div>
              <p className="text-slate-600 text-sm">{daysLabel}</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center gap-2 text-amber-600 mb-2">
                <Users size={20} />
                <span className="font-semibold">{tour.nights}</span>
              </div>
              <p className="text-slate-600 text-sm">{nightsLabel}</p>
            </div>

            <div className="bg-green-600 text-white p-6 rounded-lg shadow-md flex flex-col justify-between">
              <p className="text-sm mb-2">{lang === 'es' ? 'Listo para reservar' : lang === 'en' ? 'Ready to book' : 'Prêt à réserver'}</p>
              <button 
                onClick={handleWhatsApp}
                className="bg-white text-green-600 font-semibold py-2 px-4 rounded hover:bg-green-50 transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle size={18} />
                {bookLabel}
              </button>
            </div>
          </div>

          <p className="text-lg text-slate-700 leading-relaxed mb-12">{getDescription()}</p>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">{includesLabel}</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {getIncludes().map((item, index) => (
                <div key={index} className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-md">
                  <Utensils size={20} className="text-amber-600 flex-shrink-0" />
                  <span className="text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">{lang === 'es' ? 'Itinerario' : lang === 'en' ? 'Itinerary' : 'Itinéraire'}</h2>
            <div className="space-y-6">
              {getItinerary().map((day, index) => (
                <div key={index} data-day className="bg-white p-8 rounded-lg shadow-md border-l-4 border-amber-600">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {lang === 'es' ? 'Día' : lang === 'en' ? 'Day' : 'Jour'} {day.day}: {day.title}
                  </h3>
                  <p className="text-slate-700 leading-relaxed">{day.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">{lang === 'es' ? 'Destacados' : lang === 'en' ? 'Highlights' : 'Points Forts'}</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {getHighlights().map((highlight, index) => (
                <div key={index} className="flex items-center gap-3 text-slate-700">
                  <MapPin size={20} className="text-amber-600 flex-shrink-0" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}