import { createBrowserRouter } from "react-router-dom";
import Layout from "@/components/Layout";
import { Home, Search, SearchRecent, PlayLists, Premium, NotFound, Recommend, Playing } from "@/pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { 
        path: "/",
        element: <Home /> 
      },
      {
        path:"/search",
        element: <Search />
      },
      {
        path:"/search/recent",
        element: <SearchRecent />
      },
      {
        path:"/playlist",
        element: <PlayLists />
      },
      {
        path:"/songType/recommend",
        element: <Recommend />
      },
      {
        path:"/playing",
        element: <Playing />
      },
      {
        path:"/login",
        element: <Login />
      },
      {
        path:"/premium",
        element: <Premium />
      },
      {
        path: "*",
        element: <NotFound />
      }  
    ]
  }
])

export default router