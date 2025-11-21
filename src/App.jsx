import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Auth from './pages/Auth'
import Catalog from './pages/Catalog'
import GestureDetail from './pages/GestureDetail'
import Modules from './pages/Modules'
import Quiz from './pages/Quiz'
import Recognition from './pages/Recognition'
import Profile from './pages/Profile'
import AccessibilityPage from './pages/Accessibility'
import { AccessibilityProvider } from './context/AccessibilityContext'

function App() {
  return (
    <AccessibilityProvider>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/gesture/:id" element={<GestureDetail />} />
        <Route path="/modules" element={<Modules />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/recognition" element={<Recognition />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/accessibility" element={<AccessibilityPage />} />
      </Routes>
    </AccessibilityProvider>
  )
}

export default App
