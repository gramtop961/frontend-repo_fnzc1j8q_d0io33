import React, { useEffect, useState } from 'react'
import { Navbar, Footer, Card, Button, Progress } from '../components/ui'

export default function Modules() {
  const [items, setItems] = useState([])

  useEffect(() => {
    const load = async () => {
      const base = import.meta.env.VITE_BACKEND_URL || ''
      const res = await fetch(`${base}/api/modules`)
      const data = await res.json()
      setItems(data.items || [])
    }
    load()
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#F5F7FA] dark:from-slate-950 dark:to-slate-950">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid md:grid-cols-3 gap-6">
          {items.map(m => (
            <Card key={m._id} className="p-5 flex flex-col">
              <div className="aspect-[3/2] rounded-xl bg-slate-100 dark:bg-white/10 mb-3" />
              <div className="font-semibold text-slate-900 dark:text-white">{m.title}</div>
              <div className="text-sm text-slate-600 dark:text-slate-300">{m.subtitle}</div>
              <div className="mt-3"><Progress value={m.progress || 0} /></div>
              <Button className="mt-4">Mulai Belajar</Button>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
