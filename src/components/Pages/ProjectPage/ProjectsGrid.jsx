import React, { useState, useEffect } from "react";
import { Github, ExternalLink, Code, Terminal, Sparkles, FolderGit, Monitor, Layers } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { featuredProjects, clientProjects, devTools } from "./projectsData";
import ProjectModal from "./ProjectModal";

// Custom auto-sliding slideshow for Photography Card
const PhotographySlideshow = ({ images }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-full min-h-[260px] md:min-h-full overflow-hidden bg-black flex items-center justify-center">
      <AnimatePresence mode="wait">
        <motion.img
          key={index}
          src={images[index]}
          alt="Photography showcase slide"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent pointer-events-none" />
      
      {/* Slideshow pagination dots */}
      <div className="absolute bottom-4 left-4 flex gap-1.5 z-10">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setIndex(idx)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              idx === index ? "bg-cyan-400 w-4" : "bg-white/40"
            }`}
          />
        ))}
      </div>
      <span className="absolute top-4 left-4 z-10 px-3 py-1 bg-black/60 backdrop-blur-md text-[10px] text-emerald-400 font-mono tracking-widest rounded-full border border-emerald-500/20 uppercase">
        Live Gallery Preview
      </span>
    </div>
  );
};

const ProjectsGrid = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openDetails = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <div className="w-full px-4 md:px-8 lg:px-16 space-y-24">
      {/* SECTION 1: FEATURED PROJECTS */}
      <section className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-10">
          <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-cyan-950 border border-cyan-500/30 text-cyan-400">
            <Sparkles size={16} />
          </span>
          <h3 className="text-xl md:text-2xl font-bold text-white tracking-wide uppercase">
            Featured Products
          </h3>
          <div className="flex-1 h-[1px] bg-gradient-to-r from-cyan-500/20 to-transparent" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="group relative flex flex-col h-full bg-gray-950/40 backdrop-blur-sm border border-gray-800/80 hover:border-cyan-500/40 rounded-2xl overflow-hidden shadow-md hover:shadow-[0_10px_30px_rgba(34,211,238,0.06)]"
            >
              {/* Image zoom wrapper */}
              <div className="relative aspect-video overflow-hidden border-b border-gray-800/50">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/20 to-transparent" />
                <span className="absolute bottom-3 left-4 px-2.5 py-0.5 bg-black/60 backdrop-blur-md text-[10px] text-cyan-400 font-mono tracking-wider rounded-md border border-cyan-500/20">
                  {project.subtitle}
                </span>
              </div>

              {/* Card Body */}
              <div className="flex flex-col flex-1 p-5 md:p-6 justify-between">
                <div>
                  <h4 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300 mb-2.5">
                    {project.title}
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed mb-5 line-clamp-3">
                    {project.shortDescription}
                  </p>
                </div>

                <div>
                  {/* Tech chips snippet */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 bg-gray-900 border border-gray-800 text-gray-400 text-[10px] font-mono rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Explore Button */}
                  <button
                    onClick={() => openDetails(project)}
                    className="w-full py-2.5 bg-gray-900 hover:bg-gradient-to-r hover:from-cyan-600 hover:to-indigo-600 border border-gray-800 hover:border-transparent text-gray-300 hover:text-white text-sm font-semibold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 active:scale-98"
                  >
                    <span>Explore Project</span>
                    <Layers size={14} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SECTION 2: CLIENT & PERSONAL PROJECTS */}
      <section className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-10">
          <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-emerald-950 border border-emerald-500/30 text-emerald-400">
            <Monitor size={16} />
          </span>
          <h3 className="text-xl md:text-2xl font-bold text-white tracking-wide uppercase">
            Client & Personal Projects
          </h3>
          <div className="flex-1 h-[1px] bg-gradient-to-r from-emerald-500/20 to-transparent" />
        </div>

        {clientProjects.map((project) => (
          <div
            key={project.id}
            className="group grid grid-cols-1 md:grid-cols-12 bg-gray-950/30 border border-gray-800/80 hover:border-emerald-500/30 rounded-2xl overflow-hidden shadow-lg transition-all duration-500"
          >
            {/* Left Column: Custom image carousel (5 cols) */}
            <div className="md:col-span-5 h-[260px] md:h-auto min-h-[300px]">
              <PhotographySlideshow images={project.galleryImages} />
            </div>

            {/* Right Column: Descriptions & lists (7 cols) */}
            <div className="md:col-span-7 p-6 md:p-8 flex flex-col justify-between">
              <div>
                <span className="text-xs text-emerald-400 font-mono tracking-wider uppercase">
                  Premium Portfolio Client
                </span>
                <h4 className="text-2xl font-extrabold text-white mt-1 mb-3">
                  {project.title}
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Bullet highlights */}
                <ul className="space-y-2 mb-6">
                  {project.keyFeatures.slice(0, 3).map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                      <span className="text-emerald-400 mt-0.5 font-bold">✓</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                {/* Tech chips */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 bg-emerald-950/20 border border-emerald-500/20 text-emerald-300 text-xs font-mono rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Links */}
                <div className="flex gap-4 pt-4 border-t border-gray-800/60">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs font-semibold text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      <Github size={14} />
                      <span>Codebase</span>
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors duration-200"
                    >
                      <ExternalLink size={14} />
                      <span>Live Site</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* SECTION 3: DEVELOPER TOOLS */}
      <section className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-10">
          <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-950 border border-indigo-500/30 text-indigo-400">
            <Terminal size={16} />
          </span>
          <h3 className="text-xl md:text-2xl font-bold text-white tracking-wide uppercase">
            Developer Tools
          </h3>
          <div className="flex-1 h-[1px] bg-gradient-to-r from-indigo-500/20 to-transparent" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {devTools.map((tool) => (
            <motion.div
              key={tool.id}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col h-full bg-[#07070f] border border-gray-900/90 hover:border-indigo-500/40 rounded-xl p-5 md:p-6 justify-between shadow-sm"
            >
              <div>
                {/* Header Icon */}
                <div className="flex justify-between items-center mb-4">
                  <span className="p-2 bg-indigo-950/30 border border-indigo-500/20 text-indigo-400 rounded-lg">
                    <Terminal size={16} />
                  </span>
                  <span className="text-[10px] text-gray-500 font-mono tracking-wider">
                    UTIL
                  </span>
                </div>

                <h4 className="text-lg font-bold text-white mb-2">
                  {tool.title}
                </h4>
                <p className="text-gray-400 text-xs leading-relaxed mb-4">
                  {tool.description}
                </p>

                {/* Highlights List */}
                <ul className="space-y-1.5 mb-5">
                  {tool.highlights.map((high, idx) => (
                    <li key={idx} className="flex items-start gap-1.5 text-xs text-gray-400">
                      <span className="text-indigo-400 font-semibold">•</span>
                      <span>{high}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                {/* Micro Resume line callout */}
                {tool.resumeLine && (
                  <div className="p-3 bg-gray-950 border border-gray-900 rounded-lg mb-5">
                    <p className="text-[11px] text-gray-500 italic leading-snug">
                      "{tool.resumeLine}"
                    </p>
                  </div>
                )}

                {/* Links Footer */}
                <div className="flex items-center gap-3 pt-3 border-t border-gray-900 justify-end">
                  {tool.githubUrl && (
                    <a
                      href={tool.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 text-gray-400 hover:text-white border border-transparent hover:border-gray-800 rounded-md transition-all duration-200"
                      title="View GitHub Repository"
                    >
                      <Github size={14} />
                    </a>
                  )}
                  {tool.liveUrl && (
                    <a
                      href={tool.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors duration-200"
                      title="Visit Live Tool / Store"
                    >
                      <span>Link</span>
                      <ExternalLink size={12} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* DETAIL MODAL FOR FEATURED PROJECTS */}
      <ProjectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        project={selectedProject}
      />
    </div>
  );
};

export default ProjectsGrid;
