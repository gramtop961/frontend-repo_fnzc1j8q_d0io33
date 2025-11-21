import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Footer, Button, Card, Badge, GestureCard } from '../components/ui'
import { Camera, BookOpen, Hand, PlayCircle } from 'lucide-react'

const features = [
  { icon: Hand, title: 'Katalog Gestur', desc: 'Ribuan gestur lengkap dari dasar hingga lanjutan.' },
  { icon: BookOpen, title: 'Modul Edukasi', desc: 'Materi interaktif dengan contoh penggunaan.' },
  { icon: PlayCircle, title: 'Quiz Interaktif', desc: 'Uji pemahaman dengan soal pilihan ganda.' },
  { icon: Camera, title: 'Pengenalan Gestur', desc: 'Latih gestur Anda melalui webcam secara real-time.' },
]

const sampleGestures = [
  { name: 'A (Abjad)', difficulty: 'Pemula' },
  { name: 'B (Abjad)', difficulty: 'Pemula' },
  { name: 'C (Abjad)', difficulty: 'Pemula' },
  { name: 'Terima Kasih', difficulty: 'Pemula' },
  { name: 'Maaf', difficulty: 'Pemula' },
  { name: 'Nama', difficulty: 'Pemula' },
]

export default function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#F5F7FA] dark:from-slate-950 dark:to-slate-950">
      <Navbar />
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(600px_200px_at_10%_-10%,rgba(0,217,255,0.18),transparent),radial-gradient(600px_200px_at_90%_-10%,rgba(0,217,255,0.18),transparent)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-[#0A0F1A] dark:text-white leading-tight">Belajar Bahasa Isyarat dengan Cara yang Mudah & Interaktif</h1>
            <p className="mt-4 text-slate-600 dark:text-slate-300 text-lg">Akses materi lengkap, gesture katalog, hingga latihan webcam.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/modules"><Button>Mulai Belajar</Button></Link>
              <Link to="/catalog"><Button variant="secondary">Lihat Katalog Gesture</Button></Link>
            </div>
          </div>
          <div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-[#00D9FF] to-cyan-200 shadow-xl" />
              <div className="absolute inset-6 rounded-2xl bg-white/70 dark:bg-slate-900/60 border border-white/40 dark:border-white/10 backdrop-blur grid place-items-center text-slate-700 dark:text-slate-200">
                <div className="text-center">
                  <div className="text-6xl">🤟</div>
                  <div className="mt-2 font-semibold">Belajar dengan nyaman</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="grid md:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <Card key={i} className="p-5">
              <div className="w-12 h-12 rounded-xl bg-[#E6FBFF] text-[#0A0F1A] grid place-items-center mb-3"><f.icon/></div>
              <div className="font-semibold text-slate-900 dark:text-white">{f.title}</div>
              <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">{f.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="flex items-end justify-between mb-4">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Mulai dari Dasar</h2>
          <Link to="/catalog" className="text-[#00D9FF] font-medium">Lihat Semua Gesture</Link>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {sampleGestures.map((g, i) => (
            <GestureCard key={i} item={g} />
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          <Card className="p-6">
            <Badge>Langkah 1</Badge>
            <h3 className="text-xl font-bold mt-2 text-slate-900 dark:text-white">Pelajari Gestur</h3>
            <p className="text-slate-600 dark:text-slate-300 mt-1">Mulai dari dasar melalui katalog gestur yang jelas dan mudah dipahami.</p>
          </Card>
          <Card className="p-6">
            <Badge>Langkah 2</Badge>
            <h3 className="text-xl font-bold mt-2 text-slate-900 dark:text-white">Latihan via Video</h3>
            <p className="text-slate-600 dark:text-slate-300 mt-1">Ikuti modul dan tonton contoh penggunaan dalam percakapan nyata.</p>
          </Card>
          <Card className="p-6">
            <Badge>Langkah 3</Badge>
            <h3 className="text-xl font-bold mt-2 text-slate-900 dark:text-white">Uji Kemampuan</h3>
            <p className="text-slate-600 dark:text-slate-300 mt-1">Gunakan webcam untuk mengenali gestur Anda secara real-time.</p>
          </Card>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Apa kata mereka</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[1,2,3].map(i => (
            <Card key={i} className="p-6">
              <div className="text-slate-700 dark:text-slate-200">“Platform terbaik untuk mulai belajar bahasa isyarat. Materinya rapi dan interaktif.”</div>
              <div className="mt-4 font-semibold text-slate-900 dark:text-white">Ayu</div>
              <div className="text-xs text-slate-500">Mahasiswa</div>
            </Card>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}
