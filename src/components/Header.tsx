// src/components/Header.tsx
import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, MessageCircle } from 'lucide-react';
import { Language, getTranslation } from '../data/translations';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const params = useParams<{ lang?: string }>();
  const navigate = useNavigate();
  const location = useLocation();
  
  // Extraire la langue depuis le pathname au lieu de params
  const getCurrentLang = (): Language => {
    const pathLang = location.pathname.split('/')[1];
    if (pathLang === 'en' || pathLang === 'fr' || pathLang === 'es') {
      return pathLang;
    }
    return 'es'; // langue par défaut
  };

  const lang = getCurrentLang();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleLanguageChange = (newLang: Language) => {
    // Extraire le chemin actuel sans la langue
    const pathWithoutLang = location.pathname.replace(/^\/(es|en|fr)/, '');
    // Naviguer vers la même page mais avec la nouvelle langue
    navigate(`/${newLang}${pathWithoutLang}`);
    setIsMenuOpen(false);
  };

  const handleWhatsAppContact = () => {
    const phoneNumber = '59172401884';
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

  const navItems = [
    { key: 'home', href: `/${lang}` },
    { key: 'uyuni', href: `/${lang}/uyuni` },
    { key: 'potosi', href: `/${lang}/potosi` },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to={`/${lang}`} className="flex items-center gap-2 font-bold text-2xl text-slate-900">
            <span className="text-amber-600">🐨</span> Koala Bolivia
          </Link>

          <nav className="hidden md:flex gap-8">
            {navItems.map(item => (
              <Link
                key={item.key}
                to={item.href}
                className="text-slate-700 hover:text-amber-600 transition-colors font-medium"
              >
                {getTranslation(lang, `nav.${item.key}`)}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button
              onClick={handleWhatsAppContact}
              className="hidden sm:flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors font-medium"
            >
              <MessageCircle size={18} />
              <span>{lang === 'es' ? 'Contactar' : lang === 'en' ? 'Contact' : 'Nous contacter'}</span>            </button>

            <div className="hidden sm:flex items-center gap-2 bg-slate-100 rounded-lg p-1">
              {(['es', 'en', 'fr'] as Language[]).map(l => (
                <button
                  key={l}
                  onClick={() => handleLanguageChange(l)}
                  className={`px-3 py-1 rounded transition-colors ${
                    lang === l
                      ? 'bg-amber-600 text-white'
                      : 'text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {l.toUpperCase()}
                </button>
              ))}
            </div>

            <button
              onClick={toggleMenu}
              className="md:hidden p-2 hover:bg-slate-100 rounded-lg"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4 border-t">
            <nav className="flex flex-col gap-3 pt-4">
              {navItems.map(item => (
                <Link
                  key={item.key}
                  to={item.href}
                  className="text-slate-700 hover:text-amber-600 transition-colors font-medium block px-2 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {getTranslation(lang, `nav.${item.key}`)}
                </Link>
              ))}
            </nav>

            <button
              onClick={() => {
                handleWhatsAppContact();
                setIsMenuOpen(false);
              }}
              className="w-full mt-4 flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors font-medium"
            >
              <MessageCircle size={18} />
              <span>{lang === 'es' ? 'Contactar' : lang === 'en' ? 'Contact' : 'Contacter'}</span>
            </button>

            <div className="flex items-center gap-2 bg-slate-100 rounded-lg p-1 mt-4">
              {(['es', 'en', 'fr'] as Language[]).map(l => (
                <button
                  key={l}
                  onClick={() => handleLanguageChange(l)}
                  className={`px-3 py-1 rounded transition-colors text-sm flex-1 ${
                    lang === l
                      ? 'bg-amber-600 text-white'
                      : 'text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {l.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}