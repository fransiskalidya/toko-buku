import React, { Component } from "react";
import './Invoice.css';
import DataInvoice from '../../components/admin/DataInvoice';
import Alert from '../../components/Alert';
import { Link } from 'react-router-dom';
import { toHaveDisplayValue } from "@testing-library/jest-dom/dist/matchers";


class Invoice extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listInvoice: [],
            totalData: 0,       // Untuk Hitung All Data
            isUpdate: false,    // Untuk Fileter Fungsi 
            Notif: {            // Untuk Tampung respon Dari Server
                alertShow: false,
                actionType: '',
                responCode: 0,
            },
            insertInvoice: {
                id: 1,
                gambar: "",
                nama: "",
                total: "",
                status: "",
                tanggal: ""
            }
        }
    }

    ambilDataDariServerAPI = () => {
        fetch('http://localhost:3005/Invoice')  // tanggal URL API yang ingin kita ambil datanya
            .then(response => response.json())  // ubah response data dari URL API menjadi sebuah data json
            .then(jsonHasilAmbilDariAPI => {    // data json hasil ambil dari API kita masukkan ke dalam listInvoicepada state 
                this.setState({
                    listInvoice: jsonHasilAmbilDariAPI,
                    totalData: jsonHasilAmbilDariAPI.length
                })
            })
    }

    componentDidMount() {
        this.ambilDataDariServerAPI()

    }

    SaveNewDataInvoice = () => {        // fungsi untuk meng-handle tombol simpan
        fetch('http://localhost:3005/Invoice', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'

            },
            body: JSON.stringify(this.state.insertInvoice)      // kirimkan ke body request untuk data Invoiceyang akan ditambahkan (insert)
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

    EditDataInvoice = () => {
        const dataUpdate = this.state.insertInvoice;
        const id = dataUpdate.id;
        fetch('http://localhost:3005/Invoice/' + id, {
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



    HapusDataInvoice = (data) => {
        const id = data;

        fetch('http://localhost:3005/Invoice/' + id, {
            method: 'DELETE'
        })  // tanggal URL API yang ingin kita HAPUS datanya
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

    handleChange = (event) => {      // fungsi untuk meng-handle form tambah data Invoice
        let timestamp = new Date().getTime();
        const NumberingId = this.state.totalData + "INV-" + timestamp;
        let formInsertInvoice = { ...this.state.insertInvoice };
        if (!this.state.isUpdate) { //Cek Jika Update Data Idnya Tidak Di Ubah
            formInsertInvoice['id'] = NumberingId;
            //formInsertInvoice['role'] = "admin";
        }
        formInsertInvoice[event.target.name] = event.target.value;      // menyimpan data onchange ke formInsertInvoicesesuai dengan target yang diisi
        this.setState({
            insertInvoice: formInsertInvoice
        });
    }

    ClearForm = () => {

        this.setState({
            isUpdate: false,
            insertInvoice: {
                id: 1,
                gambar: "",
                nama: "",
                total: "",
                status: "",
                tanggal: ""
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
            this.EditDataInvoice();
        } else {
            this.SaveNewDataInvoice();
        }
    }

    handleEditInvoice = (data) => {
        console.log('Update id', data.id);
        console.log('Update arry', data);
        this.setState({
            insertInvoice: data,
            isUpdate: true
        })
    }

    handleHapusInvoice = (data) => {
        console.log('Id delete =', data)
        const id = data;

        if (window.confirm('Apakah data ' + id + ' ?')) {
            this.HapusDataInvoice(id)
        }
    }

    closeDialog = () => {
        console.log("masuk");
        window.location.reload();
    }

    render() {
        return (

            <div className="card mb-4" >

                <div className="modal fade" id="exampleModalLong" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLongTitle">Detail Invoice</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">

                                <div className="card">
                                    <img src="https://techilaservices.com/wp-content/uploads/2021/08/Merchant-Cash-Advance-Software.png" class="card-img-top" alt="bookStore"></img>

                                    <div className="card-body">
                                        {/* form pengisian */}
                                        <form>
                                            <Alert data={this.state.Notif} />
                                            <b><label htmlFor="gambar" form="gambar">Foto</label></b><br></br><br></br>
                                            <div className="col-md-12 mb-3">
                                                <textarea className="form-control" id="gambar" name="gambar" placeholder="Link Gambar" onChange={this.handleChange} value={this.state.insertInvoice.gambar} />
                                            </div>
                                            <br></br>

                                            <div className="form-floating mb-3">
                                                <input className="form-control" id="nama" name="nama" placeholder="Nama User" onChange={this.handleChange} value={this.state.insertInvoice.nama} />
                                                <label htmlFor="nama" form="nama">Nama</label>
                                            </div>
                                            <div className="form-floating mb-3">
                                                <input type="text" className="form-control" id="total" name="total" placeholder="Total" onChange={this.handleChange} value={this.state.insertInvoice.total} />
                                                <label htmlFor="total" form="total">Total</label>
                                            </div>
                                            <div className="form-floating mb-3">
                                                <input type="text" className="form-control" id="status" name="status" placeholder="Status" onChange={this.handleChange} value={this.state.insertInvoice.status} />
                                                <label htmlFor="status" form="status">Status</label>
                                            </div>
                                            <div className="form-floating mb-3">
                                                <input type="input" className="form-control" id="tanggal" name="tanggal" placeholder="Tanggal" onChange={this.handleChange} value={this.state.insertInvoice.tanggal} />
                                                <label htmlFor="tanggal" form="tanggal">Tanggal</label>
                                            </div>

                                        </form>
                                    </div>



                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" id="close" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* input data */}


                {/* tabel read data */}

                < div class="card mb-4" >
                    <div class="card-header">
                        <i class="fa fa-table me-1"></i>
                        Data Invoice
                    </div>


                    <br />
                    <form class="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-4 my-md-0">
                        <div class="input-group">
                            <input type="text" class="form-control" placeholder="Cari" aria-label="Recipient's Invoicename" aria-describedby="basic-addon4" />
                            <button class="btn btn-warning" id="btnNavbarSearch" type="button">Cari</button>
                            {/* <button className="btn btn-success" id="btnNavbarSearch" type="button" style={{ marginInlineStart: '10px' }} data-toggle="modal" data-target="#exampleModalLong">Tambah data</button> */}

                        </div>
                    </form>

                    <div class="card-body">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>Invoice</th>
                                    <th>Foto</th>
                                    <th>Nama</th>
                                    <th>Total</th>
                                    <th>Status</th>
                                    <th>Tanggal</th>
                                    <th width="150px">Action</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.listInvoice.map(invoice => {    // looping dan masukkan untuk setiap data yang ada di listInvoiceke variabel Invoice
                                        return (
                                            <DataInvoice key={invoice.id}
                                                data={invoice}
                                                hapusDataInvoice={this.handleHapusInvoice} EditDataInvoice={this.handleEditInvoice} />     // mappingkan data json dari API sesuai dengan kategorinya
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
export default Invoice;