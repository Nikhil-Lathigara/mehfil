"use client"
import { useState } from 'react'
import Player from '../components/Player'
import Clock from '../components/Clock'
import PlaylistSelector from '../components/PlaylistSelector'
import { playlists } from '../lib/tracks'

export default function Page() {
  const [playlistKey, setPlaylistKey] = useState('playlistA')
  const active = playlists[playlistKey] || playlists.playlistA

  const select = (
    <select
      className="navbar-select"
      value={playlistKey}
      onChange={e => setPlaylistKey(e.target.value)}
      aria-label="Choose playlist"
    >
      {Object.keys(playlists).map(key => (
        <option key={key} value={key}>{playlists[key].name}</option>
      ))}
    </select>
  )

  return (
    <main
      className="relative flex min-h-dvh flex-1 flex-col items-center justify-between overflow-hidden"
      style={{ '--bg-wide': `url(${active.bg.wide})`, '--bg-tall': `url(${active.bg.tall})` }}
    >
      <div className="hero-bg -z-20" />
      <div className="bg-tint -z-[15]" style={{ background: active.tint }} />
      <div className="grain -z-10" />

      {/* Tablet + laptop: header on top, vertical playlist rail on the left, radio on top */}
      <div className="fixed inset-x-0 top-0 z-10 hidden md:flex flex-col gap-2 px-4 py-3 pointer-events-none">
        <div className="flex w-full items-center justify-between pointer-events-auto">
          <div className="safe-left">
            <Clock />
          </div>
          <div className="safe-right">
            <nav className="flex items-center gap-3">
              {select}
              <a className="text-sm text-white/80 hidden sm:inline" href="#" aria-label="twitter">Twitter</a>
              <a className="text-sm text-white/80 hidden sm:inline" href="#" aria-label="instagram">Instagram</a>
            </nav>
          </div>
        </div>

        <div className="flex w-full items-start gap-3">
          <div className="pointer-events-auto shrink-0">
            <PlaylistSelector playlistKey={playlistKey} onSelect={setPlaylistKey} vertical />
          </div>
          <div className="pointer-events-auto w-full max-w-xl min-w-0">
            <Player playlistKey={playlistKey} />
          </div>
        </div>
      </div>

      {/* Mobile: header + radio on top, horizontal playlist strip at the bottom */}
      <div className="fixed inset-0 z-10 flex md:hidden flex-col gap-2 px-4 py-3 pointer-events-none">
        <div className="flex items-center justify-between pointer-events-auto">
          <div className="safe-left">
            <Clock />
          </div>
          <div className="safe-right">
            <nav className="flex items-center gap-3">
              {select}
            </nav>
          </div>
        </div>
        <div className="mx-auto mt-3 w-full max-w-md pointer-events-auto">
          <Player playlistKey={playlistKey} />
        </div>
        <div className="flex-1 min-h-4" />
        <div className="mx-auto mb-2 w-full max-w-md pointer-events-auto">
          <PlaylistSelector playlistKey={playlistKey} onSelect={setPlaylistKey} />
        </div>
      </div>
    </main>
  )
}
