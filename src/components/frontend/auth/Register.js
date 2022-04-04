import React, { Component } from "react";
import './Register.css';
import Navbar from "./Navbar";
import Alert from '../../frontend/component/Alert';
import User from '../../frontend/component/User';
import { useState } from "react";

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listUser: [],
            totalData: 0,       // Untuk Hitung All Data
            isUpdate: false,    // Untuk Fileter Fungsi 
            Notif: {            // Untuk Tampung respon Dari Server
                alertShow: false,
                actionType: '',
                responCode: 0,
            },
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
    }


    ambilDataDariServerAPI = () => {
        fetch('http://localhost:3004/user')  // alamat URL API yang ingin kita ambil datanya
        .then(response => response.json())  // ubah response data dari URL API menjadi sebuah data json
        .then(jsonHasilAmbilDariAPI => {    // data json hasil ambil dari API kita masukkan ke dalam listUserpada state 
            this.setState({
                listUser: jsonHasilAmbilDariAPI,
                totalData: jsonHasilAmbilDariAPI.length
            })
        })
}

    componentDidMount() {
        this.ambilDataDariServerAPI()

    }

    SaveNewDataUSer = () => {        // fungsi untuk meng-handle tombol simpan
        fetch('http://localhost:3004/user', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'

            },
            body: JSON.stringify(this.state.insertUser)      // kirimkan ke body request untuk data Useryang akan ditambahkan (insert)
        })
            .then((Response) => {
                console.log(Response)
                console.log("Status Create", Response.status)
                this.setState({
                    Notif: {
                        alertShow: true,
                        actionType: 'created',
                        responCode: Response.status,
                    }
                })

                this.ambilDataDariServerAPI();      // reload / refresh data
                this.ClearForm();
            });
    }

    ClearForm = () => {

        this.setState({
            isUpdate: false,
            insertUser: {
                id: 1,
                gambar: "",
                nama: "",
                nomor_telp: "",
                email: "",
                password: "",
                alamat: ""
            }
        })
        // Mengembalikan Nilai Awal Notif
        setInterval(() => {
            this.setState({
                Notif: {
                    alertShow: false,
                    actionType: '',
                    responCode: 0,
                }
            })
        }, 4500);
    }


    handleChange = (event) => {      // fungsi untuk meng-handle form tambah data User
        const NumberingId = this.state.totalData + 1;
        let formInsertUser = { ...this.state.insertUser };
        if (!this.state.isUpdate) { //Cek Jika Update Data Idnya Tidak Di Ubah
            formInsertUser['id'] = NumberingId;
        }
        formInsertUser[event.target.name] = event.target.value;      // menyimpan data onchange ke formInsertUsersesuai dengan target yang diisi
        this.setState({
            insertUser: formInsertUser
        });
    }

    handleSubmit = () => {
        this.SaveNewDataUSer();
    }

    render() {
        return (
            <div>
                <Navbar />
                <div className="containerRegister">
                    <div className="col-lg-2"></div>
                    <form>
                        <Alert data={this.state.Notif} />
                        <div className="titleText">
                            <h3><b>Register Akun</b></h3><br></br>
                        </div>
                        <div className="ui divider"></div>
                        <div className="ui form"></div>
                        <div className="fieldRegister">
                            <label>Foto</label><br></br>
                            <div className="col-md-12 mb-3"></div>
                            <input type="file" className="form-control" id="gambar" name="gambar" placeholder="gambar" disabled = "disabled" onChange={this.handleChange} />
                        </div>

                        <div className="fieldRegister">
                            <label>Foto</label><br></br>
                            <div className="col-md-12 mb-3"></div>
                           <textarea className="form-control" id="gambar" name="gambar" placeholder="gambar" onChange={this.handleChange} />
                        </div>

                        <div className="fieldRegister">
                            <label>Nama</label><br></br><br></br>
                            <input type="text" className="form-control" id="nama" name="nama" placeholder="Nama" onChange={this.handleChange} />
                        </div>

                        <div className="fieldRegister">
                            <label>Nomor Telepon</label><br></br><br></br>
                            <input type="text" className="form-control" id="nomor_telp" name="nomor_telp" placeholder="Nomor Telepon" onChange={this.handleChange} />
                        </div>

                        <div className="fieldRegister">
                            <label>Email</label><br></br><br></br>
                            <input type="email" className="form-control" id="email" name="email" placeholder="Email" onChange={this.handleChange} />
                        </div>

                        <div className="fieldRegister">
                            <label>Alamat</label><br></br><br></br>
                            <input type="text" className="form-control" id="alamat" name="alamat" placeholder="Alamat" onChange={this.handleChange} />
                        </div>

                        <div className="fieldRegister">
                            <label>Password</label><br></br><br></br>
                            <input type="password" className="form-control" id="password" name="password" placeholder="Password" onChange={this.handleChange} />
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
                                <button type="button" className="btn btn-primary center-block" onClick={this.handleSubmit}>Register</button></div>
                            <br></br>
                            <p className="forgot-password text-right">
                                Data sudah pernah terdaftar <a href="/login">Login ?</a>
                            </p>
                        </div>
                    </form>
                    {/* <div class="card-body">
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
                </div> */}

                </div>
            </div>
        );
    }
}