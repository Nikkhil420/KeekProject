<<<<<<< HEAD
import logo from './logo.svg';
import './App.css';
import Setss from './settings/setting';


=======
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
>>>>>>> origin/main

function App() {
 
  return (
<<<<<<< HEAD
    <div className="setcolor">

    <Setss/>
=======
    <div>
      <RouterProvider router={MainRouter} />
>>>>>>> origin/main
    </div>
  );
}

export default App;
