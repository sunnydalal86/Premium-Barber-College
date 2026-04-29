import { motion } from 'framer-motion'
import {
  Clock,
  BookOpen,
  Download,
  CheckCircle2,
  GraduationCap,
  FileText,
} from 'lucide-react'

const curriculumAreas = [
  {
    title: 'Health & Safety',
    items: [
      'Infection control & sanitation',
      'Chemical safety & SDS knowledge',
      'Communicable disease prevention',
      'Ergonomics & worker safety',
    ],
  },
  {
    title: 'Chemical Hair Services',
    items: [
      'Permanent waving & relaxing',
      'Hair coloring & formulation',
      'Balayage & ombre techniques',
      'Color correction & lightening',
    ],
  },
  {
    title: 'Hairstyling Services',
    items: [
      'Wet & dry haircutting techniques',
      'Clipper, shear & razor work',
      'Blow dry & thermal styling',
      'Shampooing & conditioning',
    ],
  },
  {
    title: 'Shaving & Beard Trimming',
    items: [
      'Standard shave procedures',
      'Skin condition assessment',
      'Facial with & without shave',
      'Aftershave & antiseptic application',
    ],
  },
]

const admissionRequirements = [
  'Must be at least 17 years of age',
  'High school diploma or GED equivalent',
  'Valid photo ID and Social Security number',
  'Qualify for distance education instruction',
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
}

export default function Programs({ onNavigate }) {
  return (
    <section id="catalog" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeUp}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-6 inline-block h-1 w-16 bg-gold rounded-full" />
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Course Catalog
          </h2>
          <p className="mt-4 text-lg text-neutral-400">
            Our comprehensive barbering program covers everything you need to become a
            licensed, career-ready barber in California.
          </p>
        </motion.div>

        {/* Program overview card */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeUp}
          className="mx-auto mt-14 max-w-5xl rounded-2xl border border-neutral-800 bg-neutral-900/50 overflow-hidden"
        >
          <div className="border-b border-neutral-800 bg-neutral-900/80 px-6 py-5 sm:px-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-gold" aria-hidden="true" />
                  <h3 className="text-xl font-bold sm:text-2xl">Barbering Program</h3>
                </div>
                <p className="mt-1 text-sm text-neutral-400">
                  SOC 39-5011 &middot; Prepares students for the California State Board Exam
                </p>
              </div>
              <div className="flex gap-4">
                <div className="text-center">
                  <div className="flex items-center gap-1.5 text-gold">
                    <Clock className="h-4 w-4" aria-hidden="true" />
                    <span className="text-lg font-bold">1,000</span>
                  </div>
                  <p className="text-xs text-neutral-500">Clock Hours</p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 sm:p-8">
            <p className="text-neutral-300 leading-relaxed">
              This program covers all aspects of barbering, including hair styling,
              chemical hair services, and beard shaving and trimming techniques. Successful
              completion makes the graduate eligible to take the California State Board
              licensure exam and pursue employment as a licensed barber.
            </p>

            {/* Curriculum grid */}
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {curriculumAreas.map((area) => (
                <div key={area.title}>
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-gold">
                    {area.title}
                  </h4>
                  <ul className="mt-3 space-y-2">
                    {area.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-neutral-400">
                        <CheckCircle2
                          className="mt-0.5 h-4 w-4 shrink-0 text-gold/60"
                          aria-hidden="true"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

          </div>
        </motion.div>

        {/* Admissions requirements */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeUp}
          id="admissions"
          className="mx-auto mt-10 max-w-5xl rounded-2xl border border-neutral-800 bg-neutral-900/50 p-6 sm:p-8 scroll-mt-24"
        >
          <h3 className="text-lg font-bold">Admissions Requirements</h3>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {admissionRequirements.map((req) => (
              <li key={req} className="flex items-start gap-2 text-sm text-neutral-300">
                <CheckCircle2
                  className="mt-0.5 h-4 w-4 shrink-0 text-gold"
                  aria-hidden="true"
                />
                {req}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Catalog action buttons */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeUp}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault()
              onNavigate('/catalog')
            }}
            className="inline-flex items-center gap-2 rounded-xl bg-gold px-8 py-4 text-base font-bold text-neutral-950 shadow-lg shadow-gold/20 transition-all hover:bg-gold-light hover:shadow-xl hover:shadow-gold/30 hover:-translate-y-0.5"
          >
            <FileText className="h-5 w-5" aria-hidden="true" />
            View Full Catalog
          </button>
          <a
            href="/catalog.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-neutral-700 bg-neutral-900/50 px-8 py-4 text-base font-bold text-white transition-all hover:border-neutral-600 hover:bg-neutral-800 hover:-translate-y-0.5"
          >
            <Download className="h-5 w-5" aria-hidden="true" />
            Download Catalog (PDF)
          </a>
        </motion.div>
      </div>
    </section>
  )
}
