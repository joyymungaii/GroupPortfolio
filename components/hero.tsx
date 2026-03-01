import Image from "next/image"
import Link from "next/link"

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden pt-20"
    >
      {/* Subtle background decoration */}
      <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-primary/5" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-[300px] w-[300px] rounded-full bg-accent/10" />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-6 md:grid-cols-2">
        {/* Text content */}
        <div className="flex flex-col gap-6">
          <span className="w-fit rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
            Women in Tech
          </span>
          <h1 className="font-serif text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl text-balance">
            {"JoLi \u2013 Building Digital Experiences with Impact"}
          </h1>
          <p className="max-w-lg text-lg leading-relaxed text-muted-foreground">
            Software Developers | Graphic Designers | Social Media Managers | Women in Tech Leaders
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              href="#projects"
              className="rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground transition-all hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5"
            >
              View Projects
            </Link>
            <Link
              href="#contact"
              className="rounded-full border-2 border-primary px-7 py-3 text-sm font-semibold text-primary transition-all hover:bg-primary hover:text-primary-foreground"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Image */}
        <div className="relative flex items-center justify-center">
          <div className="relative h-[350px] w-[350px] overflow-hidden rounded-3xl shadow-2xl shadow-primary/10 md:h-[450px] md:w-[450px]">
            <Image
              src="/images/hero-placeholder.jpg"
              alt="Joy Wanjiru and Lilian Ngige, the JoLi tech duo"
              fill
              className="object-cover"
              priority
            />
          </div>
          {/* Decorative ring */}
          <div className="absolute -z-10 h-[380px] w-[380px] rounded-3xl border-2 border-dashed border-primary/20 md:h-[480px] md:w-[480px]" />
        </div>
      </div>
    </section>
  )
}
