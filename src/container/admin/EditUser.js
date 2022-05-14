import React, { Component } from "react";
import './EditUser.css'
import { Link } from 'react-router-dom';
import { toHaveDisplayValue } from "@testing-library/jest-dom/dist/matchers";

class DataUser extends Component {


    render() {
        return (

            <div className="card mb-4">

                {/* input data */}
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-5">
                            <div className="card shadow-lg border-0 rounded-lg mt-5">
                                <div className="card-header"><h3 className="text-center font-weight-light my-4">Edit Data User</h3></div>
                                <img src="https://media.istockphoto.com/vectors/business-people-deskvector-illustration-cartoon-character-vector-id824226934?k=20&m=824226934&s=170667a&w=0&h=nUMxhCxuctfHMVSK4TlL5N2azPT7M9ENxz2sRP4c6NY=" class="card-img-top" alt="bookStore"></img>
                                <div className="card-body">


                                    <form>
                                        <b><label htmlFor="gambar" form="gambar">Foto User</label></b><br></br><br></br>
                                        <div className="col-md-12 mb-3">
                                            <input type="file" className="form-control" id="gambar" name="gambar" placeholder="Link Gambar" onChange={this.handleAddBuku} />
                                        </div>
                                        <br></br>
                                        <div className="form-floating mb-3">
                                            <input className="form-control" id="id" name="id" placeholder="Nama User" />
                                            <label htmlFor="nama" form="nama">Nama</label>
                                        </div>
                                        <div className="form-floating mb-3">
                                            <input type="text" className="form-control" id="nomor_telp" name="nomor_telp" placeholder="Nomor Telepon" />
                                            <label htmlFor="nomor_telp" form="nomor_telp">Nomor Telepon</label>
                                        </div>
                                        <div className="form-floating mb-3">
                                            <input type="text" className="form-control" id="email" name="email" placeholder="E-mail" />
                                            <label htmlFor="email" form="email">E-mail</label>
                                        </div>
                                        <div className="form-floating mb-3">
                                            <input type="text" className="form-control" id="password" name="password" placeholder="password" />
                                            <label htmlFor="password" form="password">Password</label>
                                        </div>
                                        <div className="form-floating mb-3">
                                            <input type="textarea" className="form-control" id="alamat" name="alamat" placeholder="alamat" />
                                            <label htmlFor="alamat" form="alamat">Alamat</label>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between mt-4 mb-0">
                                            <Link className="nav-link" to="/admin/DataUser">
                                                <div id="button">
                                               <a> <button type="submit" className="btn btn-success center-block" onClick={this.handleSaveButton} align="right">Submit </button> </a> 
                                               <a> <button type="submit" className="btn btn-warning center-block" onClick={this.handleSaveButton} align="left"> Cancel</button> </a> 
                                                </div>                                          
                                            </Link>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <br />
                <br />
            </div>

        );
    };
}
export default DataUser;