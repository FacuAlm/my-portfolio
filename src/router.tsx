import { createBrowserRouter } from "react-router-dom";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <About />,
  },
  {
    path: "/proyectos",
    element: <Portfolio />,
  },
]);

export default Router;
