import React, { useEffect, useRef, useState } from 'react'
import { Navbar, Footer, Card, Button, Badge, Progress } from '../components/ui'

export default function Recognition() {
  const videoRef = useRef(null)
  const [active, setActive] = useState(false)
  const [accuracy, setAccuracy] = useState(0)

  useEffect(() => {
    let id
    if (active) {
      // Dummy webcam preview
      navigator.mediaDevices?.getUserMedia?.({ video: true }).then(stream => {
        if (videoRef.current) videoRef.current.srcObject = stream
      }).catch(()=>{})
      // Fake accuracy updates
      id = setInterval(()=> setAccuracy(a => (a + Math.random()*20) % 100), 1200)
    }
    return () => {
      if (id) clearInterval(id)
      if (videoRef.current?.srcObject) {
        const tracks = videoRef.current.srcObject.getTracks()
        tracks.forEach(t => t.stop())
      }
    }
  }, [active])

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#F5F7FA] dark:from-slate-950 dark:to-slate-950">
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-10 grid lg:grid-cols-3 gap-6 items-start">
        <Card className="p-3 lg:col-span-2">
          <video ref={videoRef} autoPlay playsInline className="w-full aspect-video rounded-xl bg-black"/>
        </Card>
        <div className="space-y-4">
          <div>
            <div className="text-slate-900 dark:text-white font-semibold">Target Gestur</div>
            <div className="mt-2 h-32 rounded-xl bg-slate-100 dark:bg-white/10 grid place-items-center">🤟</div>
          </div>
          <div>
            <div className="text-slate-900 dark:text-white font-semibold mb-1">Akurasi</div>
            <Progress value={accuracy} />
            <div className="text-sm text-slate-600 dark:text-slate-300 mt-1">{accuracy.toFixed(0)}%</div>
          </div>
          <Button onClick={()=> setActive(a => !a)}>{active? 'Mulai Tes Ulang' : 'Mulai'}</Button>
        </div>
      </main>
      <Footer />
    </div>
  )
}
