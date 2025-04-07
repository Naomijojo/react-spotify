

const PlaylistCard = ({ image, title, subtitle }) => {
  return (
    <div className="playlistCard flex">
      <div className="img-container mr-3">
        <img className="w-[72px] h-[72px] rounded-full" src={image} alt="" />
      </div>
      <div className="text-container">
        <div className="text-title text-xl font-semibold pt-3">{title}</div>
        <div className="text-subtitle text-sm text-gray-400">{subtitle}</div>
      </div>
    </div>
  )
}

export default PlaylistCard
