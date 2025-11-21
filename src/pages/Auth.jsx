import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Footer, Button, Card } from '../components/ui'

export default function Auth() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#F5F7FA] dark:from-slate-950 dark:to-slate-950">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-10 grid md:grid-cols-2 gap-8 items-center">
        <div className="hidden md:block">
          <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-[#00D9FF] to-cyan-200 shadow-xl" />
        </div>
        <Card className="p-6">
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Masuk ke SignifyLearn</h1>
          <p className="text-sm text-slate-600 dark:text-slate-300">Selamat datang kembali! Silakan masuk untuk melanjutkan belajar.</p>
          <form className="mt-6 space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">Email</label>
              <input type="email" className="mt-1 w-full rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-950 px-3 py-2 outline-none focus:ring-2 ring-[#00D9FF]" placeholder="you@example.com" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">Password</label>
              <input type="password" className="mt-1 w-full rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-950 px-3 py-2 outline-none focus:ring-2 ring-[#00D9FF]" placeholder="••••••••" />
            </div>
            <Button className="w-full">Login</Button>
            <div className="relative">
              <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-200 dark:border-white/10"/></div>
              <div className="relative flex justify-center text-xs"><span className="bg-white dark:bg-slate-900 px-2 text-slate-500">atau</span></div>
            </div>
            <Button variant="secondary" className="w-full">Login dengan Google</Button>
            <div className="text-sm text-slate-600 dark:text-slate-300 text-center">
              Lupa password? <a href="#" className="text-[#00D9FF]">Reset</a> · Belum punya akun? <Link to="/register" className="text-[#00D9FF]">Daftar</Link>
            </div>
          </form>
        </Card>
      </main>
      <Footer />
    </div>
  )
}
