import React from "react";
import {Link} from 'react-router-dom';

const Navbar=()=>{
    return(
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container" style={{border:"none"}}>
          <Link className="navbar-brand" to={"/login"}>BookTown</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/logincustomer"}>Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/registercustomer"}>Register</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/keranjang"}>Keranjang</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/checkout"}>Checkout</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/akun"}>Akun</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}

export default Navbar;