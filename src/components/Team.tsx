"use client";

import { motion } from "framer-motion";
import { Cloud, Code2, Database } from "lucide-react";

const teamMembers = [
  {
    initials: "AVN",
    name: "Ashwant V N",
    role: "FOUNDER & PRODUCT LEAD",
    bio: "Drives client relations, project acquisition, and product strategy. Expert in Cloud Infrastructure (AWS), DevOps, and end-to-end product management.",
    icon: Cloud,
    tagLabel: "Cloud & Product",
    skills: ["Product Management", "AWS", "DevOps", "Client Relations"],
  },
  {
    initials: "KSR",
    name: "Santhosh K",
    role: "CO-FOUNDER & FULL STACK & AI LEAD",
    bio: "The core engine behind technical development. Master of full-stack engineering and artificial intelligence, driving core system architecture, intelligent automation, and full-spectrum software development.",
    icon: Code2,
    tagLabel: "Full-Stack & AI",
    skills: ["Full-Stack Dev", "AI & Machine Learning", "Core Architecture", "Software Engineering"],
  },
  {
    initials: "JAA",
    name: "Jai Akash A",
    role: "CO-FOUNDER & DATA SPECIALIST",
    bio: "Leads UI/UX design, frontend architecture, and brand publishing. Specialist in Data Science, Data Analytics, Data Engineering, SEO, and Marketing.",
    icon: Database,
    tagLabel: "Data & UI/UX",
    skills: ["Data Science", "Frontend & UI/UX", "SEO & Marketing", "DevOps"],
  },
];

export default function Team() {
  return (
    <section id="team" className="relative overflow-hidden bg-[#020202] py-36 text-white">
      {/* Background Ambient Glow */}
      <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/10 blur-[180px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-24 text-center"
        >
          <span className="text-xs font-mono uppercase tracking-[8px] text-purple-400 bg-purple-500/10 px-3.5 py-1.5 rounded-full border border-purple-500/20">
            OUR LEADERSHIP
          </span>
          <h2 className="mt-6 text-4xl md:text-6xl font-black tracking-tight bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
            Founding Team
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm md:text-base text-zinc-400">
            The minds engineering the next wave of digital products and scalable enterprise architectures.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, index) => {
            const IconComponent = member.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                whileHover={{ y: -12, scale: 1.02 }}
                className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.02] p-6 backdrop-blur-2xl transition-all duration-500 hover:border-purple-500/50 hover:shadow-[0_0_80px_rgba(168,85,247,0.3)] flex flex-col justify-between"
              >
                {/* Glowing Sweep Effect */}
                <div className="absolute inset-0 opacity-0 transition duration-700 group-hover:opacity-100 bg-gradient-to-tr from-purple-600/20 via-indigo-500/10 to-transparent pointer-events-none" />

                <div>
                  {/* Top Graphic Display Box with Work Symbol */}
                  <div className="relative h-64 w-full overflow-hidden rounded-2xl border border-purple-500/30 bg-gradient-to-br from-purple-950/40 via-black to-indigo-950/40 flex flex-col items-center justify-center p-6 shadow-[inset_0_0_30px_rgba(168,85,247,0.2)]">
                    
                    {/* Background Grid Lines */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:20px_20px] opacity-40" />

                    {/* Pulse Ring */}
                    <div className="absolute h-40 w-40 rounded-full border border-purple-500/20 animate-ping opacity-25 pointer-events-none" />

                    {/* Representing Work Symbol Icon */}
                    <motion.div
                      animate={{ y: [-4, 4, -4] }}
                      transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                      className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-purple-500/40 bg-purple-500/15 text-purple-300 shadow-[0_0_30px_rgba(168,85,247,0.4)] backdrop-blur-md mb-3"
                    >
                      <IconComponent className="h-8 w-8 text-purple-300" />
                    </motion.div>

                    {/* Giant Initials */}
                    <motion.span 
                      className="relative font-mono text-4xl font-black tracking-widest text-transparent bg-gradient-to-r from-purple-300 via-white to-purple-400 bg-clip-text drop-shadow-[0_0_20px_rgba(168,85,247,0.8)]"
                    >
                      {member.initials}
                    </motion.span>

                    {/* Work Focus Tag */}
                    <span className="relative mt-2 font-mono text-[10px] tracking-widest text-purple-400 uppercase bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20">
                      {member.tagLabel}
                    </span>
                  </div>

                  {/* Details */}
                  <div className="mt-6">
                    <h3 className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors">
                      {member.name}
                    </h3>
                    <span className="mt-1 block font-mono text-[11px] font-semibold tracking-wider text-purple-400">
                      {member.role}
                    </span>
                    <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                      {member.bio}
                    </p>
                  </div>
                </div>

                {/* Skills Tags */}
                <div className="mt-6 pt-4 border-t border-white/10">
                  <div className="flex flex-wrap gap-1.5">
                    {member.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-mono bg-white/5 text-zinc-300 border border-white/10 px-2.5 py-1 rounded-full group-hover:border-purple-500/30 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}