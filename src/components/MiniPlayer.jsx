import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { Slider } from "antd"

const MiniPlayer = () => {
  const navigate = useNavigate()

  const [ isLike, setIsLike ] = useState(false)
  const [ isPaused, setPaused ] = useState(false)
  // const [ progress, setProgress ] = useState(0)

  const handleLike = () => {
    setIsLike((prevState) => !prevState)
  } 
  const handlePause = () => {
    setPaused((prevState) => !prevState) 
  }

  const GoToDefaultPlaying = () => {
    navigate(`/playing`)
  }

  return (
    <div className="mini-player">
      <div className="mini-player__img flex items-center justify-center" onClick={GoToDefaultPlaying}>
        <img className="mini-player__cover rounded-[4px] w-[40px] h-[40px]" src="https://i.scdn.co/image/ab67616d00001e025d476803af73bdde7a8d3cef" alt="" />
        <div className="mini-player__info ml-2 flex flex-col">
          <span className="mini-player__title text-[13px] font-bold">紅色高跟鞋</span>
          <span className="mini-player__artist text-[13px] font-light ">蔡健雅</span>
        </div>
      </div>
      <div className="mini-player__controls flex items-center p-2 gap-1">
        <button className="mini-player__btn" onClick={handleLike}>
          {isLike ? (
            <i className="fa-solid fa-heart" style={{color:'#1db954'}}></i>
           ):(
            <i className="fa-regular fa-heart "></i>
           )}
        </button>
        <button className="mini-player__btn" onClick={handlePause}>
          {isPaused ? (
            <i className="fa-solid fa-play"></i> 
          ):(
            <i class="fa-solid fa-pause "></i> 
          )}
        </button>
      </div>
      <div className="mini-player_slider ant-slider w-[100%] absolute bottom-[-5px] left-0 ">
        <Slider
          tooltip={{ open: false }} 
        />
      </div>
    </div>
  )
}

export default MiniPlayer
