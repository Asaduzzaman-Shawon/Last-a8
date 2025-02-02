import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
 
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
 
import Layout from './components/layout/Layout';
import Home from './components/home/Home';
import Statistic from './statistic/Statistic';
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
      }
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
        <RouterProvider router={router} />

  </StrictMode>,
)
