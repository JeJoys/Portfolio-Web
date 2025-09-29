import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function Experience() {
  return (
    <div id="experience" className="space-y-6">
      <div className="max-w-2xl">
        <h2 className="text-2xl md:text-3xl font-semibold text-balance">Experience</h2>
        <p className="text-muted-foreground">University projects highlighting core software engineering skills.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">University Projects</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground space-y-2">
            <p className="text-foreground">Bina Nusantara University</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Full-stack CRUD app using HTML, CSS, JavaScript, and MySQL.</li>
              <li>Algorithmic problem-solving in C++ and Python.</li>
              <li>Java OOP project with unit testing and documentation in Excel/Word.</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
