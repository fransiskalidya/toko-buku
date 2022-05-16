import React, { Component } from "react";
import { render } from "react-dom";
import Alert from '../../components/Alert';
import DataAkun from '../../components/Akun/DataAkun';
import 'font-awesome/css/font-awesome.min.css';
import "./Akun.css";
import { Link } from "react-router-dom";
import { toHaveDisplayValue } from "@testing-library/jest-dom/dist/matchers";
import Navbar from "../../components/frontend/auth/Navbar";


class Akun extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listAkun: [],
            totalData: 0,       // Untuk Hitung All Data
            isUpdate: false,    // Untuk Fileter Fungsi 
            Notif: {            // Untuk Tampung respon Dari Server
                alertShow: false,
                actionType: '',
                responCode: 0,
            },
            insertAkun: {
                id: 1,
                gambar: "",
                nama: "",
                hp: "",
                email: "",
                alamat: ""
            }
        }
    }

    ambilDataDariServerAPI = () => {
        fetch('http://localhost:3006/Akun')  // alamat URL API yang ingin kita ambil datanya
            .then(response => response.json())  // ubah response data dari URL API menjadi sebuah data json
            .then(jsonHasilAmbilDariAPI => {    // data json hasil ambil dari API kita masukkan ke dalam listAkunpada state 
                this.setState({
                    listAkun: jsonHasilAmbilDariAPI,
                    totalData: jsonHasilAmbilDariAPI.length
                })
            })
    }

    componentDidMount() {
        this.ambilDataDariServerAPI()

    }

    SaveNewAkun = () => {        // fungsi untuk meng-handle tombol simpan
        fetch('http://localhost:3006/Akun', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'

            },
            body: JSON.stringify(this.state.insertAkun)      // kirimkan ke body request untuk data Akun yang akan ditambahkan (insert)
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

    EditAkun = () => {
        const dataUpdate = this.state.insertAkun;
        const id = dataUpdate.id;
        fetch('http://localhost:3006/Akun/' + id, {
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

    handleChange = (event) => {      // fungsi untuk meng-handle form tambah data Akun
        const NumberingId = this.state.hpData + 1;
        let formInsertAkun = { ...this.state.insertAkun };
        if (!this.state.isUpdate) { //Cek Jika Update Data Idnya Tidak Di Ubah
            formInsertAkun['id'] = NumberingId;
            // formInsertAkun['role'] = "admin";
        }
        formInsertAkun[event.target.name] = event.target.value;      // menyimpan data onchange ke form Insert Akun sesuai dengan target yang diisi
        this.setState({
            insertAkun: formInsertAkun
        });
    }

    ClearForm = () => {

        this.setState({
            isUpdate: false,
            insertAkun: {
                id: 1,
                gambar: "",
                nama: "",
                hp: "",
                email: "",
                alamat: ""
            }
        })

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
            this.EditAkun();
        } else {
            this.SaveNewAkun();
        }
    }

    handleEditAkun = (data) => {
        console.log('Update id', data.id);
        console.log('Update arry', data);
        this.setState({
            insertAkun: data,
            isUpdate: true
        })
    }

    closeDialog = () => {
        console.log("masuk");
        window.location.reload();
    }

    render() {
        return (
            <div style={{ marginTop: '90px' }}>
                <Navbar />

                <div className="card mb-4" >

                    <div className="modal fade" id="exampleModalLong" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLongTitle">Edit Profile</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="container">

                                    <div className="card text-center">
                                        <img src="https://elmeniawy.com/wp-content/uploads/2021/12/people-waving-hand-illustration-concept_52683-29825.jpg" class="card-img-top" alt="bookStore"></img>

                                        <div className="card-body">
                                            {/* form pengisian */}
                                            <form>
                                                <Alert data={this.state.Notif} />
                                                <b><label htmlFor="gambar" form="gambar">Foto</label></b><br></br><br></br>
                                                <div className="col-md-12 mb-3">
                                                    <textarea className="form-control" id="gambar" name="gambar" placeholder="Link Gambar" onChange={this.handleChange} value={this.state.insertAkun.gambar} />
                                                </div>
                                                <br></br>

                                                    <div className="form-floating mb-3">
                                                    <input className="form-control" id="nama" name="nama" placeholder="Nama" onChange={this.handleChange} value={this.state.insertAkun.nama} />
                                                    <label htmlFor="nama" form="nama">Nama</label>
                                                </div>
                                                
                                                <div className="form-floating mb-3">
                                                    <input type="text" className="form-control" id="hp" name="hp" placeholder="Tota;" onChange={this.handleChange} value={this.state.insertAkun.hp} />
                                                    <label htmlFor="hp" form="hp">Hp</label>
                                                </div>
                                                
                                                <div className="form-floating mb-3">
                                                    <input type="text" className="form-control" id="email" name="email" placeholder="email" onChange={this.handleChange} value={this.state.insertAkun.email} />
                                                    <label htmlFor="email" form="email">Email</label>
                                                </div>
                                              
                                                <div className="form-floating mb-3">
                                                    <input type="input" className="form-control" id="alamat" name="alamat" placeholder="alamat" onChange={this.handleChange} value={this.state.insertAkun.alamat} />
                                                    <label htmlFor="alamat" form="alamat">Alamat</label>
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
                            Data Profile
                        </div>


                        <br />
                        <form class="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-4 my-md-0">
                            <div class="input-group">
                                <input type="text" class="form-control" placeholder="Cari" aria-label="Recipient's username" aria-describedby="basic-addon4" />
                                <button class="btn btn-warning" id="btnNavbarSearch" type="button">Cari</button>
                                <button className="btn btn-success" id="btnNavbarSearch" type="button" style={{ marginInlineStart: '10px' }} data-toggle="modal" data-target="#exampleModalLong">Tambah data</button>

                            </div>
                        </form>
                        
                        <div className="title">
                            <tr>
                            <td>PROFILE</td>
                            </tr>
                        </div>
                        
                        
                            {
                            this.state.listAkun.map(akun => {    // looping dan masukkan untuk setiap data yang ada di listAkunke variabel Akun
                                return (
                                    <DataAkun key={akun.id}
                                        data={akun}
                                        EditDataAkun={this.handleEditAkun} />     // mappingkan data json dari API sesuai dengan kategorinya
                                )
                            })
                        }

                            
                    </div >
                    </div>
                </div >
        );
    };
}

export default Akun;