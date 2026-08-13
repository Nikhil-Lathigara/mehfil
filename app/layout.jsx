import './globals.css'
import { Analytics } from '@vercel/analytics/react'

export const viewport = { viewportFit: 'cover' }

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
