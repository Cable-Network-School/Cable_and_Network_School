import React from 'react';
import { motion } from 'motion/react';
import { Play, ArrowRight, Globe, BookOpen, Users, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-20 pb-24 lg:pt-32 lg:pb-40">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10">
        <div className="absolute top-1/4 right-10 w-64 h-64 bg-brand border-4 border-black rotate-12 opacity-20" />
        <div className="absolute bottom-1/4 left-10 w-48 h-48 bg-accent border-4 border-black -rotate-12 opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-block px-4 py-2 border-4 border-black bg-brand font-display uppercase text-lg mb-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                Learn for free. Anywhere.
              </div>
              <h1 className="text-6xl lg:text-9xl font-display text-black mb-8">
                School for <span className="bg-brand px-4">Everyone.</span>
              </h1>
              <p className="text-2xl font-bold text-black mb-12 leading-tight max-w-2xl">
                We help kids around the world learn better. Get free lessons for school, university, and more.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
                <button className="brutal-btn !text-2xl !px-10 !py-5 flex items-center">
                  Start Learning
                  <ArrowRight className="ml-3 w-8 h-8" />
                </button>
                <button className="brutal-btn-secondary !text-2xl !px-10 !py-5">
                  See Subjects
                </button>
              </div>

              <div className="mt-16 flex items-center space-x-8">
                <div className="flex -space-x-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-14 h-14 rounded-none border-4 border-black bg-white flex items-center justify-center overflow-hidden">
                      <img src={`https://i.pravatar.cc/150?u=${i}`} alt="user" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
                <div className="font-bold text-xl">
                  <span className="bg-accent text-white px-2">Join us</span> and start your journey today!
                </div>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-5 mt-20 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, rotate: 5, scale: 0.9 }}
              animate={{ opacity: 1, rotate: -2, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square bg-white border-8 border-black shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] overflow-hidden relative group">
                <img
                  src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=1000"
                  alt="Students learning"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="w-24 h-24 bg-brand border-4 border-black flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:scale-110 transition-transform">
                    <Play className="w-10 h-10 text-black fill-black" />
                  </button>
                </div>
                <div className="absolute top-6 left-6 bg-accent text-white px-4 py-2 border-4 border-black font-display text-xl -rotate-6">
                  Watch Video
                </div>
              </div>
              
              {/* Floating element */}
              <div className="absolute -bottom-10 -right-10 bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rotate-3 hidden sm:block">
                <div className="flex items-center space-x-3">
                  <Sparkles className="w-8 h-8 text-brand fill-brand" />
                  <span className="font-display text-2xl">AI Tutor Inside</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
