import { useState, useRef, useEffect } from 'react'

export default function AudioButton() {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef(null)
  const startedRef = useRef(false)

  useEffect(() => {
    const startAudioOnFirstClick = () => {
      if (startedRef.current) return

      startedRef.current = true

      audioRef.current
        ?.play()
        .then(() => setIsPlaying(true))
        .catch(e => console.error('Erro ao iniciar áudio:', e))

      window.removeEventListener('click', startAudioOnFirstClick)
    }

    window.addEventListener('click', startAudioOnFirstClick)

    return () => {
      window.removeEventListener('click', startAudioOnFirstClick)
    }
  }, [])

  const toggleAudio = () => {
    if (!audioRef.current || !startedRef.current) return

    if (isPlaying) {
      audioRef.current.pause()
      setIsPlaying(false)
    } else {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(e => console.error('Erro ao tocar áudio:', e))
    }
  }

  return (
    <div className="audio-btn">
      <audio
        ref={audioRef}
        loop
        preload="auto"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        <source
          src="https://download.stream.publicradio.org/podcast/minnesota/classical/programs/free-downloads/2019/04/03/daily_download_20190403_128.mp3?listeningSessionID=0CD_382_50__97447c58804120ea7869375c4234dfc5f969f1be"
          type="audio/mpeg"
        />
      </audio>

      <button
        onClick={toggleAudio}
        className={`audio-icon ${isPlaying ? 'playing' : ''}`}
        title="Canto Gregoriano"
      >
        <span className="text-2xl">{isPlaying ? '🎵' : '🔊'}</span>
      </button>

      <div className="audio-label">
        Canto<br />
        Gregoriano
      </div>
    </div>
  )
}