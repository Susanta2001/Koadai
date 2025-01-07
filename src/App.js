import "./App.css";
import "./assets/css/responsiveness/response.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Services from "./components/services/ServicePage";
import Contact from "./components/Contact/Contact";
import NewYearPage from "./components/Modals/NewYearPage";
import Teams from "./components/About/Teams";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <Home />
          <Footer />
        </>
      ),
    },
    {
      path: "/about",
      element: (
        <>
          <Navbar />
          <About />
          <Footer />
        </>
      ),
    },
    {
      path: "/services",
      element: (
        <>
          <Navbar />
          <Services />
          <Footer />
        </>
      ),
    },
    {
      path: "/contact",
      element: (
        <>
          {/* <Navbar/> */}
          <Contact />
          <Footer />
        </>
      ),
    },
    {
      path: "/test-page",
      element: (
        <>
          <Teams/>
        </>
      )
    }
  ]);
  return (
    <>
    <NewYearPage/>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
