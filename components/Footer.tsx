
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-6">
              <span className="text-3xl font-extrabold tracking-tighter text-blue-400">YU</span>
              <span className="text-3xl font-extrabold tracking-tighter text-amber-400">PIKNIK</span>
            </div>
            <p className="text-slate-400 max-w-sm leading-relaxed mb-6">
              Platform Open Trip No. 1 di Indonesia. Menghubungkan petualang dengan destinasi-destinasi terbaik dari Sabang sampai Merauke dengan layanan premium dan harga terjangkau.
            </p>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center cursor-pointer hover:bg-blue-600 transition-all">FB</div>
              <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center cursor-pointer hover:bg-pink-600 transition-all">IG</div>
              <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center cursor-pointer hover:bg-blue-400 transition-all">TW</div>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Destinasi Populer</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Gunung Bromo</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Labuan Bajo</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Nusa Penida</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Derawan Islands</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Informasi</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Syarat & Ketentuan</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Kebijakan Privasi</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Cara Pembayaran</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Hubungi Kami</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-slate-500">
          <p>© 2024 YUPIKNIK Travel. All Rights Reserved.</p>
          <p>Dibuat dengan ❤️ untuk Travelers Indonesia.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
