
import React from 'react';

interface HeroProps {
  onExplore: () => void;
}

const Hero: React.FC<HeroProps> = ({ onExplore }) => {
  return (
    <div className="relative min-h-[85vh] flex items-center overflow-hidden bg-slate-900">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=2000" 
          className="w-full h-full object-cover opacity-60 scale-105 animate-[pulse_10s_ease-in-out_infinite]"
          alt="Adventure Background"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/40 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          <span className="inline-block px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold tracking-widest uppercase mb-4 backdrop-blur-sm border border-blue-500/30">
            Jelajahi Indonesia Bersama Kami
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
            Liburan Seru <br/> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-amber-400">Gak Pake Ribet.</span>
          </h1>
          <p className="text-xl text-slate-300 mb-8 leading-relaxed">
            Temukan teman baru dan destinasi impian di Indonesia dengan paket open trip terlengkap, transparan, dan terpercaya.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={onExplore}
              className="bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-900/40"
            >
              Cari Destinasi
            </button>
            <button className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-xl text-lg font-bold hover:bg-white/20 transition-all">
              Cara Booking
            </button>
          </div>

          <div className="mt-12 flex items-center gap-8 border-t border-white/10 pt-8">
            <div>
              <p className="text-3xl font-bold text-white">50+</p>
              <p className="text-slate-400 text-sm">Destinasi</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">10k+</p>
              <p className="text-slate-400 text-sm">Travelers</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">4.9/5</p>
              <p className="text-slate-400 text-sm">Rating</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
