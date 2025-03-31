import TabBar from "@/components/TabBar"
import { useNavigate } from "react-router-dom"

const SearchRecent = () => {
  const navigate = useNavigate()


  const handleSearch = () => {
    navigate(`/search`)
  }

  return (
    <div className="flex flex-col h-full">
      <div className="recent-input-container flex items-center p-3">
        <button className="btn-box" onClick={handleSearch}>
          <i className="fa-solid fa-arrow-left fa-lg"></i>
        </button>
        <div className="flex w-full relative ml-2">
          <i className="absolute top-[50%] left-3 fa-solid fa-lg fa-magnifying-glass" style={{ color: "#ffeeee", transform: "translateY(-50%)" }}></i>
          <input type="text" placeholder="想聽什麼？" className="search-input flex-1 pl-10 py-2 border border-gray-300 rounded-md" maxLength={"50"}
          />
        </div>
      </div>

      <div className="flex flex-col flex-1 gap-4 mt-6"> 
        <h1 className="title">想播什麼就播什麼</h1>
        <h2 className="subtitle text-[13px]">搜尋藝人、歌曲、Podcast和更多內容</h2>
      </div>

      <TabBar />
    </div>
  )
}

export default SearchRecent
