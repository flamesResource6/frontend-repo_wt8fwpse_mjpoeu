import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    await new Promise(r => setTimeout(r, 600))
    setStatus('Thanks! I will get back to you shortly.')
  }

  return (
    <section id="contact" className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold">Contact</h2>
        <form onSubmit={onSubmit} className="mt-6 grid gap-4 max-w-xl">
          <input className="border border-gray-300 rounded-md px-3 py-2" placeholder="Your name" required />
          <input className="border border-gray-300 rounded-md px-3 py-2" placeholder="Email" type="email" required />
          <textarea className="border border-gray-300 rounded-md px-3 py-2 h-28" placeholder="Message" required />
          <div className="flex items-center gap-3">
            <button className="px-5 py-2 rounded-md bg-gray-900 text-white">Send</button>
            <span className="text-sm text-gray-600">{status}</span>
          </div>
        </form>
      </div>
    </section>
  )
}
