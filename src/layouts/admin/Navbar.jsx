import React from "react";
// import Navbar from "./Navbar";
import {Link} from 'react-router-dom';

const Navbar = () =>{
    return(
    //     <nav classNama="sb-topnav navbar navbar-expand navbar-dark bg-dark">
    //     <Link className="navbar-brand ps-3" to="/admin">Start Bootstrap</Link>
    //     <button className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" to="#!"><i className="fa fa-bars"></i></button>
    //     <form className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
    //         <div className="input-group">
    //             <input className="form-control" type="text" placeholder="Search for..." aria-label="Search for..." aria-describedby="btnNavbarSearch" />
    //             <button className="btn btn-primary" id="btnNavbarSearch" type="button"><i className="fa fa-search"></i></button>
    //         </div>
    //     </form>
    //     <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
    //         <li className="nav-item dropdown">
    //             <Link to="#" className="nav-link dropdown-toggle" id="navbarDropdown"  role="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="fa fa-user fa-fw"></i>
    //             </Link>
    //             <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
    //                 <li><Link className="dropdown-item" to="#!">Settings</Link></li>
    //                 <li><Link className="dropdown-item" to="#!">Activity Log</Link></li>
    //                 <li><hr className="dropdown-divider" /></li>
    //                 <li><Link className="dropdown-item" to="#!">Logout</Link></li>
    //             </ul>
    //         </li>
    //     </ul>
    // </nav>

    <nav class="sb-topnav navbar navbar-expand navbar-dark bg-dark">
            <a class="navbar-brand ps-3" href="index.html">BookTown</a>
            <button class="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" href="#!"><i class="fa fa-bars"></i></button>
            <form class="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
                <div class="input-group">
                    <input class="form-control" type="text" placeholder="Search for..." aria-label="Search for..." aria-describedby="btnNavbarSearch" />
                    <button class="btn btn-primary" id="btnNavbarSearch" type="button"><i class="fa fa-search"></i></button>
                </div>
            </form>
            <ul class="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i class="fa fa-user fa-fw"></i></a>
                    <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                        <li><a class="dropdown-item" href="#!">Settings</a></li>
                        <li><a class="dropdown-item" href="#!">Activity Log</a></li>
                        <li><hr class="dropdown-divider" /></li>
                        <li><a class="dropdown-item" href="#!">Logout</a></li>
                    </ul>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;