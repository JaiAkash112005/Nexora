"use client";

import { motion } from "framer-motion";
import { Code2, Cpu } from "lucide-react";

export default function About() {
  const stats = [
    { label: "Client Satisfaction", value: "100%" },
    { label: "Engineering Standards", value: "Enterprise" },
    { label: "Tech Stack Expertise", value: "Multi-Disciplinary" },
    { label: "Project Delivery", value: "Rapid MVP" },
  ];

  return (
    <section id="about" className="relative overflow-hidden bg-[#020202] py-36 text-white border-t border-white/5">
      {/* Background Ambient Glow */}
      <div className="absolute right-1/4 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-purple-600/10 blur-[150px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          
          {/* Left Column: Heading & Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-mono uppercase tracking-[8px] text-purple-400 bg-purple-500/10 px-3.5 py-1.5 rounded-full border border-purple-500/20">
              WHO WE ARE
            </span>
            
            <h2 className="mt-6 text-4xl font-black tracking-tight md:text-6xl bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
              Engineered for Scale, Built for Impact.
            </h2>

            <p className="mt-6 text-base md:text-lg leading-relaxed text-zinc-400">
              Nex ApX is a next-generation software platform and engineering collective. We specialize in building custom AI applications, training intelligent AI agents, and bridging complex backend systems with high-performance user interfaces.
            </p>

            <p className="mt-4 text-sm md:text-base leading-relaxed text-zinc-500">
              From robust cloud environments and mobile app pipelines to automated AI workflows and full-stack platforms, our team delivers modern multi-disciplinary digital solutions designed to scale seamlessly with your business.
            </p>

            {/* Quick Feature Grid */}
            <div className="mt-10 grid grid-cols-2 gap-6">
              {[
                { icon: Code2, title: "Clean Architecture", desc: "Maintainable & robust codebases" },
                { icon: Cpu, title: "AI & Next-Gen Tech", desc: "AI agents, mobile & full-stack" },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="flex gap-4 items-start">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-300">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">{item.title}</h4>
                      <p className="text-xs text-zinc-400 mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column: Visual Stats Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative rounded-[32px] border border-white/10 bg-white/[0.02] p-8 md:p-10 backdrop-blur-2xl shadow-[0_0_50px_rgba(0,0,0,0.5)]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-transparent to-transparent rounded-[32px] pointer-events-none" />

            <h3 className="text-xl font-bold text-white mb-6">Performance Matrix</h3>
            
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, idx) => (
                <div key={idx} className="rounded-2xl border border-white/10 bg-white/5 p-6 transition-all hover:border-purple-500/40 hover:bg-white/10">
                  <span className="text-2xl md:text-3xl font-black text-purple-300 font-mono">{stat.value}</span>
                  <p className="text-xs md:text-sm text-zinc-400 mt-2">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs text-zinc-500 font-mono">READY TO COLLABORATE?</span>
              <a href="#contact" className="text-xs font-semibold text-purple-300 hover:text-white transition-colors flex items-center gap-1">
                Let&apos;s Talk →
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}