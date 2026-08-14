"use client"
import { playlists } from '../lib/tracks'

function formatTime(sec) {
  if (!sec || isNaN(sec)) return '0:00'
  const m = Math.floor(sec / 60)
  const s = Math.floor(sec % 60).toString().padStart(2, '0')
  return `${m}:${s}`
}

export default function TrackList({ playlistKey, currentIndex, onPlayTrack }) {
  const p = playlists[playlistKey] || playlists.playlistA
  return (
    <div className="tracklist">
      <div className="tracklist-head">{p.name}</div>
      <ol className="tracklist-ol">
        {p.tracks.map((t, i) => (
          <li key={t.id}>
            <button
              type="button"
              onClick={() => onPlayTrack(i)}
              className={`tracklist-row ${i === currentIndex ? 'tracklist-row-on' : ''}`}
            >
              <span className="tracklist-num">{i === currentIndex ? '♪' : i + 1}</span>
              <span className="tracklist-meta">
                <span className="tracklist-title truncate">{t.title}</span>
                <span className="tracklist-artist truncate">{t.artist}</span>
              </span>
              <span className="tracklist-dur">{formatTime(t.duration)}</span>
            </button>
          </li>
        ))}
      </ol>
    
    </div>
  )
}