const roles = [
  {
    company: 'Acme Inc.',
    title: 'Senior Full‑Stack Engineer',
    period: '2022 — Present',
    points: [
      'Led development of multi-tenant SaaS used by 20k+ users',
      'Improved page performance by 45% via caching and code-splitting',
      'Mentored 5 engineers and drove code quality practices'
    ]
  },
  {
    company: 'Globex',
    title: 'Frontend Engineer',
    period: '2020 — 2022',
    points: [
      'Built design system adopted across 4 product teams',
      'Shipped complex tables, charts, and workflows with React'
    ]
  }
]

export default function Experience() {
  return (
    <section id="experience" className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold">Experience</h2>
        <div className="mt-8 grid gap-6">
          {roles.map((r) => (
            <div key={r.company} className="rounded-xl border border-gray-200 p-5">
              <div className="flex items-center justify-between">
                <div className="font-medium">{r.company}</div>
                <div className="text-sm text-gray-600">{r.period}</div>
              </div>
              <div className="mt-1 text-gray-700">{r.title}</div>
              <ul className="mt-3 list-disc list-inside text-gray-600 space-y-1">
                {r.points.map(p => (<li key={p}>{p}</li>))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
