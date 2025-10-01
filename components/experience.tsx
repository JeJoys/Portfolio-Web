import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function Experience() {
  return (
    <div id="experience" className="space-y-6">
      <div className="max-w-2xl">
        <h2 className="text-2xl md:text-3xl font-semibold text-balance">Experience</h2>
        <p className="text-muted-foreground">
          A selection of roles and university projects highlighting software engineering skills.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">University Projects</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground space-y-2">
            <p className="text-foreground">Bina Nusantara University</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Algorithm & Data Structure Practice</li>
              <li>Developed a machine learning model</li>
              <li>Agile Software Development Simulation</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Organization</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground space-y-2">
            <p className="text-foreground">
            FOSCA (Forum Of SCientist teenAgers)
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Chief Executive of the 'Konferensi KIR' for Greater Jakarta Region at PERPUSNAS.</li>
              <li>Served as Public Relations and Research Division member of FOSCA, 16th cohort.</li>
              <li>Actively involved in all FOSCA projects as part of the 16th cohort.</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
