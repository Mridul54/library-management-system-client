import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../Layout/MainLayOut";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";

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