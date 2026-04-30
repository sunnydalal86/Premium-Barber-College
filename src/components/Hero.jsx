import { motion } from 'framer-motion'
import { MapPin, Clock, Award, BookOpen } from 'lucide-react'

const badges = [
  { icon: MapPin, label: 'San Jose, CA' },
  { icon: Clock, label: '1,000 Hours' },
  { icon: Award, label: 'BPPE Approved' },
  { icon: BookOpen, label: 'Hands-On Training' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
}

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-28 md:pt-0">
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-neutral-900/50 to-neutral-950" />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        }}
      />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-center px-4 sm:px-6 lg:px-8 min-h-screen text-center pt-16 md:pt-24">
        <motion.div
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mb-8"
        >
          <img
            src="/logo.png"
            alt="Premium Barber College"
            className="mx-auto h-44 sm:h-56 md:h-72 lg:h-80 w-auto"
            fetchPriority="high"
          />
        </motion.div>

        <motion.p
          custom={1}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-sm font-medium text-gold"
        >
          <Award className="h-3.5 w-3.5" aria-hidden="true" />
          BPPE-Approved Barber College in San Jose
        </motion.p>

        <motion.h1
          custom={2}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl max-w-4xl"
        >
          Your Barbering Career{' '}
          <span className="text-gold">Starts Here</span>
        </motion.h1>

        <motion.p
          custom={3}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mt-6 max-w-2xl text-lg leading-relaxed text-neutral-300 md:text-xl"
        >
          Premium Barber College prepares you for the California State Board exam
          with hands-on training, professional instruction, and the skills to launch
          a successful barbering career.
        </motion.p>

        <motion.div
          custom={4}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4"
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-gold px-8 py-4 text-base font-bold text-neutral-950 shadow-lg shadow-gold/20 transition-all hover:bg-gold-light hover:shadow-xl hover:shadow-gold/30 hover:-translate-y-0.5"
          >
            Request Info
          </a>
          <a
            href="#catalog"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-neutral-700 bg-neutral-900/50 px-8 py-4 text-base font-bold text-white transition-all hover:border-neutral-600 hover:bg-neutral-800 hover:-translate-y-0.5"
          >
            <BookOpen className="h-5 w-5" aria-hidden="true" />
            View Course Catalog
          </a>
        </motion.div>

        <motion.div
          custom={5}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          {badges.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-2 rounded-lg border-2 border-neutral-500 bg-neutral-900 px-4 py-2.5 text-base font-bold text-white"
            >
              <Icon className="h-4 w-4 text-gold" aria-hidden="true" />
              {label}
            </div>
          ))}
        </motion.div>
      </div>

    </section>
  )
}
