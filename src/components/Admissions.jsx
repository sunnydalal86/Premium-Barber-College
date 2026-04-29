import { motion } from 'framer-motion'
import {
  Scissors,
  ShieldCheck,
  Award,
  Briefcase,
  TrendingUp,
  Users,
} from 'lucide-react'

const objectives = [
  {
    icon: Scissors,
    title: 'Skills Mastery',
    description:
      'Master haircutting, fading, styling, chemical services, and shaving techniques through intensive hands-on training.',
  },
  {
    icon: ShieldCheck,
    title: 'Licensing Preparation',
    description:
      'Prepare thoroughly for the California State Board of Barbering & Cosmetology exam with focused coursework and practice exams.',
  },
  {
    icon: Briefcase,
    title: 'Business Management',
    description:
      'Learn the business side of barbering — client relations, shop management, and the professional ethics needed to succeed.',
  },
  {
    icon: Users,
    title: 'Customer Service Excellence',
    description:
      'Develop strong communication and client consultation skills to build a loyal clientele and deliver exceptional service.',
  },
  {
    icon: TrendingUp,
    title: 'Creativity & Innovation',
    description:
      'Stay current with modern techniques, trends, and styles that set you apart in the competitive barbering industry.',
  },
  {
    icon: Award,
    title: 'Ethical & Professional Conduct',
    description:
      'Build a foundation of professionalism, sanitation practices, and ethical standards essential for a successful career.',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
}

export default function Admissions() {
  return (
    <section id="objectives" className="py-20 md:py-28 bg-neutral-900/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeUp}
          custom={0}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-6 inline-block h-1 w-16 bg-gold rounded-full" />
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Program Objectives
          </h2>
          <p className="mt-4 text-lg text-neutral-400">
            Our barbering program provides students with the highest quality education
            and skilled hands-on training to ensure the best outcomes in their career.
          </p>
        </motion.div>

        <div className="mx-auto mt-14 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {objectives.map((obj, i) => (
            <motion.div
              key={obj.title}
              custom={i + 1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={fadeUp}
              className="group relative rounded-2xl border border-neutral-800 bg-neutral-900/50 p-6 transition-all hover:border-gold/30 hover:bg-neutral-900"
            >
              <Scissors
                className="absolute top-3 right-3 h-4 w-4 text-gold opacity-0 transition-all duration-300 group-hover:opacity-40 group-hover:rotate-[20deg]"
                aria-hidden="true"
              />
              <div className="mb-4 inline-flex rounded-xl bg-gold/10 p-3 text-gold transition-colors group-hover:bg-gold/20">
                <obj.icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-bold">{obj.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-400">
                {obj.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
