import MINILOGO from '@/assets/images/icon/minilogo.svg'
import MiniPlayer from "@/components/MiniPlayer"
import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMusicStore } from '@/store/music';
import { myMusicApi } from '@/api/myMusic';

const Recommend = () => {
  const navigate = useNavigate()
  const audioRef = useRef(null)
  const { currentTrack, isPlaying, togglePlaying} = useMusicStore()


  const getAlbum = async () => {
    const data = await myMusicApi.getAlbum(currentTrack.artist_name)
    console.log('當前專輯所有歌曲列表:', data)  
  }
  
  useEffect(() => {
    getAlbum()
    // 查看當前播放歌曲
    // console.log('Current Track:', currentTrack);

    // 查看播放清單
    // console.log('Track List:', trackList)
  }, []) 
  

  useEffect(() => {
    const audio = audioRef.current // HTML元素的DOM節點->audioRef.current
    console.log(audio)
    if (!audio) return             //如果 audioRef.current是null 直接退出函數不執行後續邏輯

    if (isPlaying){
      audio.play()
    } else {
      audio.pause()
    }
  },[currentTrack, isPlaying])     // 換歌&播放狀態改變時重新執行

  
  const formatDuration = (duration) => {
    const minutes = Math.floor(duration / 60);
    const seconds = duration % 60;
    return `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`
  }


  const handlePlayer = () => {
    navigate(`/playing`)
  }


  return (
    <div className="TypeList-container">
      <div className="TypeList-header mb-5">
        <div className="SongImg-container mb-2">
          <img className="w-[100%] object-cover" src={currentTrack.album_image} alt="" />
        </div>
        <div className="Song-title mb-1">
          <p>{currentTrack.artist_name}</p>
        </div>
        <div className="Song-subtitle mb-1 flex justify-start items-center">
          <img className='mr-2' src={MINILOGO} alt="" />
          <p>專為你打造</p>
        </div>
        <div className="play-control flex justify-between items-center">
          <p className='length'>totalDuration:3小時5分鐘</p>

          <audio
            ref={audioRef}
            src={currentTrack.audio}
          />
          <button className="control-btn play-pause-btn" onClick={togglePlaying}>
          {isPlaying ? (
            <i className="fa-regular fa-circle-stop" style={{color:'#1db954'}}></i>
            ) : (
            <i className="fa-solid fa-circle-play" style={{color:'#1db954'}}></i>
          )}
          </button>
        </div>
      </div>
      <div className="TypeList-content">
        <div className="song-item flex items-center justify-between mb-2" onClick={handlePlayer}>
          <div className="flex justify-center items-center">
            <img className='w-14 h-14 mr-3' src={currentTrack.image} alt="" />
            <div className="flex flex-col ml-2">
              <span className="song-title font-bold text-[18px]">{currentTrack.name}</span>
              <span className="song-artist text-[12px]">{currentTrack.artist_name}</span>
            </div>
          </div>  
          <span className="song-duration">{formatDuration(currentTrack.duration)}</span> 
        </div>
    
      </div>
      <MiniPlayer/>
    </div>
  )
}

export default Recommend
