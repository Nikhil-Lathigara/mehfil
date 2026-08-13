"use client"
import { useEffect, useState } from 'react'

export default function Clock() {
  const [now, setNow] = useState(null)
  useEffect(() => {
    setNow(new Date())
    const t = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(t)
  }, [])
  if (!now) return null
  const fmt = new Intl.DateTimeFormat('en-IN', { timeZone: 'Asia/Kolkata', hour: 'numeric', minute: '2-digit', hour12: true })
  const parts = fmt.formatToParts(now)
  return (
    <div className="text-white text-sm font-medium">
      {parts.map((p, i) => (
        <span key={i} style={p.type === 'literal' ? { animation: 'blink 1s steps(2, start) infinite' } : {}}>{p.value}</span>
      ))}
    </div>
  )
}
