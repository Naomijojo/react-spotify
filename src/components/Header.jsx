import LOGO from '@/assets/images/icon/logo.svg'
import gearsIcon from '@/assets/images/icon/gears-button.svg'
import { useState } from 'react'
import { Button, Drawer } from 'antd'


const Header = () => {
  const [ OpenDrawer, setOpenDrawer ] = useState(false)
  const showDrawer = () => {
    setOpenDrawer(true);
  }
  const closeDrawer = () => {
    setOpenDrawer(false);
  }
  return (
    <header className="header-wrapper fixed flex justify-between items-center w-[100vw]" >
      <div className="logo-box">
        <img className='logo' src={LOGO} alt="LOGO" />
      </div>
      <Button
        type="text"
        icon={<img className='gears-icon' src={gearsIcon} alt="gearsIcon" />} // 使用 FontAwesome 的齒輪圖標
        onClick={showDrawer} // 點擊時打開 Drawer
        className="gears-icon"
      />
      <Drawer
        title=""
        placement="right"
        onClose={closeDrawer} // 點擊關閉按鈕時觸發
        open={OpenDrawer} // 控制 Drawer 的顯示狀態
      >
      <div className="text-container flex flex-col justify-center items-start">
        <button className='inline-flex gap-5 align-middle items-center py-2 w-[100%]' >
          <span className='text-[20px] font-bold'>檢視帳戶</span>
          <i className="fa-solid fa-angle-right fa-xl" style={{color: '#ffffff'}}></i>
        </button>
        <button className='inline-flex gap-5 align-middle items-center py-2 w-[100%]' >
          <span className='text-[20px] font-bold'>個人檔案</span>
        </button>
        <button className='inline-flex gap-5 align-middle items-center py-2 w-[100%]' >
          <span className='text-[20px] font-bold'>登出</span>
        </button>
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
