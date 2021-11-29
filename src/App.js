import React from "react";
import { Routes, Route } from "react-router";

import { Home } from "./pages/Home";
import { Photo } from "./pages/Photo";
import { Franch } from "./pages/Franch";

import { Layout } from "./components/Layout";

export default function App() {
  return (
      <>
      <Routes>
        <Route path = '/' element = {<Layout/>}>
          <Route index element = {<Home/>}/>
          <Route path = 'photo' element = {<Photo/>}/>
          <Route path = 'franch' element = {<Franch/>}/>
        </Route>
      </Routes>
      </>
  );
}

