"use client"
import { playlists } from '../lib/tracks'

export default function PlaylistSelector({ playlistKey, onSelect }) {
  return (
    <nav className="playlist-strip" aria-label="Playlists">
      {Object.keys(playlists).map(key => {
        const p = playlists[key]
        const active = key === playlistKey
        return (
          <button
            type="button"
            key={key}
            onClick={() => onSelect(key)}
            className={`playlist-card ${active ? 'playlist-card-on' : ''}`}
            aria-pressed={active}
            aria-label={p.name}
          >
            <div className="playlist-card-img" style={{ backgroundImage: `url(${p.image})` }} />
            <div className="playlist-card-name">{p.name}</div>
          </button>
        )
      })}
    </nav>
  )
}
