const MusicResult = ({image, title}) => {
  return (
    <div className="music-item flex justify-start items-center">
      <div className="music-img w-[50px] h-[50px] mr-3 ">
        <img src={image} alt={title} className="rounded-md"/>
      </div>
      <div className="music-info">
        <h3>{title}</h3>
      </div>
    </div>
  )
}
export default MusicResult
