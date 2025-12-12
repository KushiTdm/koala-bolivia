import { useLocation } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook } from 'lucide-react';
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

  // Déterminer le contexte actuel (destination + type de page)
  const getCurrentContext = (): { destination: 'uyuni' | 'potosi', type: 'tour' | 'hostal' | 'general' } => {
    const path = location.pathname.toLowerCase();
    
    // Vérifier si on est sur une page de tour
    if (path.includes('/tours/')) {
      // Si c'est le tour uyuni-custom spécifiquement
      if (path.includes('uyuni-custom')) {
        return { destination: 'uyuni', type: 'tour' };
      }
      // Tous les autres tours sont de Potosí
      return { destination: 'potosi', type: 'tour' };
    }
    
    // Vérifier si on est sur une page d'hostal (room)
    if (path.includes('/room/')) {
      if (path.includes('/uyuni/')) {
        return { destination: 'uyuni', type: 'hostal' };
      } else if (path.includes('/potosi/')) {
        return { destination: 'potosi', type: 'hostal' };
      }
    }
    
    // Pages générales uyuni ou potosi
    if (path.includes('/uyuni')) {
      return { destination: 'uyuni', type: 'general' };
    }
    
    return { destination: 'potosi', type: 'general' };
  };

  const context = getCurrentContext();

  const contactInfo = {
    // 1. Tours Potosí: WhatsApp 591 61914606 / Email koalabolivia@hotmail.com
    potosi_tour: {
      phone: '59161914606',
      email: 'koalabolivia@hotmail.com',
      street: 'Linares 88A, Villa Imperial de Potosí',
      coords: '-19.5859,-65.7533'
    },
    // 2. Tour exclusivo Salar Uyuni: WhatsApp 591 72401884 / Email salarpotosi@gmail.com
    uyuni_tour: {
      phone: '59172401884',
      email: 'salarpotosi@gmail.com',
      street: 'Calle Cabrera entre Santa Cruz y Colombia',
      coords: '-19.2271,-66.8253'
    },
    // 3. Hostal Potosí: WhatsApp 591 72401884 / Email salarpotosi@gmail.com
    potosi_hostal: {
      phone: '59172401884',
      email: 'salarpotosi@gmail.com',
      street: 'Linares 88A, Villa Imperial de Potosí',
      coords: '-19.5859,-65.7533'
    },
    // 4. Hostal Uyuni: WhatsApp 591 61913121 / Email eucalyptusuyuni@gmail.com
    uyuni_hostal: {
      phone: '59161913121',
      email: 'eucalyptusuyuni@gmail.com',
      street: 'Calle Cabrera entre Santa Cruz y Colombia',
      coords: '-19.2271,-66.8253'
    },
    // 5. Parte inferior de página Uyuni: WhatsApp 591 61913121 / Email eucalyptusuyuni@gmail.com
    uyuni_general: {
      phone: '59161913121',
      email: 'eucalyptusuyuni@gmail.com',
      street: 'Calle Cabrera entre Santa Cruz y Colombia',
      coords: '-19.2271,-66.8253'
    },
    // 6. Parte inferior de página Potosí: WhatsApp 591 72401884 / Email salarpotosi@gmail.com
    potosi_general: {
      phone: '59172401884',
      email: 'salarpotosi@gmail.com',
      street: 'Linares 88A, Villa Imperial de Potosí',
      coords: '-19.5859,-65.7533'
    }
  };

  // Sélectionner les bonnes informations de contact selon le contexte
  const getContactInfo = () => {
    const key = `${context.destination}_${context.type}` as keyof typeof contactInfo;
    return contactInfo[key];
  };

  const currentContact = getContactInfo();

  const handlePhoneClick = () => {
    const message = encodeURIComponent(
      lang === 'es'
        ? 'Hola, me gustaría más información sobre sus servicios'
        : lang === 'en'
        ? 'Hi, I would like more information about your services'
        : 'Bonjour, j\'aimerais plus d\'informations sur vos services'
    );
    const whatsappUrl = `https://wa.me/${currentContact.phone}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleEmailClick = () => {
    const subject = encodeURIComponent(
      lang === 'es'
        ? 'Solicitud de información'
        : lang === 'en'
        ? 'Information request'
        : 'Demande d\'information'
    );
    const body = encodeURIComponent(
      lang === 'es'
        ? 'Hola,\n\nMe gustaría obtener más información sobre sus servicios.\n\nGracias.'
        : lang === 'en'
        ? 'Hello,\n\nI would like to get more information about your services.\n\nThank you.'
        : 'Bonjour,\n\nJ\'aimerais obtenir plus d\'informations sur vos services.\n\nMerci.'
    );
    window.location.href = `mailto:${currentContact.email}?subject=${subject}&body=${body}`;
  };

  const handleAddressClick = () => {
    const mapsUrl = `https://www.google.com/maps/search/${encodeURIComponent(currentContact.street)}/`;
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
              <button
                onClick={handleEmailClick}
                className="flex items-center gap-2 hover:text-amber-500 transition-colors cursor-pointer"
              >
                <Mail size={16} className="text-amber-500" />
                <span>{currentContact.email}</span>
              </button>
              <button
                onClick={handlePhoneClick}
                className="flex items-center gap-2 hover:text-amber-500 transition-colors cursor-pointer"
              >
                <Phone size={16} className="text-amber-500" />
                <span>+{currentContact.phone}</span>
              </button>
              <button
                onClick={handleAddressClick}
                className="flex items-start gap-2 hover:text-amber-500 transition-colors cursor-pointer w-full text-left"
              >
                <MapPin size={16} className="text-amber-500 mt-1 flex-shrink-0" />
                <span>{currentContact.street}</span>
              </button>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">{getTranslation(lang, 'footer.followUs')}</h4>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/p/KOALA-TOURS-100064098846414/" className="hover:text-amber-500 transition-colors" target="_blank" rel="noopener noreferrer">
                <Facebook size={20} />
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