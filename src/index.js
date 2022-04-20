import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter,Routes,Route,Navigate } from 'react-router-dom';
import {About} from "./routes/About";
import {Home} from "./routes/Home";
import {Users} from "./routes/Users";
import {User} from "./routes/User";
import {Layout} from "./Layout";

ReactDOM.render(
<BrowserRouter>
<Routes>
  <Route path="/" element={<Layout/>}>
  <Route index element={<Home/>}/>
  <Route path="users" element={<Users/>}>
  <Route index element={<div>Seleccione un usuario</div>}/>
  <Route path=":userId" element={<User/>}/>
  </Route>
  <Route path="about" element={<About/>}/>
  <Route path="*" element={<Navigate replace to="/"/>}/>
  </Route>
</Routes>
</BrowserRouter>
,document.getElementById('root'));
