import { useLocation } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram } from 'lucide-react';
import { Language, getTranslation } from '../data/translations';

export default function Footer() {
  const location = useLocation();
  
  // Extraire la langue depuis le pathname
  const getCurrentLang = (): Language => {
    const pathLang = location.pathname.split('/')[1];
    if (pathLang === 'en' || pathLang === 'fr' || pathLang === 'es') {
      return pathLang;
    }
    return 'es'; // langue par défaut
  };

  const lang = getCurrentLang();

  // Déterminer la destination actuelle
  const getCurrentDestination = (): 'uyuni' | 'potosi' => {
    if (location.pathname.includes('/uyuni')) {
      return 'uyuni';
    }
    return 'potosi'; // défaut
  };

  const destination = getCurrentDestination();

  const addresses = {
    uyuni: {
      street: 'Calle Cabrera entre Santa Cruz y Colombia',
      coords: '-19.2271,-66.8253' // coordonnées Uyuni
    },
    potosi: {
      street: 'Linares 88A, Villa Imperial de Potosí',
      coords: '-19.5859,-65.7533' // coordonnées Potosí
    }
  };

  const currentAddress = addresses[destination];

  const handlePhoneClick = () => {
    const phoneNumber = '591619131210';
    const message = encodeURIComponent(
      lang === 'es'
        ? 'Hola, me gustaría más información sobre sus servicios'
        : lang === 'en'
        ? 'Hi, I would like more information about your services'
        : 'Bonjour, j\'aimerais plus d\'informations sur vos services'
    );
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleAddressClick = () => {
    const mapsUrl = `https://www.google.com/maps/search/${encodeURIComponent(currentAddress.street)}/`;
    window.open(mapsUrl, '_blank');
  };

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <span>🐨</span> Koala Bolivia
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              {getTranslation(lang, 'footer.description')}
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">{getTranslation(lang, 'footer.contact')}</h4>
            <div className="space-y-3 text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-amber-500" />
                <span>koalabolivia@hotmail.com</span>
              </div>
              <button
                onClick={handlePhoneClick}
                className="flex items-center gap-2 hover:text-amber-500 transition-colors cursor-pointer"
              >
                <Phone size={16} className="text-amber-500" />
                <span>+591 61913121</span>
              </button>
              <button
                onClick={handleAddressClick}
                className="flex items-start gap-2 hover:text-amber-500 transition-colors cursor-pointer w-full text-left"
              >
                <MapPin size={16} className="text-amber-500 mt-1 flex-shrink-0" />
                <span>{currentAddress.street}</span>
              </button>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">{getTranslation(lang, 'footer.followUs')}</h4>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/p/KOALA-TOURS-100064098846414/" className="hover:text-amber-500 transition-colors" target="_blank" rel="noopener noreferrer">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-amber-500 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 mt-8">
          <p className="text-center text-slate-400 text-sm">
            &copy; {new Date().getFullYear()} Koala Bolivia. {getTranslation(lang, 'footer.allRights')}.
          </p>
        </div>
      </div>
    </footer>
  );
}