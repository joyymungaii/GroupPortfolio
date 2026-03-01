import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 text-center">
        <Link href="#hero" className="font-serif text-xl font-bold text-primary">
          JoLi
        </Link>
        <p className="text-sm text-muted-foreground">
          Built with passion by Joy & Lilian
        </p>
        <p className="text-xs text-muted-foreground">
          {"\u00A9 2026 JoLi. All rights reserved."}
        </p>
      </div>
    </footer>
  )
}
