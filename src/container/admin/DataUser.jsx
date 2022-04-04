import React, { Component } from "react";
import './DataUser.css'
import User from '../../components/admin/User';
import Alert from '../../components/Alert';
import { Link } from 'react-router-dom';
import { toHaveDisplayValue } from "@testing-library/jest-dom/dist/matchers";


class DataUser extends Component {
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

    EditDataUser = () => {
        const dataUpdate = this.state.insertUser;
        const id = dataUpdate.id;
        fetch('http://localhost:3004/user/' + id, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataUpdate)
        })
            .then((Response) => {
                console.log(Response)
                console.log("Status Update", Response.status)
                this.setState({
                    Notif: {
                        alertShow: true,
                        actionType: 'updated',
                        responCode: Response.status,
                    }
                })

                this.ambilDataDariServerAPI();      // reload / refresh data
                this.ClearForm();
            });
    }



    HapusDataUser = (data) => {
        const id = data;

        fetch('http://localhost:3004/user/' + id, {
            method: 'DELETE'
        })  // alamat URL API yang ingin kita HAPUS datanya
            .then(Response => {      // ketika proses hapus berhasil, maka ambil data dari server API lokal 
                console.log(Response)
                console.log("Status Delete", Response.status)

                // Untuk Tampung respon Dari Server
                this.setState({
                    Notif: {
                        alertShow: true,
                        actionType: 'deleted',
                        responCode: Response.status,
                    }
                })
                this.ambilDataDariServerAPI();
                this.ClearForm();
            });
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

    handleSaveButton = () => {
        if (this.state.isUpdate) {
            this.EditDataUser();
        } else {
            this.SaveNewDataUSer();
        }
    }

    handleEditUser = (data) => {
        console.log('Update id', data.id);
        console.log('Update arry', data);
        this.setState({
            insertUser: data,
            isUpdate: true
        })
    }

    handleHapusUser = (data) => {
        console.log('Id delete =', data)
        const id = data;

        if (window.confirm('Apakah data ' + id + ' ?')) {
            this.HapusDataUser(id)
        }
    }



    render() {
        return (

            <div className="card mb-4" >

                {/* input data */}
                < div className="container" >
                    <div className="row justify-content-center">
                        <div className="col-lg-5">
                            <div className="card shadow-lg border-0 rounded-lg mt-5">
                                <div className="card-header"><h3 className="text-center font-weight-light my-4">Input Data User</h3></div>
                                <img src="https://miro.medium.com/max/1400/1*zEiP4QVsrm4UdaEEiNmpWg.jpeg" class="card-img-top" alt="bookStore"></img>
                                <div className="card-body">

                                    <form>
                                        <Alert data={this.state.Notif} />
                                        <b><label htmlFor="gambar" form="gambar">Foto User</label></b><br></br><br></br>
                                        <div className="col-md-12 mb-3">
                                            <textarea className="form-control" id="gambar" name="gambar" placeholder="Link Gambar"  onChange={this.handleChange} value={this.state.insertUser.gambar} />
                                        </div>
                                        <br></br>

                                        <div className="form-floating mb-3">
                                            <input className="form-control" id="nama" name="nama" placeholder="Nama User" onChange={this.handleChange} value={this.state.insertUser.nama} />
                                            <label htmlFor="nama" form="nama">Nama</label>
                                        </div>
                                        <div className="form-floating mb-3">
                                            <input type="text" className="form-control" id="nomor_telp" name="nomor_telp" placeholder="Nomor Telepon" onChange={this.handleChange} value={this.state.insertUser.nomor_telp} />
                                            <label htmlFor="nomor_telp" form="nomor_telp">Nomor Telepon</label>
                                        </div>
                                        <div className="form-floating mb-3">
                                            <input type="text" className="form-control" id="email" name="email" placeholder="E-mail" onChange={this.handleChange} value={this.state.insertUser.email} />
                                            <label htmlFor="email" form="email">E-mail</label>
                                        </div>
                                        <div className="form-floating mb-3">
                                            <input type="textarea" className="form-control" id="alamat" name="alamat" placeholder="alamat" onChange={this.handleChange} value={this.state.insertUser.alamat} />
                                            <label htmlFor="alamat" form="alamat">Alamat</label>
                                        </div>
                                        <div className="form-floating mb-3">
                                            <input type="password" className="form-control" id="password" name="password" placeholder="password" onChange={this.handleChange} value={this.state.insertUser.password} />
                                            <label htmlFor="password" form="password">Password</label>
                                        </div>

                                    </form>
                                    <div className="d-flex align-items-center justify-content-between mt-4 mb-0">
                                        <button type="submit" className="btn btn-success center-block" onClick={this.handleSaveButton}>Submit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <br />
                <br />

                {/* tabel read data */}

                < div class="card mb-4" >
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
                                    <th>ID</th>
                                    <th>Foto</th>
                                    <th>Nama</th>
                                    <th>Nomor Telepon</th>
                                    <th>E-mail</th>
                                    <th>Password</th>
                                    <th>Alamat</th>
                                    <th width="150px">Action</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.listUser.map(user => {    // looping dan masukkan untuk setiap data yang ada di listUserke variabel User
                                        return (
                                            <User key={user.id}
                                                data={user}
                                                hapusDataUser={this.handleHapusUser} EditDataUser={this.handleEditUser} />     // mappingkan data json dari API sesuai dengan kategorinya
                                        )
                                    })
                                }


                            </tbody>
                        </table>
                    </div>
                </div >
            </div >
        );
    };
}
export default DataUser;