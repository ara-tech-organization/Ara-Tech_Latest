import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import "./App.css";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Organisation from "./pages/Organisation";
import { Routes, Route, Outlet } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Loader from "./components/Loader/Loader";
import BirdCursor from "./components/BirdCursor";
import Works from "./pages/Works";
import favicon from "./assets/favicon.webp";
// AOS imports
import AOS from "aos";
import "aos/dist/aos.css";
import ScrollToTop from "./components/ScrollToTop";

const Layout = () => {
  const [initialLoad, setInitialLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setInitialLoad(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
  const link = document.querySelector("link[rel~='icon']");
  if (link) {
    link.href = favicon;
  }
  return (
    <>
      {initialLoad && <Loader />}

      <div aria-hidden={initialLoad}>
        <BirdCursor />
        <Header />

        <main style={{ minHeight: "60vh" }}>
          <Outlet context={{ initialLoad }} />
        </main>


        <Footer />
      </div>
    </>
  );
};

const NotFound = () => <div style={{ padding: 24 }}>Page not found.</div>;

function App() {
  // Init AOS globally *once*
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out",
      once: true,
      offset: 80,
    });
  }, []);

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="Ara-Tech/" element={<Home />} />
          <Route path="Ara-Tech/organisation" element={<Organisation />} />
          <Route path="Ara-Tech/about" element={<About />} />
          <Route path="Ara-Tech/works" element={<Works />} />

          <Route path="Ara-Tech/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
