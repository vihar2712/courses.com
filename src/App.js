import { Outlet, createBrowserRouter } from "react-router-dom";
import Body from "./components/Body";
import About from "./components/About";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import CourseInfo from "./components/CourseInfo";

const App = () => {
  return (
    <Provider store={appStore}>
      <Header />
      <Outlet />
      <Footer />
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
        path: "/about-us",
        element: <About />,
      },
    ],
  },
]);
export default App;
