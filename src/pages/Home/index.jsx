// import MusicPlayer from "@/components/MusicPlayer"
// import HomeCard from "@/components/HomeCard"
import { useNavigate } from "react-router-dom"
import { myMusicApi } from "@/api/myMusic"
import { useEffect } from "react"
import { useMusicStore } from "@/store/music"

const Home = () => {
  const navigate = useNavigate()
  const { trackList, setTrackList, playTrack  } = useMusicStore()
  // const [ tracks, setTracks ] = useState([])

  const goToPlaying = (index) => {
    navigate(`/songType/recommend`)
    playTrack(index)
  }

  const getTracks = async() => {
    const data = await myMusicApi.getRecommendTracks()
    setTrackList(data)
    console.log('R:',data);
  }


  // const getTracks = async() => {
  //   const recommendData = await myMusicApi.getRecommendTracks()
  //   const weekData = await myMusicApi.getWeekTracks()
  //   setTrackList(recommendData)
  //   setTrackList(weekData)
  //   console.log('R:',recommendData)
  //   console.log('W:',weekData)
  // }
  

  
  useEffect(() => {
    getTracks()

  },[])

  return (
    <div className="homePage-container flex flex-col flex-nowrap w-full ">
      <div className="recommendCard-container flex flex-wrap justify-center items-center mt-[80px]">
        <div className="recommendCard flex items-center flex-1 rounded-[4px] ">
          <div className="img-container relative">
            <img className="w-[68px] h-[68px] rounded-[4px] " src="https://pickasso.spotifycdn.com/image/ab67c0de0000deef/dt/v1/img/daily/5/ab6761610000e5eb0a37c84786accc6db6a11e93/zh-Hant" alt="" />
            <div className="img-overlay absolute inset-0 bg-opacity-0 "></div>
          </div>
          <span className="ml-2 text-md text-[16px] font-medium">Daiy Mix 5</span>
        </div>
        <div className="recommendCard flex items-center flex-1 rounded-[4px] ">
          <div className="img-container relative">
            <img className="w-[68px] h-[68px] rounded-[4px] " src="https://pickasso.spotifycdn.com/image/ab67c0de0000deef/dt/v1/img/daily/2/ab6761610000e5eb1b44d5d4d2e564f28f4046cf/zh-Hant" alt="" />
            <div className="img-overlay absolute inset-0 bg-opacity-0 "></div>
          </div>
          <span className="ml-2 text-md text-[16px] font-medium">Daiy Mix 2</span>
        </div>
        <div className="recommendCard flex items-center flex-1 rounded-[4px] ">
          <div className="img-container relative">
            <img className="w-[68px] h-[68px] rounded-[4px] " src="https://i.scdn.co/image/ab67616100005174232bf5570b8772b76850f202" alt="" />
            <div className="img-overlay absolute inset-0 bg-opacity-0 "></div>
          </div>
          <span className="ml-2 text-md text-[16px] font-medium">最愛...田馥甄</span>
        </div>
        <div className="recommendCard flex items-center flex-1 rounded-[4px] ">
          <div className="img-container relative">
          <img className="w-[68px] h-[68px] rounded-[4px] " src="https://seed-mix-image.spotifycdn.com/v6/img/artist/5H8TJITZE1sPjVR2ACzXNS/zh-Hant/default" alt="" />
          <div className="img-overlay absolute inset-0 bg-opacity-0 "></div>
          </div>
          <span className="ml-2 text-md text-[16px] font-medium">伍佰</span>
        </div>
        <div className="recommendCard flex items-center flex-1 rounded-[4px] ">
          <div className="img-container relative">
            <img className="w-[68px] h-[68px] rounded-[4px] " src="https://i.scdn.co/image/ab6761610000e5eb438e5730e9e86121f329d2dd" alt="" />
            <div className="img-overlay absolute inset-0 bg-opacity-0 "></div>
          </div>
          <span className="ml-2 text-md text-[16px] font-medium">陳奕迅</span>
        </div>
        <div className="recommendCard flex items-center flex-1 rounded-[4px] ">
          <div className="img-container relative">
            <img className="w-[68px] h-[68px] rounded-[4px] " src="https://pickasso.spotifycdn.com/image/ab67c0de0000deef/dt/v1/img/radio/artist/6g641431O1Xkl7HAs2yFEg/zh-Hant" alt="" />
            <div className="img-overlay absolute inset-0 bg-opacity-0 "></div>
          </div>
          <span className="ml-2 text-md text-[16px] font-medium">茄子蛋 電台</span>
        </div>
      </div>
      {/* 你的熱門合輯 */}
      <div className="homeSection">
        <h3 className="homeSection-encoreTitle mt-6 mb-3">你的熱門合輯</h3>
        <div className="homeCard-container">
          {trackList.map((item, index) => (
            <div key={item.id} className="homeCard" onClick={() => goToPlaying(index)}>
              <img className="homeCard-image w-[152px] h-[152px] mb-2 rounded-2xl" src={item.album_image} alt="" />
              <div className="homeCard-title max-h-12 overflow-hidden">{item.name}</div>
            </div>
          ))}
        </div>
      </div>
      {/* 專為你精心打造 */}
      <div className="homeSection">
        <h3 className="homeSection-encoreTitle mt-6 mb-3">專為你精心打造</h3>
        <div className="homeCard-container">
          {trackList.map((item, index) => (
            <div key={item.id} className="homeCard" onClick={() => goToPlaying(index)}>
              <img className="homeCard-image w-[152px] h-[152px] mb-2 rounded-2xl" src={item.album_image} alt="" />
              <div className="homeCard-title max-h-12 overflow-hidden">{item.name}</div>
            </div>
          ))}
        </div>
      </div>
      {/* 電台推薦 */}
      <div className="homeSection">
        <h3 className="homeSection-encoreTitle mt-6 mb-3">電台推薦</h3>
        <div className="homeCard-container">
          {trackList.map((item, index) => (
            <div key={item.id} className="homeCard" onClick={() => goToPlaying(index)}>
              <img className="homeCard-image w-[152px] h-[152px] mb-2 rounded-2xl" src={item.album_image} alt="" />
              <div className="homeCard-title max-h-12 overflow-hidden">{item.name}</div>
            </div>
          ))}
        </div>
      </div>
      {/* 重溫經典 */}
      <div className="homeSection">
        <h3 className="homeSection-encoreTitle mt-6 mb-3">重溫經典</h3>
        <div className="homeCard-container">
          {trackList.map((item, index) => (
            <div key={item.id} className="homeCard" onClick={() => goToPlaying(index)}>
              <img className="homeCard-image w-[152px] h-[152px] mb-2 rounded-2xl" src={item.album_image} alt="" />
              <div className="homeCard-title max-h-12 overflow-hidden">{item.name}</div>
            </div>
          ))}
        </div>
      </div>    
      {/* 為你挑選的最新發行音樂 */}
      <div className="homeSection">
        <h3 className="homeSection-encoreTitle mt-6 mb-3">為你挑選的最新發行音樂</h3>
        <div className="homeCard-container">
          {trackList.map((item, index) => (
            <div key={item.id} className="homeCard" onClick={() => goToPlaying(index)}>
              <img className="homeCard-image w-[152px] h-[152px] mb-2 rounded-2xl" src={item.album_image} alt="" />
              <div className="homeCard-title max-h-12 overflow-hidden">{item.name}</div>
            </div>
          ))}
        </div>
      </div>
      {/* 根據你最近聽過的音樂 */}
      <div className="homeSection">
        <h3 className="homeSection-encoreTitle mt-6 mb-3">根據你最近聽過的音樂</h3>
        <div className="homeCard-container">
          {trackList.map((item, index) => (
            <div key={item.id} className="homeCard" onClick={() => goToPlaying(index)}>
              <img className="homeCard-image w-[152px] h-[152px] mb-2 rounded-2xl" src={item.album_image} alt="" />
              <div className="homeCard-title max-h-12 overflow-hidden">{item.name}</div>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  )
}

export default Home
