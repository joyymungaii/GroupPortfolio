import Image from "next/image"

export function About() {
  return (
    <section id="about" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section header */}
        <div className="mb-16 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Who We Are
          </span>
          <h2 className="mt-3 font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
            About Us
          </h2>
        </div>

        {/* Two column layout */}
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Image side */}
          <div className="relative">
            <div className="relative h-[350px] w-full overflow-hidden rounded-2xl shadow-xl md:h-[450px]">
              <Image
                src="/images/about-placeholder.jpg"
                alt="Joy and Lilian collaborating at their workspace"
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative accent */}
            <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-2xl bg-primary/10" />
          </div>

          {/* Text side */}
          <div className="flex flex-col gap-5">
            <p className="text-lg leading-relaxed text-muted-foreground">
              We are <strong className="text-foreground">Joy Wanjiru</strong> and{" "}
              <strong className="text-foreground">Lilian Ngige</strong> — a
              dynamic tech duo passionate about creating meaningful digital
              experiences.
            </p>
            <ul className="flex flex-col gap-3">
              {[
                "Software Developers",
                "Graphic Designers",
                "Social Media Managers",
                "Women in Tech Leaders",
              ].map((role) => (
                <li
                  key={role}
                  className="flex items-center gap-3 text-foreground"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs text-primary">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                      <path d="M2 6L5 9L10 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  {role}
                </li>
              ))}
            </ul>
            <p className="text-lg leading-relaxed text-muted-foreground">
              <strong className="text-foreground">Joy</strong> specializes in{" "}
              <span className="text-primary">Mobile Development</span>, bringing
              apps to life on every device.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              We are passionate about building impactful digital solutions and
              empowering women in technology.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
