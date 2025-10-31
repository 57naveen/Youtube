import "./App.css";
import Head from "./components/Head";
import Body from "./components/Body";
import { Provider } from "react-redux";
import AppStore from "./utils/store";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import SearchedResults from "./components/SearchedResults";

function App() {

  const AppRouter = createBrowserRouter([{
    path:"/",
    element: <Body/>,
    children:[
      {
        path:"/",
        element:<MainContainer/>
      },
       {
        path:"watch",
        element:<WatchPage/>
      },
      {
        path:"/search/:query",
        element:<SearchedResults/>
      }
    ]

  }])

  return (
    <>
      <Provider store={AppStore}>
        {/* <Head /> */}
         <RouterProvider router={AppRouter} />
      </Provider> 
    </>
  );
}

export default App;
