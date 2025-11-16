const skills = [
  { name: 'React', level: 90 },
  { name: 'Next.js', level: 85 },
  { name: 'Node.js', level: 88 },
  { name: 'TypeScript', level: 80 },
  { name: 'Tailwind', level: 92 },
]

export default function Skills() {
  return (
    <section id="skills" className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold">Skills</h2>
        <div className="mt-6 grid gap-4">
          {skills.map(s => (
            <div key={s.name}>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-700">{s.name}</span>
                <span className="text-gray-500">{s.level}%</span>
              </div>
              <div className="mt-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-gray-900 rounded-full" style={{ width: `${s.level}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
