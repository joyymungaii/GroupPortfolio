import Link from "next/link"

const socialLinks = [
  {
    name: "LinkedIn",
    href: "#",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    name: "GitHub",
    href: "#",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "#",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="2"/>
        <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2"/>
        <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor"/>
      </svg>
    ),
  },
]

export function Contact() {
  return (
    <section id="contact" className="bg-secondary/50 py-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        {/* Section header */}
        <span className="text-sm font-semibold uppercase tracking-wider text-primary">
          Get in Touch
        </span>
        <h2 className="mt-3 font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
          {"Let's Connect"}
        </h2>
        <p className="mx-auto mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
          {"Let's collaborate, build, and create impact together."}
        </p>

        {/* Social links */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          {socialLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="group flex items-center gap-3 rounded-full border border-border bg-card px-6 py-3 text-sm font-medium text-card-foreground shadow-sm transition-all hover:border-primary hover:bg-primary hover:text-primary-foreground hover:shadow-lg hover:-translate-y-0.5"
              aria-label={`Visit our ${link.name} profile`}
            >
              {link.icon}
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
