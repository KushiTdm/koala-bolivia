// src/App.tsx
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Uyuni from './pages/Uyuni';
import Potosi from './pages/Potosi';
import TourDetail from './pages/TourDetail';
import RoomDetail from './pages/RoomDetail';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white flex flex-col">
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
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;