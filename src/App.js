import React, { lazy, Suspense } from "react";
import NavBar from "./components/Navbar";

import "./App.css";
const NasaPhoto = lazy(() => import("./components/NasaPhoto"));
const renderLoader = () => <p>Loading</p>;

export default function App() {
  return (
    <div className="app">
      <NavBar />
      <Suspense fallback={renderLoader()}>
        <NasaPhoto />
      </Suspense>
    </div>
  );
}
