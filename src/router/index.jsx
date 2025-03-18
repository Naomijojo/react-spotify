import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import { Home, Album, Playlist, Search, NotFound } from "@/pages";

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
        path:"/album",
        element: < Album />
      },
      {
        path:"/playlist",
        element: <Playlist />
      },
      {
        path:"/search",
        element: <Search />
      },
      {
        path: "*",
        element: <NotFound />
      }  
    ]
  }
])

export default router