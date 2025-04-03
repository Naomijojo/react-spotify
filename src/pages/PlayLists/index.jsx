import TabBar from "@/components/TabBar"



const PlayLists = () => {
  return (
    <div className="myPlaylist mt-[72px]">
    <div className="myBtnBox flex">
      <div className="btn-items mr-2">
        <p className="btn-para">播放清單</p>
      </div>
      <div className="btn-items">
        <p className="btn-para">藝人</p>
      </div>
    </div>
    <div className="flex flex-col gap-3 mt-4">
      <div className="playlistCard flex">
        <div className="img-container mr-3 relative">
          <img className="w-[72px] h-[72px] gradient" src="" alt="" />
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
      </div>
    </div>

    
    <TabBar/>
  </div>
  )
}

export default PlayLists
