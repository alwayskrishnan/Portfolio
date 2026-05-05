import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const skillGroups = [
  {
    id: 'frontend',
    label: 'Front-End Development',
    skills: ['HTML5', 'CSS3', 'Bootstrap', 'JavaScript', 'React.js', 'Responsive Web Design'],
  },
  {
    id: 'design',
    label: 'UI Design',
    skills: ['Figma', 'Adobe Photoshop', 'Canva'],
  },
  {
    id: 'cms',
    label: 'CMS & Tools',
    skills: ['WordPress', 'Elementor', 'Basic PHP', 'MySQL', 'Plugin Integration & Configuration'],
  },
  {
    id: 'seo',
    label: 'SEO & Marketing',
    skills: ['On-Page SEO', 'Off-Page SEO', 'Google Analytics', 'SEO Audits', 'Schema Markup', 'Sitemaps'],
  },
  {
    id: 'hosting',
    label: 'Web Hosting',
    skills: ['cPanel Management', 'DNS Configuration', 'SSL Management'],
  },
  {
    id: 'ai',
    label: 'AI Tools',
    skills: ['Claude AI', 'GitHub Copilot', 'ChatGPT', 'Midjourney', 'Google Flow'],
  },
];

function AccordionItem({
  group,
  index,
  isOpen,
  onToggle,
}: {
  group: typeof skillGroups[0];
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.07, ease: "easeOut" }}
      className="border-b border-white/8"
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-6 text-left group"
      >
        <div className="flex items-center gap-4">
          <span className="font-mono text-xs text-white/20 w-6 tabular-nums">
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className={`text-base md:text-lg font-semibold transition-colors duration-200 ${isOpen ? 'text-white' : 'text-white/60 group-hover:text-white/90'}`}>
            {group.label}
          </span>
        </div>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.25 }}
          className="text-2xl text-white/30 group-hover:text-white/60 transition-colors w-8 flex items-center justify-center flex-shrink-0"
        >
          +
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <div className="pb-6 pl-10 flex flex-wrap gap-2.5">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-white/5 border border-white/8 rounded-full text-sm text-white/60 font-mono tracking-wide hover:bg-white/8 hover:text-white/80 transition-all duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Skills() {
  const [openId, setOpenId] = useState<string | null>('frontend');

  return (
    <section id="skills" className="py-28 md:py-36 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-[1fr_1.8fr] gap-16 md:gap-24">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="text-xs tracking-[0.3em] uppercase text-white/25 font-mono">04 — Skills</span>
            <h2 className="mt-4 text-[clamp(2.5rem,5vw,5rem)] font-black leading-[0.95] tracking-tight text-white uppercase">
              EXPERTISE.
            </h2>
            <p className="mt-6 text-sm text-white/35 leading-relaxed max-w-xs">
              A toolkit built through real-world projects — from pixel-perfect UI to production deployments.
            </p>
          </motion.div>

          {/* Accordion */}
          <div className="border-t border-white/8">
            {skillGroups.map((group, i) => (
              <AccordionItem
                key={group.id}
                group={group}
                index={i}
                isOpen={openId === group.id}
                onToggle={() => setOpenId(openId === group.id ? null : group.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
