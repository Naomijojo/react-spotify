import { useNavigate } from "react-router-dom"
import { useLocation } from "react-router-dom"
import { myMusicApi } from "@/api/myMusic"
import { useState, useEffect } from "react"

const Genre = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)
  const tag = queryParams.get('tag')      // 從search頁獲取 tag 
  const title = queryParams.get('title')    // 從search頁獲取 title
  const [tracks, setTracks] = useState([])

  useEffect(() => {
    const fetchTracks = async () => {
      if (tag) {
        try {
          const data = await myMusicApi.getThemeTracks(tag)
          console.log('獲取主題音樂:', data);
        
          setTracks(data)
        } catch (error) {
          console.error('獲取主題音樂錯誤:', error);
        }
      } else {
        console.error('沒有tag');
      }
    };

    fetchTracks();
  }, [tag]);


  const handleSearch = () => {
    navigate(`/search`)
  }

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
          <div className="Card" >
            <img className="Card-image w-[152px] h-[152px] mb-2 rounded-2xl" src="" alt="" />
            <div className="Card-title max-h-12 overflow-hidden">name</div>
          </div>
          <div className="Card" >
            <img className="Card-image w-[152px] h-[152px] mb-2 rounded-2xl" src="" alt="" />
            <div className="Card-title max-h-12 overflow-hidden">name</div>
          </div>
          <div className="Card" >
            <img className="Card-image w-[152px] h-[152px] mb-2 rounded-2xl" src="" alt="" />
            <div className="Card-title max-h-12 overflow-hidden">name</div>
          </div>
          <div className="Card" >
            <img className="Card-image w-[152px] h-[152px] mb-2 rounded-2xl" src="" alt="" />
            <div className="Card-title max-h-12 overflow-hidden">name</div>
          </div>
        </div>
      </div>
      <div className="Section">
        <h3 className="Section-encoreTitle mt-6 mb-3">精選播放清單</h3>
        <div className="Card-container">
          <div className="Card" >
            <img className="Card-image w-[152px] h-[152px] mb-2 rounded-2xl" src="" alt="" />
            <div className="Card-title max-h-12 overflow-hidden">name</div>
          </div>
          <div className="Card" >
            <img className="Card-image w-[152px] h-[152px] mb-2 rounded-2xl" src="" alt="" />
            <div className="Card-title max-h-12 overflow-hidden">name</div>
          </div>
          <div className="Card" >
            <img className="Card-image w-[152px] h-[152px] mb-2 rounded-2xl" src="" alt="" />
            <div className="Card-title max-h-12 overflow-hidden">name</div>
          </div>
          <div className="Card" >
            <img className="Card-image w-[152px] h-[152px] mb-2 rounded-2xl" src="" alt="" />
            <div className="Card-title max-h-12 overflow-hidden">name</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Genre
