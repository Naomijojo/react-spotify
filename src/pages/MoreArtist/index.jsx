import { useSearchParams } from "react-router-dom"
import { useState, useEffect, useRef } from "react"
import { myMusicApi } from "@/api/myMusic"

const MoreArtist = () => {
  const [ searchParams ] = useSearchParams()                  //查詢參數
  const [ searchData, setSearchData ] = useState([])          //搜尋到的
  const [ isSearchClick, setIsSearchClick ] = useState(false) //是否點擊
  const [ searchHistory, setSearchHistory ] = useState([])    //搜尋紀錄
  const [ allData, setAllData ] = useState([])                //所有資料
  const [ value, setValue ] = useState('')                    //input的值
  const searchRef = useRef(null)            

  // 查詢字串
  const artistName = searchParams.get('')
  console.log(`artistName ${artistName}`)   

  const  getAllData = async() =>{
    const { data: recommendData } = await myMusicApi.getRecommendTracks()
    setAllData(recommendData)
    let filteredData = recommendData;
    
    if(artistName){
      filteredData = filteredData.filter(item => item.artistName === artistName);
    }
    console.log(filteredData)
    setSearchData(filteredData)      
  }

  useEffect(() => {
    getAllData();
  }, []);
  
  const addSearchHistory = (newSearchHistory) => {
    localStorage.setItem('searchHistory', JSON.stringify(newSearchHistory))
    setSearchHistory(newSearchHistory)
  }

  const handleSearch = (keyword) =>{
    const filteredData = allData.filter(item => item.title.includes(keyword))
    setSearchData(filteredData)
  } 

  const handleKeyDown = (e) => {
    if (e.keyCode === 13 ){
      const keyword = e.target.value.trim()
      handleSearch(keyword)

      if (searchHistory.some(item => item === keyword)) return 
      const newSearchHistory = [...searchHistory, e.target.value]
      addSearchHistory(newSearchHistory)
    }
  }

  const handleDeleteSearchHistory = (keyword) => {
    const newSearchHistory = searchHistory.filter(item => item !== keyword)
    addSearchHistory(newSearchHistory)
    setValue('')
  }

  //要使用useEffect 抓取dom元素 (何時拿？組件掛載完時拿 且只會拿一次)
  //加入監聽器 
  useEffect(() =>{
    const handleClickOutside = (event) => {
    //確認是否拿取整個searchRef 是就會是true &&(同時) 點擊的目標不在searchRef裡 就要讓setIsSearchClick為false
    if (searchRef.current && !searchRef.current.contains(event.target)){
      setIsSearchClick(false)
    }      
  }
    document.addEventListener('click', handleClickOutside )
    //組件卸載(換頁 關閉頁面)的時候執行“移除監聽”
    //卸載:react 是 CSR(client side render)
    //整個react都是一個js 是透過路由把東西放進所需頁面
    return () => {
      document.removeEventListener('click', handleClickOutside )
    }
  },[])
  const handleSort = (value) => {
    const newSearchData = [...searchData] //排序:先複製一份再將時間拿出來比大小
    if (value === 'asc'){
      newSearchData.sort((a,b) => a.time - b.time)
    }
    if (value === 'desc'){
      newSearchData.sort((a,b) => b.time - a.time)
    }
    setSearchData(newSearchData)
  }
  
  
  //掛載時執行
  useEffect(() => {
    //取得localStorage的searchHistory
    const searchHistoryStorage = localStorage.getItem('searchHistory')
    //如果有值就轉成JSON格式
    if (searchHistoryStorage) {
      //將JSON格式的searchHistory存入searchHistory
      setSearchHistory(JSON.parse(searchHistoryStorage))
    }
    //如果沒有值就設定為空陣列
  },[])

  return (
    <div className='mt-5 moreArtist'>
      <h1 className='font-bold text-4xl mb-5'>再多選幾位你喜愛的藝人。</h1>
      <div className="flex w-full relative mb-5">
        <i className="absolute top-[50%] left-3 fa-solid fa-magnifying-glass" style={{ color: "#000", transform: "translateY(-50%)" }}></i>
        <input type="search" placeholder={'keywords'} value={value} 
        onChange={(e) => setValue(e.target.value)} 
        className="search-input flex-1 pl-10 py-2 border border-gray-300 rounded-md" maxLength={"40"}
        onClick={() => setIsSearchClick(true)}
        onKeyDown={handleKeyDown}
        />
        </div>
      <div className="flex  mb-2">
        <div className="playlistCard flex justify-between items-center">
          <div className="w-[90px] h-[120px] flex flex-col items-center">
            <div className="img w-[90px] h-[90px] rounded-full bg-[#282828] mb-2" ></div>
            <span>artistName</span>
          </div>
          <div className="w-[90px] h-[120px] flex flex-col items-center">
            <div className="img w-[90px] h-[90px] rounded-full bg-[#282828] mb-2" ></div>
            <span>artistName</span>
          </div>
          <div className="w-[90px] h-[120px] flex flex-col items-center">
            <div className="img w-[90px] h-[90px] rounded-full bg-[#282828] mb-2" ></div>
            <span>artistName</span>
          </div>
      </div>
      </div>
      <div className="flex  mb-2">
        <div className="playlistCard flex justify-between items-center">
          <div className="w-[90px] h-[120px] flex flex-col items-center">
            <div className="img w-[90px] h-[90px] rounded-full bg-[#282828] mb-2" ></div>
            <span>artistName</span>
          </div>
          <div className="w-[90px] h-[120px] flex flex-col items-center">
            <div className="img w-[90px] h-[90px] rounded-full bg-[#282828] mb-2" ></div>
            <span>artistName</span>
          </div>
          <div className="w-[90px] h-[120px] flex flex-col items-center">
            <div className="img w-[90px] h-[90px] rounded-full bg-[#282828] mb-2" ></div>
            <span>artistName</span>
          </div>
      </div>
      </div>
    </div>
  )
}

export default MoreArtist
