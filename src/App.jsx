import "./App.scss";
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

//importing components
import Header from "./components/header/Header";
import VideosPage from "./pages/videos-page/VideosPage";
import UploadPage from "./pages/upload-page/UploadPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<VideosPage />} />
        <Route path="/videos">
          <Route index element={<VideosPage />} />
          <Route path=":videoID" element={<VideosPage />} />
        </Route>
        <Route path="/upload" element={<UploadPage />} />
      </Routes>
    </>
  );
}

export default App;
