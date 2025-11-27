// src/pages/Home.tsx
import { useParams, Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { Language, getTranslation } from '../data/translations';

export default function Home() {
  const params = useParams<{ lang?: string }>();
  const lang = (params.lang || 'es') as Language;

  return (
    <div className="min-h-screen pt-16 bg-slate-50">
      <div className="grid md:grid-cols-2 min-h-[calc(100vh-64px)]">
        {/* Uyuni Card */}
        <div
          className="relative overflow-hidden text-white p-8 md:p-16 flex flex-col justify-center group cursor-pointer transition-transform duration-500 hover:scale-[1.02]"
        >
          {/* Image de fond */}
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
            style={{ backgroundImage: 'url(/Salar.png)' }}
          />
          
          {/* Overlay avec dégradé */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-blue-800/30 to-blue-600/20 group-hover:from-blue-900/50 group-hover:via-blue-800/40 group-hover:to-blue-600/30 transition-all duration-500" />
          
          {/* Contenu */}
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 transform transition-transform duration-500 group-hover:translate-x-2">
              {lang === 'es' ? 'Salar de Uyuni' : lang === 'en' ? 'Salar de Uyuni' : 'Salar d\'Uyuni'}
            </h2>
            <p className="text-lg md:text-xl mb-8 text-blue-50 leading-relaxed transform transition-all duration-500 group-hover:translate-x-2">
              {lang === 'es'
                ? 'Descubre el desierto de sal más grande del mundo. Hospédate en nuestro Hostal Eucalyptus y vive una aventura inolvidable.'
                : lang === 'en'
                ? 'Discover the world\'s largest salt desert. Stay at our Eucalyptus Hostal and experience an unforgettable adventure.'
                : 'Découvrez le plus grand désert de sel du monde. Séjournez au Hostal Eucalyptus et vivez une aventure inoubliable.'}
            </p>
            <Link
              to={`/${lang}/uyuni`}
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold transition-all hover:gap-3 transform hover:scale-105 shadow-lg hover:shadow-2xl"
            >
              {getTranslation(lang, 'home.explore')}
              <ChevronRight size={20} />
            </Link>
          </div>
        </div>

        {/* Potosí Card */}
        <div
          className="relative overflow-hidden text-white p-8 md:p-16 flex flex-col justify-center group cursor-pointer transition-transform duration-500 hover:scale-[1.02]"
        >
          {/* Image de fond */}
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
            style={{ backgroundImage: 'url(/Potosi.jpg)' }}
          />
          
          {/* Overlay avec dégradé */}
          <div className="absolute inset-0 bg-gradient-to-br from-amber-900/40 via-red-800/30 to-red-700/20 group-hover:from-amber-900/50 group-hover:via-red-800/40 group-hover:to-red-700/30 transition-all duration-500" />
          
          {/* Contenu */}
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 transform transition-transform duration-500 group-hover:translate-x-2">
              {lang === 'es' ? 'Potosí' : lang === 'en' ? 'Potosí' : 'Potosí'}
            </h2>
            <p className="text-lg md:text-xl mb-8 text-amber-50 leading-relaxed transform transition-all duration-500 group-hover:translate-x-2">
              {lang === 'es'
                ? 'Viaja en el tiempo explorando la historia colonial y minera de Bolivia. Hospédate en Hostal Eucalyptus, nuestro hostal histórico.'
                : lang === 'en'
                ? 'Travel back in time exploring Bolivia\'s colonial and mining history. Stay at Hostal Eucalyptus, our historic hostel.'
                : 'Voyagez dans le temps en explorant l\'histoire coloniale et minière de la Bolivie. Séjournez au Hostal Eucalyptus, notre auberge historique.'}
            </p>
            <Link
              to={`/${lang}/potosi`}
              className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-500 text-slate-900 px-8 py-3 rounded-lg font-semibold transition-all hover:gap-3 transform hover:scale-105 shadow-lg hover:shadow-2xl"
            >
              {getTranslation(lang, 'home.explore')}
              <ChevronRight size={20} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}