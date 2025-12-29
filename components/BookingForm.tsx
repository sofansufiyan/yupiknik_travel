
import React, { useState } from 'react';
import { Trip, Booking } from '../types';

interface BookingFormProps {
  trip: Trip;
  onCancel: () => void;
  onSuccess: (booking: Booking) => void;
}

const BookingForm: React.FC<BookingFormProps> = ({ trip, onCancel, onSuccess }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    participants: 1
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newBooking: Booking = {
      id: `TRIP-${Math.random().toString(36).substr(2, 9).toUpperCase()}`,
      tripId: trip.id,
      customerName: formData.name,
      email: formData.email,
      phone: formData.phone,
      status: 'Pending',
      totalPrice: trip.price * formData.participants,
      bookingDate: new Date().toISOString()
    };
    onSuccess(newBooking);
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm overflow-y-auto">
      <div className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden animate-[fadeIn_0.3s_ease-out]">
        <div className="relative h-48 sm:h-56">
          <img src={trip.image} alt={trip.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
            <div>
              <h2 className="text-2xl font-bold text-white">{trip.title}</h2>
              <p className="text-white/80">{trip.location} • {trip.duration}</p>
            </div>
          </div>
          <button 
            onClick={onCancel}
            className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full backdrop-blur-md transition-all"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/></svg>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-slate-800 border-b pb-2">Data Pemesan</h3>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Nama Lengkap</label>
                <input 
                  required
                  type="text" 
                  className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Email</label>
                <input 
                  required
                  type="email" 
                  className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">WhatsApp</label>
                <input 
                  required
                  type="tel" 
                  className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-bold text-slate-800 border-b pb-2">Detail Pesanan</h3>
              <div className="bg-slate-50 p-4 rounded-2xl">
                <div className="flex justify-between mb-2">
                  <span className="text-slate-500 text-sm">Harga per orang</span>
                  <span className="font-bold">Rp {trip.price.toLocaleString()}</span>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-slate-500 text-sm">Jumlah Orang</span>
                  <div className="flex items-center gap-3">
                    <button 
                      type="button"
                      onClick={() => setFormData({...formData, participants: Math.max(1, formData.participants - 1)})}
                      className="w-8 h-8 flex items-center justify-center bg-white border rounded-full text-blue-600 font-bold"
                    >-</button>
                    <span className="font-bold w-4 text-center">{formData.participants}</span>
                    <button 
                      type="button"
                      onClick={() => setFormData({...formData, participants: formData.participants + 1})}
                      className="w-8 h-8 flex items-center justify-center bg-white border rounded-full text-blue-600 font-bold"
                    >+</button>
                  </div>
                </div>
                <div className="border-t pt-4 flex justify-between">
                  <span className="font-bold text-slate-800">Total Pembayaran</span>
                  <span className="text-xl font-extrabold text-blue-600">Rp {(trip.price * formData.participants).toLocaleString()}</span>
                </div>
              </div>
              <div className="text-[10px] text-slate-400 italic">
                * Dengan mengklik 'Pesan Sekarang', Anda menyetujui syarat dan ketentuan yang berlaku di YUPIKNIK.
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <button 
              type="button"
              onClick={onCancel}
              className="flex-1 py-4 text-slate-600 font-bold hover:bg-slate-50 rounded-2xl transition-all"
            >
              Kembali
            </button>
            <button 
              type="submit"
              className="flex-[2] py-4 bg-blue-600 text-white font-bold rounded-2xl shadow-xl shadow-blue-200 hover:bg-blue-700 transition-all"
            >
              Pesan Sekarang
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
