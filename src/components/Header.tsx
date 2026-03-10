import React, { useState } from 'react';
import { Search, Menu, User, LogIn, Phone, MapPin } from 'lucide-react';
import { APP_NAME, CONTACT_INFO } from '../constants';

export default function Header() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <header className="bg-white border-b-4 border-black sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main header */}
        <div className="flex justify-between items-center h-20 sm:h-24">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-3 group">
              <div className="w-12 h-12 bg-brand border-4 border-black rounded-none flex items-center justify-center text-black font-display text-3xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group-hover:rotate-6 transition-transform">
                C
              </div>
              <span className="font-display text-2xl uppercase hidden md:block">
                {APP_NAME}
              </span>
            </a>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-md mx-8 hidden lg:block">
            <div className="relative">
              <input
                type="text"
                className="block w-full pl-4 pr-10 py-3 border-4 border-black rounded-none bg-white placeholder-slate-500 focus:outline-none focus:bg-brand transition-all font-bold"
                placeholder="Search for subjects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <Search className="h-6 w-6 text-black" />
              </div>
            </div>
          </div>

          {/* Navigation & Auth */}
          <div className="flex items-center space-x-6">
            <nav className="hidden md:flex space-x-8 font-display uppercase text-lg">
              <a href="/curriculum" className="hover:text-accent underline decoration-4 underline-offset-4">Lessons</a>
              <a href="/about" className="hover:text-accent underline decoration-4 underline-offset-4">Our Story</a>
              <a href="/dashboard" className="hover:text-accent underline decoration-4 underline-offset-4">My Portal</a>
            </nav>

            <div className="flex items-center space-x-3">
              <button className="brutal-btn-secondary !px-4 !py-2 !text-sm hidden sm:block">
                Login
              </button>
              <button className="brutal-btn !px-4 !py-2 !text-sm">
                Join Us
              </button>
              <button className="p-2 border-4 border-black bg-white md:hidden">
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
