import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { Slider } from "antd"
import { useMusicStore } from "@/store/music"


const MiniPlayer = () => {
  const navigate = useNavigate()
  const { currentTrack, isPlaying, togglePlaying, favorites, toggleFavorite } = useMusicStore()
  const [ isLike, setIsLike ] = useState(false)

  // const [ progress, setProgress ] = useState(0)

  const handleLike = () => {
    setIsLike((prevState) => !prevState)
  } 
  // const handlePause = () => {
  //   setPaused((prevState) => !prevState) 
  // }

  const GoToDefaultPlaying = () => {
    navigate(`/playing`)
  }

  return (
    <div className="mini-player">
      <div className="mini-player__img flex items-center justify-center" onClick={GoToDefaultPlaying}>
        <img className="mini-player__cover rounded-[4px] w-[40px] h-[40px]" src={currentTrack.album_image} alt="" />
        <div className="mini-player__info ml-2 flex flex-col">
          <span className="mini-player__title text-[13px] font-bold">{currentTrack.name}</span>
          <span className="mini-player__artist text-[13px] font-light ">{currentTrack.artist_name}</span>
        </div>
      </div>
      <div className="mini-player__controls flex items-center p-2 gap-1">
        <button className="mini-player__btn" onClick={() => toggleFavorite(currentTrack)}>
          {favorites.some(item => item.id === currentTrack.id) ? (
            <i className="fa-solid fa-heart" style={{color:'#1db954'}}></i>
           ):(
            <i className="fa-regular fa-heart "></i>
           )}
        </button>
        <button className="mini-player__btn" onClick={togglePlaying}>
          {isPlaying ? (
            <i class="fa-solid fa-pause "></i> 
          ):(
            <i className="fa-solid fa-play"></i> 
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
