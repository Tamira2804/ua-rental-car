import React from "react";
import { Route, Routes } from "react-router-dom";
import SharedLayout from "../SharedLayout";
import Home from "../../pages/Home";
import Catalog from "../../pages/Catalog";
import Favorite from "../../pages/Favorite";
import CarItem from "../CarItem";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/caritem" element={<CarItem />} />
          <Route path="/favorites" element={<Favorite />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
