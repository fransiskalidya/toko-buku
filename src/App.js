import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./components/frontend/auth/Login";
import Register from "./components/frontend/auth/Register";
import RegisterAdmin from "./components/admin/RegisterAdmin";
<<<<<<< HEAD
import Kategori from "./container/admin/Kategori";
=======
import DaftarBuku from './container/Buku/DaftarBuku';
>>>>>>> 9ea9fb96af4544396275b5cbd3f2dfd5b48c3822


function App() {
  return (<Router>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/login"}>BookTown</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/login"}>Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/register"}>Register</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/admin/daftarBuku"}>List Buku</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

          <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/admin/register" component={RegisterAdmin} />
<<<<<<< HEAD
            <Route path="/admin/kategori" component={Kategori} />
          </Switch>
        </div>
      </div>
    </div></Router>
=======
            <Route path="/admin/daftarBuku" component={DaftarBuku} />
          </Switch>   
     </Router>
>>>>>>> 9ea9fb96af4544396275b5cbd3f2dfd5b48c3822
  );
}

export default App;