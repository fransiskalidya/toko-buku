import React, { Component } from "react";
import './Login.css';

export default class Login extends Component {
    render() {
        return (
            <div className="container">
                <div className="col-lg-4"></div>
            <form>
                <h3><b>Login</b></h3>

                <div className="field">
                    <label>Email ID</label>
                    <input type="email" className="form-control" placeholder="Email"/>
                </div>

                <div className="field">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Password"/>
                </div>
    
                <th>
                </th>
                <th></th>
                <div className="container mt-3 center-block">
                <button type="button" className="btn btn-primary center-block">Login</button><th></th>
                    <p className="forgot-password text-right">
                    Data belum pernah terdaftar <a href="#">Register ?</a>
                </p><th></th>
                </div>
            </form>
            </div>
        );
    }
}