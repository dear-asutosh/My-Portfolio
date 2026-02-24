import React from "react";
import { educationData } from "./educationData";

const EducationCard = ({ item }) => (
    <div className="group relative bg-[#111827]/60 border border-gray-800 rounded-xl p-6 md:p-8 hover:border-violet-400/30 transition-all duration-300">
        {/* Decorative icon */}
        <span className="absolute top-5 right-5 text-3xl md:text-4xl opacity-20 group-hover:opacity-40 transition-opacity duration-300">
            {item.icon}
        </span>

        <div className="flex items-center gap-3 mb-3">
            <span className="w-2.5 h-2.5 rounded-full bg-violet-400 group-hover:shadow-[0_0_12px_rgba(167,139,250,0.6)] transition-shadow duration-300" />
            <span className="text-xs md:text-sm text-violet-400 font-mono tracking-wide">
                {item.duration}
            </span>
        </div>

        <h3 className="text-lg md:text-xl font-semibold text-white mb-1">
            {item.degree}
        </h3>
        <p className="text-sm md:text-base text-gray-400 font-medium mb-1">
            {item.institution}
        </p>
        <p className="text-xs text-gray-500">
            {item.field}
        </p>
    </div>
);

const EducationSection = () => {
    return (
        <div className="relative w-full bg-[#0a0a1a] py-20 md:py-28 px-6 md:px-20 overflow-hidden">
            {/* Subtle gradient glow */}
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[250px] bg-violet-500/5 rounded-full blur-3xl pointer-events-none" />

            {/* Section heading */}
            <div className="text-center mb-16 md:mb-20">
                <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-3">
                    Education
                </h2>
                <p className="text-gray-500 text-sm md:text-base max-w-md mx-auto">
                    The academic foundation behind the code.
                </p>
            </div>

            <div className="max-w-3xl mx-auto grid gap-6">
                {educationData.map((item) => (
                    <EducationCard key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
};

export default EducationSection;
