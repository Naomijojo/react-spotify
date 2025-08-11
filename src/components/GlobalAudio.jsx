import { useEffect, useRef, useCallback } from 'react'
import { useMusicStore } from '@/store/music'

const GlobalAudio = () => {
  const audioRef = useRef(null)
  const { 
    currentTrack,
    isPlaying,
    updateProgress,
    nextTrack,
    playMode,
    setAudioRef
  } = useMusicStore()

  // 時間控制
  const handleTimeChange = useCallback(() => {
    // 防呆機制 -> 如果 audioRef.current是null 直接退出函數不執行後續邏輯
    const audio = audioRef.current
    if (!audio) return                 

    // updateProgress有 progress、duration 參數的更新
    updateProgress(audio.currentTime, audio.duration )
  },[updateProgress])

  // 播放結束時 
  const handleEnded = useCallback(() => {
    const audio = audioRef.current
    if (!audio) return

    if(playMode === 'repeat'){
      audio.currentTime = 0
      audio.play()
    } else {
      nextTrack()
    }
  },[playMode, nextTrack])
  

  // 更新全局audioRef
  useEffect(() => {
    // 如果audioRef.current存在，則setAudioRef
    if (audioRef.current) {
      setAudioRef(audioRef.current)
    }
    // 如果audioRef.current不存在，則setAudioRef為null
    return () => {
      setAudioRef(null)
    }
  }, [setAudioRef])

  // 更新進度監聽
  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    
    audio.addEventListener('timeupdate', handleTimeChange)
    audio.addEventListener('ended', handleEnded)
    
    return () => {
      audio.removeEventListener('timeupdate', handleTimeChange)
      audio.removeEventListener('ended', handleEnded)
    }
  },[handleTimeChange, handleEnded])

  // 播放 /暫停控制
  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    if (isPlaying) {
      audio.play().catch((error) => {
        console.error('播放失敗:', error)
      })
    } else {
      audio.pause()
    }
  }, [isPlaying])

  // 當 currentTrack 改變時，更新audio.src
  useEffect(() => {
    const audio = audioRef.current
    if (!audio || !currentTrack) return

    audio.src = currentTrack.audio
  }, [currentTrack])

  return (
    <audio
      ref={audioRef}
      src={currentTrack?.audio}
      hidden
    />
  )
}

export default GlobalAudio