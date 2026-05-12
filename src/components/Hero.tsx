import { motion } from 'framer-motion';

const tickerItems = [
  'WEB DEVELOPER',
  'UI DESIGNER',
  'WORDPRESS EXPERT',
  'REACT DEVELOPER',
  'SEO SPECIALIST',
  'UI DEVELOPER',
];

const repeated = [...tickerItems, ...tickerItems, ...tickerItems, ...tickerItems];

function TickerRow({ reverse = false }: { reverse?: boolean }) {
  return (
    <div className="overflow-hidden w-full py-2 border-y border-white/8">
      <div
        className={`ticker-track ${reverse ? 'animate-marquee-right' : 'animate-marquee-left'}`}
      >
        {repeated.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-4 px-6 text-xs md:text-sm tracking-[0.25em] uppercase text-white/40 font-medium whitespace-nowrap"
          >
            {item}
            <span className="text-white/20 text-lg">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

const words = ['LEELA', 'KRISHNA'];

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-16">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 w-full">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 text-xs tracking-[0.3em] uppercase text-white/30 font-mono border border-white/10 px-4 py-2 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            Available for work
          </span>
        </motion.div>

        {/* Heading */}
        <div className="overflow-hidden mb-4">
          {words.map((word, wi) => (
            <div key={word} className="overflow-hidden">
              <motion.h1
                initial={{ y: 100, opacity: 0 }}
                animate={{y: 0, opacity: 1}}
                transition={{ duration: 0.8, delay: 0.3 + wi * 0.12, ease: "easeOut" }}
                className="text-[clamp(3rem,10vw,9rem)] font-black leading-[0.92] tracking-tight text-white uppercase"
              >
                {word}
              </motion.h1>
            </div>
          ))}
        </div>

        {/* Divider + subtext row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.75 }}
          className="mt-10 flex flex-col md:flex-row md:items-end gap-8 md:gap-16"
        >
          <p className="max-w-lg text-white/50 text-base md:text-lg leading-relaxed">
            Web Developer & UI Designer crafting responsive, performant websites
            from Figma to deployment.
          </p>

          {/* Stats */}
          <div className="flex gap-10">
            {[['3', 'Years Experience'], ['10+', 'Live Websites']].map(([num, label]) => (
              <div key={label} className="flex flex-col">
                <span className="text-3xl md:text-4xl font-black text-white">{num}</span>
                <span className="text-xs text-white/30 uppercase tracking-widest mt-1">{label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-10"
        >
          <button
            onClick={scrollToContact}
            className="group relative inline-flex items-center gap-3 bg-white text-black px-7 py-3.5 rounded-full text-sm font-semibold tracking-wide uppercase hover:bg-white/90 transition-all duration-200"
          >
            Let's Talk
            <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
          </button>
        </motion.div>
      </div>

      {/* Ticker strips */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.1 }}
        className="mt-16 w-full hidden"
      >
        <TickerRow reverse={false} />
        <TickerRow reverse={true} />
      </motion.div>
    </section>
  );
}
