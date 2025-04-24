import TabBar from "@/components/TabBar"
import SearchCard from "@/components/SearchCard"
import searchItems from "@/mock/data/searchItem.json"

import { useState, useEffect } from "react"
import { myMusicApi } from "@/api/myMusic"
// import { useNavigate } from "react-router-dom"


const Search = () => {
  // const navigate = useNavigate()
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
  }, []);


//0410 test
  // const getThemeTracks =  async(tag) => {
  //   const data = await myMusicApi.getThemeTracks(tag)
  //   return data
  // }
  // const themes = ['corporate', 'chillout', 'ambient', 'pop', 'rock', 'jazz', 'hiphop', 'classical','country', 'edm', 'reggae', 'blues', 'metal', 'folk', 'soul', 'r&b', 'gospel', 'funk', 'disco', 'swing', 'salsa', '', 'bluegrass', 'ska', 'grunge', 'emo', 'post-rock', 'indie', 'alternative', 'new wave', 'synthpop', 'industrial', 'ambient techno', 'trance', 'house', 'dubstep', 'drum and bass']
  // const fetchTracks = async() => {
  //   try {
  //     console.log(Promise.all(themes.map(tag => getThemeTracks(tag))));
      
  //     const results = await Promise.all(themes.map(tag => getThemeTracks(tag)))
  //     const tracksData = {} // { corporate, chillout, ambient }
  //     themes.forEach((tag, index) => {
  //       tracksData[tag] = results[index]
  //     })
  //     setTracks(tracksData)
  //   } catch(err) {
  //     console.error(err);
      
  //   }
  // }
  // fetchTracks()
  // useEffect(() => {
  //   fetchTracks()
  // }, [])

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
