import React, { Component } from "react";
// import './EditUser.css'
import { Link } from 'react-router-dom';
import { toHaveDisplayValue } from "@testing-library/jest-dom/dist/matchers";

class Editbuku extends Component {


    render() {
        return (

            <div className="card mb-4">

                {/* input data */}
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-5">
                            <div className="card shadow-lg border-0 rounded-lg mt-5">
                                <div className="card-header"><h3 className="text-center font-weight-light my-4">Edit Data Buku</h3></div>
                                <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fakupintar.id%2Funiversitas%2F-%2Fkampus%2Fdetail-kampus%2Fpoliteknik-negeri-malang-polinema%2Fprofil&psig=AOvVaw0_AgL_uObZGMjbaTQYpr5M&ust=1653534372127000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCPCS_9nV-fcCFQAAAAAdAAAAABAD" class="card-img-top" alt="bookStore"></img>
                                <div className="card-body">


                                    <form>
                                        <b><label htmlFor="gambar" form="gambar">Gambar Buku</label></b><br></br><br></br>
                                        <div className="col-md-12 mb-3">
                                            <input type="file" className="form-control" id="gambar" name="gambar" placeholder="Link Gambar" onChange={this.handleAddBuku} />
                                        </div>
                                        <br></br>
                                        <div className="form-floating mb-3">
                                            <input placeholder="Link Gambar" onChange={this.handleAddBuku} className="form-control" id="gambar" name="id" />
                                            <label htmlFor="gambar">ID</label>
                                        </div>
                                        <div className="form-floating mb-3">
                                            <input className="form-control" id="kategori_buku" name="nama_kategori" type="text" placeholder="Kategori Buku" onChange={this.handleAddBuku} />
                                            <label htmlFor="nama_buku" >Kategori</label>
                                        </div>
                                        <div className="form-floating mb-3">
                                            <input className="form-control" type="text" id="harga" name="harga" placeholder="Harga Buku" onChange={this.handleAddBuku} />
                                            <label htmlFor="harga" >Harga</label>
                                        </div>
                                        <div className="form-floating mb-3">
                                            <input className="form-control" type="text" id="stok" name="stok" placeholder="Stok Buku" onChange={this.handleAddBuku} />
                                            <label htmlFor="stok" >Stok</label>
                                        </div>
                                        <div className="form-floating mb-3">
                                            <input className="form-control" type="text" id="pengarang" name="pengarang" placeholder="Pengarang" onChange={this.handleAddBuku} />
                                            <label htmlFor="pengarang" >Pengarang</label>
                                        </div>
                                        <div className="form-floating mb-3">
                                            <input className="form-control" type="text" id="penerbit" name="penerbit" placeholder="Penerbit" onChange={this.handleAddBuku} />
                                            <label htmlFor="penerbit" >Penerbit</label>
                                        </div>
                                        <div className="form-floating mb-3">
                                            <textarea className="form-control" type="text" id="deskripsi" name="deskripsi" placeholder="Deskripsi Buku" onChange={this.handleAddBuku} />
                                            <label htmlFor="deskripsi">Deskripsi</label>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between mt-4 mb-0">
                                            <Link className="nav-link" to="/admin/DaftarBuku">
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
export default Editbuku;