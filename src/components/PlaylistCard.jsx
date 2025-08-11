

const PlaylistCard = ({ image, name, subtitle }) => {
  return (
    <div className="playlistCard flex">
      <div className="img-container mr-3">
        {image ? (
          <img className="w-[72px] h-[72px] rounded-full" src={image} alt={name} />
        ) : (
          <div className="w-[72px] h-[72px] rounded-full bg-gray-400 flex items-center justify-center text-xs">未提供圖片</div>
        )}
      </div>
      <div className="text-container">
        <div className="text-title text-xl font-semibold pt-3">{name}</div>
        <div className="text-subtitle text-sm text-gray-400">{subtitle}</div>
      </div>
    </div>
  )
}

export default PlaylistCard
