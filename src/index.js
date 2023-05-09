import * as helper from "./helper/helper"
import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects';
import Error from './pages/Error/Error';
import Theme from "./pages/Theme/Theme";
import './css/fontSize.css';
import './css/index.css';
import './css/margin.css';
import './css/padding.css';
import './css/containerU.css';
import './css/flexU.css';

import './icons/remixicon.css';
import key from './key/key.json';


var url = helper.pathUrl();
var theme = helper.theme(key.theme);
var themeCheck = localStorage.getItem("home-theme");
const root = ReactDOM.createRoot(document.getElementById('root'));


if(themeCheck !== "undecided"){

root.render(
  <React.StrictMode>
<BrowserRouter>
  <Routes>
  <Route path={url} element={<Home pathUrl={url}  />} />
  <Route path={url + "projects"} element={<Projects />} />
  <Route path={url + "*"}element={<Error />} />
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
    <Route path={url} element={<Theme  />} />
    </Routes>
  </BrowserRouter>
    </React.StrictMode>
  
  );
}




  











