"use client"
import { useEffect, useRef, useState } from 'react'
import { playlists } from '../lib/tracks'

function sendAnalytics(name, payload) {
  try {
    import('@vercel/analytics').then((m) => { if (m?.event) m.event(name, payload) })
  } catch (err) { /* ignore */ }
}

const DIAL_MIN = 88
const DIAL_MAX = 108

function formatTime(sec) {
  if (!sec || isNaN(sec)) return '0:00'
  const m = Math.floor(sec / 60)
  const s = Math.floor(sec % 60).toString().padStart(2, '0')
  return `${m}:${s}`
}

function Knob({ label, value = 0.5, onChange }) {
  const ref = useRef(null)

  function setFromPointer(ev) {
    const rect = ref.current.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    let a = (Math.atan2(ev.clientY - cy, ev.clientX - cx) * 180) / Math.PI
    a = Math.max(-135, Math.min(135, a))
    onChange((a + 135) / 270)
  }

  function onPointerDown(e) {
    e.preventDefault()
    const move = (ev) => setFromPointer(ev)
    const up = () => {
      window.removeEventListener('pointermove', move)
      window.removeEventListener('pointerup', up)
    }
    window.addEventListener('pointermove', move)
    window.addEventListener('pointerup', up)
    setFromPointer(e)
  }

  const rot = -135 + value * 270

  return (
    <div className="flex flex-col items-center gap-[3px] select-none">
      <div
        ref={ref}
        onPointerDown={onChange ? onPointerDown : undefined}
        className="knob"
        role="slider"
        aria-label={label}
        aria-valuenow={Math.round(value * 100)}
      >
        <div className="knob-indicator" style={{ transform: `rotate(${rot}deg)` }} />
      </div>
      <span className="knob-label">{label}</span>
    </div>
  )
}

export default function Player({ playlistKey }) {
  const pl = playlists[playlistKey] || playlists.playlistA
  const list = pl.tracks
  const [index, setIndex] = useState(0)
  const track = list[index] || null
  const audioRef = useRef(null)
  const wasPlayingRef = useRef(false)
  const [playing, setPlaying] = useState(false)
  const [duration, setDuration] = useState(track?.duration || 0)
  const [elapsed, setElapsed] = useState(0)
  const [volume, setVolume] = useState(0.8)

  useEffect(() => {
    setIndex(0)
  }, [playlistKey])

  useEffect(() => {
    if (!track?.src) return
    const audio = audioRef.current
    if (!audio) return
    setDuration(track.duration || 0)
    setElapsed(0)
    audio.src = track.src
    audio.load()
    if (wasPlayingRef.current) audio.play().catch(() => {})
  }, [index, playlistKey])

  function handlePlayPause() {
    const audio = audioRef.current
    if (!audio || !track?.src) return
    if (audio.paused) {
      wasPlayingRef.current = true
      audio.play().catch(() => {})
    } else {
      wasPlayingRef.current = false
      audio.pause()
    }
  }

  function handlePrev() {
    const audio = audioRef.current
    if (audio && audio.currentTime > 3) { audio.currentTime = 0; return }
    setIndex(i => Math.max(0, i - 1))
  }

  function handleNext() {
    const audio = audioRef.current
    wasPlayingRef.current = audio ? !audio.paused : wasPlayingRef.current
    setIndex(i => (i + 1) % list.length)
  }

  function onLoadedMetadata(e) {
    const d = e.target.duration
    if (d && isFinite(d)) setDuration(d)
  }

  function onTimeUpdate(e) { setElapsed(e.target.currentTime) }
  function onPlay() { setPlaying(true); wasPlayingRef.current = true }
  function onPause() { setPlaying(false) }

  function onEnded() {
    wasPlayingRef.current = true
    setIndex(i => (i + 1) % list.length)
  }

  function onError() {
    console.error('audio error', track?.src)
    try { sendAnalytics('audio-error', { src: track?.src }) } catch {}
    setIndex(i => (i + 1) % list.length)
  }

  const seekRef = useRef(null)
  const draggingRef = useRef(false)
  function setSeekFromEvent(e) {
    const audio = audioRef.current
    if (!audio || !duration || !seekRef.current) return
    const rect = seekRef.current.getBoundingClientRect()
    const x = ('clientX' in e) ? e.clientX : e.touches?.[0]?.clientX
    const pct = Math.max(0, Math.min(1, (x - rect.left) / rect.width))
    audio.currentTime = pct * duration
    setElapsed(pct * duration)
  }
  function onSeekDown(e) {
    e.preventDefault()
    draggingRef.current = true
    const move = (ev) => setSeekFromEvent(ev)
    const up = () => {
      draggingRef.current = false
      window.removeEventListener('pointermove', move)
      window.removeEventListener('pointerup', up)
    }
    window.addEventListener('pointermove', move)
    window.addEventListener('pointerup', up)
    setSeekFromEvent(e)
  }

  function onVolumeChange(v) {
    setVolume(v)
    if (audioRef.current) audioRef.current.volume = v
  }

  const pct = duration ? elapsed / duration : 0
  const dialPct = Math.max(0, Math.min(100, pct * 100))

  return (
    <div>
      <audio
        ref={audioRef}
        preload="metadata"
        onLoadedMetadata={onLoadedMetadata}
        onTimeUpdate={onTimeUpdate}
        onPlay={onPlay}
        onPause={onPause}
        onEnded={onEnded}
        onError={onError}
      />

      <div className={`radio ${playing ? 'radio-on' : ''}`}>
        <div className="radio-header">
          <span className="radio-brand">Nostalgia Radio</span>
          <div className="flex items-center gap-2">
            <span className={`text-[9px] tracking-[0.25em] ${playing ? 'text-amber-200' : 'text-amber-100/50'}`}>ON AIR</span>
            <span className={`pilot-lamp ${playing ? 'lamp-on' : ''}`} />
          </div>
        </div>

        <div className="radio-main">
          <div className="dial">
            <div className="dial-needle" style={{ left: `${dialPct}%` }} />
            <div className="dial-scale" />
            <div className="dial-labels">
              <span>88</span><span>90</span><span>93</span><span>96</span>
              <span>100</span><span>104</span><span>108</span>
            </div>
            <div className="dial-freq">{(DIAL_MIN + pct * (DIAL_MAX - DIAL_MIN)).toFixed(1)} MHz</div>
          </div>

          <div className="speaker">
            <div
              className="vinyl"
              style={{ animationPlayState: playing ? 'running' : 'paused' }}
            >
              <div className="vinyl-cover" />
              <div className="spindle" />
            </div>
          </div>
        </div>

        <div className="radio-track">
          <div className="radio-meta">
            <div className="min-w-0 flex-1">
              <div className="text-[13px] font-semibold text-[#f3e6c9] truncate leading-tight" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.6)' }}>{track?.title || '—'}</div>
              <div className="text-[11px] text-[#f3e6c9]/70 truncate leading-tight" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.6)' }}>{track?.artist || ''}</div>
            </div>
            <div className="radio-times">
              <span>{formatTime(elapsed)} / {formatTime(duration)}</span>
            </div>
          </div>
          <div className="radio-seek" ref={seekRef} onPointerDown={onSeekDown}>
            <div className="seek-rail" />
            <div className="seek-fill" style={{ width: `${dialPct}%` }} />
          </div>
        </div>

        <div className="radio-controls">
          <Knob label="VOL" value={volume} onChange={onVolumeChange} />
          <div className="radio-transport">
            <button type="button" onClick={handlePrev} className="radio-btn" aria-label="Previous or rewind">◀</button>
            <button type="button" onClick={handlePlayPause} className="radio-btn radio-play" aria-label={playing ? 'Pause' : 'Play'}>
              {playing ? '❚❚' : '▶'}
            </button>
            <button type="button" onClick={handleNext} className="radio-btn" aria-label="Skip">▶</button>
          </div>
          <Knob label="TUNE" value={dialPct / 100} />
        </div>
      </div>
    </div>
  )
}