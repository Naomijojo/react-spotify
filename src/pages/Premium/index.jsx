import TabBar from "@/components/TabBar"
import MusicPlayer from "@/components/MusicPlayer"
import SongList from "@/components/SongList"

const Premium = () => {
  return (
    <div className="mt-[72px]">
      <MusicPlayer/>
      <SongList/>
      <div className="item">Spotify 方案1</div>
      <div className="item">Spotify 方案2</div>
      <div className="item">Spotify 方案3</div>
      <TabBar/>
    </div>
  )
}

export default Premium
