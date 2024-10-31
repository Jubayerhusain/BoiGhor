import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from './componants/Layout/Layout';
import Erorr from './componants/ErrorHundle/Error';
import Home from './componants/Home/Home';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Erorr></Erorr>,
    element: <Layout></Layout>,
    children:[
      {
        path: "/",
        element: <Home></Home>,
      }
    ]

  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
