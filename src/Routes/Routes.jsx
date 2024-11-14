import { createBrowserRouter } from "react-router-dom";
import Homelayout from "../Layouts/Homelayout";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Homelayout></Homelayout>,
    },
  ]);


  export default router;