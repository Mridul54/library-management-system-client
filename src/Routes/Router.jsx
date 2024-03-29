import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../Layout/MainLayOut";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";
import AddBook from "../pages/AddBook/AddBook";
import AllBooks from "../pages/AllBooks/AllBooks";
import BorrowedBooks from "../pages/BorrowedBooks/BorrowedBooks";
import UpdateBook from "../pages/AllBooks/UpdateBook";
import Books from "../pages/Books/Books";
import Details from "../pages/Books/Details";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayOut></MainLayOut>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: 'addBook',
          element: <PrivateRoute><AddBook></AddBook></PrivateRoute>
        },
        {
          path:'updateBook/:id',
          element: <UpdateBook></UpdateBook>,
          loader: ({params}) => fetch(`https://library-management-system-server-6appjq3so-mridul544564.vercel.app/book/${params.id}`)
        },
        {
          path: 'allBooks',
          element: <PrivateRoute><AllBooks></AllBooks></PrivateRoute>,
          loader: () => fetch('https://library-management-system-server-6appjq3so-mridul544564.vercel.app/book')
        },
        {
          path: 'borrowedBooks',
          element: <PrivateRoute><BorrowedBooks></BorrowedBooks></PrivateRoute>
        },
        {
            path: 'login',
            element: <Login></Login>
        },
        {
          path: 'registration',
          element: <Registration></Registration>
        },
        {
          path:'/book-category/:category_name',
          element: <PrivateRoute><Books></Books></PrivateRoute>,
          loader: ({params}) => fetch(`https://library-management-system-server-6appjq3so-mridul544564.vercel.app/book/${params.category_name}`)
        },
        {
          path: '/details/:id',
          element:<PrivateRoute><Details></Details></PrivateRoute>,
          loader: ({params})=> fetch(`https://library-management-system-server-6appjq3so-mridul544564.vercel.app/book/Science-fiction/${params.id}`)
        }
      ]
    },
  ]);

  export default router;