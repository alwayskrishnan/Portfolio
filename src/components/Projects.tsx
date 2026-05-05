import { motion } from 'framer-motion';

const projects = [
  {
    index: '01',
    name: 'CONGLOMERATE IT SOLUTIONS',
    tags: ['WordPress', 'Elementor', 'SEO', 'UI Design'],
    description:
      'Corporate website for a global IT services company. Designed and developed a responsive multi-page site with mega menu, structured IA for Data, AI & Digital Transformation offerings. Implemented SEO, Core Web Vitals optimization, and full hosting setup.',
    link: 'https://www.conglomerateit.com',
  },
  {
    index: '02',
    name: 'GEODISHA.AI',
    tags: ['WordPress', 'GenAI', 'UI Design', 'Responsive'],
    description:
      "GenAI-powered data intelligence platform. Built a responsive website showcasing AI tools like Votelytics™, PulseGauge™, PersonaGen™ and service models DaaP, IaaS, PaaS.",
    link: 'http://geodisha.ai',
  },
  {
    index: '03',
    name: 'GEODISHADIGITAL.AI',
    tags: ['WordPress', 'Digital Marketing', 'UI Design'],
    description:
      'Digital transformation and marketing platform. Designed UI layouts for data-driven marketing, audience intelligence, and campaign optimization services.',
    link: 'http://geodishadigital.ai',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12 },
  }),
};

export default function Projects() {
  return (
    <section id="projects" className="py-28 md:py-36 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-4"
        >
          <div>
            <span className="text-xs tracking-[0.3em] uppercase text-white/25 font-mono">03 — Work</span>
            <h2 className="mt-4 text-[clamp(2.5rem,5vw,5rem)] font-black leading-[0.95] tracking-tight text-white uppercase">
              SELECTED<br />WORK.
            </h2>
          </div>
          <p className="text-sm text-white/30 max-w-xs">
            Live projects designed, built, and deployed — from concept to production.
          </p>
        </motion.div>

        {/* Project cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <motion.div
              key={project.index}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="group relative flex flex-col bg-white/[0.03] border border-white/8 rounded-2xl p-7 hover:border-white/20 hover:bg-white/[0.05] transition-all duration-300 cursor-default"
            >
              {/* Index + link */}
              <div className="flex items-start justify-between mb-8">
                <span className="font-mono text-xs text-white/20 tracking-widest">{project.index}</span>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 flex items-center justify-center border border-white/10 rounded-full text-white/30 hover:text-white hover:border-white/40 transition-all duration-200 text-xs"
                  aria-label={`Visit ${project.name}`}
                >
                  ↗
                </a>
              </div>

              {/* Name */}
              <h3 className="text-base font-bold text-white leading-tight mb-4 group-hover:text-white transition-colors">
                {project.name}
              </h3>

              {/* Description */}
              <p className="text-sm text-white/40 leading-relaxed flex-1 mb-6">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-6 border-t border-white/8">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] uppercase tracking-widest text-white/30 font-mono border border-white/8 px-2.5 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.08), 0 0 40px rgba(255,255,255,0.03)' }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
