const sharedSkills = ["HTML", "CSS", "JavaScript", "Bootstrap", "Editing Skills"]
const joySkills = ["Mobile Development", "Next.js", "Kotlin", "Basic Java"]
const lilianSkills = ["React", "PHP (Laravel)"]

function SkillBadge({ skill }: { skill: string }) {
  return (
    <span className="inline-block rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-card-foreground transition-all hover:border-primary hover:bg-primary/5 hover:text-primary hover:-translate-y-0.5 hover:shadow-md">
      {skill}
    </span>
  )
}

function SkillCard({
  title,
  subtitle,
  skills,
  accentColor,
}: {
  title: string
  subtitle: string
  skills: string[]
  accentColor: "primary" | "accent"
}) {
  const borderClass =
    accentColor === "primary"
      ? "hover:border-primary/40"
      : "hover:border-accent/40"
  const dotClass =
    accentColor === "primary" ? "bg-primary" : "bg-accent"

  return (
    <div
      className={`flex flex-col gap-5 rounded-2xl border border-border bg-card p-8 shadow-sm transition-all hover:shadow-lg hover:-translate-y-1 ${borderClass}`}
    >
      <div className="flex items-center gap-3">
        <span className={`h-3 w-3 rounded-full ${dotClass}`} />
        <h3 className="text-xl font-bold text-card-foreground">{title}</h3>
      </div>
      <p className="text-sm text-muted-foreground">{subtitle}</p>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <SkillBadge key={skill} skill={skill} />
        ))}
      </div>
    </div>
  )
}

export function Skills() {
  return (
    <section id="skills" className="bg-secondary/50 py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section header */}
        <div className="mb-16 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            What We Know
          </span>
          <h2 className="mt-3 font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
            Our Skills
          </h2>
        </div>

        {/* Skills grid */}
        <div className="grid gap-8 md:grid-cols-3">
          <SkillCard
            title="Shared Skills"
            subtitle="Technologies we both master together"
            skills={sharedSkills}
            accentColor="primary"
          />
          <SkillCard
            title={"Joy's Skills"}
            subtitle={"Joy's specialized tech stack"}
            skills={joySkills}
            accentColor="accent"
          />
          <SkillCard
            title={"Lilian's Skills"}
            subtitle={"Lilian's specialized tech stack"}
            skills={lilianSkills}
            accentColor="primary"
          />
        </div>
      </div>
    </section>
  )
}
