import * as helper from "./helper/helper"
import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects';
import Error from './pages/Error/Error';
import Theme from "./pages/Theme/Theme";
import './App.css';
import './icons/remixicon.css';
import key from './key/key.json';
import projects from './key/projects.json';

var theme = helper.theme(key.theme);
var themeCheck = localStorage.getItem("home-theme");
const root = ReactDOM.createRoot(document.getElementById('root'));


if(themeCheck !== "undecided"){






root.render(
  <React.StrictMode>
<BrowserRouter>
  <Routes>
  <Route path="/home" element={<Home  />} />
  <Route path="/home/projects" element={<Projects />} />
  <Route path="/home/theme" element={<Theme />} />
  <Route path="/home/*" element={<Error />} />
  </Routes>
</BrowserRouter>
  </React.StrictMode>

);

}


else{
  root.render(
    <React.StrictMode>
  <BrowserRouter>
    <Routes>
    <Route path="/home" element={<Theme  />} />
    </Routes>
  </BrowserRouter>
    </React.StrictMode>
  
  );
}




  











