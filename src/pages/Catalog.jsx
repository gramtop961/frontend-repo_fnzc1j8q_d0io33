import React, { useEffect, useState } from 'react'
import { Navbar, Footer, Card, Button, GestureCard } from '../components/ui'

export default function Catalog() {
  const [items, setItems] = useState([])
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('')

  useEffect(() => {
    const load = async () => {
      const base = import.meta.env.VITE_BACKEND_URL || ''
      const url = new URL('/api/gestures', base)
      if (query) url.searchParams.set('search', query)
      if (category) url.searchParams.set('category', category)
      const res = await fetch(url)
      const data = await res.json()
      setItems(data.items || [])
    }
    load()
  }, [query, category])

  const categories = ['A-Z', 'Numbers', 'Basic Words', 'Emotions', 'Activity']

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#F5F7FA] dark:from-slate-950 dark:to-slate-950">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <div className="flex flex-wrap gap-3 items-center mb-6">
          <input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Cari gestur..." className="flex-1 min-w-[220px] rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-950 px-3 py-2 outline-none focus:ring-2 ring-[#00D9FF]"/>
          <div className="flex flex-wrap gap-2">
            {categories.map(c => (
              <button key={c} onClick={()=>setCategory(c)} className={`px-3 py-2 rounded-xl text-sm ${category===c? 'bg-[#00D9FF] text-[#0A0F1A]' : 'bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-slate-200'}`}>{c}</button>
            ))}
          </div>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {items.map(it => <GestureCard key={it._id || it.name} item={it} />)}
        </div>
      </main>
      <Footer />
    </div>
  )
}
