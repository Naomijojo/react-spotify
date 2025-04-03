import LOGO from '@/assets/images/icon/logo.svg'


const PlayListHeader = () => {
  return (
    <header className="header-wrapper fixed flex justify-between items-center w-[100vw]" >
      <div className="logo-box flex">
        <img className='logo mr-3' src={LOGO} alt="LOGO" />
        <p className='title text-2xl font-bold'>你的音樂庫</p>
      </div>
      <div className="add-box flex gap-5">
        <i className="fa-solid fa-xl fa-magnifying-glass"></i>
        <i className="fa-solid fa-xl fa-plus mr-1"></i>
      </div>
      
    </header>
  )
}
export default PlayListHeader
