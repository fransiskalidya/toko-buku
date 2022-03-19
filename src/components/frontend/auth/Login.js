import React, { Component } from "react";
import './Login.css';
// import {Link} from 'react-router-dom';
import Navbar from "./Navbar";
export default class Login extends Component {
    render() {
        return (
            <div>
            <Navbar />
            <div className="containerLogin">
                <div className="col-lg-2"></div>
                <form>
                    <div className="title">
                        <h3><b>Login</b></h3><br></br>
                    </div>
                    <div className="field">
                        <label>Email ID</label><br></br><br></br>
                        <input type="email" className="form-control" placeholder="Email" />
                    </div>

                    <div className="field">
                        <label>Password</label><br></br><br></br>
                        <input type="password" className="form-control" placeholder="Password" />
                    </div>

                    <br>
                    </br>
                    <div className="view">
                        <div className="container mt-3 center-block">
                            <div className="btn1">
                                <button type="button" className="btn btn-primary center-block">Login</button></div>
                            <br></br>
                            <p className="forgot-password text-right">
                                Data belum pernah terdaftar <a href="#">Register ?</a>
                            </p>
                        </div>
                    </div>
                </form>
            </div>
            </div>

        );
    }
}