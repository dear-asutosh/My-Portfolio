import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "motion/react";
import { X, Github, ExternalLink, HelpCircle, Code, Sparkles } from "lucide-react";

const ProjectModal = ({ isOpen, onClose, project }) => {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!project) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex justify-center items-center p-4 bg-black/90 backdrop-blur-md"
          onClick={onClose}
        >
          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.95, y: 15, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.95, y: 15, opacity: 0 }}
            transition={{ type: "spring", duration: 0.4 }}
            className="relative w-full max-w-4xl bg-[#0c0c16] border border-gray-800/80 rounded-2xl shadow-[0_0_40px_rgba(56,189,248,0.12)] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 text-gray-400 bg-gray-900/80 hover:text-white hover:bg-gray-800 rounded-full transition-all border border-gray-800/60"
              aria-label="Close modal"
            >
              <X size={18} />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
              {/* Left Column: Visuals & Tech Tags (5 cols) */}
              <div className="md:col-span-5 p-6 bg-[#07070f] border-b md:border-b-0 md:border-r border-gray-800/50 flex flex-col justify-between">
                <div>
                  {/* Image Showcase */}
                  <div className="relative rounded-xl overflow-hidden border border-gray-800 bg-[#0f0f1b] aspect-video md:aspect-square mb-5 shadow-md">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>
                    <span className="absolute bottom-2.5 left-3 px-2.5 py-0.5 bg-black/60 backdrop-blur-md text-[10px] text-cyan-400 font-mono tracking-wider rounded-md border border-cyan-500/10">
                      {project.subtitle}
                    </span>
                  </div>

                  {/* Tech Stack */}
                  <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-2">
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 bg-indigo-950/25 border border-indigo-500/20 text-indigo-300 text-xs font-mono rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Primary Action Buttons */}
                <div className="flex gap-2.5 pt-4 border-t border-gray-800/40">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex justify-center items-center gap-1.5 px-4 py-2.5 bg-gray-900 border border-gray-800 hover:border-gray-600 text-white text-xs font-semibold rounded-lg transition-all active:scale-95"
                    >
                      <Github size={14} />
                      <span>Codebase</span>
                    </a>
                  )}
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex justify-center items-center gap-1.5 px-4 py-2.5 bg-gradient-to-r from-cyan-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 text-white text-xs font-semibold rounded-lg transition-all active:scale-95 shadow-md shadow-indigo-500/10"
                    >
                      <ExternalLink size={14} />
                      <span>Live Demo</span>
                    </a>
                  ) : (
                    <span className="flex-1 flex justify-center items-center gap-1.5 px-4 py-2.5 bg-gray-950 border border-gray-900 text-gray-500 text-xs font-semibold rounded-lg cursor-not-allowed">
                      Backend API
                    </span>
                  )}
                </div>
              </div>

              {/* Right Column: Detailed Info (7 cols) */}
              <div className="md:col-span-7 p-6 md:p-8 flex flex-col justify-between">
                <div>
                  {/* Title & Subtitle */}
                  <div className="mb-4">
                    <h3 className="text-xl md:text-2xl font-extrabold text-white leading-tight">
                      {project.title}
                    </h3>
                  </div>

                  {/* Short Description */}
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {project.shortDescription}
                  </p>

                  {/* Problem Solved */}
                  <div className="mb-4 p-3.5 bg-cyan-950/15 border border-cyan-500/15 rounded-lg">
                    <h4 className="text-xs font-bold text-cyan-400 uppercase tracking-wider mb-1.5">
                      Problem Solved
                    </h4>
                    <p className="text-gray-300 text-xs leading-relaxed">
                      {project.problemSolved}
                    </p>
                  </div>

                  {/* Key Features */}
                  <div>
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2.5">
                      Core Features
                    </h4>
                    <ul className="space-y-2">
                      {project.keyFeatures.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-gray-300">
                          <span className="text-gray-500 font-medium">●</span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};

export default ProjectModal;
