import { useNavigate } from "react-router-dom"
import { myMusicApi } from "@/api/myMusic"
import { useState, useEffect } from "react"
import { useMusicStore } from "@/store/music"
import Loading from "@/components/Loading"


const Home = () => {
  const navigate = useNavigate()
  const { trackList, playTrack, setTrackList } = useMusicStore()   // 暫放在“根據你最近聽過的音樂”

  const [recommendedTracks, setRecommendedTracks] = useState([])
  const [weekTracks, setWeekTracks] = useState([])
  const [monthTracks, setMonthTracks] = useState([])
  const [listensTotalTracks, setListensTotalTracks] = useState([])
  const [listensWeekTracks, setListensWeekTracks] = useState([])
  const [listensMonthTracks, setListensMonthTracks] = useState([])
  const [loading, setLoading] = useState(false)
  


  const goToPlaying = (index, albumId, albumTracks) => {
    navigate(`/songType/recommend?albumId=${albumId}`, { state: { albumTracks } })  // 將 albumId 傳遞到推薦頁面
    playTrack(index)
  }

  const fetchTracks = async (limit) => {
    setLoading(true)

    const { recommendedTracks, weekTracks, monthTracks, listensTotalTracks, listensWeekTracks, listensMonthTracks } = await myMusicApi.getTracks(limit)

    setRecommendedTracks(recommendedTracks.slice(0, 6))
    console.log('recommendedTracks:', recommendedTracks.slice(0, 6))

    setWeekTracks(weekTracks)
    console.log('weekTracks:', weekTracks)

    setMonthTracks(monthTracks)
    console.log('monthTracks:', monthTracks)

    setListensTotalTracks(listensTotalTracks)
    console.log('listensTotalTracks:', listensTotalTracks)

    setListensWeekTracks(listensWeekTracks)
    console.log('listensWeekTracks:', listensWeekTracks)

    setListensMonthTracks(listensMonthTracks)
    console.log('listensMonthTracks:', listensMonthTracks)
    setLoading(false)
  }
  



  useEffect(() => {
    fetchTracks(10)
  }, [])

  if(loading) return <Loading />

  return (
    <div className="homePage-container flex flex-col flex-nowrap w-full ">
      <div className="recommendCard-container flex flex-wrap justify-center items-center mt-[80px]">
        {recommendedTracks.length && (
          recommendedTracks.map((album, index) => (
            <div key={album.id} className="recommendCard flex items-center flex-1 rounded-[4px] h-[100%]" 
            onClick={() => {
              setTrackList(recommendedTracks)    // setTrackList用來更新播放歌單 先有歌單才能播放recommendedTracks歌曲
              goToPlaying(index, album.album_id, album.tracks)
            }}>
              <div className="img-container relative flex-shrink-0 w-[68px] h-[68px]">
                <img className="w-[100%] h-[100%] rounded-[4px]" src={album.image} alt="" />
                <div className="img-overlay absolute inset-0 bg-opacity-0 "></div>
              </div>
              <div className="text-container ml-2 flex-grow flex max-h-[100%] items-center">
                <span className="text-md text-[16px] font-medium overflow-hidden line-clamp-2">{album.name}</span>
              </div>
            </div>
        ))
        )}
      </div>
      {/* 你的熱門合輯 */}
      <div className="Section">
        <h3 className="Section-encoreTitle mt-6 mb-3">你的熱門合輯</h3>
        <div className="Card-container">
          {weekTracks.length && (
            weekTracks.map((album, index) => (
              <div key={album.id} className="Card"  
              onClick={() => {
                setTrackList(weekTracks) 
                goToPlaying(index, album.album_id, album.tracks)
              }}>
                <img className="Card-image w-[152px] h-[152px] mb-2 rounded-2xl" src={album.album_image} alt="" />
                <div className="Card-title max-h-12 overflow-hidden">{album.album_name}</div>
              </div>
            ))
          )}
        </div>
      </div>
      {/* 專為你精心打造 */}
      <div className="Section">
        <h3 className="Section-encoreTitle mt-6 mb-3">專為你精心打造</h3>
        <div className="Card-container">
          {monthTracks.map((item, index) => (
            <div key={item.id} className="Card" onClick={() => goToPlaying(index, item.id)}>
              <img className="Card-image w-[152px] h-[152px] mb-2 rounded-2xl" src={item.album_image} alt="" />
              <div className="Card-title max-h-12 overflow-hidden">{item.album_name}</div>
            </div>
          ))}
        </div>
      </div>
      {/* 電台推薦 */}
      <div className="Section">
        <h3 className="Section-encoreTitle mt-6 mb-3">電台推薦</h3>
        <div className="Card-container">
          {listensTotalTracks.map((item, index) => (
            <div key={item.id} className="Card" onClick={() => goToPlaying(index, item.id)}>
              <img className="Card-image w-[152px] h-[152px] mb-2 rounded-2xl" src={item.album_image} alt="" />
              <div className="Card-title max-h-12 overflow-hidden">{item.album_name}</div>
            </div>
          ))}
        </div>
      </div>
      {/* 重溫經典 */}
      <div className="Section">
        <h3 className="Section-encoreTitle mt-6 mb-3">重溫經典</h3>
        <div className="Card-container">
          {listensWeekTracks.map((item, index) => (
            <div key={item.id} className="Card" onClick={() => goToPlaying(index, item.id )}>
              <img className="Card-image w-[152px] h-[152px] mb-2 rounded-2xl" src={item.album_image} alt="" />
              <div className="Card-title max-h-12 overflow-hidden">{item.album_name}</div>
            </div>
          ))}
        </div>
      </div>    
      {/* 新發行音樂 */}
      <div className="Section">
        <h3 className="Section-encoreTitle mt-6 mb-3">最新發行音樂</h3>
        <div className="Card-container">
          {listensMonthTracks.map((item, index) => (
            <div key={item.id} className="Card" onClick={() => goToPlaying(index, item.id)}>
              <img className="Card-image w-[152px] h-[152px] mb-2 rounded-2xl" src={item.album_image} alt="" />
              <div className="Card-title max-h-12 overflow-hidden">{item.album_name}</div>
            </div>
          ))}
        </div>
      </div>
      
      {/* 根據你最近聽過的音樂 */}
      <div className="Section">
        <h3 className="Section-encoreTitle mt-6 mb-3">根據你最近聽過的音樂</h3>
        <div className="Card-container">
          {trackList.map((item, index) => (
            <div key={item.id} className="Card" onClick={() => goToPlaying(index, item.id)}>
              <img className="Card-image w-[152px] h-[152px] mb-2 rounded-2xl" src={item.album_image} alt="" />
              <div className="Card-title max-h-12 overflow-hidden">{item.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
