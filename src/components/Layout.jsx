import { Outlet, useLocation } from 'react-router-dom'
import Header from "./Header"
import Footer from "./Footer"
import SearchHeader from './SearchHeader';
import PlayHeader from './PlayHeader';
import TabBar from './TabBar';

const Layout = () => {
  const location = useLocation() 
  const noMainRoutes = ['/login'] 

  const getHeader = () => {
    if (location.pathname === '/search') {
      return <SearchHeader />
    }
    if (location.pathname === '/playlist'){
      return <PlayHeader />
    }
    if (location.pathname.startsWith('/playlist/moreArtist') ){
      return null
    }
    if (location.pathname === '/search/recent'){
      return null
    }
    if (location.pathname.startsWith('/songType') ){
      return null
    }
    if (location.pathname.startsWith('/playing') ){
      return null
    }
    if (location.pathname.startsWith('/moreArtist') ){
      return null
    }
    if (location.pathname.startsWith('/login') ){
      return null
    }
    if (location.pathname.startsWith('/premium') ){
      return null
    }
    if (location.pathname.startsWith('/genre') ){
      return null
    }

    return <Header />;
  }
  
  const showFooter = () => {
    return location.pathname === '/'
  }


  return (
    <div className="flex flex-col min-h-screen">
      {getHeader()}
      
      {!noMainRoutes.includes(location.pathname) && (
        <main className='flex-1 content-container'>
          <Outlet />
        </main>
      )}
      {noMainRoutes.includes(location.pathname) && <Outlet />}

      {showFooter() && <Footer/>}
      {/* <MiniPlayer/> */}
      <TabBar className="absolute bottom-0 left-0 w-full pl-0"/>
    </div>
  );
};

export default Layout;
