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
                alamat: "",
                role: "admin"
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
                this.closeDialog();

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
                this.closeDialog();
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
            formInsertUser['role'] = "admin";
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
                alamat: "",
                role: "admin"
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

    closeDialog = () => {
        console.log("masuk");
        window.location.reload();
    }

    render() {
        return (
            <div class="container-fluid px-4">
                <h1 class="mt-4">Data User</h1>
                <ol class="breadcrumb mb-4">
                    <li class="breadcrumb-item active">Data User</li>
                </ol>

                <div className="card mb-4" >

                    <div className="modal fade" id="exampleModalLong" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLongTitle">Form Data Buku</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">

                                    <div className="card">
                                        <img src="https://miro.medium.com/max/1400/1*zEiP4QVsrm4UdaEEiNmpWg.jpeg" class="card-img-top" alt="bookStore"></img>

                                        <div className="card-body">
                                            {/* form pengisian */}
                                            <form>
                                                <Alert data={this.state.Notif} />
                                                <b><label htmlFor="gambar" form="gambar">Foto Admin</label></b><br></br><br></br>
                                                <div className="col-md-12 mb-3">
                                                    <textarea className="form-control" id="gambar" name="gambar" placeholder="Link Gambar" onChange={this.handleChange} value={this.state.insertUser.gambar} />
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
                                                <div className="form-floating mb-3">
                                                    <input type="text" className="form-control" id="role" name="role" placeholder="password" disabled="disabled" onChange={this.handleChange} value="admin" />
                                                    <label htmlFor="role" form="role">Role</label>
                                                </div>

                                            </form>
                                        </div>



                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" id="close" data-dismiss="modal">Close</button>
                                    <button type="submit" className="btn btn-primary center-block" onClick={this.handleSaveButton}>Simpan</button>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* input data */}


                    {/* tabel read data */}

                    < div class="card mb-4" >
                        <div class="card-header">
                            <i class="fa fa-table me-1"></i>
                            Data User
                        </div>


                        <br />
                        <form class="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-4 my-md-0">
                            <div class="input-group">
                                <input type="text" class="form-control" placeholder="Cari" aria-label="Recipient's username" aria-describedby="basic-addon4" />
                                <button class="btn btn-warning" id="btnNavbarSearch" type="button">Cari</button>
                                <button className="btn btn-success" id="btnNavbarSearch" type="button" style={{ marginInlineStart: '10px' }} data-toggle="modal" data-target="#exampleModalLong">Tambah data</button>

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
                                        <th>Role</th>
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
            </div >

        );
    };
}
export default DataUser;