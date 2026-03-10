import React from 'react';
import { LayoutDashboard, BookOpen, Users, Settings, LogOut, Award, BarChart3, MessageSquare } from 'lucide-react';

interface SidebarProps {
  role: 'ADMIN' | 'TEACHER' | 'STUDENT';
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Sidebar({ role, activeTab, setActiveTab }: SidebarProps) {
  const menuItems = [
    { id: 'dashboard', label: 'My Portal', icon: LayoutDashboard, roles: ['ADMIN', 'TEACHER', 'STUDENT'] },
    { id: 'courses', label: 'My Lessons', icon: BookOpen, roles: ['STUDENT', 'TEACHER'] },
    { id: 'curriculum', label: 'All Lessons', icon: BookOpen, roles: ['ADMIN'] },
    { id: 'students', label: 'Students', icon: Users, roles: ['ADMIN', 'TEACHER'] },
    { id: 'teachers', label: 'Teachers', icon: Users, roles: ['ADMIN'] },
    { id: 'analytics', label: 'Stats', icon: BarChart3, roles: ['ADMIN', 'TEACHER'] },
    { id: 'certificates', label: 'My Awards', icon: Award, roles: ['STUDENT', 'ADMIN'] },
    { id: 'messages', label: 'Chat', icon: MessageSquare, roles: ['ADMIN', 'TEACHER', 'STUDENT'] },
    { id: 'settings', label: 'Settings', icon: Settings, roles: ['ADMIN', 'TEACHER', 'STUDENT'] },
  ];

  const filteredItems = menuItems.filter(item => item.roles.includes(role));

  return (
    <aside className="w-72 bg-white flex flex-col h-full">
      <div className="p-8 border-b-8 border-black">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-brand border-4 border-black flex items-center justify-center text-black font-display text-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">C</div>
          <span className="font-display text-2xl uppercase">Portal</span>
        </div>
      </div>

      <nav className="flex-1 p-6 space-y-4 overflow-y-auto">
        {filteredItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`w-full flex items-center space-x-4 px-6 py-4 border-4 border-black font-display text-lg uppercase transition-all ${
              activeTab === item.id 
                ? 'bg-brand shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] translate-x-[-2px] translate-y-[-2px]' 
                : 'bg-white hover:bg-slate-50'
            }`}
          >
            <item.icon className="w-6 h-6" />
            <span>{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="p-6 border-t-8 border-black">
        <button className="w-full flex items-center justify-center space-x-4 px-6 py-4 border-4 border-black bg-white font-display text-lg uppercase text-accent hover:bg-accent hover:text-white transition-all">
          <LogOut className="w-6 h-6" />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
}
