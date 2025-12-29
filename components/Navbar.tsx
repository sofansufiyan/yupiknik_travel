
import React from 'react';
import { ViewState } from '../types';

interface NavbarProps {
  currentView: ViewState;
  onNavigate: (view: ViewState) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate }) => {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div 
            className="flex items-center cursor-pointer" 
            onClick={() => onNavigate('HOME')}
          >
            <span className="text-2xl font-extrabold tracking-tighter text-blue-600">YU</span>
            <span className="text-2xl font-extrabold tracking-tighter text-amber-500">PIKNIK</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => onNavigate('HOME')}
              className={`text-sm font-medium transition-colors ${currentView === 'HOME' ? 'text-blue-600' : 'text-slate-600 hover:text-blue-600'}`}
            >
              Home
            </button>
            <button 
              onClick={() => onNavigate('DIRECTORY')}
              className={`text-sm font-medium transition-colors ${currentView === 'DIRECTORY' ? 'text-blue-600' : 'text-slate-600 hover:text-blue-600'}`}
            >
              Destinasi
            </button>
            <button 
              onClick={() => onNavigate('TRACKING')}
              className={`text-sm font-medium transition-colors ${currentView === 'TRACKING' ? 'text-blue-600' : 'text-slate-600 hover:text-blue-600'}`}
            >
              Cek Pesanan
            </button>
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={() => onNavigate('DIRECTORY')}
              className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200"
            >
              Booking Sekarang
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
