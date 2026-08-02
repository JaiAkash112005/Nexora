"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Wallet,
  PieChart,
  ShieldCheck,
  Store,
  Users,
  TrendingUp,
  Sliders,
  X,
  Eye,
  ChevronLeft,
  ChevronRight,
  ShoppingBag,
  HeartPulse,
  Activity,
  Globe,
  Sparkles,
} from "lucide-react";

// Project 1: MedicalWorld Features & Screenshots (First)
const medicalFeatures = [
  {
    icon: ShoppingBag,
    title: "Comprehensive E-Commerce Store",
    description: "Curated healthcare, lifestyle, and wellness essentials with instant cart and wishlist features.",
  },
  {
    icon: Activity,
    title: "Dynamic Category Filtering",
    description: "Seamless product filtering by category, health care types, electronics, and price ranges.",
  },
  {
    icon: HeartPulse,
    title: "Health & Medical Devices",
    description: "Specialized medical equipment, daily essentials, and professional wellness packages.",
  },
  {
    icon: Globe,
    title: "Multi-Language & Global Reach",
    description: "Localized shopping experience with custom currency and language support options.",
  },
];

const medicalScreenshots = [
  {
    src: "/screenshots/Mediworld.Home.png",
    title: "Home Showcase",
    desc: "Health & wellness delivered to your door hero banner and featured essentials",
  },
  {
    src: "/screenshots/Mediworld.Shop.png",
    title: "Shop & Collections",
    desc: "Curated store catalog with advanced category filters and discount tags",
  },
  {
    src: "/screenshots/Mediworld.About.png",
    title: "About MedicalWorld",
    desc: "Brand mission, healthcare dedication, and premium product introduction",
  },
  {
    src: "/screenshots/Mediworld.Contact.png",
    title: "Contact & Support",
    desc: "Customer inquiry portal, direct location details, and support maps",
  },
];

// Project 2: Finance Tracker Features & Screenshots
const financeFeatures = [
  {
    icon: Wallet,
    title: "Real-Time Expense Tracking",
    description: "Instant logging of income, daily expenses, and category-wise spending.",
  },
  {
    icon: PieChart,
    title: "Visual Budget Analytics",
    description: "Interactive charts and reporting to track cash flow and financial targets.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Data Engine",
    description: "Encrypted local storage and secure backend synchronization for user data.",
  },
];

const financeScreenshots = [
  {
    src: "/screenshots/overview.png",
    title: "Overview Dashboard",
    desc: "Lifetime savings, budget limits & spending summary",
  },
  {
    src: "/screenshots/insights.png",
    title: "Analytics & Insights",
    desc: "Income vs expense trend charts & category breakdown",
  },
  {
    src: "/screenshots/add.png",
    title: "Add Transaction",
    desc: "Instant income & expense entry with category tags",
  },
];

// Project 3: Vendor Book Features & Screenshots
const vendorFeatures = [
  {
    icon: Store,
    title: "Multi-Tier Customer Management",
    description: "Organize clients efficiently across Ordinary, Daily, Weekly, and Prime categories.",
  },
  {
    icon: Sliders,
    title: "Dynamic Rate & Pricing Engine",
    description: "Customize and save daily rates per kattu or kg for produce items like Malli and Pothina.",
  },
  {
    icon: TrendingUp,
    title: "Revenue & Sales Analytics",
    description: "Real-time revenue tracking, daily logs, cash box calculations, and performance metrics.",
  },
  {
    icon: Users,
    title: "Ledger & Due Balances",
    description: "Instant tracking of customer dues, payment settlements, and transaction histories.",
  },
];

const vendorScreenshots = [
  {
    src: "/screenshots/vendor-customers.png",
    title: "Customer Ledger",
    desc: "Manage customer lists and track due balances across tiers",
  },
  {
    src: "/screenshots/vendor-revenue.png",
    title: "Revenue Dashboard",
    desc: "Daily sales logs, cash box, and revenue graphs",
  },
  {
    src: "/screenshots/vendor-rates.png",
    title: "Rate Configuration",
    desc: "Set and update daily pricing per kattu or kg easily",
  },
  {
    src: "/screenshots/vendor-logs.png",
    title: "Transaction Logs",
    desc: "Historical timestamp logs and total revenue audit trail",
  },
];

const projects = [
  {
    id: "01",
    title: "MedicalWorld E-Commerce",
    tagline: "Healthcare, Wellness & Lifestyle Platform",
    description: "A state-of-the-art digital e-commerce platform specializing in medical devices, healthcare essentials, and wellness lifestyle products with dynamic filtering.",
    tags: ["E-Commerce", "HealthTech"],
    features: medicalFeatures,
    screenshots: medicalScreenshots,
    isUpcoming: true,
  },
  {
    id: "02",
    title: "Finance Tracker App",
    tagline: "Smart Finance & Budget Platform",
    description: "A comprehensive financial management platform engineered for seamless budget tracking, personal finance, and real-time category analytics.",
    tags: ["Dashboard", "Finance", "Analytics"],
    features: financeFeatures,
    screenshots: financeScreenshots,
    isUpcoming: false,
  },
  {
    id: "03",
    title: "Vendor Book Platform",
    tagline: "Smart Produce Ledger & B2B Management",
    description: "An advanced vendor management system built for agricultural and wholesale suppliers to manage tiered customer rates, daily dues, and automated revenue analytics.",
    tags: ["B2B", "Management", "Ledger"],
    features: vendorFeatures,
    screenshots: vendorScreenshots,
    isUpcoming: false,
  },
];

export default function Portfolio() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeModal, setActiveModal] = useState<{
    isOpen: boolean;
    screenshots: typeof medicalScreenshots;
    selectedImg: string;
    title: string;
  }>({
    isOpen: false,
    screenshots: medicalScreenshots,
    selectedImg: medicalScreenshots[0].src,
    title: "",
  });

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  // Keyboard Arrow Key Listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeModal.isOpen) return;
      if (e.key === "ArrowRight") {
        nextProject();
      } else if (e.key === "ArrowLeft") {
        prevProject();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeModal.isOpen]);

  const openModal = (screenshotsList: typeof medicalScreenshots, title: string) => {
    setActiveModal({
      isOpen: true,
      screenshots: screenshotsList,
      selectedImg: screenshotsList[0].src,
      title,
    });
  };

  const currentProject = projects[currentIndex];

  return (
    <section id="portfolio" className="relative overflow-hidden bg-[#020202] py-20 text-white">
      {/* Background Ambient Glow */}
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/10 blur-[180px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-14 text-center"
        >
          <p className="mb-4 text-sm uppercase tracking-[10px] text-purple-400">
            FEATURED INNOVATIONS
          </p>

          <h2 className="bg-gradient-to-b from-white via-zinc-200 to-zinc-500 bg-clip-text text-5xl font-black text-transparent md:text-7xl">
            Flagship Products &
          </h2>

          <h3 className="mt-3 text-4xl font-bold text-purple-300 md:text-5xl">
            Works
          </h3>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-zinc-400">
            Explore our advanced digital platforms, smart ledgers, and high-performance financial management solutions.
          </p>
        </motion.div>

        {/* CAROUSEL CONTAINER & CONTROLS HEADER */}
        <div className="mb-6 flex items-center justify-between">
          <span className="text-xs font-mono uppercase tracking-wider text-purple-400">
            Project {currentIndex + 1} of {projects.length}
          </span>

          {/* Carousel Arrow Buttons */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={prevProject}
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition-all hover:bg-purple-600 hover:border-purple-500 hover:shadow-[0_0_15px_rgba(168,85,247,0.4)] z-20"
              aria-label="Previous Project"
            >
              <ChevronLeft className="h-5 w-5 pointer-events-none" />
            </button>
            <button
              type="button"
              onClick={nextProject}
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition-all hover:bg-purple-600 hover:border-purple-500 hover:shadow-[0_0_15px_rgba(168,85,247,0.4)] z-20"
              aria-label="Next Project"
            >
              <ChevronRight className="h-5 w-5 pointer-events-none" />
            </button>
          </div>
        </div>

        <div className="relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-6 md:p-8 backdrop-blur-2xl transition-all duration-300 hover:border-purple-500/40 hover:shadow-[0_0_50px_rgba(168,85,247,.2)] flex flex-col justify-between"
            >
              <div>
                {/* Card Header */}
                <div className="mb-4 flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <span className="rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-purple-300">
                      Product {currentProject.id}
                    </span>
                    <h3 className="mt-2 text-2xl font-black text-white md:text-3xl">
                      {currentProject.title}
                    </h3>
                    <p className="mt-0.5 text-xs font-bold text-purple-300">
                      {currentProject.tagline}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    {currentProject.isUpcoming && (
                      <span className="flex items-center gap-1.5 rounded-full border border-fuchsia-500/40 bg-gradient-to-r from-purple-600/20 to-fuchsia-600/20 px-3 py-1 text-[11px] font-bold text-fuchsia-300 shadow-[0_0_15px_rgba(217,70,239,0.3)] animate-pulse">
                        <Sparkles className="h-3 w-3 text-fuchsia-400" />
                        <span>🚀 Upcoming • Under Production</span>
                      </span>
                    )}

                    {currentProject.tags.map((tag, idx) => (
                      <span key={idx} className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-medium text-zinc-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="mb-6 text-sm leading-relaxed text-zinc-300 max-w-3xl">
                  {currentProject.description}
                </p>

                {/* Previews Grid */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-[11px] font-mono uppercase tracking-widest text-purple-300">
                      Interface Previews (Click to View HD)
                    </p>
                    <button
                      type="button"
                      onClick={() => openModal(currentProject.screenshots, currentProject.title)}
                      className="text-xs text-purple-400 hover:text-white underline transition-colors cursor-pointer"
                    >
                      Open Gallery View →
                    </button>
                  </div>

                  <div className={`grid gap-3 ${currentProject.screenshots.length === 4 ? 'md:grid-cols-2 lg:grid-cols-4' : 'md:grid-cols-3'}`}>
                    {currentProject.screenshots.map((shot, idx) => (
                      <div
                        key={idx}
                        onClick={() => {
                          setActiveModal({
                            isOpen: true,
                            screenshots: currentProject.screenshots,
                            selectedImg: shot.src,
                            title: currentProject.title,
                          });
                        }}
                        className="group relative cursor-pointer overflow-hidden rounded-xl border border-white/10 bg-black/60 p-2 transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/50 hover:shadow-[0_0_20px_rgba(168,85,247,.25)]"
                      >
                        <div className="relative h-28 w-full overflow-hidden rounded-lg border border-white/10 bg-zinc-950">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={shot.src} alt={shot.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 pointer-events-none" />
                          <div className="absolute inset-0 flex items-center justify-center bg-purple-950/40 opacity-0 backdrop-blur-xs transition-opacity duration-300 group-hover:opacity-100">
                            <div className="flex items-center gap-1.5 rounded-full border border-white/20 bg-black/80 px-3 py-1 text-[10px] font-semibold text-white shadow-lg">
                              <Eye className="h-3 w-3 text-purple-400" />
                              <span>View HD</span>
                            </div>
                          </div>
                        </div>
                        <div className="mt-2 px-0.5">
                          <h5 className="text-xs font-bold text-white group-hover:text-purple-300">{shot.title}</h5>
                          <p className="mt-0.5 text-[10px] text-zinc-400 line-clamp-1">{shot.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Features Grid */}
                <div className={`grid gap-3 ${currentProject.features.length === 3 ? 'md:grid-cols-3' : 'md:grid-cols-2 lg:grid-cols-4'}`}>
                  {currentProject.features.map((feat, idx) => {
                    const Icon = feat.icon;
                    return (
                      <div key={idx} className="rounded-xl border border-white/10 bg-white/[0.02] p-4 transition-all hover:bg-white/5">
                        <div className="mb-2.5 flex h-9 w-9 items-center justify-center rounded-lg bg-purple-500/20 text-purple-300 shadow-[0_0_15px_rgba(168,85,247,.2)]">
                          <Icon className="h-4 w-4" />
                        </div>
                        <h5 className="text-xs font-bold text-white">{feat.title}</h5>
                        <p className="mt-1 text-[11px] leading-relaxed text-zinc-400 line-clamp-2">{feat.description}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* LIGHTBOX MODAL */}
      <AnimatePresence>
        {activeModal.isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
            onClick={() => setActiveModal((prev) => ({ ...prev, isOpen: false }))}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative flex max-h-[90vh] max-w-4xl w-full flex-col overflow-hidden rounded-3xl border border-white/15 bg-[#0a0a0c] p-6 shadow-[0_0_80px_rgba(168,85,247,0.3)]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between border-b border-white/15 pb-4 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white">
                    {activeModal.title} — HD Preview Gallery
                  </h3>
                  <p className="text-xs text-zinc-400 mt-0.5">Full Resolution View Mode</p>
                </div>

                <button
                  type="button"
                  onClick={() => setActiveModal((prev) => ({ ...prev, isOpen: false }))}
                  className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-300 transition-colors hover:bg-white/20 hover:text-white"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="flex gap-2 overflow-x-auto pb-3">
                {activeModal.screenshots.map((shot, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveModal((prev) => ({ ...prev, selectedImg: shot.src }))}
                    className={`rounded-xl border px-4 py-2 text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                      activeModal.selectedImg === shot.src
                        ? "border-purple-500 bg-purple-500/20 text-white shadow-[0_0_15px_rgba(168,85,247,.3)]"
                        : "border-white/10 bg-white/5 text-zinc-400 hover:text-white"
                    }`}
                  >
                    {shot.title}
                  </button>
                ))}
              </div>

              <div className="flex-1 flex items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-black/60 p-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={activeModal.selectedImg}
                  alt="App Screenshot HD"
                  className="max-h-[55vh] max-w-full rounded-xl object-contain drop-shadow-[0_0_25px_rgba(0,0,0,0.8)]"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}