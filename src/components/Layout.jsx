import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import Header from "./Header"
import Footer from "./Footer"
import SearchHeader from './SearchHeader';
import PlayHeader from './PlayHeader';
import TabBar from './TabBar';
import MiniPlayer from './MiniPlayer';
import GlobalAudio from './GlobalAudio';
import { useMusicStore } from '@/store/music';
import { useEffect } from 'react';
import { useUserStore } from '@/store/user';


const Layout = () => {
  const navigate = useNavigate()
  const location = useLocation() 
  const noMainRoutes = ['/login']

  const currentTrack = useMusicStore((state) => state.currentTrack)
  const { token } = useUserStore()

  const getHeader = () => {
    if (location.pathname === '/search') {
      return <SearchHeader />
    }
    if (location.pathname === '/playlist'){
      return <PlayHeader />
    }
    if (
      location.pathname.startsWith('/playlist/moreArtist') ||
      location.pathname === '/search/recent' ||
      location.pathname.startsWith('/songType') ||
      location.pathname.startsWith('/playing') ||
      location.pathname.startsWith('/moreArtist') ||
      location.pathname.startsWith('/login') ||
      location.pathname.startsWith('/premium') ||
      location.pathname.startsWith('/genre')
    ) {
      return null;
    }
    return <Header />
  }
  
  const showFooter = () => {
    return location.pathname === '/'
  }

  useEffect(() => {
    const authPaths = ['/playlist', '/artist'] 
    if (authPaths.some(path => location.pathname.includes(path)) && !token) {
      navigate('/login')
    }
  },[token, location.pathname, navigate])

  return (
    <div className="flex flex-col min-h-screen">
      {getHeader()}
      
      {!noMainRoutes.includes(location.pathname) && (
        <main className='flex-1 content-container' >
          <Outlet />
        </main>
      )}
      {noMainRoutes.includes(location.pathname) && <Outlet />}

      {showFooter() && <Footer/>}

      {/* 有登入且有播放歌曲才顯示 miniplayer */}
      { currentTrack && <MiniPlayer />}
      
      {/* 改用全局管理audio miniplayer才能出現*/}
      <GlobalAudio />
      
      <TabBar className="absolute bottom-0 left-0 w-full pl-0"/>
      
      </div>
  );
};

export default Layout;
