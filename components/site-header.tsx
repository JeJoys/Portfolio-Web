import Link from "next/link"
import { ThemeToggle } from "./theme-toggle"
import { Button } from "@/components/ui/button"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur">
      <div className="container mx-auto px-4 h-14 flex items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight text-pretty">
          <span className="text-primary">Farhan</span> Madisa
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#skills" className="hover:text-primary">
            Skills
          </a>
          <a href="#experience" className="hover:text-primary">
            Experience
          </a>
          <a href="#projects" className="hover:text-primary">
            Projects
          </a>
          <a href="#contact" className="hover:text-primary">
            Contact
          </a>
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          {/* Button renders an anchor; avoids nested <a><button/></a> */}
          <Button asChild className="bg-primary text-primary-foreground hover:opacity-90">
            <Link href="#contact">Hire Me</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
