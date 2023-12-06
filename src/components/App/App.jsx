import React from "react";
import { Route, Routes } from "react-router-dom";
import SharedLayout from "../SharedLayout";
import Home from "../../pages/Home";
import Catalog from "../../pages/Catalog";
import Favorite from "../../pages/Favorite";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/favorites" element={<Favorite />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
