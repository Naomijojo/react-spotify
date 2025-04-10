import repeatOnce from '@/assets/images/icon/repeat_once.svg' 
import { useState, useEffect, useRef } from 'react';
import { Slider } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useMusicStore } from '@/store/music';


const Playing = () => {
  const navigate = useNavigate()
  const audioRef = useRef(null)
  const { currentTrack, isPlaying, favorites, togglePlaying, nextTrack, prevTrack, toggleFavorite } = useMusicStore()
  
  // 循環 不循環 循環一次 -> 點擊切換
  const [ repeatState, setRepeatState ] = useState(0)
  // 是否開啟隨機播放 
  const [ isShuffled, setShuffled] = useState(false)
  const [ isBackward, setBackward ] = useState(false)
  const [ isForward, setForward ] = useState(false)
  const handleRepeat = () => {
    setRepeatState((prevState) => (prevState + 1) % 3)
  }
  const handleShuffle = () => {
    setShuffled((prevState) => !prevState)
  }
  
  
  
  const backToMini = () => {
    navigate(`/songType/recommend`)
   }


  useEffect(() => {
    const audio = audioRef.current //HTML元素的DOM節點->audioRef.current
    console.log(audio)
    // if (!audio) return          //如果 audioRef.current是null 直接退出函數不執行後續邏輯

    if (isPlaying){
      audio.play()
    } else {
      audio.pause()
    }
  }, [currentTrack, isPlaying])    // 換歌&播放狀態改變時重新執行 


  return (
    <div className="music-player">
      <div className="topArea mb-[40px]">
        <button className="button flex h-[40px]" onClick={backToMini}>
          <i className="fa-solid fa-xl fa-chevron-down"></i>
        </button>
        {/* <div className="encore-text font-bold">華語流行音樂合輯</div> */}
        {/* <button className="button flex">
          <i className="fa-solid fa-ellipsis fa-lg" onClick={showDrawer}></i>  
        </button> */}
      </div>

      {/* 專輯圖 */}
      <div className="albumArea flex flex-col flex-1 mb-6">
        <div className="content01">
          <div className="content02">
            <div className="albumImgBox">
              <img className="albumImg" src={currentTrack.album_image} alt="" />
            </div>
          </div>
        </div>
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
          />
          <div className="time-bar opacity-20">
            <span className="current-time text-[11px]">00:00</span>
            <span className="total-time text-[11px]">04:35</span>
          </div>
        </div>
      </div>

      {/* 播放案鈕控制區  */}
      <div className="controls-bar mb-4">
        {/* 單曲循環、不循環、循環一次 */}
        <button className="control-btn repeat-btn" onClick={handleRepeat}>
          {repeatState === 0 && (
              <i className="fa-solid fa-repeat opacity-20"></i>
            )}
            {repeatState === 1 && (
              <i className="fa-solid fa-repeat opacity-100"></i>
            )}
            {repeatState === 2 && (
              <img src={repeatOnce} className="repeatOnce-icon " alt="RepeatOnce"/>
          )}
        </button>
        {/* 上一首 */}
        <button className="control-btn backward-btn" onClick={prevTrack}>
          <i className={`fa-solid fa-backward-step ${isBackward ? "opacity-100" : "opacity-20"}`}></i>
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
          <i className={`fa-solid fa-forward-step ${isForward ? "opacity-100" : "opacity-20"}`}></i> 
        </button>
        {/* 隨機播放、不隨機播放 */}
        <button className="control-btn shuffle-btn" onClick={handleShuffle} >
          <i className={`fa-solid fa-shuffle ${isShuffled ? "opacity-100" : "opacity-20"}`}></i>
        </button>
      </div>
    </div>
  )
}

export default Playing
