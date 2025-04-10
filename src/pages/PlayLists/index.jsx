import { sortOptions } from "@/utills/sortOptions"
import { useEffect, useState } from "react"
// import { myMusicApi } from "@/api/myMusic"
import PlaylistCard from "@/components/PlaylistCard"
import TabBar from "@/components/TabBar"
import { useNavigate } from "react-router-dom"
  

const PlayLists = () => {
  const [ isSortOpen, setSortIsOpen ] = useState(false)
  const [ selectedSortOptions, setSelectedSortOptions ] = useState(sortOptions[0].label)
  // const [ playlistData, setPlaylistData ] = useState([])

  const navigate = useNavigate()

  const toggleDrawer = () => {
    setSortIsOpen(!isSortOpen)
  }
  const handleCheckout = (option) => {
    // console.log(option.label)
    setSelectedSortOptions(option.label)
    setSortIsOpen(false)
  }

  // const getPlaylistData = async() => {
  //   const { data } = await myMusicApi.getPlayList()
  //   setPlaylistData(data)
  // }  

  // useEffect(() => {
  //   getPlaylistData()
  // },[])
  const playlistData = [
    {
      "id": 1,
      "image": "https://seed-mix-image.spotifycdn.com/v6/img/artist/5H8TJITZE1sPjVR2ACzXNS/zh-Hant/default",
      "title": "伍佰",
      "subtitle": "藝人",
      "category": "artist" 
    },
    {
      "id": 2,
      "image": "https://i.scdn.co/image/ab6761610000e5eb438e5730e9e86121f329d2dd",
      "title": "陳奕迅",
      "subtitle": "藝人",
      "category": "artist" 
    },
    {
      "id": 3,
      "image": "https://i.scdn.co/image/fe26346459e770591ec9147b53a2b156f6815e0f",
      "title": "王菲",
      "subtitle": "藝人",
      "category": "artist" 
    },
    {
      "id": 4,
      "image": "https://i.scdn.co/image/ab67616d00001e0276f073ba4f233d6e858115b3",
      "title": "張雨生",
      "subtitle": "藝人",
      "category": "artist"
    },
    {
      "id": 5,
      "image": "https://i.scdn.co/image/ab676161000051749ffb964ffbd8af492f1d6471",
      "title": "王傑",
      "subtitle": "藝人",
      "category": "artist" 
    }
  ]

  const handleMoreArtist = () => {
    navigate(`/playlist/moreArtist`)
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
        <PlaylistCard
          key={item.id}
          image={item.image}
          title={item.title}
          subtitle={item.subtitle}
        />
      ))}
      {/* <div className="playlistCard flex">
        <div className="img-container mr-3 relative">
          <img className="w-[72px] h-[72px] likeGradient" src="" alt="" />
          <i className="fa-solid fa-heart fa-xl" style={{color: '#ffffff'}}></i>
        </div>
        <div className="text-container">
          <div className="text-title text-xl font-semibold pt-3">已按讚的歌曲</div>
          <div className="text-subtitle text-sm text-gray-400">播放清單。5首歌</div>
        </div>
      </div>
      <div className="playlistCard flex">
        <div className="img-container mr-3">
          <img className="w-[72px] h-[72px] rounded-full" src="https://seed-mix-image.spotifycdn.com/v6/img/artist/5H8TJITZE1sPjVR2ACzXNS/zh-Hant/default" alt="" />
        </div>
        <div className="text-container">
          <div className="text-title text-xl font-semibold pt-3">伍佰</div>
          <div className="text-subtitle text-sm text-gray-400">藝人</div>
        </div>
      </div>
      <div className="playlistCard flex">
        <div className="img-container mr-3">
          <img className="w-[72px] h-[72px] rounded-full" src="https://i.scdn.co/image/ab6761610000e5eb438e5730e9e86121f329d2dd" alt="" />
        </div>
        <div className="text-container">
          <div className="text-title text-xl font-semibold pt-3">陳奕迅</div>
          <div className="text-subtitle text-sm text-gray-400">藝人</div>
        </div>
      </div>
      <div className="playlistCard flex">
        <div className="img-container mr-3">
          <img className="w-[72px] h-[72px] rounded-full" src="https://i.scdn.co/image/fe26346459e770591ec9147b53a2b156f6815e0f" alt="" />
        </div>
        <div className="text-container">
          <div className="text-title text-xl font-semibold pt-3">王菲</div>
          <div className="text-subtitle text-sm text-gray-400">藝人</div>
        </div>
      </div>
      <div className="playlistCard flex">
        <div className="img-container mr-3">
          <img className="w-[72px] h-[72px] rounded-full" src="https://i.scdn.co/image/ab67616d00001e0276f073ba4f233d6e858115b3" alt="" />
        </div>
        <div className="text-container">
          <div className="text-title text-xl font-semibold pt-3">張雨生</div>
          <div className="text-subtitle text-sm text-gray-400">藝人</div>
        </div>
      </div>
      <div className="playlistCard flex">
        <div className="img-container mr-3">
          <img className="w-[72px] h-[72px] rounded-full" src="https://i.scdn.co/image/ab676161000051749ffb964ffbd8af492f1d6471" alt="" />
        </div>
        <div className="text-container">
          <div className="text-title text-xl font-semibold pt-3">王傑</div>
          <div className="text-subtitle text-sm text-gray-400">藝人</div>
        </div>
      </div> */}
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
