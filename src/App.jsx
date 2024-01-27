// import { useState } from 'react'
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

  const Layout = () => {
    return (
      <div id='theme' className='light'>
        <div className="main">
          <Sidebar />
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
