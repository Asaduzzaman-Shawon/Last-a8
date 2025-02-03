import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
 
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
 
import Layout from './components/layout/Layout';
import Home from './components/home/Home';
import Statistic from './statistic/Statistic';
import Detail from './components/detail/Detail';
import Dashboard from './components/dashboard/Dashboard';
import Wishlist from './components/wishlist/Wishlist';
import Cart from './components/cart/Cart';



const handleAdd = () => {
 
}
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "statistic",
        element: <Statistic></Statistic>
      },
      {
        path: "dashboard",
        element: <Dashboard handleAdd={handleAdd} ></Dashboard>,
        children: [
        
          {
            path: "wishlist",
            element: <Wishlist></Wishlist>
          },
          {
            path: "cart",
            element: <Cart></Cart>
          },
        
        ]
      },
      
      {
        path: "/gadget/:gadgetId",
        loader: () => fetch('/public/data.json'),
        element: <Detail handleAdd={handleAdd}></Detail>
      },
      
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
        <RouterProvider router={router} />

  </StrictMode>,
)
