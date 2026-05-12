import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import imgJokerz          from '../assets/images/jokerz.jpg';
import imgWebsite         from '../assets/images/website.png';
import imgWebsite1        from '../assets/images/website1.jpg';
import imgConglomerate    from '../assets/images/conglomerateit.jpg';
import imgGeodisha        from '../assets/images/geodisha.jpg';
import imgGeodishaOnePager from '../assets/images/geodisha-one-pager.jpg';
import imgGeodishaPolitics from '../assets/images/geodisha-politics.png';
import imgBTC             from '../assets/images/btc.jpg';
import imgPost10          from '../assets/images/post-10.jpg';
import imgPost14          from '../assets/images/post-14.png';
import imgPost15          from '../assets/images/post-15.png';
import imgPost31          from '../assets/images/post-31.png';
import imgDesign2         from '../assets/images/design-2.png';

// ── Types ──────────────────────────────────────────────────────────────────
export interface PosterImage {
  id: number | string;
  src: string;
  alt: string;
}

// ── Poster data ─────────────────────────────────────────────────────────────
const DEFAULT_POSTERS: PosterImage[] = [
  { id: 1,  src: imgJokerz,          alt: 'Jokerz Bakery'         },
  { id: 2,  src: imgWebsite,         alt: 'Website Design'        },
  { id: 3,  src: imgConglomerate,    alt: 'Conglomerate IT'       },
  { id: 4,  src: imgGeodisha,        alt: 'Geodisha'              },
  { id: 5,  src: imgBTC,             alt: 'Beta Trading Co.'      },
  { id: 6,  src: imgPost15,          alt: 'Creative Post'         },
  { id: 7,  src: imgPost14,          alt: 'Design Post'           },
  { id: 8,  src: imgDesign2,         alt: 'Design Work'           },
  { id: 9,  src: imgPost31,          alt: 'Social Post'           },
  { id: 10, src: imgGeodishaOnePager,alt: 'Geodisha One Pager'    },
  { id: 11, src: imgPost10,          alt: 'Campaign Post'         },
  { id: 12, src: imgWebsite1,        alt: 'Website Showcase'      },
  { id: 13, src: imgGeodishaPolitics,alt: 'Geodisha Politics'     },
];

// ── PosterCard ─────────────────────────────────────────────────────────────
interface PosterCardProps {
  poster: PosterImage;
  onClick: (p: PosterImage) => void;
}

function PosterCard({ poster, onClick }: PosterCardProps) {
  return (
    <motion.div
      onClick={() => onClick(poster)}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="relative shrink-0 cursor-pointer overflow-hidden rounded-2xl"
      style={{ width: 'clamp(140px, 14vw, 220px)', aspectRatio: '3 / 4' }}
    >
      <img
        src={poster.src}
        alt={poster.alt}
        className="w-full h-full object-cover"
        loading="lazy"
        draggable={false}
      />

      {/* Subtle inner border on hover */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.25 }}
        className="absolute inset-0 pointer-events-none rounded-2xl"
        style={{
          boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.18), 0 0 30px rgba(255,255,255,0.06)',
        }}
      />

      {/* View pill */}
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        whileHover={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        style={{ background: 'rgba(0,0,0,0.28)' }}
      >
        <span className="text-white text-[10px] tracking-[0.22em] uppercase font-mono border border-white/35 px-3 py-1.5 rounded-full backdrop-blur-sm">
          View
        </span>
      </motion.div>
    </motion.div>
  );
}

// ── PosterRow ──────────────────────────────────────────────────────────────
interface PosterRowProps {
  posters: PosterImage[];
  direction: 'left' | 'right';
  speed: number;
  gradientEdge: 'top' | 'bottom' | 'none';
  onCardClick: (p: PosterImage) => void;
}

function PosterRow({ posters, direction, speed, gradientEdge, onCardClick }: PosterRowProps) {
  const [paused, setPaused] = useState(false);

  const trackClass = [
    'poster-track',
    direction === 'left' ? 'poster-track--left' : 'poster-track--right',
    paused ? 'poster-track--paused' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div
      className="relative overflow-hidden py-2"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Scrolling track — content duplicated for seamless loop */}
      <div
        className={`${trackClass} gap-4`}
        style={{ '--poster-speed': `${speed}s` } as React.CSSProperties}
      >
        {[...posters, ...posters].map((poster, i) => (
          <PosterCard key={`${poster.id}-${i}`} poster={poster} onClick={onCardClick} />
        ))}
      </div>

      {/* Row-specific edge gradient (top or bottom) */}
      {gradientEdge === 'top' && (
        <div className="absolute inset-x-0 top-0 h-20 pointer-events-none z-10"
          style={{ background: 'linear-gradient(to bottom, #0a0a0a 0%, transparent 100%)' }} />
      )}
      {gradientEdge === 'bottom' && (
        <div className="absolute inset-x-0 bottom-0 h-20 pointer-events-none z-10"
          style={{ background: 'linear-gradient(to top, #0a0a0a 0%, transparent 100%)' }} />
      )}

      {/* Left edge mask */}
      <div
        className="absolute inset-y-0 left-0 w-20 md:w-36 pointer-events-none z-10"
        style={{ background: 'linear-gradient(to right, #0a0a0a 0%, transparent 100%)' }}
      />
      {/* Right edge mask */}
      <div
        className="absolute inset-y-0 right-0 w-20 md:w-36 pointer-events-none z-10"
        style={{ background: 'linear-gradient(to left, #0a0a0a 0%, transparent 100%)' }}
      />
    </div>
  );
}

// ── ModalViewer ────────────────────────────────────────────────────────────
interface ModalViewerProps {
  poster: PosterImage | null;
  onClose: () => void;
}

function ModalViewer({ poster, onClose }: ModalViewerProps) {
  useEffect(() => {
    if (!poster) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [poster, onClose]);

  return (
    <AnimatePresence>
      {poster && (
        <motion.div
          key="modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex items-center justify-center px-4"
          style={{ backdropFilter: 'blur(16px)', background: 'rgba(0,0,0,0.84)' }}
          onClick={onClose}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-9 h-9 flex items-center justify-center rounded-full border border-white/15 text-white/50 hover:text-white hover:border-white/40 transition-all duration-200 text-sm z-10"
            aria-label="Close"
          >
            ✕
          </button>

          {/* Image container */}
          <motion.div
            key="modal-image"
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 20 }}
            transition={{ type: 'spring', damping: 28, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="relative"
          >
            <img
              src={poster.src}
              alt={poster.alt}
              className="max-w-[88vw] max-h-[86vh] rounded-2xl object-contain"
              style={{ boxShadow: '0 30px 90px rgba(0,0,0,0.95)' }}
            />
            {/* Caption */}
            <p className="mt-3 text-center text-xs text-white/35 tracking-[0.2em] uppercase font-mono">
              {poster.alt}
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ── CreativePosters (section) ──────────────────────────────────────────────
interface CreativePostersProps {
  posters?: PosterImage[];
}

export default function CreativePosters({ posters = DEFAULT_POSTERS }: CreativePostersProps) {
  const [activePoster, setActivePoster] = useState<PosterImage | null>(null);

  // Row 2 starts at the midpoint for visual variety across rows
  const mid = Math.floor(posters.length / 2);
  const row2 = [...posters.slice(mid), ...posters.slice(0, mid)];

  const handleCardClick = useCallback((p: PosterImage) => setActivePoster(p), []);
  const handleClose = useCallback(() => setActivePoster(null), []);

  return (
    <>
      <section id="posters" className="py-28 md:py-36 border-t border-white/5 overflow-hidden">
        {/* Header — matches site-wide pattern */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-7xl mx-auto px-6 md:px-10 mb-14"
        >
          <span className="text-xs tracking-[0.3em] uppercase text-white/25 font-mono">
             04 — Design Explorations
          </span>
          <h2 className="mt-4 text-[clamp(2.5rem,5vw,5rem)] font-black leading-[0.95] tracking-tight text-white uppercase">
            CREATIVES
          </h2>
          <p className="mt-4 text-sm text-white/30 max-w-sm leading-relaxed">
            A visual collection of creative works, brand campaigns, and design explorations.
          </p>
        </motion.div>

        {/* Marquee rows */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col gap-5"
        >
          {/* Row 1 — scrolls left, top gradient */}
          <PosterRow
            posters={posters}
            direction="left"
            speed={38}
            gradientEdge="top"
            onCardClick={handleCardClick}
          />

          {/* Row 2 — scrolls right, bottom gradient */}
          <PosterRow
            posters={row2}
            direction="right"
            speed={46}
            gradientEdge="bottom"
            onCardClick={handleCardClick}
          />
        </motion.div>
      </section>

      {/* Lightbox */}
      <ModalViewer poster={activePoster} onClose={handleClose} />
    </>
  );
}
