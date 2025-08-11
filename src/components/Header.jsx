import LOGO from '@/assets/images/icon/logo.svg'
import gearsIcon from '@/assets/images/icon/gears-button.svg'
import { useState } from 'react'
import { Button, Drawer, message } from 'antd'
import { useNavigate } from "react-router-dom"
import { useUserStore } from '@/store/user'
import { useMusicStore } from '@/store/music'


const Header = () => {
  const navigate = useNavigate()
  const [ OpenDrawer, setOpenDrawer ] = useState(false)
  const { token, setToken, userInfo, setUserInfo } = useUserStore()
  const { setCurrentTrack } = useMusicStore()

  const showDrawer = () => {
    setOpenDrawer(true);
  }
  const closeDrawer = () => {
    setOpenDrawer(false);
  }
  

  const handleLogin = () => {
    closeDrawer()
    navigate(`/login`)
  }

  // 登出
  const logout = () => {
    setToken('')
    setUserInfo({image: ''})  
    try {
      setCurrentTrack(null) // 清空當前歌曲(同時 = miniplayer 也會清空也就不會顯示)  
    } catch (error) {
      console.error('清空當前歌曲時發生錯誤:', error)
    }
    // 通知登出成功
    message.success('已登出成功')
  } 

  return (
    <header className="header-wrapper fixed flex justify-between items-center w-[100vw]" >
      <div className="logo-box">
      {token ? (
        <div className="user">
          {userInfo.image ? (
            <img src={userInfo.image} alt="User Avatar" className="w-8 h-8 rounded-full" />
          ) : (
            <div className="w-8 h-8 rounded-full bg-gray-400 flex items-center justify-center">
              <i className="fa-solid fa-user text-white text-sm"></i>
            </div>
          )}
        </div>
      ) : (
        <img className="logo" src={LOGO} alt="LOGO" />
      )}
      </div>
      <Button className="gears-icon"
        type="text"
        icon={<img className='gears-icon' src={gearsIcon} alt="gearsIcon" />} // 使用 FontAwesome 的齒輪圖標
        onClick={showDrawer} 
      />
      <Drawer
        title=""
        placement="right"
        onClose={closeDrawer} 
        open={OpenDrawer} 
      >
      <div className="text-container flex flex-col justify-center items-start">
        <button className='LoginBtn inline-flex gap-5 align-middle items-center py-2 w-[100%]'onClick={ token ? logout: handleLogin} >
            <span className='text-[20px] font-bold' >{token ? '登出':'登入'}</span>
          <i className="fa-solid fa-angle-right fa-xl" style={{color: '#ffffff'}}></i>
        </button>
        {/* <button className='RegisterBtn inline-flex gap-5 align-middle items-center py-2 w-[100%]' >
          <span className='text-[20px] font-bold'>註冊</span>
        </button> */}
        <div className="w-4 border border-solid my-6"></div>
        <div className="flex flex-col gap-2">
          <button className='inline-flex gap-5 align-middle items-center py-1 w-[100%]' >
            <span className='text-[16px] font-bold'>Premium</span>
          </button>
          <button className='inline-flex gap-5 align-middle items-center py-1 w-[100%]' >
            <span className='text-[16px] font-bold'>支援</span>
          </button>
          <button className='inline-flex gap-5 align-middle items-center py-1 w-[100%]' >
            <span className='text-[16px] font-bold'>下載</span>
          </button>
          <button className='inline-flex gap-5 align-middle items-center py-1 w-[100%]' >
            <span className='text-[16px] font-bold'>隱私權</span>
          </button>
          <button className='inline-flex gap-5 align-middle items-center py-1 w-[100%]' >
            <span className='text-[16px] font-bold'>條款</span>
          </button>
        </div>
      </div>
      </Drawer>
    </header>
  )
}

export default Header
