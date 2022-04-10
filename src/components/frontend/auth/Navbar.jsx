import React from "react";
import {Link} from 'react-router-dom';

const Navbar=()=>{
    return(
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
                <Link className="nav-link" to={"/keranjang"}>Keranjang</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/checkout"}>Checkout</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='#'>Akun</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}

export default Navbar;