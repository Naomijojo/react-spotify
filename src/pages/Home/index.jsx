import { useNavigate } from "react-router-dom"
import { myMusicApi } from "@/api/myMusic"
import { useState, useEffect } from "react"
import { useMusicStore } from "@/store/music"

const Home = () => {
  const navigate = useNavigate()
  const { trackList, playTrack } = useMusicStore()   // 暫放在“根據你最近聽過的音樂”

  const [recommendedTracks, setRecommendedTracks] = useState([])
  const [weekTracks, setWeekTracks] = useState([])
  const [monthTracks, setMonthTracks] = useState([])
  const [listensTotalTracks, setListensTotalTracks] = useState([])
  const [listensWeekTracks, setListensWeekTracks] = useState([])
  const [listensMonthTracks, setListensMonthTracks] = useState([])

  
  // const [ tracks, setTracks] = useState({
  //   corporate: [],
  //   chillout: [],
  //   ambient: []
  // })

  const goToPlaying = (index, id) => {
    navigate(`/songType/recommend?albumId=${id}`)
    playTrack(index)
  }
  // const goToPlaying = (index, albumTracks) => {
  //   navigate(`/songType/recommend`);
  //   playTrack(index);
  // }

  const fetchTracks = async (limit) => {
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
  }
  



  useEffect(() => {
    fetchTracks(10)
  }, [])

  return (
    <div className="homePage-container flex flex-col flex-nowrap w-full ">
      <div className="recommendCard-container flex flex-wrap justify-center items-center mt-[80px]">
        {recommendedTracks.map((item, index) => (
          <div key={item.id} className="recommendCard flex items-center flex-1 rounded-[4px] h-[100%]" onClick={() => goToPlaying(index)}>
            <div className="img-container relative flex-shrink-0 w-[68px] h-[68px]">
              <img className="w-[100%] h-[100%] rounded-[4px]" src={item.image} alt="" />
              <div className="img-overlay absolute inset-0 bg-opacity-0 "></div>
            </div>
            <div className="text-container ml-2 flex-grow flex max-h-[100%] items-center">
              <span className="text-md text-[16px] font-medium overflow-hidden line-clamp-2">{item.album_name}</span>
            </div>
            {/* <div className="text-md ml-2 text-[16px] font-medium whitespace-wrap overflow-hidden text-ellipsis" style={{ maxWidth: 'calc(100% - 76px)', display: 'flex', alignItems: 'center' }}>{item.album_name}</div> */}
            {/* <span className="text-md ml-2 text-[16px] font-medium whitespace-wrap overflow-hidden" style={{ maxWidth: 'calc(100% - 76px)' }}>{item.album_name}</span> */}
          </div>
        ))}
         {/* <div className="recommendCard flex items-center flex-1 rounded-[4px] ">
           <div className="img-container relative">
             <img className="w-[68px] h-[68px] rounded-[4px] " src="https://pickasso.spotifycdn.com/image/ab67c0de0000deef/dt/v1/img/daily/5/ab6761610000e5eb0a37c84786accc6db6a11e93/zh-Hant" alt="" />
             <div className="img-overlay absolute inset-0 bg-opacity-0 "></div>
           </div>
           <span className="ml-2 text-md text-[16px] font-medium">Daiy Mix 5</span>
         </div> */}
      </div>
      {/* 你的熱門合輯 */}
      <div className="Section">
        <h3 className="Section-encoreTitle mt-6 mb-3">你的熱門合輯</h3>
        <div className="Card-container">
          {weekTracks.map((item, index) => (
            <div key={item.id} className="Card" onClick={() => goToPlaying(index)}>
              <img className="Card-image w-[152px] h-[152px] mb-2 rounded-2xl" src={item.album_image} alt="" />
              <div className="Card-title max-h-12 overflow-hidden">{item.album_name}</div>
            </div>
          ))}
        </div>
      </div>
      {/* 專為你精心打造 */}
      <div className="Section">
        <h3 className="Section-encoreTitle mt-6 mb-3">專為你精心打造</h3>
        <div className="Card-container">
          {monthTracks.map((item) => (
            <div key={item.id} className="Card" onClick={() => goToPlaying(item)}>
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
            <div key={item.id} className="Card" onClick={() => goToPlaying(index)}>
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
            <div key={item.id} className="Card" onClick={() => goToPlaying(index)}>
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
            <div key={item.id} className="Card" onClick={() => goToPlaying(index)}>
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
            <div key={item.id} className="Card" onClick={() => goToPlaying(index)}>
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
