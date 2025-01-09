import { createBrowserRouter } from "react-router-dom";
import App from "../App";

import Login from "../pages/Login";
import Register from "../pages/Register";
import { adminPaths } from "./admin.routes";
import { routeGEnerator } from "../utils/routesGenerator";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/admin",
    element: <App />,
    children: routeGEnerator(adminPaths),
  },
  {
    path: "/faculty",
    element: <App />,
    children: routeGEnerator(adminPaths),
  },
  {
    path: "/student",
    element: <App />,
    children: routeGEnerator(adminPaths),
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default router;
// testing
// test
// ...
// ....
// ...
// ...
// ...
// ...
// ...
// ...
// ...
// ...
// ...