import { useNavigate } from "react-router-dom"





const TabBar = () => {
  const navigate = useNavigate()

  const tabItems = [
    { icon:"tabIcon-home", label: "首頁", path:"/" },
    { icon: "tabIcon-search", label: "搜尋", path: "/search" },
    { icon: "tabIcon-music", label: "我的音樂庫", path: "/playlist" },
    { icon: "tabIcon-premium", label: "Premium", path: "/premium" }
  ]
  const handleNavigation = (path) => {
    if(path){
      navigate(path)
    }
  }
  const TabItem = ({ icon, label, path }) =>{
    return(
    <li className="tabItem flex flex-col items-center text-center">
      <button className="tabBtn flex flex-col items-center" onClick={() => handleNavigation(path)}>
        <div className={`tabIcon ${icon} w-6 h-6 mb-1`}></div>
        <p className="tabLabel text-xs">{label}</p>
      </button>
    </li>
    )
  }
  return (
    <nav className="tabBar-container fixed bottom-0 w-full flex justify-around items-center h-[70px] z-20">
      <ul className="tabList flex justify-around w-full">
        {tabItems.map((item, index) =>(
          <TabItem key={index} icon={item.icon} label={item.label} path={item.path} />
        ))}
      </ul>
    </nav>

  )}

export default TabBar