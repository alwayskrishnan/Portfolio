import { motion, type Variants } from 'framer-motion';

const techs = [
  'HTML5', 'CSS3', 'JavaScript', 'React.js', 'WordPress',
  'Figma', 'PHP', 'MySQL', 'Tailwind CSS', 'Framer Motion',
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.05 },
  }),
};

export default function About() {
  return (
    <section id="about" className="py-28 md:py-36 max-w-7xl mx-auto px-6 md:px-10">
      <div className="grid md:grid-cols-[1fr_1.4fr] gap-16 md:gap-24 items-start">
        {/* Left: heading */}
        <div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <span className="text-xs tracking-[0.3em] uppercase text-white/25 font-mono">01 — About</span>
            <h2 className="mt-4 text-[clamp(2.5rem,5vw,5rem)] font-black leading-[0.95] tracking-tight text-white uppercase">
              ABOUT<br />ME.
            </h2>
          </motion.div>

          {/* Number accent */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={1}
            className="mt-10 pt-10 border-t border-white/8"
          >
            <span className="font-mono text-[6rem] font-black leading-none text-white/5 select-none">
              LK
            </span>
          </motion.div>
        </div>

        {/* Right: text + tech */}
        <div>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="text-white/55 text-lg leading-relaxed"
          >
            I'm a results-driven Web Developer & UI Designer with around{' '}
            <span className="text-white font-medium">3 years of experience</span> building
            and managing enterprise websites. I led end-to-end development at
            ConglomerateIT — from Figma design to live deployment across{' '}
            <span className="text-white font-medium">6+ sites</span> — with a strong
            focus on performance, Core Web Vitals, and organic search growth.
          </motion.p>

          {/* Tech grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-10 flex flex-wrap gap-2.5"
          >
            {techs.map((tech, i) => (
              <motion.span
                key={tech}
                variants={fadeUp}
                custom={i * 0.5}
                className="px-3.5 py-1.5 border border-white/10 rounded-full text-xs text-white/50 font-mono tracking-wide hover:border-white/30 hover:text-white/80 transition-all duration-200"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>

          {/* Location badge */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={6}
            className="mt-10 flex items-center gap-2 text-sm text-white/30"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Hyderabad, India
          </motion.div>
        </div>
      </div>
    </section>
  );
}
