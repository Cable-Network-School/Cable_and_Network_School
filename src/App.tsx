import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Curriculum from './pages/Curriculum';
import Dashboard from './pages/Dashboard';
import CourseView from './pages/CourseView';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleLocationChange = () => {
      setPath(window.location.pathname);
    };

    window.addEventListener('popstate', handleLocationChange);
    
    // Intercept link clicks for SPA navigation
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      if (anchor && anchor.href.startsWith(window.location.origin)) {
        e.preventDefault();
        const url = new URL(anchor.href);
        window.history.pushState({}, '', url.pathname);
        setPath(url.pathname);
      }
    };

    document.addEventListener('click', handleLinkClick);

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      document.removeEventListener('click', handleLinkClick);
    };
  }, []);

  const renderPage = () => {
    if (path.startsWith('/dashboard')) return <Dashboard />;
    if (path.startsWith('/course')) return <CourseView />;

    switch (path) {
      case '/':
        return <Home />;
      case '/about':
        return <About />;
      case '/curriculum':
        return <Curriculum />;
      default:
        return <Home />;
    }
  };

  const isDashboard = path.startsWith('/dashboard');

  return (
    <div className="min-h-screen flex flex-col">
      {!isDashboard && <Header />}
      <AnimatePresence mode="wait">
        <motion.div
          key={path}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="flex-1"
        >
          {renderPage()}
        </motion.div>
      </AnimatePresence>

      {!isDashboard && (
        <footer className="bg-black text-white py-20 border-t-8 border-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
              <div className="col-span-1 md:col-span-2">
                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-12 h-12 bg-brand border-4 border-black flex items-center justify-center font-display text-2xl text-black shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]">C</div>
                  <span className="text-3xl font-display uppercase tracking-tighter">Cable and Internet School</span>
                </div>
                <p className="text-slate-400 max-w-md mb-8 text-lg font-medium">
                  We want to help everyone in the world learn for free. Join us and let's learn together!
                </p>
                <div className="text-sm font-bold uppercase tracking-widest text-slate-500">
                  &copy; {new Date().getFullYear()} Tsalosesha Pty Ltd.
                </div>
              </div>
              <div>
                <h4 className="font-display text-xl uppercase mb-8 text-brand">What we teach</h4>
                <ul className="space-y-4 text-slate-400 text-lg font-medium">
                  <li><a href="/curriculum" className="hover:text-brand transition-colors">School Lessons</a></li>
                  <li><a href="/curriculum" className="hover:text-brand transition-colors">University Prep</a></li>
                  <li><a href="/curriculum" className="hover:text-brand transition-colors">Short Courses</a></li>
                  <li><a href="/curriculum" className="hover:text-brand transition-colors">Skill Building</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-display text-xl uppercase mb-8 text-brand">Say Hello</h4>
                <ul className="space-y-4 text-slate-400 text-lg font-medium">
                  <li>Mmabatho, South Africa</li>
                  <li>018 384 5534</li>
                  <li>hello@cableinternetschool.org</li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
}
