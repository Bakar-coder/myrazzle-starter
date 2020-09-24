import App from "./App";
import Home from "./Pages/Home";
import SignIn from "./Pages/auth/Signin";
import SignUp from "./Pages/auth/Signup";
import PageNotFound from "./Pages/404";

export default [
  {
    ...App,
    routes: [
      { ...Home, path: "/", exact: true },
      { ...SignIn, path: "/signin", exact: true },
      { ...SignUp, path: "/register", exact: true },
      { ...PageNotFound },
    ],
  },
];
