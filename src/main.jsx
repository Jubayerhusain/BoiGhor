import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from './componants/Layout/Layout';
import Erorr from './componants/ErrorHundle/Error';
import Home from './componants/Home/Home';
import BookDetail from './componants/BookDetails/BookDetail';
import ListedBooks from './componants/ListedBooks/ListedBooks';
import PageToRead from './componants/PageToRead/PageToRead';
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
        path:"/",
        element: <Home></Home>,
      },
      {
        path:"/listedBooks",
        element: <ListedBooks></ListedBooks>,
      },
      {
        path:"/pagesToRead",
        element: <PageToRead></PageToRead>,
      },
      {
        path:"/book/:bookId",
        element: <BookDetail></BookDetail>,
        loader:()=> fetch(`/booksData.json`),
      }
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
