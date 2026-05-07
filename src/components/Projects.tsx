import { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';

const ACCENT = '#60a5fa';

const standardProjects = [
  {
     link: 'https://conglomerateit.com/',
    title: 'Enterprise IT Solutions Platform',
    description:
      'A technology-driven enterprise platform offering IT services, cloud infrastructure, and AI-powered solutions to help businesses scale efficiently.',
    tags: ['IT Services', 'Cloud', 'AI', 'Enterprise'],
  },
  {
    link: 'https://geodishadigital.ai/',
    title: 'Data-Driven Digital Marketing Platform',
    description:
      'A performance marketing platform leveraging analytics, automation, and insights to drive measurable business growth.',
    tags: ['Marketing', 'Analytics', 'Performance'],
  },
  {
    link: 'https://geodisha.ai/',
    title: 'AI-Powered Data Intelligence Platform',
    description:
      'An AI-native platform transforming data into actionable insights for smarter decisions across industries.',
    tags: ['AI', 'Data Analytics', 'GenAI'],
  },
  {
    link: 'https://betatradingcompany.com/',
    title: 'Trading & Business Solutions Website',
    description:
      'A corporate website showcasing trading operations, services, and global market solutions with a professional identity.',
    tags: ['Business', 'Corporate', 'Trading'],
  },
  {
    link: 'https://conglomeratehealthcare.com/',
    title: 'Healthcare Technology Platform',
    description:
      'A healthcare-focused platform delivering innovative solutions to enhance patient care and operational efficiency.',
    tags: ['Healthcare', 'Technology', 'Services'],
  },
  {
    link: 'https://jokerzbakery.com/',
    title: 'Jokerz Bakery – Premium Bakery',
    description:
      'A visually engaging bakery website designed to showcase premium cakes, desserts, and custom creations with a strong focus on branding and user experience.',
    tags: ['Food', 'Branding', 'Services'],
  },
];

const subsites = [
  { name: 'Value Grains', url: 'https://valuegrains.com/' },
  { name: 'Treatz Bakery', url: 'https://treatzbakery.com/' },
  { name: 'Sarigama Frisco', url: 'https://www.sarigamafrisco.com/' },
  { name: 'Akshaya Visa', url: 'https://akshayavisa.com/' },
];

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: 'easeOut' as const },
  }),
};

interface Project {
  link: string;
  title: string;
  description: string;
  tags: string[];
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={cardVariants}
      whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
      className="group relative flex flex-col rounded-2xl overflow-hidden"
      style={{
        background: 'rgba(255,255,255,0.03)',
        backdropFilter: 'blur(12px)',
        border: '1px solid rgba(255,255,255,0.08)',
      }}
    >
      {/* Hover accent glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
        style={{
          boxShadow: `0 0 40px rgba(96,165,250,0.12), inset 0 0 0 1px rgba(96,165,250,0.2)`,
        }}
      />

      {/* ── Preview area 16:10 ── */}
      <div className="relative overflow-hidden" style={{ paddingTop: '62.5%' }}>
        {!loaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-[#0d0d0d]">
            <div
              className="w-6 h-6 rounded-full border-2 border-white/10 animate-spin"
              style={{ borderTopColor: ACCENT }}
            />
          </div>
        )}

        {/* 2× scale wrapper */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '200%',
            height: '200%',
            transform: 'scale(0.5)',
            transformOrigin: 'top left',
            pointerEvents: 'none',
          }}
        >
          <iframe
            src={project.link}
            title={project.title}
            style={{ width: '100%', height: '100%', border: 'none', display: 'block' }}
            onLoad={() => setLoaded(true)}
            loading="lazy"
          />
        </div>

        {/* Bottom fade overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.92) 100%)',
          }}
        />

        {/* Live badge */}
        <div
          className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider"
          style={{
            background: 'rgba(16,185,129,0.15)',
            color: '#10b981',
            border: '1px solid rgba(16,185,129,0.3)',
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full animate-pulse"
            style={{ background: '#10b981' }}
          />
          Live
        </div>
      </div>

      {/* ── Content area ── */}
      <div className="flex flex-col flex-1 p-6">
        <h3
          className="text-base font-bold text-white mb-2 leading-snug"
        >
          {project.title}
        </h3>
        <p className="text-sm text-white/50 leading-relaxed mb-4 flex-1">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full font-mono"
              style={{
                background: 'rgba(96,165,250,0.1)',
                color: ACCENT,
                border: '1px solid rgba(96,165,250,0.25)',
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Visit button */}
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="visit-btn inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold w-fit transition-all duration-300"
          style={{ border: `1px solid rgba(96,165,250,0.4)`, color: ACCENT }}
          onMouseEnter={(e) => {
            const el = e.currentTarget;
            el.style.background = ACCENT;
            el.style.color = '#fff';
            el.style.boxShadow = '0 0 22px rgba(96,165,250,0.5)';
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget;
            el.style.background = 'transparent';
            el.style.color = ACCENT;
            el.style.boxShadow = 'none';
          }}
        >
          Visit Website <span>↗</span>
        </a>
      </div>
    </motion.div>
  );
}

function BrowserCard() {
  const [activeTab, setActiveTab] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(false);
  const tabStripRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);

  const checkArrows = useCallback(() => {
    const el = tabStripRef.current;
    if (!el) return;
    setShowLeft(el.scrollLeft > 2);
    setShowRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 2);
  }, []);

  const scrollTabIntoView = useCallback((index: number) => {
    const el = tabStripRef.current;
    if (!el) return;
    const tab = el.children[index] as HTMLElement;
    if (!tab) return;
    const tabLeft = tab.offsetLeft;
    const tabRight = tabLeft + tab.offsetWidth;
    const visLeft = el.scrollLeft;
    const visRight = visLeft + el.clientWidth;
    if (tabLeft < visLeft) {
      el.scrollTo({ left: tabLeft - 8, behavior: 'smooth' });
    } else if (tabRight > visRight) {
      el.scrollTo({ left: tabRight - el.clientWidth + 8, behavior: 'smooth' });
    }
  }, []);

  const goToTab = useCallback(
    (index: number) => {
      setActiveTab(index);
      scrollTabIntoView(index);
    },
    [scrollTabIntoView]
  );

  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActiveTab((prev) => {
        const next = (prev + 1) % subsites.length;
        scrollTabIntoView(next);
        return next;
      });
    }, 4000);
  }, [scrollTabIntoView]);

  useEffect(() => {
    if (!isHovered) startTimer();
    else if (timerRef.current) clearInterval(timerRef.current);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isHovered, startTimer]);

  useEffect(() => {
    const el = tabStripRef.current;
    if (!el) return;
    checkArrows();
    el.addEventListener('scroll', checkArrows, { passive: true });
    const ro = new ResizeObserver(checkArrows);
    ro.observe(el);
    return () => {
      el.removeEventListener('scroll', checkArrows);
      ro.disconnect();
    };
  }, [checkArrows]);

  const scrollStrip = (dir: 'left' | 'right') => {
    const el = tabStripRef.current;
    if (!el) return;
    el.scrollBy({ left: dir === 'left' ? -140 : 140, behavior: 'smooth' });
    startTimer();
  };

  const handleTabClick = (index: number) => {
    goToTab(index);
    startTimer();
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    const dy = e.changedTouches[0].clientY - touchStartY.current;
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
      const next =
        dx < 0
          ? Math.min(activeTab + 1, subsites.length - 1)
          : Math.max(activeTab - 1, 0);
      goToTab(next);
      startTimer();
    }
  };

  return (
    <motion.div
      custom={6}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={cardVariants}
      className="relative rounded-2xl overflow-hidden"
      style={{
        background: 'rgba(255,255,255,0.03)',
        backdropFilter: 'blur(12px)',
        border: '1px solid rgba(255,255,255,0.08)',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* ── Browser chrome bar ── */}
      <div
        className="flex items-center gap-3 px-4 py-3"
        style={{
          background: 'rgba(255,255,255,0.025)',
          borderBottom: '1px solid rgba(255,255,255,0.07)',
        }}
      >
        {/* Traffic lights */}
        <div className="flex items-center gap-1.5 shrink-0">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <div className="w-3 h-3 rounded-full bg-[#28c840]" />
        </div>

        {/* URL bar */}
        <div
          className="flex flex-1 items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono text-white/40 mx-2 min-w-0"
          style={{
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.08)',
          }}
        >
          <svg
            width="11"
            height="11"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="shrink-0 text-white/25"
          >
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
          <span className="truncate">{subsites[activeTab].url}</span>
        </div>

        {/* Badge */}
        <div
          className="shrink-0 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider"
          style={{
            background: 'rgba(96,165,250,0.15)',
            color: ACCENT,
            border: '1px solid rgba(96,165,250,0.25)',
          }}
        >
          Portfolio
        </div>
      </div>

      {/* ── Tab strip ── */}
      <div
        className="relative flex items-stretch"
        style={{
          background: 'rgba(0,0,0,0.25)',
          borderBottom: '1px solid rgba(255,255,255,0.07)',
        }}
      >
        {/* Left scroll button */}
        <button
          onClick={() => scrollStrip('left')}
          aria-label="Scroll tabs left"
          className="absolute left-0 top-0 bottom-0 z-10 flex items-center px-2 transition-opacity duration-200"
          style={{
            opacity: showLeft ? 1 : 0,
            pointerEvents: showLeft ? 'auto' : 'none',
            background: 'linear-gradient(to right, rgba(0,0,0,0.85) 60%, transparent)',
          }}
        >
          <span className="text-white/60 text-lg leading-none">‹</span>
        </button>

        {/* Scrollable tabs */}
        <div
          ref={tabStripRef}
          className="flex items-end overflow-x-auto scrollbar-hide px-8 w-full"
        >
          {subsites.map((site, i) => (
            <button
              key={site.name}
              onClick={() => handleTabClick(i)}
              className="shrink-0 px-5 py-3 text-xs font-medium whitespace-nowrap transition-all duration-200 border-b-2"
              style={{
                color: activeTab === i ? ACCENT : 'rgba(255,255,255,0.4)',
                borderBottomColor: activeTab === i ? ACCENT : 'transparent',
              }}
            >
              {site.name}
            </button>
          ))}
        </div>

        {/* Right scroll button */}
        <button
          onClick={() => scrollStrip('right')}
          aria-label="Scroll tabs right"
          className="absolute right-0 top-0 bottom-0 z-10 flex items-center px-2 transition-opacity duration-200"
          style={{
            opacity: showRight ? 1 : 0,
            pointerEvents: showRight ? 'auto' : 'none',
            background: 'linear-gradient(to left, rgba(0,0,0,0.85) 60%, transparent)',
          }}
        >
          <span className="text-white/60 text-lg leading-none">›</span>
        </button>
      </div>

      {/* ── Preview area ── */}
      <div
        className="relative overflow-hidden"
        style={{ height: 420, background: '#080808' }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* 2× scale wrapper */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '200%',
            height: '200%',
            transform: 'scale(0.5)',
            transformOrigin: 'top left',
            pointerEvents: 'none',
          }}
        >
          <iframe
            key={activeTab}
            src={subsites[activeTab].url}
            title={subsites[activeTab].name}
            style={{ width: '100%', height: '100%', border: 'none', display: 'block' }}
            loading="lazy"
          />
        </div>

        {/* Bottom gradient */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(to bottom, transparent 55%, rgba(0,0,0,0.96) 100%)',
          }}
        />
      </div>

      {/* ── Content area ── */}
      <div className="p-6 md:p-8">
        <h3
          className="text-xl font-bold text-white mb-2"
        >
          Food & Lifestyle Brand Portfolio
        </h3>
        <p className="text-sm text-white/50 leading-relaxed mb-5 max-w-3xl">
          A collection of visually engaging websites designed for bakery, restaurant, and
          lifestyle brands — focusing on branding, UI/UX, and user engagement across
          multiple digital identities.
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {['Food', 'Branding', 'UI/UX', 'Business'].map((tag) => (
            <span
              key={tag}
              className="text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full font-mono"
              style={{
                background: 'rgba(96,165,250,0.1)',
                color: ACCENT,
                border: '1px solid rgba(96,165,250,0.25)',
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Site link chips */}
        <div className="flex flex-wrap gap-2">
          {subsites.map((site) => (
            <a
              key={site.name}
              href={site.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs px-3 py-1.5 rounded-full font-medium transition-all duration-200"
              style={{
                border: `1px solid rgba(96,165,250,0.4)`,
                color: ACCENT,
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.background = ACCENT;
                el.style.color = '#fff';
                el.style.borderColor = ACCENT;
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.background = 'transparent';
                el.style.color = ACCENT;
                el.style.borderColor = 'rgba(96,165,250,0.4)';
              }}
            >
              {site.name} ↗
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-28 md:py-36 border-t border-white/5 overflow-hidden"
    >
      {/* Ambient blobs */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '10%',
          left: '20%',
          width: 500,
          height: 500,
          borderRadius: '50%',
          background: ACCENT,
          opacity: 0.055,
          filter: 'blur(110px)',
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: '15%',
          right: '15%',
          width: 380,
          height: 380,
          borderRadius: '50%',
          background: ACCENT,
          opacity: 0.04,
          filter: 'blur(130px)',
        }}
      />

      {/* Noise texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: 0.022,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '128px 128px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        {/* ── Section header ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="mb-16"
        >
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-5">
            <span className="text-xs tracking-[0.3em] uppercase font-mono text-white/40">
              Selected Work
            </span>
            <div className="w-14 h-px" style={{ background: ACCENT }} />
          </div>

          {/* Heading */}
          <h2
            className="text-[clamp(2.5rem,5vw,5rem)] font-black leading-[0.95] tracking-tight text-white mb-5"
          >
            PROJECTS
          </h2>

          {/* Subtitle */}
          <p className="text-white/35 text-base md:text-lg max-w-2xl leading-relaxed">
            A curated collection of digital platforms, enterprise solutions, and brand
            experiences built to perform at scale.
          </p>
        </motion.div>

        {/* ── Cards grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {standardProjects.map((project, i) => (
            <ProjectCard key={project.link + i} project={project} index={i} />
          ))}

          {/* Card 7 — full width */}
          <div className="col-span-1 md:col-span-2 lg:col-span-3">
            <BrowserCard />
          </div>
        </div>
      </div>
    </section>
  );
}
