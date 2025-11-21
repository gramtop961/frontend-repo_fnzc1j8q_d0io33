import React from 'react'
import { Navbar, Footer, Card, Progress, Button, Badge } from '../components/ui'

export default function Profile() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#F5F7FA] dark:from-slate-950 dark:to-slate-950">
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-10 space-y-6">
        <div className="grid md:grid-cols-3 gap-6 items-start">
          <Card className="p-6 md:col-span-2">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-slate-200" />
              <div>
                <div className="text-xl font-bold text-slate-900 dark:text-white">Pengguna Tamu</div>
                <div className="text-sm text-slate-600 dark:text-slate-300">guest@example.com</div>
              </div>
              <Button className="ml-auto">Pengaturan</Button>
            </div>
            <div className="grid sm:grid-cols-2 gap-6 mt-6">
              <div>
                <div className="text-sm text-slate-600 dark:text-slate-300 mb-1">Total Poin</div>
                <div className="text-2xl font-bold">120</div>
              </div>
              <div>
                <div className="text-sm text-slate-600 dark:text-slate-300 mb-1">Level</div>
                <div className="text-2xl font-bold">3</div>
              </div>
            </div>
          </Card>
          <Card className="p-6">
            <div className="font-semibold text-slate-900 dark:text-white mb-2">Streak</div>
            <div className="text-3xl font-extrabold">7🔥</div>
            <div className="mt-2 text-sm text-slate-600 dark:text-slate-300">Terus belajar tiap hari!</div>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6">
            <div className="font-semibold text-slate-900 dark:text-white mb-3">Gestur Favorit</div>
            <div className="grid sm:grid-cols-2 gap-3">
              {[1,2,3,4].map(i => <div key={i} className="h-24 rounded-xl bg-slate-100 dark:bg-white/10" />)}
            </div>
          </Card>
          <Card className="p-6">
            <div className="font-semibold text-slate-900 dark:text-white mb-3">Modul Selesai</div>
            <div className="space-y-3">
              {[{title:'Dasar 1', progress:100},{title:'Emosi Dasar',progress:80}].map((m,i)=>(
                <div key={i} className="p-3 rounded-xl bg-slate-50 dark:bg-white/5">
                  <div className="font-medium">{m.title}</div>
                  <Progress value={m.progress}/>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  )
}
