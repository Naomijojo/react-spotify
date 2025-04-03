import MINILOGO from '@/assets/images/icon/minilogo.svg'

const SongList = () => {
  return (
    <div className="SongList-container">
      <div className="SongList-header mb-5">
        <div className="SongImg-container mb-2">
          <img className="w-[100%] object-cover" src="https://pickasso.spotifycdn.com/image/ab67c0de0000deef/dt/v1/img/daily/1/ab67616d0000b273c17714a11ba7db7fda4787fe/zh-Hant" alt="" />
        </div>
        <div className="Song-title mb-1">
          <p>李榮浩、A-Lin、周杰倫 和更多藝人</p>
        </div>
        <div className="Song-subtitle mb-1 flex justify-start items-center">
          <img className='mr-2' src={MINILOGO} alt="" />
          <p>專為你打造</p>
        </div>
        <p className='length'>3小時28分鐘</p>
      </div>
      <div className="SongList-content">
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
    </div>
  )
}

export default SongList 