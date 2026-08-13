"use client"
import { useState } from 'react'
import Player from '../components/Player'
import Clock from '../components/Clock'
import PlaylistSelector from '../components/PlaylistSelector'
import { playlists } from '../lib/tracks'

export default function Page() {
  const [playlistKey, setPlaylistKey] = useState('playlistA')
  const [playing, setPlaying] = useState(false)
  const [showPlaylists, setShowPlaylists] = useState(false)
  const active = playlists[playlistKey] || playlists.playlistA

  return (
    <main
      className="relative flex min-h-dvh flex-1 flex-col items-center justify-between overflow-hidden"
      style={{ '--bg-wide': `url(${active.bg.wide})`, '--bg-tall': `url(${active.bg.tall})` }}
    >
      <div className="hero-bg -z-20" />
      <div className="bg-tint -z-[15]" style={{ background: active.tint }} />
      <div className="grain -z-10" />

      <div className="fixed inset-0 z-10 flex flex-col pointer-events-none">
        <div className="flex items-center justify-between px-4 py-3 pointer-events-auto">
          <div className="safe-left">
            <Clock />
          </div>
          <div className="safe-right">
            <nav className="flex items-center gap-3">
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
              <a className="text-sm text-white/80 hidden sm:inline" href="#" aria-label="twitter">Twitter</a>
              <a className="text-sm text-white/80 hidden sm:inline" href="#" aria-label="instagram">Instagram</a>
            </nav>
          </div>
        </div>

        <div className="radio-shell">
          <Player playlistKey={playlistKey} onPlayingChange={setPlaying} />
        </div>

        <div className="playlist-title" aria-hidden="false">{active.nameHi}</div>

        <div className={`playlist-wrap ${playing ? 'playlist-wrap-playing' : ''} ${playing && !showPlaylists ? 'playlist-wrap-hidden' : ''}`}>
          <PlaylistSelector playlistKey={playlistKey} onSelect={setPlaylistKey} />
        </div>

        {playing && (
          <button
            type="button"
            className="playlist-toggle"
            onClick={() => setShowPlaylists(v => !v)}
            aria-expanded={showPlaylists}
            aria-label={showPlaylists ? 'Hide playlists' : 'Show playlists'}
          >
            {showPlaylists ? '✕ Close' : '☰ Playlists'}
          </button>
        )}
      </div>
    </main>
  )
}