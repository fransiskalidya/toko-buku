import React from "react";
import { Link } from 'react-router-dom';
import firebase from "../../../firebase.config";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import logo from '../../../images/ecommerce.svg';
import './navbar.css'
// import { Icon } from 'react-icons-kit'
// import { cart } from 'react-icons-kit/entypo/cart'

import { useHistory } from 'react-router-dom'


const Navbar = ({ user }) => {

  const auth = getAuth();
  const history = useHistory();
  // handle logout
  const handleLogout = () => {
    auth.signOut().then(() => {
      history.push('/logincustomer');
    })
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
      <div className="container" style={{ border: "none" }}>
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
            <li className="nav-item">
              <Link className="nav-link" to={"/login"}>Admin</Link>
            </li>
            <li>
                <span>
                <div className="btn-post">
                  <button className='btn btn-success btn-md mybtn' onClick={handleLogout}>Logout</button>
                </div></span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;