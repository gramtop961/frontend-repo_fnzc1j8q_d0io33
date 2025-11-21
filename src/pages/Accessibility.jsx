import React from 'react'
import { Navbar, Footer, Card, Button } from '../components/ui'
import { useAccessibility } from '../context/AccessibilityContext'

export default function AccessibilityPage() {
  const { settings, setSetting, reset } = useAccessibility()

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#F5F7FA] dark:from-slate-950 dark:to-slate-950">
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-10 space-y-6">
        <Card className="p-6 space-y-4">
          <div className="text-xl font-bold text-slate-900 dark:text-white">Mode Aksesibilitas</div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-white/5">
              <div>
                <div className="font-medium text-slate-900 dark:text-white">Mode Gelap</div>
                <div className="text-sm text-slate-600 dark:text-slate-300">Kurangi silau dengan latar gelap.</div>
              </div>
              <input type="checkbox" checked={settings.darkMode} onChange={e=>setSetting('darkMode', e.target.checked)} />
            </div>
            <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-white/5">
              <div>
                <div className="font-medium text-slate-900 dark:text-white">Kontras Tinggi</div>
                <div className="text-sm text-slate-600 dark:text-slate-300">Tingkatkan keterbacaan warna.</div>
              </div>
              <input type="checkbox" checked={settings.highContrast} onChange={e=>setSetting('highContrast', e.target.checked)} />
            </div>
            <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-white/5">
              <div>
                <div className="font-medium text-slate-900 dark:text-white">Ukuran Teks</div>
                <div className="text-sm text-slate-600 dark:text-slate-300">Sesuaikan ukuran font.</div>
              </div>
              <input type="range" min="0.9" max="1.4" step="0.05" value={settings.fontScale} onChange={e=>setSetting('fontScale', parseFloat(e.target.value))} />
            </div>
            <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-white/5">
              <div>
                <div className="font-medium text-slate-900 dark:text-white">Kurangi Gerakan</div>
                <div className="text-sm text-slate-600 dark:text-slate-300">Matikan animasi berlebihan.</div>
              </div>
              <input type="checkbox" checked={settings.reducedMotion} onChange={e=>setSetting('reducedMotion', e.target.checked)} />
            </div>
          </div>
          <div className="flex gap-3">
            <Button onClick={reset} variant="ghost">Atur Ulang</Button>
          </div>
        </Card>

        <Card className="p-6">
          <div className="font-semibold text-slate-900 dark:text-white mb-2">Pratinjau</div>
          <div className="p-4 rounded-xl border border-slate-200 dark:border-white/10" style={{ fontSize: `calc(1rem * var(--font-scale, 1))` }}>
            <div className="text-xl font-bold">Judul Contoh</div>
            <p className="text-slate-700 dark:text-slate-200">Ini adalah paragraf contoh untuk melihat perubahan aksesibilitas.</p>
            <Button className="mt-3">Tombol Contoh</Button>
          </div>
        </Card>
      </main>
      <Footer />
    </div>
  )
}
