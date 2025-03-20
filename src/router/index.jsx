import { createBrowserRouter } from "react-router-dom";
// import Layout from "@/components/Layout";
import { Home,  } from "@/pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    // children: [
    //   { 
    //     path: "/",
    //     element: < Home /> 
    //   },
    //   {
    //     path:"/search",
    //     element: < Search />
    //   },
    //   {
    //     path:"/playlist",
    //     element: < Playlist />
    //   },
    //   {
    //     path: "*",
    //     element: < NotFound />
    //   }  
    // ]
  }
])

export default router