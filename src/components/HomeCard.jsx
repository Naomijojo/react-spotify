const HomeCard = ({image, onGoToPage, title }) => {
  return (
    <div className="banner-wrap">
      <div className="banner-image">
        <img src={image} alt="" onClick={onGoToPage}/>
        <div className="banner-title">{title}</div>
      </div>
    </div>
  )
}

export default HomeCard