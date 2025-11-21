import React from 'react'
import { Link } from 'react-router-dom'
import { Camera, BookOpen, Hand, User, Menu, Search, Star, Sun, Moon, Contrast, Type, Accessibility } from 'lucide-react'
import { useAccessibility } from '../context/AccessibilityContext'

export function Button({ variant='primary', className='', ...props }) {
  const base = 'inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none'
  const styles = {
    primary: 'bg-[#00D9FF] text-[#0A0F1A] hover:bg-[#11e0ff] focus-visible:ring-[#00D9FF] shadow-sm',
    secondary: 'bg-[#0A0F1A] text-white hover:bg-slate-900 focus-visible:ring-[#0A0F1A]',
    ghost: 'bg-transparent text-[#0A0F1A] hover:bg-slate-100 dark:text-white dark:hover:bg-white/10',
  }
  return <button className={`${base} ${styles[variant]} ${className}`} {...props} />
}

export function Badge({ children }) {
  return <span className="inline-flex items-center rounded-full bg-slate-100 dark:bg-white/10 px-3 py-1 text-xs font-medium text-slate-700 dark:text-white">{children}</span>
}

export function Card({ className='', children }) {
  return <div className={`rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/70 dark:border-white/10 shadow-sm ${className}`}>{children}</div>
}

export function Progress({ value=0 }) {
  return (
    <div className="h-2 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-white/10">
      <div className="h-full rounded-full bg-[#00D9FF] transition-all" style={{ width: `${Math.min(100, Math.max(0, value))}%` }} />
    </div>
  )
}

export function Navbar() {
  const { settings } = useAccessibility()
  return (
    <nav className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/90 dark:bg-slate-950/70 border-b border-slate-200/70 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center gap-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl bg-[#00D9FF]" />
          <span className="font-extrabold tracking-tight text-xl text-[#0A0F1A] dark:text-white">SignifyLearn</span>
        </Link>
        <div className="hidden md:flex items-center gap-6 ml-8 text-slate-700 dark:text-slate-200">
          <Link to="/catalog" className="hover:text-[#00D9FF]">Katalog</Link>
          <Link to="/modules" className="hover:text-[#00D9FF]">Materi</Link>
          <Link to="/quiz" className="hover:text-[#00D9FF]">Quiz</Link>
          <Link to="/recognition" className="hover:text-[#00D9FF]">Pengenalan Gestur</Link>
        </div>
        <div className="ml-auto flex items-center gap-2">
          <Link to="/search" className="hidden sm:inline-flex items-center gap-2 rounded-xl bg-slate-100 dark:bg-white/10 px-3 py-2 text-sm text-slate-700 dark:text-slate-200"><Search size={16}/>Cari</Link>
          <Link to="/profile" className="inline-flex items-center gap-2 rounded-xl bg-slate-100 dark:bg-white/10 p-2"><User size={18}/></Link>
          <Link to="/accessibility" className="inline-flex items-center gap-2 rounded-xl bg-slate-100 dark:bg-white/10 p-2"><Accessibility size={18}/></Link>
          <button className="md:hidden inline-flex items-center gap-2 rounded-xl bg-slate-100 dark:bg-white/10 p-2"><Menu size={18}/></button>
        </div>
      </div>
    </nav>
  )
}

export function Footer() {
  return (
    <footer className="mt-24 border-t border-slate-200/70 dark:border-white/10 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 grid md:grid-cols-3 gap-8 text-slate-600 dark:text-slate-300">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-lg bg-[#00D9FF]" />
            <span className="font-bold text-slate-900 dark:text-white">SignifyLearn</span>
          </div>
          <p className="text-sm">Belajar bahasa isyarat dengan cara yang modern, interaktif, dan inklusif.</p>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <div className="font-semibold text-slate-900 dark:text-white mb-2">Produk</div>
            <ul className="space-y-1 text-sm">
              <li><Link to="/catalog" className="hover:text-[#00D9FF]">Katalog</Link></li>
              <li><Link to="/modules" className="hover:text-[#00D9FF]">Materi</Link></li>
              <li><Link to="/quiz" className="hover:text-[#00D9FF]">Quiz</Link></li>
              <li><Link to="/recognition" className="hover:text-[#00D9FF]">Pengenalan</Link></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold text-slate-900 dark:text-white mb-2">Perusahaan</div>
            <ul className="space-y-1 text-sm">
              <li><a href="#">Tentang</a></li>
              <li><a href="#">Karir</a></li>
              <li><a href="#">Kontak</a></li>
            </ul>
          </div>
        </div>
        <div className="text-sm">© {new Date().getFullYear()} SignifyLearn. Semua hak cipta dilindungi.</div>
      </div>
    </footer>
  )
}

export function GestureCard({ item }) {
  return (
    <Card className="p-4">
      <div className="aspect-video rounded-xl bg-slate-100 dark:bg-white/10 mb-3 overflow-hidden">
        {item.thumbnail ? <img src={item.thumbnail} alt={item.name} className="w-full h-full object-cover"/> : null}
      </div>
      <div className="flex items-center justify-between">
        <div>
          <div className="font-semibold text-slate-900 dark:text-white">{item.name}</div>
          <div className="text-xs text-slate-500">{item.difficulty}</div>
        </div>
        <button className="p-2 rounded-xl bg-slate-100 dark:bg-white/10"><Star size={16}/></button>
      </div>
    </Card>
  )
}
