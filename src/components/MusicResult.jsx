

const MusicResult = ({image, title, onClick }) => {
  return (
    <div className="music-item flex justify-start items-center" onClick={onClick}>
      <div className="music-img w-[50px] h-[50px] mr-3 ">
        {image ? (
          <img src={image} alt={title} className="rounded-md"/>
        ) : (
          <div className="w-[50px] h-[50px] bg-gray-400 flex items-center justify-center rounded-md">
            <i className="fa-solid fa-music text-white text-lg"></i>
          </div>
        )}
      </div>
      <div className="music-info">
        <h3>{title}</h3>
      </div>
    </div>
  )
}
export default MusicResult
