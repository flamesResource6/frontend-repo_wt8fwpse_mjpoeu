import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="pt-28 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900"
            >
              Full‑Stack Developer crafting high‑quality web experiences
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="mt-4 text-gray-600 leading-relaxed"
            >
              I design and build performant, accessible apps with modern stacks. Focused on DX, UX, and measurable outcomes.
            </motion.p>
            <div className="mt-8 flex gap-3">
              <a href="#projects" className="px-5 py-2.5 rounded-md bg-gray-900 text-white hover:bg-black transition-colors">View Projects</a>
              <a href="#contact" className="px-5 py-2.5 rounded-md border border-gray-300 hover:bg-gray-50">Get in touch</a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-tr from-blue-100 via-purple-100 to-pink-100" />
            <div className="absolute inset-0 grid place-items-center">
              <div className="w-40 h-40 rounded-full bg-white/70 backdrop-blur shadow-inner" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
