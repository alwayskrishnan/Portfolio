import { motion } from 'framer-motion';

const jobs = [
  {
    title: 'UI / Web Developer',
    company: 'ConglomerateIT',
    period: 'Jan 2024 – Present',
    location: 'Hyderabad, India',
    current: true,
    points: [
      'Sole UI Designer & Web Developer responsible for end-to-end design, development, and maintenance of company web platforms.',
      'Developed and launched conglomerateit.com, conglomeratehealthcare.com, geodisha.ai, and geodishadigital.ai.',
      'Managing 6+ live websites with focus on performance, security, and content management.',
      'Improved Core Web Vitals using image optimization and lazy loading.',
      'Implemented on-page & off-page SEO strategies improving search visibility.',
      'Managed hosting, DNS, SSL provisioning across GoDaddy and other platforms.',
    ],
  },
  {
    title: 'Web Development Intern',
    company: 'Senzwiz Technologies PVT',
    period: 'May 2023 – Nov 2023',
    location: 'Bangalore, India',
    current: false,
    points: [
      'Developed responsive web pages using HTML5, CSS3, Bootstrap, and JavaScript.',
      'Participated in full website development cycle — wireframing to deployment.',
      'Collaborated with senior developers and digital marketers for UX consistency.',
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15 },
  }),
};

export default function Experience() {
  return (
    <section id="work" className="py-28 md:py-36 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mb-16"
        >
          <span className="text-xs tracking-[0.3em] uppercase text-white/25 font-mono">02 — Experience</span>
          <h2 className="mt-4 text-[clamp(2.5rem,5vw,5rem)] font-black leading-[0.95] tracking-tight text-white uppercase">
            EXPERIENCE.
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-[200px] top-0 bottom-0 w-px bg-white/8" />

          <div className="flex flex-col gap-16">
            {jobs.map((job, i) => (
              <motion.div
                key={job.company}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="relative md:grid md:grid-cols-[200px_1fr] gap-10"
              >
                {/* Left: date/company */}
                <div className="md:text-right pr-10 mb-4 md:mb-0">
                  <div className="text-xs text-white/30 font-mono tracking-wider uppercase mb-2">
                    {job.period}
                  </div>
                  <div className="text-sm text-white/20 uppercase tracking-widest">{job.location}</div>

                  {/* Timeline dot */}
                  <div className="hidden md:flex absolute left-[196px] top-0 w-[9px] h-[9px] rounded-full items-center justify-center">
                    <div className={`w-2 h-2 rounded-full ${job.current ? 'bg-green-400' : 'bg-white/20'}`} />
                  </div>
                </div>

                {/* Right: content */}
                <div className="md:pl-10">
                  <div className="flex flex-wrap items-baseline gap-3 mb-5">
                    <h3 className="text-xl md:text-2xl font-bold text-white">{job.title}</h3>
                    <span className="text-sm text-white/35 font-medium">@ {job.company}</span>
                    {job.current && (
                      <span className="text-xs bg-green-400/10 text-green-400 border border-green-400/20 px-2.5 py-0.5 rounded-full font-mono tracking-wide">
                        Current
                      </span>
                    )}
                  </div>

                  <ul className="flex flex-col gap-2.5">
                    {job.points.map((point, pi) => (
                      <li key={pi} className="flex gap-3 text-sm text-white/50 leading-relaxed">
                        <span className="text-white/20 mt-1 flex-shrink-0">—</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
