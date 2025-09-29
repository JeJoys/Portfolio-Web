import { Button } from "@/components/ui/button"
import { Github, Linkedin } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-widest text-muted-foreground">Portfolio</p>
          <h1 className="text-3xl md:text-5xl font-bold text-balance">Farhan Madisa</h1>
          <p className="text-pretty text-muted-foreground">
            Computer Science – Software Engineering student at Bina Nusantara University. I build reliable, user-centric
            software using modern technologies and thoughtful design.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Button asChild className="bg-primary text-primary-foreground hover:opacity-90">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=mfarhanmadisa@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                title="Compose email in Gmail"
              >
                Email Me
              </a>
            </Button>
            <Link href="https://github.com/JeJoys" target="_blank" rel="noreferrer">
              <Button variant="outline" className="gap-2 bg-transparent">
                <Github className="size-4" /> GitHub
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/in/farhan-madisa-819601385/" target="_blank" rel="noreferrer">
              <Button variant="outline" className="gap-2 bg-transparent">
                <Linkedin className="size-4" /> LinkedIn
              </Button>
            </Link>
          </div>
          <div className="text-sm text-muted-foreground">
            Email{" "}
            <a
              className="underline hover:text-primary"
              href="https://mail.google.com/mail/?view=cm&fs=1&to=mfarhanmadisa@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              title="Compose email in Gmail"
            >
              mfarhanmadisa@gmail.com
            </a>
          </div>
        </div>
        <div className="rounded-xl border bg-card p-6">
          <div className="aspect-square w-full overflow-hidden rounded-lg border bg-muted flex items-center justify-center">
            <img
              src="/professional-profile.png"
              alt="Profile photo of Farhan Madisa"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="mt-4">
            <h3 className="text-sm font-medium">Latest Project</h3>
            <div className="mt-2 rounded-lg border border-dashed bg-background/40 p-4 text-sm text-muted-foreground">
              currently developing AufaFarm.com
            </div>
          </div>

          {/* existing skills summary list */}
          <ul className="mt-4 grid grid-cols-2 gap-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <span className="size-2 rounded-full bg-primary" /> Software Engineering
            </li>
            <li className="flex items-center gap-2">
              <span className="size-2 rounded-full bg-primary" /> Full-stack Web
            </li>
            <li className="flex items-center gap-2">
              <span className="size-2 rounded-full bg-primary" /> UI/UX Collaboration
            </li>
            <li className="flex items-center gap-2">
              <span className="size-2 rounded-full bg-primary" /> Agile & Tools
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
