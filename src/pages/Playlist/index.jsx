import TabBar from "@/components/TabBar"



const PlayList = () => {
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
          <img className="w-[72px] h-[72px] rounded-full" src="https://seed-mix-image.spotifycdn.com/v6/img/artist/5H8TJITZE1sPjVR2ACzXNS/zh-Hant/default" alt="" />
        </div>
        <div className="text-container">
          <div className="text-title text-xl font-semibold pt-3">伍佰</div>
          <div className="text-subtitle text-sm text-gray-400">藝人</div>
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
          <img className="w-[72px] h-[72px] rounded-full" src="https://seed-mix-image.spotifycdn.com/v6/img/artist/5H8TJITZE1sPjVR2ACzXNS/zh-Hant/default" alt="" />
        </div>
        <div className="text-container">
          <div className="text-title text-xl font-semibold pt-3">伍佰</div>
          <div className="text-subtitle text-sm text-gray-400">藝人</div>
        </div>
      </div>
    </div>

    
    <TabBar/>
  </div>
  )
}

export default PlayList
