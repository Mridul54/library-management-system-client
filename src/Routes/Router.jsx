import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../Layout/MainLayOut";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";
import AddBook from "../pages/AddBook/AddBook";
import AllBooks from "../pages/AllBooks/AllBooks";
import BorrowedBooks from "../pages/BorrowedBooks/BorrowedBooks";
import UpdateBook from "../pages/AllBooks/UpdateBook";

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
          element: <AddBook></AddBook>
        },
        {
          path:'updateBook/:id',
          element: <UpdateBook></UpdateBook>,
          loader: ({params}) => fetch(`http://localhost:5000/book/${params.id}`)
        },
        {
          path: 'allBooks',
          element: <AllBooks></AllBooks>,
          loader: () => fetch('http://localhost:5000/book')
        },
        {
          path: 'borrowedBooks',
          element: <BorrowedBooks></BorrowedBooks>
        },
        {
            path: 'login',
            element: <Login></Login>
        },
        {
          path: 'registration',
          element: <Registration></Registration>
        }
      ]
    },
  ]);

  export default router;