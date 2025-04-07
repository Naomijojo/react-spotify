import MINILOGO from '@/assets/images/icon/minilogo.svg'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MiniPlayer from "@/components/MiniPlayer"

const Recommend = () => {
  const navigate = useNavigate()
  const [ isPlayed, setIsisPlayed ] = useState(false)


  const handlePlay = () => {
    setIsisPlayed((prevState) => !prevState)
  }

  const handlePlayer = () => {
    navigate(`/playing`)
  }

  return (
    <div className="TypeList-container">
      <div className="TypeList-header mb-5">
        <div className="SongImg-container mb-2">
          <img className="w-[100%] object-cover" src="https://seed-mix-image.spotifycdn.com/v6/img/mandopop/19nBOLVLKxrijWEvjpXFI8/zh-Hant/default" alt="" />
        </div>
        <div className="Song-title mb-1">
          <p>李榮浩、A-Lin、周杰倫 和更多藝人</p>
        </div>
        <div className="Song-subtitle mb-1 flex justify-start items-center">
          <img className='mr-2' src={MINILOGO} alt="" />
          <p>專為你打造</p>
        </div>
        <div className="play-control flex justify-between items-center">
          <p className='length'>3小時28分鐘</p>
          {/* <button>
            <i className="fa-solid fa-circle-play fa-2xl mr-2"></i>
          </button> */}
          <button className="control-btn play-pause-btn" onClick={handlePlay}>
          {isPlayed ? (
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
            <img className='w-14 h-14 mr-3' src="https://i.scdn.co/image/ab67616d00001e025d476803af73bdde7a8d3cef" alt="" />
            <div className="flex flex-col ml-2">
              <span className="song-title font-bold text-[18px]">紅色高跟鞋</span>
              <span className="song-artist text-[12px]">蔡健雅</span>
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
        </div>
      </div>
      <MiniPlayer/>
    </div>
  )
}

export default Recommend
