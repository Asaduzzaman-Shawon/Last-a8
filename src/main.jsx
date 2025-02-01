import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
 
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
 
import Layout from './components/layout/Layout';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "home",
        
      }
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
        <RouterProvider router={router} />

  </StrictMode>,
)
