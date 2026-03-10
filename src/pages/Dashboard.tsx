import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import { motion } from 'motion/react';
import { BookOpen, Users, Award, Clock, TrendingUp, Plus, Search, Star, GraduationCap } from 'lucide-react';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [role, setRole] = useState<'ADMIN' | 'TEACHER' | 'STUDENT'>('ADMIN');

  const stats = [
    { label: 'My Lessons', value: '0', icon: BookOpen, color: 'text-black', bg: 'bg-brand' },
    { label: 'Time Spent', value: '0h', icon: Clock, color: 'text-black', bg: 'bg-accent' },
    { label: 'My Score', value: '0%', icon: TrendingUp, color: 'text-black', bg: 'bg-brand' },
    { label: 'Certificates', value: '0', icon: Award, color: 'text-black', bg: 'bg-accent' },
  ];

  const renderAdminDashboard = () => (
    <div className="space-y-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="brutal-card p-8 bg-brand">
          <div className="text-xl font-display mb-2">Total Students</div>
          <div className="text-5xl font-display">Join us!</div>
          <div className="text-sm font-bold mt-4">Be the first to learn</div>
        </div>
        <div className="brutal-card p-8 bg-white">
          <div className="text-xl font-display mb-2">Our Teachers</div>
          <div className="text-5xl font-display">Ready</div>
          <div className="text-sm font-bold mt-4">Teachers are waiting for you</div>
        </div>
        <div className="brutal-card p-8 bg-accent text-white">
          <div className="text-xl font-display mb-2">New Lessons</div>
          <div className="text-5xl font-display">Coming</div>
          <div className="text-sm font-bold mt-4">We are adding more every day</div>
        </div>
      </div>

      <div className="brutal-card overflow-hidden">
        <div className="p-8 border-b-4 border-black flex justify-between items-center bg-white">
          <h2 className="text-3xl font-display">Manage Lessons</h2>
          <button className="brutal-btn !py-2 !px-4 flex items-center">
            <Plus className="w-5 h-5 mr-2" />
            Add New
          </button>
        </div>
        <div className="p-8 bg-white">
          <div className="text-center py-12">
            <div className="w-20 h-20 bg-brand border-4 border-black flex items-center justify-center mx-auto mb-6">
              <BookOpen className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-display mb-2">No lessons yet</h3>
            <p className="font-bold text-slate-500">Click the button above to add your first lesson!</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderStudentDashboard = () => (
    <div className="space-y-12">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <div key={i} className="brutal-card p-8">
            <div className="flex items-center justify-between mb-6">
              <div className={`w-14 h-14 ${stat.bg} border-4 border-black flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`}>
                <stat.icon className="w-8 h-8 text-black" />
              </div>
              <Star className="w-6 h-6 text-brand fill-brand" />
            </div>
            <div className="text-4xl font-display text-black">{stat.value}</div>
            <div className="text-lg font-bold text-slate-500">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Recent Courses */}
        <div className="lg:col-span-2 space-y-8">
          <div className="flex items-center justify-between">
            <h2 className="text-4xl font-display">My Lessons</h2>
            <button className="text-lg font-display text-accent underline decoration-4 underline-offset-4">See All</button>
          </div>
          
          <div className="brutal-card p-12 text-center bg-white">
            <div className="w-24 h-24 bg-brand border-4 border-black flex items-center justify-center mx-auto mb-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <GraduationCap className="w-12 h-12" />
            </div>
            <h3 className="text-3xl font-display mb-4">You haven't started yet!</h3>
            <p className="text-xl font-bold text-slate-500 mb-8">Go to the Lessons page to pick your first subject.</p>
            <a href="/curriculum" className="brutal-btn inline-block">Find a Lesson</a>
          </div>
        </div>

        {/* Right Sidebar - Activity & AI */}
        <div className="space-y-12">
          <div className="brutal-card p-8 bg-accent text-white">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-white border-4 border-black flex items-center justify-center text-black">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-display">Your Goal</h3>
            </div>
            <p className="text-xl font-bold mb-8 leading-tight">
              Finish your first lesson to get your first star!
            </p>
            <button className="w-full brutal-btn-secondary !text-black">
              See My Path
            </button>
          </div>

          <div className="brutal-card p-8 bg-white">
            <h3 className="text-2xl font-display mb-8">What's New?</h3>
            <div className="space-y-8">
              {[1, 2].map((_, i) => (
                <div key={i} className="flex space-x-4">
                  <div className="w-4 h-4 bg-brand border-2 border-black shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-lg leading-tight">Welcome to our new school!</p>
                    <p className="text-sm font-bold text-slate-400 mt-2">Today</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex h-screen bg-white overflow-hidden">
      <Sidebar role={role} activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="flex-1 overflow-y-auto border-l-8 border-black">
        {/* Top Header */}
        <header className="bg-white border-b-8 border-black h-24 flex items-center justify-between px-10 sticky top-0 z-10">
          <div className="flex items-center space-x-6">
            <h1 className="text-4xl font-display text-black capitalize">{activeTab}</h1>
            <div className="flex space-x-3">
              <button onClick={() => setRole('STUDENT')} className={`px-4 py-2 font-display text-sm border-4 border-black transition-all shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] ${role === 'STUDENT' ? 'bg-brand' : 'bg-white'}`}>STUDENT</button>
              <button onClick={() => setRole('ADMIN')} className={`px-4 py-2 font-display text-sm border-4 border-black transition-all shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] ${role === 'ADMIN' ? 'bg-accent text-white' : 'bg-white'}`}>ADMIN</button>
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <div className="relative hidden lg:block">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-black" />
              <input 
                type="text" 
                placeholder="Find something..." 
                className="pl-12 pr-6 py-3 bg-white border-4 border-black rounded-none text-lg font-bold focus:bg-brand w-72"
              />
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right hidden md:block">
                <div className="text-lg font-display text-black">John Doe</div>
                <div className="text-sm font-bold text-slate-500 uppercase">{role}</div>
              </div>
              <div className="w-14 h-14 bg-brand border-4 border-black flex items-center justify-center text-black font-display text-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                JD
              </div>
            </div>
          </div>
        </header>

        <div className="p-10">
          {activeTab === 'dashboard' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {role === 'ADMIN' ? renderAdminDashboard() : renderStudentDashboard()}
            </motion.div>
          )}
        </div>
      </main>
    </div>
  );
}
