import { MapPin, Phone, Mail, ExternalLink } from 'lucide-react'

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Programs', href: '#objectives' },
  { label: 'Course Catalog', href: '#catalog' },
  { label: 'Admissions', href: '#admissions' },
  { label: 'Contact', href: '#contact' },
]

const portalLinks = [
  { label: 'School Reports', disabled: true },
  { label: 'Student Access', disabled: true },
  { label: 'Instructor Access', disabled: true },
]

export default function Footer({ onNavigate }) {
  function handleLinkClick(e, href) {
    if (href.startsWith('#') && window.location.pathname !== '/') {
      e.preventDefault()
      onNavigate('/')
      setTimeout(() => {
        const el = document.querySelector(href)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    }
  }

  return (
    <footer className="border-t border-neutral-800/50 bg-neutral-950">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <img
              src="/logo.png"
              alt="Premium Barber College"
              className="h-20 w-auto"
            />
            <p className="mt-4 text-sm text-neutral-500 leading-relaxed">
              Preparing students for successful careers in the barber industry
              through hands-on training and professional instruction.
            </p>
            <div className="mt-4 space-y-2 text-sm text-neutral-400">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-gold/60" aria-hidden="true" />
                <span>461 S Capitol Ave #17, San Jose, CA 95127</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-gold/60" aria-hidden="true" />
                <a href="tel:+14086493606" className="hover:text-gold transition-colors">
                  (408) 649-3606
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-gold/60" aria-hidden="true" />
                <a
                  href="mailto:premiumbarbercollege@gmail.com"
                  className="hover:text-gold transition-colors"
                >
                  premiumbarbercollege@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-neutral-400">
              Quick Links
            </p>
            <nav className="mt-4 space-y-2" aria-label="Footer navigation">
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="flex items-center gap-1 text-sm text-neutral-500 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              ))}
              <button
                type="button"
                onClick={() => onNavigate('/catalog')}
                className="flex items-center gap-1 text-sm text-neutral-500 transition-colors hover:text-white"
              >
                Full Course Catalog
                <ExternalLink className="h-3 w-3" aria-hidden="true" />
              </button>
            </nav>
          </div>

          {/* Portal Links */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-neutral-400">
              Portals
            </p>
            <div className="mt-4 space-y-2">
              {portalLinks.map((link) => (
                <span
                  key={link.label}
                  className="flex items-center gap-2 text-sm text-neutral-600 cursor-not-allowed"
                >
                  {link.label}
                  <span className="rounded-full bg-neutral-800 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-neutral-500">
                    Coming Soon
                  </span>
                </span>
              ))}
            </div>

            <div className="mt-6">
              <p className="text-sm font-semibold uppercase tracking-wider text-neutral-400">
                Social
              </p>
              <div className="mt-3">
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-neutral-500 transition-colors hover:text-gold"
                  aria-label="Follow Premium Barber College on Instagram"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                    aria-hidden="true"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                  Instagram
                </a>
              </div>
            </div>
          </div>

          {/* Compliance */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-neutral-400">
              Compliance
            </p>
            <div className="mt-4 space-y-3 text-xs text-neutral-600 leading-relaxed">
              <p>
                Approved by the Bureau for Private Postsecondary Education (BPPE).
                Approval means compliance with state standards as set forth in the
                California Education Code and 5 CCR.
              </p>
              <p>
                The Office of Student Assistance and Relief is available to support
                students. Contact: (888) 370-7589, option 5 or visit{' '}
                <a
                  href="https://osar.bppe.ca.gov"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-500 underline hover:text-gold"
                >
                  osar.bppe.ca.gov
                </a>
              </p>
              <p>
                Questions may be directed to the Bureau for Private Postsecondary
                Education at{' '}
                <a
                  href="https://www.bppe.ca.gov"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-500 underline hover:text-gold"
                >
                  www.bppe.ca.gov
                </a>{' '}
                or (888) 370-7589.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-neutral-800/50 pt-8 text-center">
          <p className="text-xs text-neutral-600">
            &copy; {new Date().getFullYear()} Premium Barber College. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
