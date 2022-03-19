import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./components/frontend/auth/Login";
import Register from "./components/frontend/auth/Register";
import RegisterAdmin from "./components/admin/RegisterAdmin";
import DaftarBuku from './container/Buku/DaftarBuku';
import Kategori from './container/admin/Kategori';
// import MasterLayout from './layouts/admin/MasterLayout';


function App() {
  return (<Router>
      

          <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
<<<<<<< HEAD
            {/* <Route path="/admin/register" component={RegisterAdmin} /> */}
            {/* <Route path="/admin/daftarBuku" component={DaftarBuku} />
            <Route path="/admin/kategori" component={Kategori} /> */}
            <Route path="/admin" name="Admin" render={(props)=> <MasterLayout {...props} />} />

=======
            <Route path="/admin/register" component={RegisterAdmin} />
            <Route path="/admin/daftarBuku" component={DaftarBuku} />
            <Route path="/admin/kategori" component={Kategori} />
            {/* <Route path="/admin/dashboard" component={MasterLayout} /> */}
>>>>>>> f9c1df9ba9defaed563662cec6d6b30a0dbbd48d
          </Switch>   
     </Router>
  );
}

export default App;