import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import Header from "./Header"
import Footer from "./Footer"
import SearchHeader from './SearchHeader';
import PlayHeader from './PlayHeader';
import TabBar from './TabBar';
import MiniPlayer from './MiniPlayer';
import { useMusicStore } from '@/store/music';
import { useEffect, useRef } from 'react';
import { useUserStore } from '@/store/user';


const Layout = () => {
  const navigate = useNavigate()
  const location = useLocation() 
  const noMainRoutes = ['/login']

  const audioRef = useRef(null)
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
    const authPaths = ['/playlist'] 
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

      { token && currentTrack && <MiniPlayer />}
      <audio ref={audioRef} />
      
      <TabBar className="absolute bottom-0 left-0 w-full pl-0"/>
      
      </div>
  );
};

export default Layout;
