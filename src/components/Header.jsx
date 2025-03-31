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
      {/* <button className="gears-box">
        <img className='gears-icon' src={gearsIcon} alt="gearsIcon" />
      </button> */}
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
        <p>檢視帳戶</p>
        <p>個人檔案</p>
        <p>登出</p>
        <p>-</p>
        <p>Premium</p>
        <p>支援</p>
        <p>下載</p>
        <p>隱私權</p>
        <p>條款</p>
      </Drawer>
    </header>
  )
}

export default Header
