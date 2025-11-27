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

// Composant pour gérer l'attribut lang du HTML
function LanguageManager() {
  const location = useLocation();

  useEffect(() => {
    // Extraire la langue depuis l'URL
    const pathLang = location.pathname.split('/')[1];
    const validLangs = ['es', 'en', 'fr'];
    const currentLang = validLangs.includes(pathLang) ? pathLang : 'es';

    // Mettre à jour l'attribut lang du HTML
    document.documentElement.lang = currentLang;

    // Mettre à jour les balises hreflang dynamiquement
    updateHreflangTags(location.pathname, currentLang);
  }, [location]);

  return null;
}

// Fonction pour mettre à jour les hreflang tags
function updateHreflangTags(pathname: string, currentLang: string) {
  // Extraire le chemin sans la langue
  const pathWithoutLang = pathname.replace(/^\/(es|en|fr)/, '') || '/';
  
  // Supprimer les anciens hreflang tags
  const existingTags = document.querySelectorAll('link[rel="alternate"]');
  existingTags.forEach(tag => tag.remove());

  // Créer les nouveaux hreflang tags
  const languages = ['es', 'en', 'fr'];
  const head = document.head;

  languages.forEach(lang => {
    const link = document.createElement('link');
    link.rel = 'alternate';
    link.hreflang = lang;
    link.href = `https://koalabolivia.com.bo/${lang}${pathWithoutLang}`;
    head.appendChild(link);
  });

  // Ajouter x-default
  const defaultLink = document.createElement('link');
  defaultLink.rel = 'alternate';
  defaultLink.hreflang = 'x-default';
  defaultLink.href = `https://koalabolivia.com.bo${pathWithoutLang}`;
  head.appendChild(defaultLink);
}

function AppRoutes() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <LanguageManager />
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
          {/* Route 404 - optionnel mais recommandé */}
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