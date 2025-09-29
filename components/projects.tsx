import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Projects() {
  return (
    <div id="projects" className="space-y-6">
      <div className="max-w-2xl">
        <h2 className="text-2xl md:text-3xl font-semibold text-balance">Selected Projects</h2>
        <p className="text-muted-foreground">A few representative projects. See more on my GitHub.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <ProjectCard
          title="Task Manager"
          desc="A simple full-stack task manager with auth and MySQL backend."
          href="https://github.com/JeJoys"
          tech="HTML • CSS • JS • MySQL"
        />
        <ProjectCard
          title="Data Structures Playground"
          desc="Interactive visualizations for classic data structures and algorithms."
          href="https://github.com/JeJoys"
          tech="C++ • Python"
        />
        <ProjectCard
          title="Blog Theme"
          desc="A customizable WordPress theme with accessible design."
          href="https://github.com/JeJoys"
          tech="WordPress • Figma"
        />
      </div>

      <div>
        <Link href="https://github.com/JeJoys" target="_blank" rel="noreferrer">
          <Button variant="outline">Browse all repositories</Button>
        </Link>
      </div>
    </div>
  )
}

function ProjectCard({ title, desc, href, tech }: { title: string; desc: string; href: string; tech: string }) {
  return (
    <Card className="flex flex-col">
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
        <CardDescription>{desc}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{tech}</p>
      </CardContent>
      <CardFooter className="mt-auto">
        <Link href={href} target="_blank" rel="noreferrer">
          <Button className="bg-primary text-primary-foreground hover:opacity-90">View on GitHub</Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
