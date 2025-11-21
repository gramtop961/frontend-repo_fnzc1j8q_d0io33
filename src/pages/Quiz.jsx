import React, { useEffect, useState } from 'react'
import { Navbar, Footer, Card, Button, Progress } from '../components/ui'

export default function Quiz() {
  const [items, setItems] = useState([])
  const [index, setIndex] = useState(0)
  const [answer, setAnswer] = useState(null)
  const [result, setResult] = useState(null)

  useEffect(() => {
    const load = async () => {
      const base = import.meta.env.VITE_BACKEND_URL || ''
      const res = await fetch(`${base}/api/quizzes`)
      const data = await res.json()
      setItems(data.items || [])
    }
    load()
  }, [])

  const current = items[index]
  const progress = items.length ? ((index)/items.length)*100 : 0

  async function submit() {
    if (!current) return
    const base = import.meta.env.VITE_BACKEND_URL || ''
    const res = await fetch(`${base}/api/quiz/${current._id}/submit`, {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ answers: [answer] })
    })
    const data = await res.json()
    setResult(data)
  }

  function next() {
    setAnswer(null)
    setResult(null)
    setIndex(i => Math.min(items.length-1, i+1))
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#F5F7FA] dark:from-slate-950 dark:to-slate-950">
      <Navbar />
      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-10 space-y-6">
        <Progress value={progress} />
        {current ? (
          <Card className="p-6">
            <div className="text-slate-900 dark:text-white font-semibold mb-2">{current.prompt}</div>
            <div className="aspect-video rounded-xl bg-slate-100 dark:bg-white/10 mb-4 grid place-items-center text-slate-500">{current.media_url ? 'Media' : 'Gestur'}</div>
            <div className="grid gap-2">
              {current.choices.map((c, i) => (
                <label key={i} className={`rounded-xl border p-3 cursor-pointer ${answer===i? 'border-[#00D9FF] bg-[#E6FBFF]' : 'border-slate-200 dark:border-white/10'}`}>
                  <input type="radio" name="ans" className="mr-2" onChange={()=>setAnswer(i)} checked={answer===i} />{c}
                </label>
              ))}
            </div>
            <div className="flex gap-3 mt-4">
              <Button onClick={submit}>Next</Button>
              <Button variant="ghost" onClick={next}>Skip</Button>
            </div>
            {result && (
              <div className="mt-4 font-semibold text-slate-900 dark:text-white">Skor: {result.score} — {result.correct? 'Benar' : 'Salah'}</div>
            )}
          </Card>
        ) : (
          <Card className="p-6 text-center">Tidak ada soal saat ini.</Card>
        )}
      </main>
      <Footer />
    </div>
  )
}
