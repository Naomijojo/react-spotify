import TabBar from "@/components/TabBar"
import MusicResult from "@/components/MusicResult"
import { useNavigate } from "react-router-dom"
import { myMusicApi } from "@/api/myMusic"
import { useState, useEffect } from "react"
import { useMusicStore } from "@/store/music"


const SearchRecent = () => {
  const navigate = useNavigate()
  const [ searchResults, setSearchResults ] = useState([])      //從api獲取的資料
  const [ filteredResults, setFilteredResults ] = useState([])  //filter以首字母為篩選條件的資料
  const [ searchQuery, setSearchQuery ] = useState('')          //搜尋的關鍵字
  const [ searchHistory, setSearchHistory ] = useState([])      //搜尋歷史紀錄
  // const searchRef = useRef(null)                            // 這個用來獲取input的值

  useEffect(() => async () => {
    const getResults = async () => {
      const data = await myMusicApi.getTracks(40)
      console.log('從recommendedTracks api篩選出來的歌有:', data)
      setSearchResults(data.recommendedTracks)
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

  const backToSearch = () => {
    navigate('/search')
  }
  const handleSearch = (keyword) => {
    const filteredData = searchResults.filter(item => item.title.includes(keyword))
    setFilteredResults(filteredData)
  }
  // 80 搜尋歷史紀錄->待完成中...  

  return (
    <div className="flex flex-col h-full">
      <div className="recent-input-container flex items-center p-3">
        <button className="btn-box" onClick={handleSearch}>
          <i className="fa-solid fa-arrow-left fa-lg" onClick={backToSearch} ></i>
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
        <h1 className="title">想播什麼就播什麼</h1>

        {/* 搜尋後內容 */}
        <div className="search-result-container flex flex-col gap-4">
          {filteredResults.map((item) => (
            <MusicResult key={item.id} image={item.album_image} title={item.name} />
          ))}
        </div>

        {/* 搜尋歷史紀錄 */}
        <div className="search-history-container">
          <h1 className="title">搜尋歷史紀錄</h1>
          <div className="flex flex-col gap-4 mt-4">
            {searchHistory.map((item) => (
              <MusicResult key={item.id} image={item.album_image} title={item.name} />
            ))}
          </div>
        </div>

      </div>

      <TabBar />
    </div>
  )
}

export default SearchRecent
