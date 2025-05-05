import SearchCard from "@/components/SearchCard"
import searchItems from "@/mock/data/searchItem.json"
import { useState, useEffect} from "react"
import { myMusicApi } from "@/api/myMusic"



const Search = () => {
  const [ themeTracks, setThemeTracks ] = useState([])
  
  // 管理主題音樂
  useEffect(() => {
    const fetchThemeTracks = async () => {
      try {
        const results = await Promise.all(
          searchItems.map(item => myMusicApi.getThemeTracks(item.tag))
        )
        console.log('獲取主題音樂:', results)
        setThemeTracks(results)
      } catch (err) {
        console.error('獲取主題音樂錯:', err)
      }
    }

    fetchThemeTracks(themeTracks)
  }, [])

  


  return (
    <div className="search-content mb-[150px]">
      <h2 className="mt-5 mb-8">瀏覽全部</h2>
      <div className="cardSection-container">
        {searchItems.map((item) => (
          <SearchCard
            key={item.id}
            image={item.image}
            title={item.title}
            backgroundColor={item.backgroundColor}
            tag={item.tag}
          />
        ))}
      </div>
    </div>
  )
}

export default Search
