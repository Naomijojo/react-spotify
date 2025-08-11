import MINILOGO from '@/assets/images/icon/minilogo.svg'
import MiniPlayer from "@/components/MiniPlayer"
import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useMusicStore } from '@/store/music';
import { myMusicApi } from '@/api/myMusic';

const Recommend = () => {
  const navigate = useNavigate()
  const location = useLocation()                            // 導航查詢參數
  const queryParams = new URLSearchParams(location.search)  // 導航查詢參數
  const albumId = queryParams.get('albumId')                // 從search頁獲取 albumId 過來
   
  const { currentTrack, isPlaying, togglePlaying, trackList, playTrack } = useMusicStore() 

  useEffect(() => {
    const fetchAlbumTracks = async () => {
      if (albumId) {
        try {
          const tracks = await myMusicApi.getAlbum(albumId)
          // 以albumId獲取到的歌曲列表
          console.log('album的歌曲列表:', tracks)
        } catch (error) {
          console.error(`獲取專輯 ${albumId} 的歌曲錯誤:`, error)
        }
      }
    }

    fetchAlbumTracks()
  }, [albumId])

  const formatDuration = (duration) => {
    const minutes = Math.floor(duration / 60);
    const seconds = duration % 60;
    return `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`
  }

  // 計算專輯總時長
  const calculateTotalDuration = (tracks) => {
    const totalSeconds = tracks.reduce((acc, track) => acc + track.duration, 0)
    const hours = Math.floor(totalSeconds / 3600)
    const minutes = Math.floor((totalSeconds % 3600) / 60)
    const seconds = totalSeconds % 60
  
    let durationString = ''
    if (hours > 0) {
      durationString += `${hours}小時 `
    }
    durationString += `${minutes}分鐘 ${seconds}秒`
  
    return durationString;
  }
  
  const backToHome = () => {
    navigate(`/`)
  }

  if(!currentTrack?.id) return <div>目前沒有撥放歌曲</div>

  return (
    <div className='flex flex-col h-screen' >
      <div className="btn-content fixed top-0 left-0 flex justify-start items-center w-[390px] h-[56px] p-4 z-10">
        <button className="btn-box w-[24px] h-[24px]" onClick={backToHome}>
          <i className="fa-solid fa-arrow-left fa-xl"></i>
        </button>
      </div>
      <main className="flex-1 pt-[56px] overflow-y-auto mb-[150px]">
        <div className="TypeList-container mt-[48px] ">
          <div className="TypeList-header mb-5">
            <div className="SongImg-container flex justify-center items-center my-8">
              <img className="w-[156px] h-[156px] object-cover" src={currentTrack.image} alt="" />
            </div>
            <div className="Song-title mb-1">
              <p>{currentTrack.artist_name}</p>
            </div>
            <div className="Song-subtitle mb-1 flex justify-start items-center">
              <img className='mr-2' src={MINILOGO} alt="" />
              <p>專為你打造</p>
            </div>
            <div className="play-control flex justify-between items-center">
              <p className='length'>{calculateTotalDuration(trackList)}</p>

              <button className="control-btn play-pause-btn" onClick={togglePlaying}>
              {isPlaying ? (
                <i className="fa-regular fa-circle-stop" style={{color:'#1db954'}}></i>
                ) : (
                <i className="fa-solid fa-circle-play" style={{color:'#1db954'}}></i>
              )}
              </button>
            </div>
          </div>

          {/* 專輯歌曲列表 */}
          <div className="TypeList-content">
            {trackList.map((item, index) => (
              <div key={item.id} 
                className="song-item flex items-center justify-between mb-3" 
                onClick={() => playTrack(index)}>
                <div className="flex justify-center items-center">
                  <img className='w-14 h-14 mr-3' src={item.image} alt="" />
                  <div className="flex flex-col ml-2">
                    <span className="song-title font-bold text-[18px]">{item.name}</span>
                    <span className="song-artist text-[12px]">{item.artist_name}</span>
                  </div>
                </div>  
                <span className="song-duration">{formatDuration(item.duration)}</span> 
              </div>
            ))}
        
          </div>
        </div>
      </main>
    </div>
    
  )
}

export default Recommend
