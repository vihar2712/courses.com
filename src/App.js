import { Outlet, createBrowserRouter } from "react-router-dom";
import Body from "./components/Body";
import About from "./components/About";
import Header from "./components/Header";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import CourseInfo from "./components/CourseInfo";
import Dashboard from "./components/Dashboard";

const App = () => {
  return (
    <Provider store={appStore}>
      <Header />
      <Outlet />
    </Provider>
  );
};
export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/courses/:id",
        element: <CourseInfo />,
      },
      {
        path: "/user-dashboard",
        element: <Dashboard />,
      },
      {
        path: "/about-us",
        element: <About />,
      },
    ],
  },
]);
export default App;
