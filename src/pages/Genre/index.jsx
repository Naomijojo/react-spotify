import { useNavigate } from "react-router-dom"
import { useLocation } from "react-router-dom"              //導航查詢參數
import { myMusicApi } from "@/api/myMusic"
import { useState, useEffect } from "react"
import { useMusicStore } from "@/store/music"
import Loading from "@/components/Loading"

const Genre = () => {
  const navigate = useNavigate()
  const location = useLocation()                            //導航查詢參數
  const queryParams = new URLSearchParams(location.search)  //導航查詢參數
  const tag = queryParams.get('tag')        // 從search頁獲取 tag 過來
  const title = queryParams.get('title')    // 從search頁獲取 title 過來
  const [ tracks, setTracks ] = useState([])                // 播放清單
  const [ loading, setLoading ] = useState(false)
  
  
  useEffect(() => {
    const fetchTracks = async () => {
      if (tag) {
        setLoading(true)   //加載時為true
        try {
          // 根據tag獲取主題音樂
          const data = await myMusicApi.getThemeTracks(tag)
          console.log('根據SearchCard的tag獲取主題音樂:', data)
        
          setTracks(data)
        } catch (error) {
          console.error('獲取主題音樂錯誤:', error)
        } finally{
          setLoading(false) //加載完成為false
        }
      } else {
        console.error('沒有tag')
      }
    }

    fetchTracks()
  }, [tag])


  const handleSearch = () => {
    navigate(`/search`)
  }


  if(loading) return <Loading />

  return (
    <div>
      <div className="flex h-14  py-4">
        <button className="btn-box" onClick={handleSearch}>
          <i className="fa-solid fa-arrow-left fa-xl"></i>
        </button>
      </div>
      <h1 className="text-[24px] font-bold my-3"> {title} </h1>
      <div className="Section">
        <h3 className="Section-encoreTitle mt-6 mb-3">發掘新音樂</h3>
        <div className="Card-container">
          {tracks.map((track) => (
            <div key={track.id} className="Card" >
              <img className="Card-image w-[152px] h-[152px] mb-2 rounded-2xl" src={track.album_image} alt="" />
              <div className="Card-title max-h-12 overflow-hidden">{track.name}</div>
            </div>

          ))}
        </div>
      </div>
      {/* <div className="Section">
        <h3 className="Section-encoreTitle mt-6 mb-3">精選播放清單</h3>
        <div className="Card-container">
          {tracks.map((track) => (
            <div keu={track.id} className="Card" >
              <img className="Card-image w-[152px] h-[152px] mb-2 rounded-2xl" src={track.album_image} alt="" />
              <div className="Card-title max-h-12 overflow-hidden">{track.name}</div>
            </div>
          ))}
        </div>
      </div> */}
    </div>
  )
}

export default Genre
