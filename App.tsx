
import React, { useState } from 'react';
import { ViewState, Trip, Booking } from './types';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TripDirectory from './components/TripDirectory';
import OrderTracking from './components/OrderTracking';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';
import AiAssistant from './components/AiAssistant';

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>('HOME');
  const [selectedTrip, setSelectedTrip] = useState<Trip | null>(null);
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [lastBooking, setLastBooking] = useState<Booking | null>(null);

  const handleBookingSuccess = (booking: Booking) => {
    setBookings(prev => [booking, ...prev]);
    setLastBooking(booking);
    setSelectedTrip(null);
    setView('BOOKING_SUCCESS');
  };

  const renderContent = () => {
    switch (view) {
      case 'HOME':
        return (
          <>
            <Hero onExplore={() => setView('DIRECTORY')} />
            <div className="bg-white py-24">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">Kenapa YUPIKNIK?</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
                  <div className="p-8 rounded-3xl bg-blue-50/50 group hover:bg-blue-600 hover:text-white transition-all duration-500">
                    <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center text-3xl mx-auto mb-6 group-hover:bg-white group-hover:text-blue-600 transition-colors">⚡</div>
                    <h3 className="text-xl font-bold mb-4">Pesan Instan</h3>
                    <p className="text-slate-500 group-hover:text-blue-100 transition-colors">Booking trip impianmu kurang dari 2 menit tanpa ribet registrasi.</p>
                  </div>
                  <div className="p-8 rounded-3xl bg-amber-50/50 group hover:bg-amber-500 hover:text-white transition-all duration-500">
                    <div className="w-16 h-16 bg-amber-500 text-white rounded-2xl flex items-center justify-center text-3xl mx-auto mb-6 group-hover:bg-white group-hover:text-amber-500 transition-colors">🛡️</div>
                    <h3 className="text-xl font-bold mb-4">Terpercaya</h3>
                    <p className="text-slate-500 group-hover:text-amber-50 transition-colors">Legalitas perusahaan jelas dan telah melayani ribuan travelers.</p>
                  </div>
                  <div className="p-8 rounded-3xl bg-green-50/50 group hover:bg-green-600 hover:text-white transition-all duration-500">
                    <div className="w-16 h-16 bg-green-600 text-white rounded-2xl flex items-center justify-center text-3xl mx-auto mb-6 group-hover:bg-white group-hover:text-green-600 transition-colors">📸</div>
                    <h3 className="text-xl font-bold mb-4">Dokumentasi Kece</h3>
                    <p className="text-slate-500 group-hover:text-green-50 transition-colors">Setiap trip dilengkapi dokumentasi profesional untuk kontenmu.</p>
                  </div>
                </div>
              </div>
            </div>
            <div id="explore">
              <TripDirectory onBook={(trip) => setSelectedTrip(trip)} />
            </div>
          </>
        );
      case 'DIRECTORY':
        return <TripDirectory onBook={(trip) => setSelectedTrip(trip)} />;
      case 'TRACKING':
        return <OrderTracking bookings={bookings} />;
      case 'BOOKING_SUCCESS':
        return (
          <div className="max-w-2xl mx-auto px-4 py-24 text-center">
            <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-5xl mx-auto mb-8 animate-bounce">
              ✓
            </div>
            <h2 className="text-4xl font-extrabold text-slate-900 mb-4">Booking Berhasil!</h2>
            <p className="text-slate-500 mb-8 text-lg">
              Terima kasih, <strong>{lastBooking?.customerName}</strong>. Pesanan Anda sedang kami proses. 
              Simpan ID Pesanan Anda:
            </p>
            <div className="bg-slate-100 p-6 rounded-3xl font-mono text-2xl font-bold mb-8 border-2 border-dashed border-slate-300">
              {lastBooking?.id}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => setView('TRACKING')}
                className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold shadow-xl shadow-blue-200"
              >
                Cek Status Pembayaran
              </button>
              <button 
                onClick={() => setView('HOME')}
                className="bg-slate-200 text-slate-700 px-8 py-4 rounded-2xl font-bold hover:bg-slate-300 transition-all"
              >
                Kembali ke Beranda
              </button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar currentView={view} onNavigate={(v) => setView(v)} />
      
      <main className="flex-grow">
        {renderContent()}
      </main>

      <Footer />

      {selectedTrip && (
        <BookingForm 
          trip={selectedTrip} 
          onCancel={() => setSelectedTrip(null)}
          onSuccess={handleBookingSuccess}
        />
      )}

      <AiAssistant />

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.8); transform-origin: bottom right; }
          to { opacity: 1; transform: scale(1); transform-origin: bottom right; }
        }
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          75% { transform: translateX(5px); }
        }
      `}</style>
    </div>
  );
};

export default App;
