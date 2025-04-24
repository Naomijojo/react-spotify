import TabBar from "@/components/TabBar"
import LOGO from "@/assets/images/icon/logo.svg"
import { Divider } from 'antd'


const Premium = () => {
  return (
    <div className="flex-1 mt-[100px] ">
      <div className="flex flex-col justify-center items-start gap-6">
        <div className="header flex w-full py-2">
          <img className="mr-2" src={LOGO} alt="" />
          <h3 className="font-bold">Premium</h3>
        </div>
        <h1 className="text-[30px] font-bold tracking-widest" >對Premium好奇嗎?你很幸運</h1>
        <div className="premium-item border border-solid rounded-md p-3 flex flex-col gap-3 w-full " style={{ backgroundColor: '#43434380' }}>
          <h2 className="item-title text-[20px] font-bold p-2">為何加入Premium?</h2>
          <Divider className="m-0" style={{ backgroundColor: '#4f4f4f', height: '2px' }}/>
          <ul class="benefits-list text-[18px]">
            <li>無廣告暢聽音樂</li>
            <li>下載並離線收聽</li>
            <li>由你決定歌曲播放順序</li>
            <li>高音質</li>
            <li>與好友一起即時聆聽</li>
            <li>整理聆聽佇列</li>
          </ul>

        </div>
        <span className="text-[24px] font-bold">可用方案 </span>
        <div className="premium-item border border-solid rounded-md p-3 flex flex-col gap-3 w-full relative" style={{ backgroundColor: '#43434380' }}>
          <div className="tag1">免費使用3個月</div>
          <h2 className="item-title text-[20px] font-bold p-2 mt-5" style={{color:'#fbd4ea'}}>Individual</h2>
          <Divider className="m-0" style={{ backgroundColor: '#4f4f4f', height: '2px' }}/>
          <ul class="benefits-list text-[18px]">
            <li>1個Premium帳戶</li>
            <li>可隨時取消</li>
          </ul>
        </div>

        <div className="premium-item border border-solid rounded-md p-3 flex flex-col gap-3 w-full relative" style={{ backgroundColor: '#43434380' }}>
          <div className="tag2">免費使用3個月</div>
          <h2 className="item-title text-[20px] font-bold p-2 mt-5" style={{color:'#b98aff'}}>Student</h2>
          <Divider className="m-0" style={{ backgroundColor: '#4f4f4f', height: '2px' }}/>
          <ul class="benefits-list text-[18px]">
            <li>1個經驗證的Premium帳戶</li>
            <li>符合資格個學生可享折扣</li>
            <li>可隨時取消</li>
          </ul>

        </div>
        
        <div className="premium-item border border-solid rounded-md p-3 flex flex-col gap-3 w-full relative" style={{ backgroundColor: '#43434380' }}>
          <h2 className="item-title text-[20px] font-bold p-2" style={{color:'#ffc856'}}>Duo</h2>
          {/* <div className="border-b-2"></div> */}
          <Divider className="m-0" style={{ backgroundColor: '#4f4f4f', height: '2px' }}/>
          <ul class="benefits-list text-[18px]">
            <li>2個Premium帳戶</li>
            <li>可隨時取消</li>
          </ul>
        </div>

        <div className="premium-item border border-solid rounded-md p-3 flex flex-col gap-3 w-full relative" style={{ backgroundColor: '#43434380' }}>
          <h2 className="item-title text-[20px] font-bold p-2" style={{color:'#7e96ab'}}>Family</h2>
          <Divider className="m-0" style={{ backgroundColor: '#4f4f4f', height: '2px' }}/>
          <ul class="benefits-list text-[18px]">
            <li>最多可供6個Premium帳戶使用</li>
            <li>控管兒童不宜內容</li>
            <li>可隨時取消</li>
          </ul>
        </div>

      </div>
    </div>
  )
}

export default Premium
