"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BrainCircuit,
  Bot,
  Smartphone,
  Code2,
  Cloud,
  Sparkles,
  Layers,
  X,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Bot,
    title: "AI Training",
    description:
      "Training specialized autonomous AI agents, fine-tuning LLMs, and building adaptive conversational intelligence.",
    details: "We specialize in the end-to-end training and fine-tuning of custom AI agents. From custom dataset preparation and RLHF workflows to multi-agent orchestration, we build autonomous systems tailored to execute complex business tasks.",
    techStack: ["LLM Fine-Tuning", "Python", "LangChain", "PyTorch", "Vector Embeddings"],
    timeline: "Based on Project Scope",
  },
  {
    icon: BrainCircuit,
    title: "AI Solutions",
    description:
      "Custom artificial intelligence applications, workflow automation, intelligent chatbots, and business integrations.",
    details: "We build tailored artificial intelligence integrations leveraging state-of-the-art models, automated pipelines, predictive analytics, and intelligent conversational bots designed to streamline your business operations.",
    techStack: ["OpenAI API", "TensorFlow", "Automation Pipelines", "API Integration"],
    timeline: "Based on Project Scope",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "High-performance native and cross-platform mobile applications engineered for iOS and Android.",
    details: "Deliver lightning-fast, highly responsive mobile experiences. We specialize in cross-platform frameworks and native development with robust offline storage, smooth animations, and seamless push notifications.",
    techStack: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase"],
    timeline: "Based on Project Scope",
  },
  {
    icon: Code2,
    title: "Full Stack Development",
    description:
      "Scalable web applications using the latest frontend and backend technologies.",
    details: "End-to-end web architecture built for enterprise-grade scalability and speed. From secure RESTful APIs and microservices to high-converting user interfaces, we handle the entire development lifecycle.",
    techStack: ["Next.js", "Node.js", "TypeScript", "PostgreSQL", "Java"],
    timeline: "Based on Project Scope",
  },
  {
    icon: Layers,
    title: "UI / UX Design",
    description:
      "Beautiful interfaces focused on usability, performance and premium user experiences.",
    details: "Transform complex user journeys into intuitive, cinematic digital masterpieces. We conduct user research, wireframing, high-fidelity prototyping, and design systems tailored to elevate your brand identity.",
    techStack: ["Figma", "Tailwind CSS", "Design Systems", "Interactive Prototyping"],
    timeline: "Based on Project Scope",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description:
      "Deploy, scale and manage modern cloud infrastructure for reliable applications.",
    details: "Ensure high availability with secure, automated cloud architecture. We design robust serverless environments, containerized deployments, and high-performance databases optimized for zero-downtime scaling.",
    techStack: ["AWS", "Docker", "Kubernetes", "CI/CD Pipelines", "Vercel"],
    timeline: "Based on Project Scope",
  },
  {
    icon: Sparkles,
    title: "Digital Innovation",
    description:
      "Transforming ideas into next-generation digital products that create real impact.",
    details: "Got a breakthrough startup idea or a complex enterprise pivot? We collaborate closely with your team to architect MVPs, test rapid prototypes, and bring futuristic tech concepts to life.",
    techStack: ["Strategy", "MVP Prototyping", "Tech Architecture", "Scaling"],
    timeline: "Based on Project Scope",
  },
];

export default function Services() {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

  return (
    <section id="services" className="relative overflow-hidden bg-[#020202] py-36">
      <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/10 blur-[180px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-8">
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24 text-center"
        >
          <p className="mb-5 text-sm uppercase tracking-[10px] text-purple-400">
            WHAT WE DO
          </p>

          <h2 className="bg-gradient-to-b from-white via-zinc-200 to-zinc-500 bg-clip-text text-5xl font-black text-transparent md:text-7xl">
            Premium Digital
          </h2>

          <h3 className="mt-4 text-4xl font-bold text-purple-300 md:text-5xl">
            Services
          </h3>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-zinc-400">
            We specialize in training intelligent AI agents, custom automation, and high-performance multi-platform products for businesses worldwide.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -12, scale: 1.03 }}
                className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-2xl transition-all duration-500 hover:border-purple-500/40 hover:shadow-[0_0_70px_rgba(168,85,247,.25)] flex flex-col justify-between"
              >
                <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 bg-gradient-to-br from-purple-600/10 via-transparent to-purple-500/10" />

                <div>
                  <motion.div
                    whileHover={{ rotate: 8, scale: 1.1 }}
                    className="relative mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-500/20 text-purple-300 shadow-[0_0_30px_rgba(168,85,247,.25)]"
                  >
                    <Icon className="h-8 w-8" />
                  </motion.div>

                  <h3 className="relative mb-5 text-2xl font-bold text-white">
                    {service.title}
                  </h3>

                  <p className="relative leading-8 text-zinc-400">
                    {service.description}
                  </p>
                </div>

                <motion.div
                  whileHover={{ x: 6 }}
                  onClick={() => setSelectedService(service)}
                  className="relative mt-8 flex items-center gap-2 font-semibold text-purple-300 cursor-pointer"
                >
                  <span>Learn More</span>
                  <ArrowRight className="h-4 w-4" />
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Interactive Details Modal */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative z-10 w-full max-w-xl overflow-hidden rounded-[32px] border border-white/15 bg-[#0a0a0c] p-8 md:p-10 text-white shadow-[0_0_100px_rgba(168,85,247,0.3)]"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedService(null)}
                className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-400 hover:bg-white/10 hover:text-white transition-colors"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-500/20 text-purple-300 shadow-[0_0_20px_rgba(168,85,247,0.3)]">
                  <selectedService.icon className="h-7 w-7" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-purple-400">Service Overview</span>
                  <h3 className="text-2xl font-bold">{selectedService.title}</h3>
                </div>
              </div>

              <p className="mt-6 leading-relaxed text-zinc-300 text-base">
                {selectedService.details}
              </p>

              {/* Tech Stack Pills */}
              <div className="mt-8">
                <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-3">Core Technologies & Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedService.techStack.map((tech, i) => (
                    <span key={i} className="flex items-center gap-1 text-xs font-medium bg-purple-500/10 text-purple-300 border border-purple-500/20 px-3 py-1.5 rounded-xl">
                      <CheckCircle2 className="h-3.5 w-3.5" />
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Timeline & CTA */}
              <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6">
                <div>
                  <span className="text-xs text-zinc-500 uppercase tracking-wider">Estimated Timeline</span>
                  <p className="text-sm font-semibold text-purple-300 mt-0.5">{selectedService.timeline}</p>
                </div>

                <a
                  href="#contact"
                  onClick={() => setSelectedService(null)}
                  className="rounded-xl bg-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-600/30 transition-all hover:bg-purple-500 hover:shadow-purple-500/50"
                >
                  Get Started
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}