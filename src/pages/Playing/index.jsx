import {  useEffect, useRef } from 'react';
import { Slider } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useMusicStore } from '@/store/music';


const Playing = () => {
  const navigate = useNavigate()
  
  const audioRef = useRef(null)
  const { currentTrack,
    isPlaying,
    favorites,
    togglePlaying, 
    nextTrack, 
    prevTrack, 
    toggleFavorite,
    progress,
    duration,
    updateProgress,
    playMode,
    setPlayMode 
  } = useMusicStore()
  
  
  // 時間控制 -> 再用useEffect偵測 -> 放進全局控制
  const handleTimeChange = () => {
    // progress 及 duration 的更新
    console.log('Time',audioRef.current.currentTime)  //HTMLAudioElement >> currentTime=取得、設定當前播放秒數(sec)
    console.log('duration',audioRef.current.duration)  //歌曲總時長
    updateProgress(audioRef.current.currentTime, audioRef.current.duration )
  }
  // 進度條控制
  const handleProgressChang = (value) => {
    audioRef.current.currentTime = value
    updateProgress(audioRef.current.currentTime, audioRef.current.duration)
  }



  // 更新進度[(加入監聽 -> 頁面更新時=組件卸載 就要移除監聽(避免記憶體洩漏) 不要遺留沒使用的變數或函數]
  useEffect(() => {
    const audio = audioRef.current
    audio.addEventListener('timeupdate', handleTimeChange)
    return () => {
      audio.removeEventListener('timeupdate', handleTimeChange)
    }
  })
  
  // 播放結束時 
  // 先確認handleEnded內的函式(確認播放模式是循環還是重複 如果是重複 會把currentTime歸零再播放)
  // 如果是依序或隨機 就使用nextTrack的方法
  useEffect(() => {
    const audio = audioRef.current
    const handleEnded = () => {
      if(playMode === 'repeat'){
        audio.currentTime = 0
        audio.play()
      } else {
        nextTrack()
      }
    }
    audio.addEventListener('ended', handleEnded)
    return () => {
      audio.removeEventListener('ended', handleEnded)
    }
  },[playMode, nextTrack])



  useEffect(() => {
    const audio = audioRef.current // HTML元素的DOM節點->audioRef.current
    console.log(audio)

    if (isPlaying){
      audio.play()
    } else {
      audio.pause()
    }
  }, [currentTrack, isPlaying])    // 換歌&播放狀態改變時重新執行 

 // currentTime原本為秒數 需要進行格式化
  const formateTime = (seconds) => {
    if (!seconds) return '0:00'
    const minutes = Math.floor(seconds / 60) // Math.floor無條件捨去，回傳「小於等於」所給數字的最大整數 => 向下取整數
    const secs = Math.floor(seconds % 60)
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}` // 秒數須為兩位數
  }


  const handleMini = () => {
    navigate(`/songType/recommend`)
  }

  if(!currentTrack?.id) return <div>目前沒有撥放歌曲</div>

  return (
    <div className="music-player">
      <div className="topArea mb-[40px]">
        <button className="button flex h-[40px]" onClick={handleMini}>
          <i className="fa-solid fa-xl fa-chevron-down"></i>
        </button>
        {/* <div className="encore-text font-bold">華語流行音樂合輯</div> */}
      </div>

      {/* 專輯圖 */}
      <div className="albumArea flex flex-col flex-1 mt-12 mb-20">
        {/* <div className="content01"> */}
          <div className="albumImgBox">
            <img className="albumImg" src={currentTrack.album_image} alt="" />
          </div>
        {/* </div> */}
      </div>

      {/* 歌手歌名 */}
      <div className="albumDetails">
        <div className="flex-1 overflow-hidden">         
          <div className="text-title text-xl">{currentTrack.name}</div>
          <div className="text-subtitle opacity-70">{currentTrack.artist_name}</div>
        </div>
        <button role="switch" className="IconLikeBtn p-3 m-[-12px]" onClick={() => toggleFavorite(currentTrack)}>
          {favorites.some(item => item.id === currentTrack.id) ? (
            <i className="fa-solid fa-heart fa-xl" style={{color:'#1db954'}}></i>
          ) : (
            <i className="fa-regular fa-heart fa-xl opacity-20" ></i>
          )}
        </button>
      </div>


      {/* 時間進度條  */}
      <div className="progress-bar-container">
        <div className="w-[100%] h-[44px] ">
          <Slider
            className="progress-bar-slider"
            tooltip={{ open: false }} 

            onChange={(value) => handleProgressChang(value)}
            value={progress|| 0} // 歌曲進度 預設0
            max={duration || 0}   // 歌曲總時長 預設0
          />
          <div className="time-bar opacity-20">
            <span className="current-time text-[11px]">{formateTime(progress)}</span>
            <span className="total-time text-[11px]">{formateTime(duration)}</span>
          </div>
        </div>
      </div>

      {/* 播放案鈕控制區  */}
      <div className="controls-bar mb-4">
        {/*playMode是否為repeat(重複) 如果是:把模式為sequential(預設的依序)關掉 如果否:模式就是repeat(重複) */}
        <button className="control-btn repeat-btn" onClick={() => setPlayMode(playMode === 'repeat' ? 'sequential' : 'repeat')}>
          <i className={`fa-solid fa-repeat ${playMode === 'repeat' ? "opacity-100" : "opacity-20"}`}></i>

          {/* {playMode === 'repeat' ?  <i className="fa-solid fa-repeat opacity-100"></i> : <i className="fa-solid fa-repeat opacity-20"></i>} */}
          
        </button>
        {/* 上一首 */}
        <button className="control-btn backward-btn" onClick={prevTrack}>
          <i className="fa-solid fa-backward-step" ></i>
        </button>
        {/* 播放、暫停播放 */}
        <button className="control-btn play-pause-btn" onClick={togglePlaying}>
        <audio
          ref={audioRef}
          src={currentTrack.audio}
        />
        {isPlaying ? (
          <i className="fa-regular fa-circle-stop"></i>
          ) : (
          <i className="fa-solid fa-circle-play"></i>
        )}
        </button>
        {/* 下一首 */}
        <button className="control-btn forward-btn" onClick={nextTrack}>
          <i className="fa-solid fa-forward-step"></i> 
        </button>
        {/*playMode是否為random(隨機) 如果是:把模式為sequential(預設的依序)關掉 如果否:模式就是random(隨機) */}
        <button className="control-btn shuffle-btn" onClick={() => setPlayMode(playMode === 'random' ? 'sequential' : 'random')}>
          <i className={`fa-solid fa-shuffle ${playMode === 'random' ? "opacity-100" : "opacity-20"}`}></i>
        </button>
      </div>
    </div>
  )
}

export default Playing
