import React, { useState } from "react";
import { professionalExperience, openSourceContributions } from "./experienceData";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";

const ExperienceCard = ({ item }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative pl-8 pb-4 border-l border-gray-700 last:pb-0 group">
            {/* Timeline dot */}
            <span className="absolute -left-[7px] top-1 w-3.5 h-3.5 rounded-full bg-cyan-400 border-2 border-[#0a0a1a] group-hover:shadow-[0_0_12px_rgba(34,211,238,0.6)] transition-shadow duration-300" />

            <div
                onClick={() => setIsOpen(!isOpen)}
                className={`bg-[#111827]/60 border ${isOpen ? "border-cyan-400/50" : "border-gray-800"
                    } rounded-xl p-5 md:p-6 hover:border-cyan-400/30 transition-all duration-300 cursor-pointer`}
            >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 mb-2">
                    <h3 className="text-lg md:text-xl font-semibold text-white">
                        {item.role}
                    </h3>
                    <div className="flex items-center gap-3">
                        <span className="text-xs md:text-sm text-cyan-400 font-mono tracking-wide">
                            {item.duration}
                        </span>
                        <motion.div
                            animate={{ rotate: isOpen ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            <ChevronDown size={20} className="text-cyan-400" />
                        </motion.div>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <p className="text-sm md:text-base text-gray-400 font-medium mb-1">
                        {item.organization}
                    </p>
                    <p className="text-xs text-gray-500">{item.location}</p>
                </div>

                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0, marginTop: 0 }}
                            animate={{ opacity: 1, height: "auto", marginTop: 12 }}
                            exit={{ opacity: 0, height: 0, marginTop: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="overflow-hidden"
                        >
                            <div className="pt-2 border-t border-gray-700/50">
                                {item.description && (
                                    <p className="text-sm text-gray-300 leading-relaxed">
                                        {item.description}
                                    </p>
                                )}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

const OpenSourceCard = ({ item }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative pl-8 pb-4 border-l border-gray-700 last:pb-0 group">
            <span className="absolute -left-[7px] top-1 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-[#0a0a1a] group-hover:shadow-[0_0_12px_rgba(52,211,153,0.6)] transition-shadow duration-300" />

            <div
                onClick={() => setIsOpen(!isOpen)}
                className={`bg-[#111827]/60 border ${isOpen ? "border-emerald-400/50" : "border-gray-800"
                    } rounded-xl p-5 md:p-6 hover:border-emerald-400/30 transition-all duration-300 cursor-pointer`}
            >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 mb-2">
                    <h3 className="text-lg md:text-xl font-semibold text-white">
                        {item.role}
                    </h3>
                    <div className="flex items-center gap-3">
                        <span className="text-xs md:text-sm text-emerald-400 font-mono tracking-wide">
                            {item.duration}
                        </span>
                        <motion.div
                            animate={{ rotate: isOpen ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            <ChevronDown size={20} className="text-emerald-400" />
                        </motion.div>
                    </div>
                </div>
                <p className="text-sm md:text-base text-gray-400 font-medium mb-1">
                    {item.organization}
                </p>

                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0, marginTop: 0 }}
                            animate={{ opacity: 1, height: "auto", marginTop: 12 }}
                            exit={{ opacity: 0, height: 0, marginTop: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="overflow-hidden"
                        >
                            <div className="pt-2 border-t border-gray-700/50">
                                {item.highlights && (
                                    <ul className="space-y-1.5">
                                        {item.highlights.map((highlight, i) => (
                                            <li
                                                key={i}
                                                className="flex items-start gap-2 text-sm text-gray-300"
                                            >
                                                <span className="text-emerald-400 mt-0.5">▹</span>
                                                {highlight}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

const SectionLabel = ({ color, label }) => (
    <div className="flex items-center gap-3 mb-8">
        <span className={`w-3 h-3 rounded-full ${color}`} />
        <h3 className="text-xl md:text-2xl font-semibold text-white tracking-tight">
            {label}
        </h3>
        <div className="flex-1 h-px bg-gray-800" />
    </div>
);

const ExperienceSection = () => {
    return (
        <div className="relative w-full bg-[#0a0a1a] py-20 md:py-28 px-6 md:px-20 overflow-hidden">
            {/* Subtle gradient glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

            {/* Section heading */}
            <div className="text-center mb-16 md:mb-20">
                <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-3">
                    Experience
                </h2>
                <p className="text-gray-500 text-sm md:text-base max-w-md mx-auto">
                    Where I've been, what I've built, and how I&apos;ve grown.
                </p>
            </div>

            <div className="max-w-3xl mx-auto">
                {/* Professional Experience */}
                <SectionLabel color="bg-cyan-400" label="Professional" />
                <div className="mb-16">
                    {professionalExperience.map((item) => (
                        <ExperienceCard key={item.id} item={item} />
                    ))}
                </div>

                {/* Open Source */}
                <SectionLabel color="bg-emerald-400" label="Open Source" />
                <div>
                    {openSourceContributions.map((item) => (
                        <OpenSourceCard key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ExperienceSection;
