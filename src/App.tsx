// src/App.tsx
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Uyuni from './pages/Uyuni';
import Potosi from './pages/Potosi';
import TourDetail from './pages/TourDetail';
import RoomDetail from './pages/RoomDetail';

// Composant pour gérer l'attribut lang du HTML et les meta tags SEO
function SEOManager() {
  const location = useLocation();

  useEffect(() => {
    // Extraire la langue depuis l'URL
    const pathLang = location.pathname.split('/')[1];
    const validLangs = ['es', 'en', 'fr'];
    const currentLang = validLangs.includes(pathLang) ? pathLang : 'es';

    // Mettre à jour l'attribut lang du HTML
    document.documentElement.lang = currentLang;

    // Mettre à jour les balises hreflang et canonical dynamiquement
    updateSEOTags(location.pathname, currentLang);
  }, [location]);

  return null;
}

// Fonction pour mettre à jour les tags SEO (hreflang, canonical)
function updateSEOTags(pathname: string, currentLang: string) {
  const baseUrl = 'https://koalabolivia.com';
  
  // Extraire le chemin sans la langue
  const pathWithoutLang = pathname.replace(/^\/(es|en|fr)/, '') || '/';
  
  // Supprimer les anciens tags
  const existingHreflang = document.querySelectorAll('link[rel="alternate"]');
  const existingCanonical = document.querySelector('link[rel="canonical"]');
  existingHreflang.forEach(tag => tag.remove());
  if (existingCanonical) existingCanonical.remove();

  const head = document.head;

  // Créer les nouveaux hreflang tags
  const languages = ['es', 'en', 'fr'];
  languages.forEach(lang => {
    const link = document.createElement('link');
    link.rel = 'alternate';
    link.hreflang = lang;
    link.href = `${baseUrl}/${lang}${pathWithoutLang}`;
    head.appendChild(link);
  });

  // Ajouter x-default
  const defaultLink = document.createElement('link');
  defaultLink.rel = 'alternate';
  defaultLink.hreflang = 'x-default';
  defaultLink.href = `${baseUrl}${pathWithoutLang}`;
  head.appendChild(defaultLink);

  // Ajouter canonical
  const canonical = document.createElement('link');
  canonical.rel = 'canonical';
  canonical.href = `${baseUrl}/${currentLang}${pathWithoutLang}`;
  head.appendChild(canonical);

  // Mettre à jour le title selon la page
  updatePageTitle(pathWithoutLang, currentLang);

  // Mettre à jour Open Graph URL
  updateOGTags(pathname, currentLang);
}

// Fonction pour mettre à jour le title de la page
function updatePageTitle(path: string, lang: string) {
  const titles: Record<string, Record<string, string>> = {
    '/': {
      es: 'Koala Bolivia | Hostales y Tours en Uyuni y Potosí',
      en: 'Koala Bolivia | Hostels and Tours in Uyuni and Potosí',
      fr: 'Koala Bolivia | Auberges et Tours à Uyuni et Potosí'
    },
    '/uyuni': {
      es: 'Hostal y Tours Uyuni | Salar de Uyuni | Koala Bolivia',
      en: 'Uyuni Hostel & Tours | Uyuni Salt Flats | Koala Bolivia',
      fr: 'Auberge et Tours Uyuni | Salar d\'Uyuni | Koala Bolivia'
    },
    '/potosi': {
      es: 'Hostal y Tours Potosí | Minas Cerro Rico | Koala Bolivia',
      en: 'Potosí Hostel & Tours | Cerro Rico Mines | Koala Bolivia',
      fr: 'Auberge et Tours Potosí | Mines Cerro Rico | Koala Bolivia'
    }
  };

  const baseTitle = titles[path]?.[lang] || titles['/'][lang];
  document.title = baseTitle;
}

// Fonction pour mettre à jour les Open Graph tags
function updateOGTags(pathname: string, lang: string) {
  const baseUrl = 'https://koalabolivia.com';
  
  // Mettre à jour og:url
  let ogUrl = document.querySelector('meta[property="og:url"]');
  if (!ogUrl) {
    ogUrl = document.createElement('meta');
    ogUrl.setAttribute('property', 'og:url');
    document.head.appendChild(ogUrl);
  }
  ogUrl.setAttribute('content', `${baseUrl}${pathname}`);

  // Mettre à jour og:locale
  const localeMap: Record<string, string> = {
    es: 'es_BO',
    en: 'en_US',
    fr: 'fr_FR'
  };
  
  let ogLocale = document.querySelector('meta[property="og:locale"]');
  if (!ogLocale) {
    ogLocale = document.createElement('meta');
    ogLocale.setAttribute('property', 'og:locale');
    document.head.appendChild(ogLocale);
  }
  ogLocale.setAttribute('content', localeMap[lang] || 'es_BO');
}

function AppRoutes() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <SEOManager />
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Navigate to="/es" replace />} />
          <Route path="/:lang" element={<Home />} />
          <Route path="/:lang/uyuni" element={<Uyuni />} />
          <Route path="/:lang/potosi" element={<Potosi />} />
          <Route path="/:lang/tours/:id" element={<TourDetail />} />
          <Route path="/:lang/uyuni/rooms/:id" element={<RoomDetail />} />
          <Route path="/:lang/potosi/rooms/:id" element={<RoomDetail />} />
          {/* Route 404 - redirection vers page d'accueil */}
          <Route path="*" element={<Navigate to="/es" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;