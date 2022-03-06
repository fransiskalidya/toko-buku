import React, { Component } from "react";
import '../frontend/auth/Register.css';

export default class RegisterAdmin extends Component {
    render() {
        return (
            <div className="container">
                <div className="col-lg-4"></div>
                <form>
                    <h3><b>Register Akun</b></h3>

                    <div className="ui divider"></div>
                    <div className="ui form"></div>
                    <div className="field">
                        <label>Nama</label>
                        <input type="text" className="form-control" placeholder="Nama"/>
                    </div>

                    <div className="field">
                        <label>Nomor Telepon</label>
                        <input type="text" className="form-control" placeholder="Nomor Telepon"/>
                    </div>

                    <div className="field">
                        <label>Email</label>
                        <input type="email" className="form-control" placeholder="Email"/>
                    </div>

                    <div className="field">
                        <label>Alamat</label>
                        <input type="text" className="form-control" placeholder="Alamat"/>
                    </div>

                    <div className="field">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Password"/>
                    </div>

                    <div className="field"></div>
                    <label>Role</label>
                    <div className="radio-inline">
                    <label><input type="radio" name="Role" value="admin"/> Admin</label>
                    </div>
                    <div className="radio-inline">
                    <label><input type="radio" name="Role" value="user"/> User</label>
                    </div>
        
                    <th>
                    </th>
                    <th></th>
                    <div className="container mt-3 center-block">
                    <button type="button" className="btn btn-primary center-block">Register</button><th></th>
                        <p className="forgot-password text-right">
                        Data sudah pernah terdaftar <a href="#">Login ?</a>
                    </p><th></th>
                    </div>
                </form>
            </div>
        );
    }
}