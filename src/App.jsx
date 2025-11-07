import React from "react";
import Header from "./components/Header";
import "./App.css"; // optional global styles
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Organisation from "./pages/Organisation";
import { Routes, Route, Outlet } from "react-router-dom";
const Layout = () => (
  <>
    <Header />
    <main style={{ minHeight: "60vh" }}>
      <Outlet />
    </main>
    <Footer />
  </>
);

const NotFound = () => <div style={{ padding: 24 }}>Page not found.</div>;

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="Ara-Tech/" element={<Home />} />
        <Route path="Ara-Tech/organisation" element={<Organisation/>} />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;