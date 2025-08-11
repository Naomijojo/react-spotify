import { sortOptions } from "@/utills/sortOptions"
import { useState, useEffect } from "react"
import { myMusicApi } from "@/api/myMusic"
import PlaylistCard from "@/components/PlaylistCard"
import TabBar from "@/components/TabBar"
import { useNavigate } from "react-router-dom"

  

const PlayLists = () => {
  const [ isSortOpen, setSortIsOpen ] = useState(false)
  const [ selectedSortOptions, setSelectedSortOptions ] = useState(sortOptions[0].label)
  const [ playlistData, setPlaylistData ] = useState([])


  const navigate = useNavigate()

  const toggleDrawer = () => {
    setSortIsOpen(!isSortOpen)
  }
  const handleCheckout = (option) => {
    // console.log(option.label)
    setSelectedSortOptions(option.label)
    setSortIsOpen(false)
  }

  const getPlaylistData = async() => {
    try {
      const artists = await myMusicApi.getArtists(6)
      console.log('artists',artists)
      setPlaylistData(artists)
    } catch (error) {
      console.error('獲取歌手資訊錯誤:', error)
    }
  }  

  useEffect(() => {
    getPlaylistData()
  },[])
  

  const handleMoreArtist = () => {
    navigate(`/playlist/moreArtist`)
  }

  const handleArtistClick = async (artist) => {
    navigate(`/artist?name=${encodeURIComponent(artist.name)}&image=${encodeURIComponent(artist.image)}`) // 傳遞歌手名字和圖片
    // 避免特殊字符導致URL無法正確解析:
    // 1.encodeURIComponent()：編碼所有特殊字符，包括 &, =, ?, / 等等...
    // 2.encodeURI()：保留 URL 結構字符，只編碼其他特殊字符
  }
  return (
    <div className="myPlaylist mt-[72px] mb-[150px]">
    <div className="myBtnBox flex mb-2">
      <div className="btn-items mr-2">
        <p className="btn-para">播放清單</p>
      </div>
      <div className="btn-items">
        <p className="btn-para">藝人</p>
      </div>
    </div>
    <div className="sortBox flex " onClick={toggleDrawer}>
      <div className="btn-items flex justify-center items-center bg-none">
        <i className="btn-sort fa-solid fa-sort"></i>
        <p className="btn-para">{selectedSortOptions}</p>  {/* 顯示當前選擇的sort */}
      </div>
      <div className={`SortDrawer ${isSortOpen ? 'open' : ''}`}>
        <div className="flex flex-col p-5 text-lg font-semibold gap-4">
          <div className="sort-title" style={{color:'#959595'}}>分類方法</div>
          {sortOptions.map((option) => (
            <div key={option.value} className="sort-items" onClick={() => handleCheckout(option)}>
              {option.label}
            </div>
          ))}
          <div className="sort-items mt-3 text-center "style={{color:'#959595'}} onClick={() => setSortIsOpen(false)}>取消</div>
        </div>
      </div>
    </div>
    <div className="flex flex-col gap-3 mt-4">
      {playlistData.map((item) => (
        <div key={item.id} onClick={() => handleArtistClick(item)}>
          <PlaylistCard
            image={item.image}
            name={item.name}
            subtitle={item.subtitle}
          />
        </div>
      ))}

      <div className="playlistCard flex" onClick={handleMoreArtist}>
        <div className="img-container mr-3 relative">
          <div className="w-[72px] h-[72px] rounded-full bg-[#282828]">
          <i className="fa-solid fa-plus fa-2xl" style={{color: '#959595'}}></i>
          </div>
        </div>
        <div className="text-container">
          <div className="text-title text-xl font-semibold pt-5" >新增藝人</div>
        </div>
      </div>
      <div className="playlistCard flex">
        <div className="img-container mr-3 relative">
          <div className="w-[72px] h-[72px] rounded-md bg-[#282828]" >
          <i className="fa-solid fa-plus fa-2xl " style={{color: '#959595'}}></i>
          </div>
        </div>
        <div className="text-container">
          <div className="text-title text-xl font-semibold pt-5">新增Pocast和節目</div>
        </div>
      </div>
      
    </div>

    
    <TabBar/>
  </div>
  )
}

export default PlayLists

// setPlaylistData([
      //   {
      //     id: 1,
      //     image: "https://seed-mix-image.spotifycdn.com/v6/img/artist/5H8TJITZE1sPjVR2ACzXNS/zh-Hant/default",
      //     name: "伍佰",
      //     subtitle: "藝人",
      //     category: "artist" 
      //   },
      //   {
      //     id: 2,
      //     image: "https://i.scdn.co/image/ab6761610000e5eb438e5730e9e86121f329d2dd",
      //     name: "陳奕迅",
      //     subtitle: "藝人",
      //     category: "artist" 
      //   },
      //   {
      //     id: 3,
      //     image: "https://i.scdn.co/image/fe26346459e770591ec9147b53a2b156f6815e0f",
      //     name: "王菲",
      //     subtitle: "藝人",
      //     category: "artist" 
      //   },
      //   {
      //     id: 4,
      //     image: "https://i.scdn.co/image/ab67616d00001e0276f073ba4f233d6e858115b3",
      //     name: "張雨生",
      //     subtitle: "藝人",
      //     category: "artist"
      //   },
      //   {
      //     id: 5,
      //     image: "https://i.scdn.co/image/ab676161000051749ffb964ffbd8af492f1d6471",
      //     name: "王傑",
      //     subtitle: "藝人",
      //     category: "artist" 
      //   }
      // ])