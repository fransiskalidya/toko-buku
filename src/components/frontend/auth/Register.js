import React, { Component } from "react";
import './Register.css';
import Navbar from "./Navbar";

export default class Register extends Component {
    render() {
        return (
            <div>
            <Navbar />
            <div className="containerRegister">
                <div className="col-lg-2"></div>
                <form>
                    <div className="titleText">
                        <h3><b>Register Akun</b></h3><br></br>
                    </div>
                    <div className="ui divider"></div>
                    <div className="ui form"></div>
                    <div className="fieldRegister">
                        <label>Nama</label><br></br><br></br>
                        <input type="text" className="form-control" placeholder="Nama" />
                    </div>

                    <div className="fieldRegister">
                        <label>Nomor Telepon</label><br></br><br></br>
                        <input type="text" className="form-control" placeholder="Nomor Telepon" />
                    </div>

                    <div className="fieldRegister">
                        <label>Email</label><br></br><br></br>
                        <input type="email" className="form-control" placeholder="Email" />
                    </div>

                    <div className="fieldRegister">
                        <label>Alamat</label><br></br><br></br>
                        <input type="text" className="form-control" placeholder="Alamat" />
                    </div>

                    <div className="fieldRegister">
                        <label>Password</label><br></br><br></br>
                        <input type="password" className="form-control" placeholder="Password" />
                    </div>

                    {/* <div className="fieldRegister"></div>
                    <label>Role</label>
                    <div className="radio-inline">
                    <label><input type="radio" name="Role" value="admin"/> Admin</label>
                    </div>
                    <div className="radio-inline">
                    <label><input type="radio" name="Role" value="user"/> User</label>
                    </div>
         */}
                    <br></br>


                    <div className="container mt-3 center-block">
                        <div className="btn">
                            <button type="button" className="btn btn-primary center-block">Register</button></div>
                        <br></br>
                        <p className="forgot-password text-right">
                            Data sudah pernah terdaftar <a href="/login">Login ?</a>
                        </p>
                    </div>
                </form>
            </div>

            </div>
        );
    }
}