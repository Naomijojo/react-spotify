// searchItems:管理樣式
import searchItems from "@/mock/data/searchItem.json"

import { useNavigate } from "react-router-dom"


const SearchCard = ({ title, image, backgroundColor, tag }) => {
  const navigate = useNavigate()

  const item = searchItems.find(item => item.tag === tag)
  // console.log(searchItems)
  if (!item) return null

  if(!tag){
    return <div>沒有tag....</div>
  }

  return (
    <div className="SearchCard relative flex min-h-[92px] p-3 rounded-[4px] overflow-hidden" 
    style={{backgroundColor}} 
    onClick={() => navigate(`/genre?tag=${encodeURIComponent(item.tag)}&title=${encodeURIComponent(item.title)}`)} //encodeURIComponent()函数 可把字符串作為URI組件 進行編碼
    >
      <p className="">{title}</p>
      <img className="absolute" src={image} alt='' />
    </div>
  )
}

export default SearchCard
