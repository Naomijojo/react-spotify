import { Outlet } from 'react-router-dom'
// import { Outlet, useLocation } from 'react-router-dom'
import Header from "./Header"
import Footer from "./Footer"
// import SearchHeader from './SearchHeader';

const Layout = () => {
  // const location = useLocation() 

  // const getHeader = () => {
  //   if (location.pathname.startsWith('/search')) {
  //     return <SearchHeader />;
  //   }
  //   return <Header />;
  // }
  
  return (
    <div className="flex flex-col min-h-screen">
     <Header />
      
      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
