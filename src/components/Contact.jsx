import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
}

export default function Contact() {
  const [status, setStatus] = useState('idle')
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  })

  function handleChange(e) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('submitting')

    try {
      const body = new URLSearchParams({
        'form-name': 'contact',
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        message: formData.message,
      })

      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      })

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', phone: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-20 md:py-28 bg-neutral-900/30">
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
            Request Information
          </h2>
          <p className="mt-4 text-lg text-neutral-400">
            Interested in starting your barbering career? Fill out the form below and
            we&rsquo;ll get back to you with everything you need to know.
          </p>
        </motion.div>

        <div className="mx-auto mt-14 grid max-w-5xl gap-10 lg:grid-cols-5">
          {/* Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeUp}
            className="lg:col-span-3"
          >
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center rounded-2xl border border-gold/30 bg-gold/5 p-10 text-center">
                <CheckCircle2 className="h-16 w-16 text-gold" />
                <h3 className="mt-4 text-2xl font-bold">Thank You!</h3>
                <p className="mt-2 text-neutral-400">
                  We&rsquo;ve received your request. A member of our team will reach
                  out to you shortly.
                </p>
              </div>
            ) : (
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                <input type="hidden" name="form-name" value="contact" />
                <p className="hidden">
                  <label>
                    Don't fill this out: <input name="bot-field" />
                  </label>
                </p>
                {status === 'error' && (
                  <div className="flex items-center gap-3 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
                    <AlertCircle className="h-5 w-5 shrink-0" />
                    Something went wrong. Please try again or call us directly.
                  </div>
                )}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-300 mb-1.5">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-neutral-700 bg-neutral-900/50 px-4 py-3 text-white placeholder-neutral-500 transition-colors focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                    placeholder="Your full name"
                  />
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-neutral-300 mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-neutral-700 bg-neutral-900/50 px-4 py-3 text-white placeholder-neutral-500 transition-colors focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                      placeholder="(408) 000-0000"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-neutral-300 mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-neutral-700 bg-neutral-900/50 px-4 py-3 text-white placeholder-neutral-500 transition-colors focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-300 mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-neutral-700 bg-neutral-900/50 px-4 py-3 text-white placeholder-neutral-500 transition-colors focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold resize-none"
                    placeholder="Tell us about your interest in our barbering program..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gold px-8 py-4 text-base font-bold text-neutral-950 shadow-lg shadow-gold/20 transition-all hover:bg-gold-light hover:shadow-xl hover:shadow-gold/30 hover:-translate-y-0.5 sm:w-auto disabled:opacity-60 disabled:pointer-events-none"
                >
                  {status === 'submitting' ? (
                    <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
                  ) : (
                    <Send className="h-5 w-5" aria-hidden="true" />
                  )}
                  {status === 'submitting' ? 'Sending...' : 'Submit Request'}
                </button>
              </form>
            )}
          </motion.div>

          {/* Contact info sidebar */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeUp}
            className="lg:col-span-2"
          >
            <div className="rounded-2xl border border-neutral-800 bg-neutral-900/50 p-6">
              <h3 className="text-lg font-bold">Contact Information</h3>

              <div className="mt-6 space-y-5">
                <div className="flex items-start gap-3">
                  <div className="rounded-lg bg-gold/10 p-2">
                    <MapPin className="h-5 w-5 text-gold" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-neutral-300">Address</p>
                    <p className="mt-0.5 text-sm text-neutral-500">
                      461 S Capitol Ave #17<br />
                      San Jose, CA 95127
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="rounded-lg bg-gold/10 p-2">
                    <Phone className="h-5 w-5 text-gold" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-neutral-300">Phone</p>
                    <a
                      href="tel:+14086493606"
                      className="mt-0.5 block text-sm text-neutral-500 transition-colors hover:text-gold"
                    >
                      (408) 649-3606
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="rounded-lg bg-gold/10 p-2">
                    <Mail className="h-5 w-5 text-gold" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-neutral-300">Email</p>
                    <a
                      href="mailto:premiumbarbercollege@gmail.com"
                      className="mt-0.5 block text-sm text-neutral-500 transition-colors hover:text-gold"
                    >
                      premiumbarbercollege@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-6 border-t border-neutral-800 pt-5">
                <h4 className="text-sm font-semibold text-neutral-400">Faculty</h4>
                <div className="mt-3 space-y-2 text-sm text-neutral-500">
                  <p><span className="text-neutral-300">Efren Hernandez</span> — 17 years experience</p>
                  <p><span className="text-neutral-300">Jose Flores</span> — 16 years experience</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
