const projects = [
  {
    title: 'SaaS Dashboard',
    desc: 'Analytics-driven admin dashboard with role-based access',
    tags: ['Next.js', 'Postgres', 'Prisma'],
    href: '#'
  },
  {
    title: 'Ecommerce Platform',
    desc: 'Headless storefront with Stripe and Sanity CMS',
    tags: ['React', 'Stripe', 'Sanity'],
    href: '#'
  },
  {
    title: 'Realtime Chat',
    desc: 'Websocket powered messaging with presence',
    tags: ['Node', 'WebSocket', 'Redis'],
    href: '#'
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold">Featured Projects</h2>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <a key={p.title} href={p.href} className="group block rounded-xl border border-gray-200 hover:border-gray-300 p-5 transition-colors">
              <div className="aspect-video rounded-lg bg-gray-100 mb-4" />
              <div className="font-medium group-hover:underline">{p.title}</div>
              <div className="text-sm text-gray-600 mt-1">{p.desc}</div>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map(t => (
                  <span key={t} className="text-xs px-2 py-1 rounded-md bg-gray-100 text-gray-700">{t}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
