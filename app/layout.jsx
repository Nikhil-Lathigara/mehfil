import './globals.css'
import { Analytics } from '@vercel/analytics/react'

export const viewport = { viewportFit: 'cover' }

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <link rel="preload" as="image" href="/bg/scene-wide.webp" />
        <link rel="preload" as="image" href="/bg/scene-tall.webp" />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
