import Link from "next/link"

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="#hero" className="font-serif text-2xl font-bold text-primary">
          JoLi
        </Link>
        <ul className="hidden items-center gap-8 md:flex">
          <li>
            <Link
              href="#about"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="#skills"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              href="#projects"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="#contact"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Contact
            </Link>
          </li>
        </ul>
        <Link
          href="#contact"
          className="hidden rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition-all hover:opacity-90 md:inline-block"
        >
          {"Let's Talk"}
        </Link>
      </nav>
    </header>
  )
}
