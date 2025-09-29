import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { Skills } from "@/components/skills"
import { Experience } from "@/components/experience"
import { Projects } from "@/components/projects"
import { ContactForm } from "@/components/contact-form"

export default function Page() {
  return (
    <main>
      <SiteHeader />
      <Hero />
      <section className="container mx-auto px-4 py-12 md:py-16">
        <Skills />
      </section>
      <section className="container mx-auto px-4 py-12 md:py-16">
        <Experience />
      </section>
      <section className="container mx-auto px-4 py-12 md:py-16">
        <Projects />
      </section>
      <section id="contact" className="container mx-auto px-4 py-12 md:py-16">
        <ContactForm />
      </section>
      <footer className="border-t mt-12">
        <div className="container mx-auto px-4 py-8 text-sm text-muted-foreground flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-center md:text-left">© {new Date().getFullYear()} Farhan Madisa. All rights reserved.</p>
          <p className="text-center md:text-right">Built with Next.js • Dark/Light with Deep Purple theme</p>
        </div>
      </footer>
    </main>
  )
}
