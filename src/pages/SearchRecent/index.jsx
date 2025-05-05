import MiniPlayer from "@/components/MiniPlayer"
import MusicResult from "@/components/MusicResult"
import { useNavigate } from "react-router-dom"
import { myMusicApi } from "@/api/myMusic"
import { useState, useEffect } from "react"
import { useMusicStore } from "@/store/music"
// import { Dropdown, Menu } from "antd"
import Loading from "@/components/Loading"

const SearchRecent = () => {
  const navigate = useNavigate()
  const [ searchResults, setSearchResults ] = useState([])      // 從api獲取的資料
  const [ filteredResults, setFilteredResults ] = useState([])  // filter以首字母為篩選條件的資料
  const [ searchQuery, setSearchQuery ] = useState('')          // 搜尋的關鍵字
  // const [ searchHistory, setSearchHistory ] = useState([])   // 搜尋歷史紀錄
  // const searchRef = useRef(null)                             // 這個用來獲取input的值
  const [ loading, setLoading ] = useState(false)
  const { setTrackList, playTrack } = useMusicStore()           // 從播放列表並播放選中的歌曲

  useEffect(() => async () => {
    const getResults = async () => {
      setLoading(true)     // 開始加載
      try {
        const data = await myMusicApi.getTracks(40)
        console.log('從getTracks api篩選出來的歌有:', data)
        setSearchResults(data.recommendedTracks)
      } catch (error) {
        console.error('獲取歌曲時錯誤:', error)
      } finally {
        setLoading(false)  // 結束加載
      }
    }
    getResults()
  },[])

  useEffect(() => {
    // 篩選結果(讓首字母不分大小寫)
    const results = searchResults.filter(item => item.name.toLowerCase().startsWith(searchQuery.toLowerCase()))
    setFilteredResults(results)
  }, [searchResults, searchQuery])


  const handleInputChange = (e) => {    //事件對象(event object)
    setSearchQuery(e.target.value)
  }

  const clearInput = () => {
    setSearchQuery('')
  }

  const backToSearchPage = () => {
    navigate('/search')
  }

  const handlePlay = (track, index) => {
    setTrackList(filteredResults); // 設置當前的播放列表
    playTrack(index);              // 播放選中的歌曲
  }
  


  // const handleSearch = (keyword) => {
  //   const filteredData = searchResults.filter(item => item.title.includes(keyword))
  //   setFilteredResults(filteredData)
  // }
  // 80 搜尋歷史紀錄->待完成中...  


  if(loading) return <Loading />
  return (
    <div className="flex flex-col h-full">
      <div className="recent-input-container flex items-center p-3">
        <button className="btn-box" >
          <i className="fa-solid fa-arrow-left fa-lg" onClick={backToSearchPage} ></i>
        </button>
        <div className="flex w-full relative ml-2">
          <i className="absolute top-[50%] left-3 fa-solid fa-magnifying-glass" style={{ color: "#000", transform: "translateY(-50%)" }}></i>
          <input 
          type="text" 
          value={searchQuery} 
          onChange={handleInputChange} 
          placeholder="想聽什麼？" 
          className="search-input flex-1 pl-10 py-2 border border-gray-300 rounded-md" 
          maxLength={"50"}
          />
          {searchQuery &&(
            <button onClick={clearInput} className="absolute right-3 top-[50%] transform -translate-y-[50%]">
            <i className="fa-solid fa-xmark" style={{ color: "#000" }}></i>
            </button>
          )}
        </div>
      </div>

      <div className="flex flex-col flex-1 gap-4 mt-6"> 
        {filteredResults.length > 0 ? (
          <>
            <h1 className="title">想播什麼就播什麼</h1>
            {/* 搜尋後的歌 */}
            <div className="search-result-container flex flex-col gap-4">
              {filteredResults.map((item, index) => (
                <MusicResult 
                  key={index} 
                  image={item.album_image} 
                  title={item.name} 
                  onClick={() => {handlePlay(item, index) }  
                  }
                />
              ))}
            </div>
          </>
        ) :(
          <h1 className="title">目前沒有你想要的歌曲</h1>
        ) }

        {/* 搜尋歷史紀錄 */}
        {/* <div className="search-history-container">
          <h1 className="title">搜尋歷史紀錄</h1>
          <div className="flex flex-col gap-4 mt-4">
            {searchHistory.map((item) => (
              <MusicResult key={item.id} image={item.album_image} title={item.name} />
            ))}
          </div>
        </div> */}

      </div>
      <MiniPlayer />
    </div>
  )
}

export default SearchRecent
