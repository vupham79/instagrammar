import HomePage from "../page/home";
import LoginPage from "../page/login";
import AdminPage from "../page/admin";
import ProfilePage from "../page/profile";
import SignupPage from "../page/signup";

export const Routes = [
  {
    component: HomePage,
    exact: true,
    path: "/"
  },
  {
    component: LoginPage,
    path: "/login"
  },
  {
    component: SignupPage,
    path: "/signup"
  },
  {
    component: AdminPage,
    path: "/admin"
  },
  {
    component: ProfilePage,
    path: "/profile"
  }
];
