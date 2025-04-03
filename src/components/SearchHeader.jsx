import { useNavigate,  } from "react-router-dom"

const SearchHeader = () => {
  const navigate = useNavigate()


  const handleSearchRecent = () => {
    navigate(`/search/recent?`)
  }

  return (
    <div className="flex-1 p-4">
      <h1 className="search-title font-bold text-2xl mt-8 mb-4 ">搜尋</h1>
      <button className="searchBtn flex items-center" onClick={handleSearchRecent} >
        <i className="fa-solid fa-magnifying-glass" ></i>
        想聽什麼？
      </button>
    </div>
  )
}

export default SearchHeader
