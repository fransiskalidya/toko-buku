import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./components/frontend/auth/Login";
import Register from "./components/frontend/auth/Register";
import RegisterAdmin from "./components/admin/RegisterAdmin";
import DaftarBuku from './container/Buku/DaftarBuku';
import Kategori from './container/admin/Kategori';
import Index from './container/endUser/Index';
import Keranjang from './container/endUser/Keranjang';

import MasterLayout from './layouts/admin/MasterLayout';
import Dashboard from "./container/admin/Dashboard";
import Checkout from './container/Checkout/Checkout';
import Akun from './container/akun/Akun';
// import MasterCust from './layouts/frontend/Master';

function App() {
  return (<Router>
      

          <Switch>
            <Route exact path='/' component={Index} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/keranjang" component={Keranjang} />
            <Route path="/checkout" component={Checkout} />
            <Route path="/akun" component={Akun} />


            {/* <Route path="/product" component={Content} /> */}
            {/* <Route path="/admin/register" component={RegisterAdmin} /> */}
            {/* <Route path="/admin/daftarBuku" component={DaftarBuku} />
            <Route path="/admin/kategori" component={Kategori} /> */}
            <Route path="/admin" name="Admin" render={(props)=> <MasterLayout {...props} />} />
            {/* <Route path="/cust" name="Cust" render={(props)=> <MasterCust {...props} />} /> */}

          </Switch>   
     </Router>
  );
}

export default App;