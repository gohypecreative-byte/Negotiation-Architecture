"use client";

import React, { useState } from "react";
import Image from "next/image";

interface ProjectItem {
  id: number;
  title: string;
  category: string;
  location: string;
  image: string;
  outcome: string;
  stakes: string;
}

const projects: ProjectItem[] = [
  {
    id: 1,
    title: "Cross-Border Sovereign Energy M&A",
    category: "M&A",
    location: "London · Dubai",
    image: "/images/gallery/dr-tarun-03.jpg",
    outcome: "Unlocked 18-month regulatory standoff by introducing dynamic earn-out governance covenants.",
    stakes: "$1.4 Billion",
  },
  {
    id: 2,
    title: "Hostile Takeover Deadlock Dissolution",
    category: "Deadlock",
    location: "Geneva · Zurich",
    image: "/images/gallery/dr-tarun-05.jpeg",
    outcome: "Re-engineered counterparty choice architecture, preventing value destruction through voluntary resolution.",
    stakes: "$620 Million",
  },
  {
    id: 3,
    title: "Global Supply Chain Covenant Restructuring",
    category: "Advisory",
    location: "Singapore · Tokyo",
    image: "/images/gallery/dr-tarun-06.jpeg",
    outcome: "Replaced zero-sum price confrontation with multi-tiered risk sharing and priority allotment.",
    stakes: "Multi-Jurisdiction",
  },
  {
    id: 4,
    title: "Private Equity Boardroom Standoff",
    category: "Advisory",
    location: "New York",
    image: "/images/gallery/dr-tarun-07.jpeg",
    outcome: "Neutralized emotional escalation through structured pre-meeting war-gaming protocols.",
    stakes: "Executive Majority",
  },
  {
    id: 5,
    title: "Consortium Infrastructure Dispute",
    category: "Deadlock",
    location: "Mumbai · London",
    image: "/images/gallery/dr-tarun-08.jpg",
    outcome: "Converted contentious penalty clauses into incentive-aligned project milestone accelerators.",
    stakes: "$450 Million",
  },
  {
    id: 6,
    title: "Executive Leadership Symposium",
    category: "Keynote",
    location: "Global Tour",
    image: "/images/gallery/dr-tarun-09.jpg",
    outcome: "Trained 450+ C-suite executives in tactical pause engineering and psychological anchor management.",
    stakes: "26 Countries",
  },
];

interface BaseProjectsProps {
  theme?: "vellum" | "navy";
}

export function BaseProjects({ theme = "vellum" }: BaseProjectsProps) {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const isVellum = theme === "vellum";
  const categories = ["All", "M&A", "Deadlock", "Advisory", "Keynote"];

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section
      id="engagements"
      className={`relative pt-8 md:pt-14 pb-20 md:pb-28 px-5 md:px-10 lg:px-16 transition-colors duration-500 ${
        isVellum ? "bg-white text-[#152540]" : "bg-[#0A1526] text-white"
      }`}
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Section Header */}
        <div
          className={`flex flex-col md:flex-row md:items-end md:justify-between mb-12 border-b pb-8 ${
            isVellum ? "border-slate-200" : "border-white/10"
          }`}
        >
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span
                className={`w-2 h-2 rounded-full ${
                  isVellum ? "bg-[#A8741F]" : "bg-[#E67400]"
                }`}
              />
              <span
                className={`text-xs uppercase font-mono tracking-[0.25em] font-semibold ${
                  isVellum ? "text-[#A8741F]" : "text-[#E67400]"
                }`}
              >
                Case Engagements
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-sans font-bold tracking-tight uppercase">
              Constructed Deals
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 mt-6 md:mt-0">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-sans uppercase tracking-wider transition-all duration-300 font-semibold ${
                  activeCategory === cat
                    ? isVellum
                      ? "bg-[#152540] text-white shadow-sm"
                      : "bg-[#E67400] text-white shadow-sm"
                    : isVellum
                    ? "bg-[#EFE8DC] text-[#4B5563] hover:bg-[#E5DDCF]"
                    : "bg-white/10 text-white/70 hover:bg-white/20 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid (Base Structures style with floating glassmorphic pills) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((item) => (
            <div
              key={item.id}
              className={`group relative rounded-2xl overflow-hidden transition-all duration-500 shadow-md hover:shadow-2xl flex flex-col border ${
                isVellum
                  ? "bg-white border-[#DFD7C7] hover:border-[#A8741F]"
                  : "bg-black/40 border-white/10 hover:border-white/30"
              }`}
            >
              {/* Image Frame */}
              <div className="relative aspect-[16/11] w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${
                    isVellum
                      ? "from-white/60 via-transparent to-black/20"
                      : "from-[#0A1526] via-transparent to-black/30"
                  }`}
                />

                {/* Floating Glassmorphic Pill Label (Base Structures signature) */}
                <div className="absolute top-4 left-4 z-10">
                  <span
                    className={`rounded-xl backdrop-blur-md px-3.5 py-1 text-xs font-sans font-semibold tracking-wide border shadow-sm ${
                      isVellum
                        ? "bg-white/90 text-[#152540] border-[#DFD7C7]"
                        : "bg-white/20 text-white border-white/20"
                    }`}
                  >
                    {item.location}
                  </span>
                </div>

                <div className="absolute top-4 right-4 z-10">
                  <span
                    className={`rounded-xl backdrop-blur-md px-3 py-1 text-white text-[11px] font-mono font-bold tracking-wider ${
                      isVellum ? "bg-[#A8741F]" : "bg-[#E67400]/90"
                    }`}
                  >
                    {item.stakes}
                  </span>
                </div>
              </div>

              {/* Card Details */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span
                    className={`text-[11px] font-mono uppercase tracking-wider block mb-1 font-bold ${
                      isVellum ? "text-[#A8741F]" : "text-[#E67400]"
                    }`}
                  >
                    {item.category} Architecture
                  </span>
                  <h3
                    className={`text-xl font-sans font-bold tracking-tight uppercase transition-colors ${
                      isVellum
                        ? "text-[#152540] group-hover:text-[#A8741F]"
                        : "text-white group-hover:text-[#E67400]"
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={`mt-3 text-xs md:text-sm font-sans leading-relaxed ${
                      isVellum ? "text-[#4B5563]" : "text-white/70"
                    }`}
                  >
                    {item.outcome}
                  </p>
                </div>

                <div
                  className={`mt-6 pt-4 border-t flex items-center justify-between text-xs font-sans transition-colors font-medium ${
                    isVellum
                      ? "border-[#DFD7C7] text-[#6B7280] group-hover:text-[#152540]"
                      : "border-white/10 text-white/50 group-hover:text-white"
                  }`}
                >
                  <span>Explore Architecture</span>
                  <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
