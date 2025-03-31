import { Slider } from 'antd';
import { useState } from 'react';


const MusicPlayer = () => {
  const [ isLike, setIsLike ] = useState(false)
  // 循環 不循環 循環一次 -> 點擊切換
  const [ repeatState, setRepeatState ] = useState(0)
  // 上一首
  const [ isBackward, setBackward ] = useState(false)
  // 是否播放 
  const [ isPlayed, setIsisPlayed ] = useState(false)
  // 下一首
  const [ isForward, setForward ] = useState(false)
  // 是否開啟隨機播放 
  const [ isShuffled, setShuffled] = useState(false)
  
  const handleLike = () => {
    setIsLike((prevState) => !prevState)
  }
  const handleRepeat = () => {
    setRepeatState((prevState) => (prevState + 1) % 3)
  }
  const handleBackward = () => {
    setBackward((prevState) => !prevState )
  } 
  const handlePlay = () => {
    setIsisPlayed((prevState) => !prevState)
  }
  const handleForward = () => {
    setForward((prevState) => !prevState)
  }
  const handleShuffle = () => {
    setShuffled((prevState) => !prevState)
  }
  

  return (
    <div className="music-player">
      <div className="topArea mb-[40px]">
        <button className="button flex">
          <i className="fa-solid fa-xl fa-chevron-down"></i>
        </button>
        <div className="encore-text font-bold">Discover Weekly</div>
        <button className="button flex">
          <i className="fa-solid fa-ellipsis fa-lg"></i>  
        </button>
      </div>

      {/* 專輯圖 */}
      <div className="albumArea flex flex-col flex-1 mb-6">
        <div className="content01">
          <div className="content02">
            <div className="albumImgBox">
              <img className="albumImg" src={"https://i.scdn.co/image/ab67616d00001e021dd61642554160edf78b0714"} alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* 歌手歌名 */}
      <div className="albumDetails">
        <div className="flex-1 overflow-hidden">         
          <div className="text-title text-xl">真的愛你</div>
          <div className="text-subtitle opacity-70">Beyoud</div>
        </div>
        <button role="switch" className="IconLikeBtn p-3 m-[-12px]" onClick={handleLike}>
          {isLike ? (
            <i className="fa-regular fa-heart fa-xl opacity-20" ></i>
          ) : (
            <i className="fa-solid fa-heart fa-xl" style={{color:'#1db954'}}></i>
            // <i class="fa-regular fa-heart fa-xl opacity-100"></i>
          )}
        </button>
      </div>


      {/* 時間進度條  */}
      <div className="progress-bar-container">
        <div className="h-[44px] w-[100%]">
          <div className="relative w-[100%] h-[100%]">
          <Slider
            className="progress-bar-slider"
            tooltip={{ open: false }} 
            defaultValue={0} 
            max={100}
            step={1} 
          />
          <div className="time-bar opacity-20">
            <span className="current-time text-[11px]">00:00</span>
            <span className="total-time text-[11px]">04:35</span>
          </div>
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
              <i className="material-symbols-rounded opacity-100">repeat_one</i>
          )}
        </button>
        {/* 上一首 */}
        <button className="control-btn backward-btn" onClick={handleBackward}>
          <i className={`fa-solid fa-backward-step ${isBackward ? "opacity-100" : "opacity-20"}`}></i>
        </button>
        {/* 播放、暫停播放 */}
        <button className="control-btn play-pause-btn" onClick={handlePlay}>
        {isPlayed ? (
          <i className="fa-regular fa-circle-stop"></i>
          ) : (
          <i className="fa-solid fa-circle-play"></i>
        )}
        </button>
        {/* 下一首 */}
        <button className="control-btn forward-btn" onClick={handleForward}>
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

export default MusicPlayer
