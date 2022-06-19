import React from "react";
// import Navbar from "./Navbar";
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
            <div className="sb-sidenav-menu">
                <div className="nav">
                    <div className="sb-sidenav-menu-heading">Menu Utama</div>
                    <Link className="nav-link" to="/admin/dashboard">
                        <div className="sb-nav-link-icon"><i className="fa fa-tachometer-alt"></i></div>
                        Dashboard
                    </Link>
                    <div className="sb-sidenav-menu-heading">Menu Admin</div>
                    <Link className="nav-link collapsed" to="/admin/DaftarBuku" data-bs-toggle="collapse" data-bs-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                        <div className="sb-nav-link-icon"><i className="fa fa-columns"></i></div>
                        Olah Data
                        <div className="sb-sidenav-collapse-arrow"><i className="fa fa-angle-down"></i></div>
                    </Link>
                    <div className="collapse" id="collapseLayouts" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                        <nav className="sb-sidenav-menu-nested nav">
                            <Link className="nav-link" to="/admin/DaftarBuku">Daftar Buku</Link>
                            <Link className="nav-link" to="/admin/kategori">Kategori Buku</Link>
                            <Link className="nav-link" to="/admin/datauser/DataUser">Data User</Link>
                        </nav>
                    </div>
                    <div className="sb-sidenav-menu-heading">Autentikasi</div>
                    {/* <Link className="nav-link collapsed" to="/admin/kategori" data-bs-toggle="collapse" data-bs-target="#collapsePages" aria-expanded="false" aria-controls="collapsePages">
                    <div className="sb-nav-link-icon"><i className="fa fa-book-open"></i></div>
                    Autentikasi User
                    <div className="sb-sidenav-collapse-arrow"><i className="fa fa-angle-down"></i></div>
                </Link>
                <div className="collapse" id="collapsePages" aria-labelledby="headingTwo" data-bs-parent="#sidenavAccordion">
                    <nav className="sb-sidenav-menu-nested nav accordion" id="sidenavAccordionPages"> */}
                    <Link className="nav-link collapsed" to="#" data-bs-toggle="collapse" data-bs-target="#pagesCollapseAuth" aria-expanded="false" aria-controls="pagesCollapseAuth">
                        <div className="sb-nav-link-icon"><i className="fa fa-book-open"></i></div>
                        Autentikasi User
                        <div className="sb-sidenav-collapse-arrow"><i className="fa fa-angle-down"></i></div>
                    </Link>
                    <div className="collapse" id="pagesCollapseAuth" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordionPages">
                        <nav className="sb-sidenav-menu-nested nav">
                            <Link className="nav-link" to="/admin/auth/Login">Login</Link>
                            <Link className="nav-link" to="/admin/auth/Register">Register</Link>
                            {/* <Link className="nav-link" to="password.html">Forgot Password</Link> */}
                        </nav>
                    </div>
                    {/* <Link className="nav-link collapsed" to="#" data-bs-toggle="collapse" data-bs-target="#pagesCollapseError" aria-expanded="false" aria-controls="pagesCollapseError">
                            Error
                            <div className="sb-sidenav-collapse-arrow"><i className="fa fa-angle-down"></i></div>
                        </Link> */}
                    <div className="collapse" id="pagesCollapseError" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordionPages">
                        <nav className="sb-sidenav-menu-nested nav">
                            {/* <Link className="nav-link" to="401.html">401 Page</Link>
                                <Link className="nav-link" to="404.html">404 Page</Link>
                                <Link className="nav-link" to="500.html">500 Page</Link> */}
                        </nav>
                    </div>


                    <div className="sb-sidenav-menu-heading">Transaksi</div>
                    <Link className="nav-link" to="/admin/invoice">
                        <div className="sb-nav-link-icon"><i className="fa fa-chart-area"></i></div>
                        List Order Customers
                    </Link>
                    {/* <Link className="nav-link" to="tables.html">
                    <div className="sb-nav-link-icon"><i className="fa fa-table"></i></div>
                    Tables
                </Link> */}
                </div>
                <br></br><br></br>
                <br></br><br></br>
                <br></br> <br></br>
                <br></br> <br></br>
                
                <div className="sb-sidenav-footer">
                    <div className="small">Logged in as:</div>
                    BookTown
                </div>
            </div>
        </nav>
    )
}

export default Sidebar;