import MINILOGO from '@/assets/images/icon/minilogo.svg'
import MiniPlayer from "@/components/MiniPlayer"
import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMusicStore } from '@/store/music';
import { myMusicApi } from '@/api/myMusic';

const Recommend = () => {
  const navigate = useNavigate()
  const audioRef = useRef(null)
  const { currentTrack, isPlaying, togglePlaying } = useMusicStore()
  // const [totalDuration, setTotalDuration] = useState(0)

  
  const getAlbum = async () => {
    const songs = await myMusicApi.getAlbum(currentTrack.artist_name)
    console.log(songs) //要找到當前專輯下的歌曲才對 暫用artist_name運作
  }

  

  
  useEffect(() => {
    getAlbum()
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
          <p className='length'>3小時5分鐘</p>
          {/* <p className='length'>{formatDuration(totalDuration)}</p> */}
          {/* <button>
            <i className="fa-solid fa-circle-play fa-2xl mr-2"></i>
          </button> */}
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
              <span className="song-title font-bold text-[18px]">song.id</span>
              <span className="song-artist text-[12px]">song.artist_name</span>
            </div>
          </div>  
          <span className="song-duration">duration</span> 
        </div>

        {/* <div className="song-item flex items-center justify-between mb-2">
          <div className="flex justify-center items-center">
            <img className='w-14 h-14 mr-3' src="https://i.scdn.co/image/ab67616d000048515e612ee6e4ad129abe910a53" alt="" />
            <div className="flex flex-col ml-2">
              <span className="song-title font-bold text-[18px]">戒菸</span>
              <span className="song-artist text-[12px]">李榮浩</span>
            </div>
          </div>  
          <span className="song-duration">5:06</span> 
        </div>
        <div className="song-item flex items-center justify-between mb-2">
          <div className="flex justify-center items-center">
            <img className='w-14 h-14 mr-3' src="https://i.scdn.co/image/ab67616d000048515e612ee6e4ad129abe910a53" alt="" />
            <div className="flex flex-col ml-2">
              <span className="song-title font-bold text-[18px]">戒菸</span>
              <span className="song-artist text-[12px]">李榮浩</span>
            </div>
          </div>  
          <span className="song-duration">5:06</span> 
        </div> */}
      </div>
      <MiniPlayer/>
    </div>
  )
}

export default Recommend
