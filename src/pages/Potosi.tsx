import { useParams } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Language, getTranslation } from '../data/translations';
import { getToursByDestination } from '../data/tours';
import { getHostalByDestination } from '../data/hostals';
import TourCard from '../components/TourCard';
import RoomCard from '../components/RoomCard';

gsap.registerPlugin(ScrollTrigger);

export default function Potosi() {
  const params = useParams<{ lang?: string }>();
  const lang = (params.lang || 'es') as Language;
  const hostal = getHostalByDestination('potosi');
  const tours = getToursByDestination('potosi');
  
  // Trier les tours par nombre de jours (ordre croissant)
  const sortedTours = [...tours].sort((a, b) => a.days - b.days);

  const headerRef = useRef<HTMLDivElement>(null);
  const heroTransitionRef = useRef<HTMLDivElement>(null);
  const toursRef = useRef<HTMLDivElement>(null);
  const roomsRef = useRef<HTMLDivElement>(null);
  const hostalSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      headerRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
      }
    );

    const tourCards = toursRef.current?.querySelectorAll('[data-tour-card]');
    if (tourCards) {
      gsap.fromTo(
        tourCards,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          scrollTrigger: {
            trigger: toursRef.current,
            start: 'top 80%',
            end: 'top 20%',
            toggleActions: 'play none none none',
          },
        }
      );
    }

    const roomCards = roomsRef.current?.querySelectorAll('[data-room-card]');
    if (roomCards) {
      gsap.fromTo(
        roomCards,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          scrollTrigger: {
            trigger: roomsRef.current,
            start: 'top 80%',
            end: 'top 20%',
            toggleActions: 'play none none none',
          },
        }
      );
    }

    // Animation Hero Transition
    if (heroTransitionRef.current) {
      gsap.fromTo(
        heroTransitionRef.current,
        { opacity: 0, scale: 1.1 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: heroTransitionRef.current,
            start: 'top 80%',
            end: 'top 20%',
            toggleActions: 'play none none none',
          },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  if (!hostal) return null;

  const hostalName = lang === 'en' ? hostal.nameEn : lang === 'fr' ? hostal.nameFr : hostal.nameEs;
  const hostalDesc = lang === 'en' ? hostal.descriptionEn : lang === 'fr' ? hostal.descriptionFr : hostal.descriptionEs;

  return (
    <div className="min-h-screen pt-16 bg-slate-50">
      <div
        ref={headerRef}
        className="bg-gradient-to-r from-amber-600 to-red-700 text-white py-16 md:py-24"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{getTranslation(lang, 'potosi.title')}</h1>
          <p className="text-xl text-amber-100 max-w-2xl mb-8">
            {lang === 'es'
              ? 'Sumérgete en siglos de historia colonial y patrimonio cultural.'
              : lang === 'en'
              ? 'Immerse yourself in centuries of colonial history and cultural heritage.'
              : 'Immergez-vous dans des siècles d\'histoire coloniale et de patrimoine culturel.'}
          </p>
          <button
            onClick={() => {
              toursRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
            className="bg-amber-700 text-white hover:bg-amber-800 px-8 py-3 rounded-full font-bold text-lg shadow-lg transition-all hover:scale-105 inline-flex items-center gap-2"
          >
            <span>🗺️</span>
            <span>{lang === 'es' ? 'Descubrir Nuestros Circuitos' : lang === 'en' ? 'Discover Our Tours' : 'Découvrir Nos Circuits'}</span>
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Section Hostal avec marqueur */}
        <section ref={hostalSectionRef} className="mb-20">
          {/* Marqueur de section Hostal */}
          <div className="inline-flex items-center gap-3 bg-amber-100 text-amber-800 px-6 py-3 rounded-full font-bold mb-8 shadow-md">
            <span className="text-2xl">🏨</span>
            <span className="text-lg">
              {lang === 'es' ? 'Hospedaje' : lang === 'en' ? 'Accommodation' : 'Hébergement'}
            </span>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="flex justify-center">
              <img
                src={hostal.image}
                alt={hostalName}
                className="rounded-xl shadow-lg w-full max-w-xs h-96 object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">{hostalName}</h2>
              <p className="text-slate-700 leading-relaxed mb-6">{hostalDesc}</p>
              <div className="space-y-2 text-sm text-slate-700">
                <p><strong>{lang === 'es' ? 'Email:' : lang === 'en' ? 'Email:' : 'Email:'}
                </strong> {hostal.email}</p>
                <p><strong>{lang === 'es' ? 'Teléfono:' : lang === 'en' ? 'Phone:' : 'Téléphone:'}
                </strong> {hostal.phone}</p>
                <p><strong>{lang === 'es' ? 'Dirección:' : lang === 'en' ? 'Address:' : 'Adresse:'}
                </strong> {hostal.address}</p>
              </div>
            </div>
          </div>
        </section>

        <section ref={roomsRef} className="mb-20">
          <h3 className="text-3xl font-bold text-slate-900 mb-4">{lang === 'es' ? 'Habitaciones' : lang === 'en' ? 'Rooms' : 'Chambres'}</h3>
          <p className="text-slate-600 mb-12">{lang === 'es' ? 'Confort auténtico en el corazón histórico' : lang === 'en' ? 'Authentic comfort in the historic heart' : 'Confort authentique au cœur historique'}</p>

          <div className="grid md:grid-cols-3 gap-8">
            {hostal.rooms.map(room => (
              <div key={room.id} data-room-card>
                <RoomCard room={room} lang={lang} />
              </div>
            ))}
          </div>
        </section>

        {/* Hero Section de Transition - Séparation Chambres/Tours */}
        <section ref={heroTransitionRef} className="relative mb-20 overflow-hidden">
          <div className="relative h-96 flex items-center justify-center">
            {/* Image de fond */}
            <div className="absolute inset-0">
              <img 
                src="/histoire-potosi.jpg"
                alt="Potosí"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-amber-900/60 to-red-800/60"></div>
            </div>

            {/* Contenu */}
            <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                {lang === 'es' 
                  ? '¿Listo para explorar la historia?' 
                  : lang === 'en' 
                  ? 'Ready to explore history?' 
                  : 'Prêt à explorer l\'histoire ?'}
              </h2>
              <p className="text-xl md:text-2xl mb-8 text-amber-100">
                {lang === 'es'
                  ? 'Descubre nuestras expediciones por Potosí y sus alrededores'
                  : lang === 'en'
                  ? 'Discover our expeditions through Potosí and its surroundings'
                  : 'Découvrez nos expéditions à travers Potosí et ses environs'}
              </p>
              <button
                onClick={() => {
                  toursRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className="inline-block bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-full font-bold text-lg shadow-xl transition-all cursor-pointer hover:scale-105"
              >
                {lang === 'es' ? '↓ Explora Nuestros Circuitos' : lang === 'en' ? '↓ Explore Our Tours' : '↓ Explorez Nos Circuits'}
              </button>
            </div>
          </div>
        </section>

        {/* Section Tours avec fond différent */}
        <section ref={toursRef} className="relative px-4 sm:px-6 lg:px-8 py-16 bg-white mb-20">
          <div className="max-w-7xl mx-auto">
            {/* Marqueur de section Tours */}
            <div className="inline-flex items-center gap-3 bg-amber-100 text-amber-800 px-6 py-3 rounded-full font-bold mb-8 shadow-md">
              <span className="text-2xl">🚙</span>
              <span className="text-lg">
                {lang === 'es' ? 'Expediciones & Tours' : lang === 'en' ? 'Expeditions & Tours' : 'Expéditions & Circuits'}
              </span>
            </div>

            <h3 className="text-3xl font-bold text-slate-900 mb-2">{getTranslation(lang, 'potosi.toursTitle')}</h3>
            <p className="text-slate-700 mb-4">{getTranslation(lang, 'potosi.toursPitch')}</p>
            <p className="text-slate-600 mb-12">{getTranslation(lang, 'potosi.tours')}</p>

            <div className="grid md:grid-cols-2 gap-8">
              {sortedTours.map(tour => (
                <div key={tour.id} data-tour-card>
                  <TourCard tour={tour} lang={lang} />
                </div>
              ))}
            </div>

            {/* Bouton retour vers les chambres */}
            <div className="text-center mt-16 pt-8 border-t-2 border-amber-200">
              <button
                onClick={() => {
                  roomsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl transition-all hover:scale-105 inline-flex items-center gap-2"
              >
                <span>🏨</span>
                <span>{lang === 'es' ? 'Reservar una Habitación' : lang === 'en' ? 'Book a Room' : 'Réserver une Chambre'}</span>
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}