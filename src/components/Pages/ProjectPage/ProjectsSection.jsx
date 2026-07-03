import { ArrowUpFromDot } from 'lucide-react';
import ProjectsGrid from './ProjectsGrid';

const ProjectsSection = () => {
  return (
    <div className="relative w-full min-h-screen bg-[#030307] pb-24 lg:pb-40 overflow-hidden">
      {/* Background glowing gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="relative z-10">
        {/* Headline Section */}
        <div className="pt-28 md:pt-40 mb-16 headline flex flex-col justify-center items-center gap-4 text-white">
          <div className="flex justify-center items-center gap-6 md:gap-16">
            <div className="arrow">
              <ArrowUpFromDot className='-rotate-90 text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.4)]' size={40} />
            </div>
            <div className="bold text-4xl md:text-7xl tracking-wider uppercase bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400">
              My Works
            </div>
            <div className="arrow">
              <ArrowUpFromDot className='rotate-90 text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.4)]' size={40} />
            </div>
          </div>
          <p className="text-gray-400 text-xs md:text-sm tracking-widest uppercase font-mono mt-2">
            Selected products, developer utilities, & solutions
          </p>
        </div>

        {/* Projects Grid Grid */}
        <ProjectsGrid />
      </div>
    </div>
  );
};

export default ProjectsSection;

