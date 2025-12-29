
import React, { useState, useMemo } from 'react';
import { Trip } from '../types';
import { TRIPS } from '../constants';

interface TripDirectoryProps {
  onBook: (trip: Trip) => void;
}

const TripDirectory: React.FC<TripDirectoryProps> = ({ onBook }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState<string>('All');
  const [maxPrice, setMaxPrice] = useState<number>(4000000);

  const filteredTrips = useMemo(() => {
    return TRIPS.filter(trip => {
      const matchesSearch = trip.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                           trip.location.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = filterCategory === 'All' || trip.category === filterCategory;
      const matchesPrice = trip.price <= maxPrice;
      return matchesSearch && matchesCategory && matchesPrice;
    });
  }, [searchTerm, filterCategory, maxPrice]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h2 className="text-3xl font-extrabold text-slate-900 mb-2">Destinasi Open Trip</h2>
        <p className="text-slate-500">Pilih petualanganmu berikutnya dari katalog pilihan kami.</p>
      </div>

      {/* Filters */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
        <div className="lg:col-span-1 space-y-6 bg-white p-6 rounded-2xl shadow-sm border border-slate-100 h-fit sticky top-24">
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">Cari Nama/Lokasi</label>
            <input 
              type="text" 
              placeholder="Contoh: Bromo..."
              className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">Kategori</label>
            <div className="flex flex-wrap gap-2">
              {['All', 'Mountain', 'Beach', 'Island', 'Cultural'].map(cat => (
                <button
                  key={cat}
                  onClick={() => setFilterCategory(cat)}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                    filterCategory === cat 
                    ? 'bg-blue-600 text-white shadow-md' 
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <label className="text-sm font-bold text-slate-700">Budget Max</label>
              <span className="text-sm font-bold text-blue-600">Rp {maxPrice.toLocaleString()}</span>
            </div>
            <input 
              type="range" 
              min="300000" 
              max="4000000" 
              step="100000"
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
              value={maxPrice}
              onChange={(e) => setMaxPrice(parseInt(e.target.value))}
            />
            <div className="flex justify-between mt-1 text-[10px] text-slate-400">
              <span>Rp 300rb</span>
              <span>Rp 4jt</span>
            </div>
          </div>
        </div>

        {/* Catalog Grid */}
        <div className="lg:col-span-3">
          {filteredTrips.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredTrips.map(trip => (
                <div key={trip.id} className="group bg-white rounded-2xl overflow-hidden border border-slate-100 hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                  <div className="relative h-56 overflow-hidden">
                    <img 
                      src={trip.image} 
                      alt={trip.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold text-blue-600 uppercase tracking-widest shadow-sm">
                        {trip.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-slate-900 leading-tight">{trip.title}</h3>
                    </div>
                    <div className="flex items-center gap-2 text-slate-500 text-sm mb-4">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                      {trip.location}
                    </div>
                    <p className="text-slate-600 text-sm line-clamp-2 mb-6">
                      {trip.description}
                    </p>
                    <div className="mt-auto border-t border-slate-50 pt-4 flex items-center justify-between">
                      <div>
                        <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Mulai Dari</p>
                        <p className="text-xl font-extrabold text-blue-600">Rp {trip.price.toLocaleString()}</p>
                      </div>
                      <button 
                        onClick={() => onBook(trip)}
                        className="bg-blue-600 text-white px-4 py-2 rounded-xl text-sm font-bold hover:bg-blue-700 transition-all shadow-md shadow-blue-100"
                      >
                        Detail & Booking
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white p-12 rounded-3xl text-center border-2 border-dashed border-slate-200">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-bold text-slate-800">Ups, Destinasi Tidak Ditemukan</h3>
              <p className="text-slate-500">Coba ubah kata kunci atau filter pencarianmu.</p>
              <button 
                onClick={() => { setSearchTerm(''); setFilterCategory('All'); setMaxPrice(4000000); }}
                className="mt-4 text-blue-600 font-bold hover:underline"
              >
                Reset Semua Filter
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TripDirectory;
