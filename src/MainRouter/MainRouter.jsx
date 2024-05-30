import { createBrowserRouter } from "react-router-dom";
import Home from '../components/home/Home'
// import Manage from '../components/manage/Manage'
// import Header from "../Header/Header";
import Testing from "../Header/Components/Testing/Testing";

const MainRouter = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    
      children: [{
        path: "/",
        element:<Home/>
      },
      {
        path: "/settings",
        element:<Testing/>  
      }

      ],
    },
  ]);
  export default MainRouter;