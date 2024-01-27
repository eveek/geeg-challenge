import { useState } from 'react'
import Home from './pages/Home/Home'
import User from './pages/User/User';
import Product from './pages/Product/Product';
import Header from './components/Header/Header';
// import Footer from './components/Footer/Footer';
import Sidebar from './components/SideBar/Sidebar';
import './styles/global.scss';

import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";

function App() {
  const [theme, updateTheme] = useState('light')


  const Layout = () => {
    return (
      <div id='theme' className={theme}>
        <div className="main">
          <Sidebar theme={theme} updateTheme={updateTheme} />
          <div className="container">
            <Header />
            <div className="pages">
            <Outlet />
            </div>
            {/* <Footer /> */}
          </div>
        </div>
      </div>
    )
  }

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
        path: "/user",
        element: <User />
      },
      {
        path: "/product",
        element: <Product />
      },
    ]
  },
]);

  return (
    <RouterProvider router={router}/>
  )
}

export default App
