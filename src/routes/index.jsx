import { routes } from "./routes";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../components/home";
import Post from "../components/post";
import Comments from "../components/comments";

const router = createBrowserRouter([
  {
    path: routes.home,
    element: <Home />,
  },
  {
    path: routes.postDetail,
    element: <Post />,
  },
  {
    path: routes.comments,
    element: <Comments />,
  },
]);

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
