import React from "react";
import { Route, Routes } from "react-router-dom";
import Detail from "../pages/Detail/Detail";
import Home from "../pages/Home/Home";
import Movies from "../pages/Movies/Movies";

const Router = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path=":category" element={<Movies />} />
        <Route path="search/multi/:query" element={<Movies />} />
        <Route path="discovery/:genres" element={<Movies />} />
        <Route path=":category/:id" element={<Detail />} />
      </Route>
    </Routes>
  );
};

export default Router;
