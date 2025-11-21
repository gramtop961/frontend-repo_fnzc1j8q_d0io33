import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Navbar, Footer, Button, Card, Badge, Progress } from '../components/ui'

export default function GestureDetail() {
  const { id } = useParams()
  const [item, setItem] = useState(null)

  useEffect(() => {
    const load = async () => {
      const base = import.meta.env.VITE_BACKEND_URL || ''
      const res = await fetch(`${base}/api/gestures/${id}`)
      const data = await res.json()
      setItem(data)
    }
    load()
  }, [id])

  if (!item) return null

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#F5F7FA] dark:from-slate-950 dark:to-slate-950">
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-10 space-y-8">
        <div className="grid lg:grid-cols-3 gap-6 items-start">
          <Card className="p-3 lg:col-span-2">
            <div className="aspect-video rounded-xl bg-slate-100 dark:bg-white/10 grid place-items-center text-slate-500">{item.video_url ? <video src={item.video_url} controls className="w-full h-full object-cover"/> : 'Video Gestur'}</div>
          </Card>
          <div className="space-y-3">
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white">{item.name}</h1>
            <Badge>{item.difficulty}</Badge>
            <div className="grid gap-2">
              <Button>Latih Gestur (Webcam)</Button>
              <Button variant="secondary">Tambahkan ke Favorit</Button>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6">
            <h2 className="font-semibold text-slate-900 dark:text-white mb-2">Langkah-langkah</h2>
            <ol className="list-decimal list-inside text-slate-700 dark:text-slate-200 space-y-1">
              {(item.steps || []).map((s, i) => <li key={i}>{s}</li>)}
            </ol>
          </Card>
          <Card className="p-6">
            <h2 className="font-semibold text-slate-900 dark:text-white mb-2">Contoh Penggunaan</h2>
            <ul className="list-disc list-inside text-slate-700 dark:text-slate-200 space-y-1">
              {(item.examples || []).map((s, i) => <li key={i}>{s}</li>)}
            </ul>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  )
}
