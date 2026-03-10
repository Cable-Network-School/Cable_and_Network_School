import React from 'react';
import Hero from '../components/Hero';
import { BookOpen, GraduationCap, Globe, Zap, ShieldCheck, Award, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

const FEATURES = [
  {
    icon: GraduationCap,
    title: "School Lessons",
    description: "Get help with all your school subjects from Grade R to Grade 12.",
    color: "bg-brand"
  },
  {
    icon: BookOpen,
    title: "University Help",
    description: "Study for your degree with our easy-to-follow university modules.",
    color: "bg-accent"
  },
  {
    icon: Zap,
    title: "AI Study Buddy",
    description: "Ask our AI tutor anything, anytime. It's like having a teacher in your pocket.",
    color: "bg-brand"
  },
  {
    icon: Globe,
    title: "Learn Anywhere",
    description: "Our site works even if your internet is slow. Learn from home or school.",
    color: "bg-accent"
  },
  {
    icon: ShieldCheck,
    title: "Good Teachers",
    description: "All our lessons are made by real teachers who know their stuff.",
    color: "bg-brand"
  },
  {
    icon: Award,
    title: "Get Certificates",
    description: "Finish a course and get a certificate to show what you've learned.",
    color: "bg-accent"
  }
];

export default function Home() {
  return (
    <main>
      <Hero />

      {/* Features Grid */}
      <section className="py-24 bg-white border-t-8 border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-20">
            <h2 className="text-5xl lg:text-7xl font-display text-black mb-6">
              Why learn with us?
            </h2>
            <p className="text-2xl font-bold text-black max-w-2xl">
              We make learning fun and easy. Here is what you get when you join our school.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {FEATURES.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="brutal-card p-10"
              >
                <div className={`w-16 h-16 ${feature.color} border-4 border-black flex items-center justify-center mb-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`}>
                  <feature.icon className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-3xl font-display text-black mb-4">{feature.title}</h3>
                <p className="text-lg font-bold text-black leading-tight">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Preview */}
      <section className="py-24 bg-brand border-t-8 border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-end justify-between mb-16">
            <div className="max-w-2xl">
              <h2 className="text-5xl lg:text-7xl font-display text-black mb-6">
                Pick your level
              </h2>
              <p className="text-2xl font-bold text-black">
                We have lessons for everyone. Choose where you want to start.
              </p>
            </div>
            <button className="brutal-btn-secondary mt-8 lg:mt-0 flex items-center">
              See All Levels
              <ArrowRight className="ml-2 w-6 h-6" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {['School (CAPS)', 'Cambridge', 'International IB', 'University'].map((name, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="aspect-square bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] group-hover:translate-x-[-4px] group-hover:translate-y-[-4px] group-hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all overflow-hidden relative">
                  <img
                    src={`https://picsum.photos/seed/${name}/800/800`}
                    alt={name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-white border-t-4 border-black p-4">
                    <h4 className="text-2xl font-display text-black">{name}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-accent border-t-8 border-black text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-6xl lg:text-8xl font-display mb-10">
            Ready to start?
          </h2>
          <p className="text-2xl font-bold mb-12">
            Join thousands of other kids and start learning today. It's free to join!
          </p>
          <button className="brutal-btn-secondary !text-black !text-3xl !px-16 !py-8">
            Create Your Account
          </button>
        </div>
      </section>
    </main>
  );
}
