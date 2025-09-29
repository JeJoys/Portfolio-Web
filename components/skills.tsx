import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  SiCplusplus,
  SiPython,
  SiCss3,
  SiHtml5,
  SiMysql,
  SiJavascript,
  SiFigma,
  SiTrello,
  SiWordpress,
} from "react-icons/si"
import { FaJava, FaFileExcel } from "react-icons/fa"

const skills = [
  { name: "C++", Icon: SiCplusplus },
  { name: "Python", Icon: SiPython },
  { name: "Java", Icon: FaJava },
  { name: "CSS", Icon: SiCss3 },
  { name: "HTML", Icon: SiHtml5 },
  { name: "MySQL", Icon: SiMysql },
  { name: "JavaScript", Icon: SiJavascript },
  { name: "Figma", Icon: SiFigma },
  { name: "Trello", Icon: SiTrello },
  { name: "Excel", Icon: FaFileExcel },
  { name: "WordPress", Icon: SiWordpress },
]

export function Skills() {
  return (
    <div id="skills" className="space-y-6">
      <div className="max-w-2xl">
        <h2 className="text-2xl md:text-3xl font-semibold text-balance">Skills</h2>
        <p className="text-muted-foreground">Core technologies and tools I use regularly.</p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Technical & Tools</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {skills.map(({ name, Icon }) => (
              <li key={name} className="flex items-center gap-2 rounded-md border p-3 hover:bg-accent/20 transition">
                <Icon className="text-primary size-5" aria-hidden />
                <span className="text-sm">{name}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
