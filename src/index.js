import * as helper from "./helper/helper"
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  BrowserRouter,
  HashRouter,
  Route,
  Router,
  Routes,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects';
import Error from './pages/Error/Error';
import './App.css';
import './icons/remixicon.css';
import key from './key/key.json';
import projects from './key/projects.json';



 var theme = helper.theme(key.theme);
var url = window.location.hostname;




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<BrowserRouter>
  <Routes>
  <Route path="/home" element={<Home  />} />
  <Route path="/projects" element={<Projects />} />
  <Route path="/*" element={<Error />} />
  </Routes>
</BrowserRouter>
  </React.StrictMode>
);



  











