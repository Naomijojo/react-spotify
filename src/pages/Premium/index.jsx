import TabBar from "@/components/TabBar"
import MusicPlayer from "@/components/MusicPlayer"

const Premium = () => {
  return (
    <div className="mt-[72px]">
      <MusicPlayer/>
      <div className="item">Spotify 方案1</div>
      <div className="item">Spotify 方案2</div>
      <div className="item">Spotify 方案3</div>
      <TabBar/>
    </div>
  )
}

export default Premium
