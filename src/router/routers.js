import Login from "../pages/login";
import home from "../pages/home";

const publicRoutes = [
  { path: "/", component: home },
  { path: "/login", component: Login },
];

//Đăng nhập mới vào được không thì sẽ chuyển tới trang đăng nhập
const privateRoutes = [];

export { publicRoutes, privateRoutes };