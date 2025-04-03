import { Outlet, useLocation } from 'react-router-dom'
import Header from "./Header"
import Footer from "./Footer"
import SearchHeader from './SearchHeader';
import PlayListHeader from './PlayListHeader';
import MiniPlayer from './MiniPlayer';

const Layout = () => {
  const location = useLocation() 

  const getHeader = () => {
    if (location.pathname === '/search') {
      return <SearchHeader />
    }
    if (location.pathname === '/playlist'){
      return <PlayListHeader />
    }
    if (location.pathname === '/search/recent'){
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
      <main className='flex-1 content-container'>
        <Outlet />
      </main>

      {showFooter() && <Footer />}
      <MiniPlayer/>
    </div>
  );
};

export default Layout;
