
import React, { useState } from 'react';
import { Booking, Trip } from '../types';
import { TRIPS } from '../constants';

interface OrderTrackingProps {
  bookings: Booking[];
}

const OrderTracking: React.FC<OrderTrackingProps> = ({ bookings }) => {
  const [orderId, setOrderId] = useState('');
  const [foundBooking, setFoundBooking] = useState<Booking | null>(null);
  const [error, setError] = useState(false);

  const handleSearch = () => {
    const booking = bookings.find(b => b.id.toLowerCase() === orderId.toLowerCase());
    if (booking) {
      setFoundBooking(booking);
      setError(false);
    } else {
      setFoundBooking(null);
      setError(true);
    }
  };

  const getTrip = (id: string) => TRIPS.find(t => t.id === id);

  return (
    <div className="max-w-3xl mx-auto px-4 py-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-slate-900 mb-4">Cek Status Pesanan</h2>
        <p className="text-slate-500">Masukkan ID Pesanan (misal: TRIP-ABC123XYZ) untuk melihat detail trip dan status pembayaran Anda.</p>
      </div>

      <div className="bg-white p-4 rounded-3xl shadow-xl border border-slate-100 mb-12 flex flex-col sm:flex-row gap-4">
        <input 
          type="text" 
          placeholder="Masukkan ID Pesanan Anda..."
          className="flex-grow px-6 py-4 rounded-2xl bg-slate-50 border-transparent focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none transition-all text-lg"
          value={orderId}
          onChange={(e) => setOrderId(e.target.value)}
        />
        <button 
          onClick={handleSearch}
          className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-100"
        >
          Cari Pesanan
        </button>
      </div>

      {error && (
        <div className="bg-red-50 text-red-600 p-6 rounded-3xl text-center animate-[shake_0.5s_ease-in-out]">
          <p className="font-bold">ID Pesanan Tidak Ditemukan</p>
          <p className="text-sm">Silakan periksa kembali email konfirmasi Anda atau hubungi admin kami.</p>
        </div>
      )}

      {foundBooking && (
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden animate-[fadeInUp_0.4s_ease-out] border border-slate-100">
          <div className="bg-blue-600 p-8 text-white flex justify-between items-center">
            <div>
              <p className="text-blue-200 text-xs font-bold uppercase tracking-widest mb-1">ID Pesanan</p>
              <h3 className="text-2xl font-mono font-bold tracking-tight">{foundBooking.id}</h3>
            </div>
            <div className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-xl text-sm font-bold border border-white/30">
              {foundBooking.status}
            </div>
          </div>

          <div className="p-8">
            <div className="flex gap-6 mb-8 items-start">
              <img 
                src={getTrip(foundBooking.tripId)?.image} 
                className="w-24 h-24 rounded-2xl object-cover shadow-md"
                alt="Trip"
              />
              <div>
                <h4 className="text-xl font-bold text-slate-900">{getTrip(foundBooking.tripId)?.title}</h4>
                <p className="text-slate-500">{getTrip(foundBooking.tripId)?.location}</p>
                <p className="text-blue-600 font-bold mt-1">{getTrip(foundBooking.tripId)?.duration}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8 mb-8">
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Nama Pemesan</p>
                <p className="font-bold text-slate-800">{foundBooking.customerName}</p>
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Tanggal Booking</p>
                <p className="font-bold text-slate-800">{new Date(foundBooking.bookingDate).toLocaleDateString()}</p>
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Email</p>
                <p className="font-bold text-slate-800">{foundBooking.email}</p>
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Total Pembayaran</p>
                <p className="text-lg font-extrabold text-blue-600">Rp {foundBooking.totalPrice.toLocaleString()}</p>
              </div>
            </div>

            <div className="bg-amber-50 p-6 rounded-2xl border border-amber-100 flex items-start gap-4">
              <div className="text-amber-500 text-2xl">ℹ️</div>
              <div>
                <p className="font-bold text-amber-800 mb-1">Instruksi Pembayaran</p>
                <p className="text-sm text-amber-700 leading-relaxed">
                  Silakan lakukan transfer ke rekening BCA <span className="font-bold">1234567890</span> a/n <span className="font-bold">PT YUPIKNIK TRAVEL</span>. 
                  Setelah transfer, kirimkan bukti pembayaran ke WhatsApp admin (0812-XXXX-XXXX) dengan mencantumkan ID Pesanan Anda.
                </p>
              </div>
            </div>

            <button className="w-full mt-8 py-4 bg-slate-900 text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-slate-800 transition-all">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a2 2 0 002 2h12 a2 2 0 002-2v-1M16 9l-4-4-4 4M12 5v13"/></svg>
              Download E-Ticket & Itinerary
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderTracking;
