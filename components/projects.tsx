import Image from "next/image"
import Link from "next/link"

const projects = [
  {
    title: "ShopEase Mobile App",
    description:
      "A modern e-commerce mobile application designed for seamless shopping experiences with intuitive navigation and secure checkout.",
    image: "/images/project-1.jpg",
    tags: ["Kotlin", "Firebase", "Figma"],
  },
  {
    title: "BrandPulse Dashboard",
    description:
      "A comprehensive social media management dashboard with analytics, scheduling, and real-time engagement tracking.",
    image: "/images/project-2.jpg",
    tags: ["React", "Laravel", "Tailwind CSS"],
  },
  {
    title: "CreativeStudio Branding",
    description:
      "A complete brand identity design package including logo, business cards, and digital marketing materials for a creative agency.",
    image: "/images/project-3.jpg",
    tags: ["Photoshop", "Illustrator", "InDesign"],
  },
]

function ProjectCard({
  title,
  description,
  image,
  tags,
}: {
  title: string
  description: string
  image: string
  tags: string[]
}) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:shadow-xl hover:-translate-y-2">
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <Image
          src={image}
          alt={`Screenshot of the ${title} project`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-4 p-6">
        <h3 className="text-xl font-bold text-card-foreground">{title}</h3>
        <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
            >
              {tag}
            </span>
          ))}
        </div>
        <Link
          href="#"
          className="mt-2 inline-flex w-fit items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:shadow-lg hover:shadow-primary/25"
        >
          View Project
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M1 7H13M13 7L7 1M13 7L7 13"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>
    </div>
  )
}

export function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section header */}
        <div className="mb-16 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Our Work
          </span>
          <h2 className="mt-3 font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
            Featured Projects
          </h2>
        </div>

        {/* Projects grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}
