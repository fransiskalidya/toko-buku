import React, { Component } from "react";
import './DataUser.css'
import User from '../../components/admin/User';
import {Link} from 'react-router-dom';
import { toHaveDisplayValue } from "@testing-library/jest-dom/dist/matchers";


class DataUser extends Component {
    state = {
        listUser: [],
        insertUser: {
            id: 1,
            gambar: "",
            nama: "",
            nomor_telp: "",
            email: "",
            password: "",
            alamat: ""
        }
    }

    ambilDataDariServerAPI = () => {
        fetch('http://localhost:3004/user')  // alamat URL API yang ingin kita ambil datanya
            .then(response => response.json())  // ubah response data dari URL API menjadi sebuah data json
            .then(jsonHasilAmbilDariAPI => {    // data json hasil ambil dari API kita masukkan ke dalam listUserpada state 
                this.setState({
                    listUser: jsonHasilAmbilDariAPI
                })
            })
    }

    componentDidMount() {
        this.ambilDataDariServerAPI()

    }

    handleHapusUser = (data) => {
        fetch(`http://localhost:3004/user/${data}`, { method: 'DELETE' })  // alamat URL API yang ingin kita HAPUS datanya
            .then(res => {      // ketika proses hapus berhasil, maka ambil data dari server API lokal 
                this.ambilDataDariServerAPI()
            })
    }

    handleAddUser = (event) => {      // fungsi untuk meng-handle form tambah data User
        let formInsertUser = { ...this.state.insertUser };
        let timestamp = new Date().getTime();                        // digunakan untuk menyimpan waktu (sebagai ID User)
        formInsertUser['id'] = timestamp;
        formInsertUser[event.target.name] = event.target.value;      // menyimpan data onchange ke formInsertUsersesuai dengan target yang diisi
        this.setState({
            insertUser: formInsertUser
        });
    }

    handleSaveButton = () => {        // fungsi untuk meng-handle tombol simpan
        fetch('http://localhost:3004/user', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'

            },
            body: JSON.stringify(this.state.insertUser)      // kirimkan ke body request untuk data Useryang akan ditambahkan (insert)
        })
            .then((Response) => {
                this.ambilDataDariServerAPI();      // reload / refresh data
            });
    }

    render() {
        return (

            <div className="card mb-4">

                {/* input data */}
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-5">
                            <div className="card shadow-lg border-0 rounded-lg mt-5">
                                <div className="card-header"><h3 className="text-center font-weight-light my-4">Input Data User</h3></div>
                                <img src="https://miro.medium.com/max/1400/1*zEiP4QVsrm4UdaEEiNmpWg.jpeg" class="card-img-top" alt="bookStore"></img>
                                <div className="card-body">


                                    <form>
                                        <b><label htmlFor="gambar" form="gambar">Gambar Buku</label></b><br></br><br></br>
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
                                            <button type="submit" className="btn btn-success center-block" onClick={this.handleSaveButton}>Submit</button>
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

                {/* tabel read data */}

                <div class="card mb-4">
                    <div class="card-header">
                        <i class="fas fa-table me-1"></i>
                        Data User
                    </div>


                    <br />
                    <form class="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-4 my-md-0">
                        <div class="input-group">
                            <input type="text" class="form-control" placeholder="Cari" aria-label="Recipient's username" aria-describedby="basic-addon4" />
                            <button class="btn btn-warning" id="btnNavbarSearch" type="button">Cari</button>
                        </div>
                    </form>

                    <div class="card-body">
                        <table class="table">
                            <thead>
                                <tr>

                                    <th>Foto</th>
                                    <th>Nama</th>
                                    <th>Nomor Telepon</th>
                                    <th>E-mail</th>
                                    <th>Password</th>
                                    <th>Alamat</th>
                                    <th>Action</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.listUser.map(user => {    // looping dan masukkan untuk setiap data yang ada di listUserke variabel User
                                        return <User key={user.id} gambar={user.gambar} nama={user.nama} nomor_telp={user.nomor_tlp} email={user.email} password={user.password} alamat={user.alamat} idUser={user.id} hapusDataUser={this.handleHapusUser} />     // mappingkan data json dari API sesuai dengan kategorinya
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    };
}
export default DataUser;