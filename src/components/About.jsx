import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
}

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28">
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
            Welcome to Premium Barber College
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeUp}
          className="mx-auto mt-10 max-w-3xl space-y-6 text-lg leading-relaxed text-neutral-300"
        >
          <p>
            Premium Barber College is dedicated to providing high-quality training programs
            that prepare students to pass the California State Board of Barbering &amp;
            Cosmetology licensing exam. Our curriculum combines intensive hands-on instruction
            with professional techniques to help you succeed in the barber industry.
          </p>
          <p>
            Our mission is to instill confidence behind the chair and offer a positive learning
            environment. From mastering foundational cuts and fades to understanding business
            ethics and client relations, every aspect of our program is designed to prepare you
            for a rewarding career.
          </p>
          <p>
            Whether you&rsquo;re starting fresh or building on existing skills, Premium Barber
            College will prepare you for employment as an entry-level licensed California Barber
            &mdash; equipped with the technical expertise, professionalism, and creativity the
            industry demands.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeUp}
          className="mx-auto mt-14 grid max-w-4xl gap-8 sm:grid-cols-3"
        >
          {[
            { number: '1,000', label: 'Clock Hours of Training' },
            { number: '17+', label: 'Years of Industry Experience' },
            { number: '100%', label: 'Hands-On Instruction' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-4xl font-black text-gold md:text-5xl">{stat.number}</p>
              <p className="mt-2 text-sm font-medium uppercase tracking-wider text-neutral-400">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
