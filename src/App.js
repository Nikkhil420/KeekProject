import React from "react";

import "./Cards.css";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  RouterProvider,
} from "react-router-dom";

import "./App.css";

import "./App.css";

import MainRouter from "./MainRouter/MainRouter";

function App() {
 
  return (
    <div>
      <RouterProvider router={MainRouter} />
    </div>
  );
}

export default App;
