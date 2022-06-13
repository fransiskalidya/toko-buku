import React, { Component } from "react";
// import './DaftarBuku.css';
import DataBuku from '../../components/Buku/DataBuku';
import Navbar from "./Navbar";
import Alert from '../../components/Alert';
import { useState } from "react";
import { toHaveDisplayValue } from "@testing-library/jest-dom/dist/matchers";
import "bootstrap/dist/css/bootstrap.min.css"
import firebase from "../../firebase.config";
import {storage} from "../../firebase.config";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
// import "bootstrap/dist/css/bootstrap.min.css";


export default function DaftarBuku () {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         listBuku: [],
    //         totalData: 0,       // Untuk Hitung All Data
    //         isUpdate: false,    // Untuk Fileter Fungsi 
    //         Notif: {            // Untuk Tampung respon Dari Server
    //             alertShow: false,
    //             actionType: '',
    //             responCode: 0,
    //         },
    //         insertBuku: {
    //             id: 1,
    //             gambar: "",
    //             judul: "",
    //             kategori: "",
    //             harga: "",
    //             stok: "",
    //             pengarang: "",
    //             penerbit: "",
    //             deskripsi: ""
    //         }

    //     }
    // }
  


    // ambilDataDariServerAPI = () => {
    //     fetch('http://localhost:3003/buku')  // alamat URL API yang ingin kita ambil datanya
    //         .then(response => response.json())  // ubah response data dari URL API menjadi sebuah data json
    //         .then(jsonHasilAmbilDariAPI => {    // data json hasil ambil dari API kita masukkan ke dalam listUserpada state 
    //             this.setState({
    //                 listBuku: jsonHasilAmbilDariAPI,
    //                 totalData: jsonHasilAmbilDariAPI.length
    //             })
    //         })
    // }

    // componentDidMount() {
    //     this.ambilDataDariServerAPI()

    // }

    // SaveNewDataBuku = () => {        // fungsi untuk meng-handle tombol simpan
    //     fetch('http://localhost:3003/buku', {
    //         method: 'post',
    //         headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json'

    //         },
    //         body: JSON.stringify(this.state.insertBuku)      // kirimkan ke body request untuk data yang akan ditambahkan (insert)
    //     })
    //         .then((Response) => {
    //             console.log(Response)
    //             console.log("Status Create", Response.status)
    //             this.setState({
    //                 Notif: {
    //                     alertShow: true,
    //                     actionType: 'created',
    //                     responCode: Response.status,
    //                 }
    //             })

    //             this.ambilDataDariServerAPI();      // reload / refresh data
    //             this.ClearForm();
    //             this.closeDialog();

    //         });
    // }

    // EditDataBuku = () => {
    //     const dataUpdate = this.state.insertBuku;
    //     const id = dataUpdate.id;
    //     fetch('http://localhost:3003/buku/' + id, {
    //         method: 'PUT',
    //         headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(dataUpdate)
    //     })
    //         .then((Response) => {
    //             console.log(Response)
    //             console.log("Status Update", Response.status)
    //             this.setState({
    //                 Notif: {
    //                     alertShow: true,
    //                     actionType: 'updated',
    //                     responCode: Response.status,
    //                 }
    //             })

    //             this.ambilDataDariServerAPI();      // reload / refresh data
    //             this.ClearForm();
    //             this.closeDialog();
    //         });
    // }




    // HapusDataBuku = (data) => {
    //     const id = data;

    //     fetch('http://localhost:3003/buku/' + id, {
    //         method: 'DELETE'
    //     })  // alamat URL API yang ingin kita HAPUS datanya
    //         .then(Response => {      // ketika proses hapus berhasil, maka ambil data dari server API lokal 
    //             console.log(Response)
    //             console.log("Status Delete", Response.status)

    //             // Untuk Tampung respon Dari Server
    //             this.setState({
    //                 Notif: {
    //                     alertShow: true,
    //                     actionType: 'deleted',
    //                     responCode: Response.status,
    //                 }
    //             })
    //             this.ambilDataDariServerAPI();
    //             this.ClearForm();
    //         });
    // }

    // handleChange = (event) => {      // fungsi untuk meng-handle form tambah data
    //     let timestamp = new Date().getTime();
    //     let formInsertBuku = { ...this.state.insertBuku };
    //     if (!this.state.isUpdate) { //Cek Jika Update Data Idnya Tidak Di Ubah
    //         formInsertBuku['id'] = timestamp;
    //     }
    //     formInsertBuku[event.target.name] = event.target.value;      // menyimpan data onchange ke formInsertBukusesuai dengan target yang diisi
    //     this.setState({
    //         insertBuku: formInsertBuku
    //     });
    // }

    // ClearForm = () => {

    //     this.setState({
    //         isUpdate: false,
    //         insertBuku: {
    //             id: 1,
    //             gambar: "",
    //             judul: "",
    //             kategori: "",
    //             harga: "",
    //             stok: "",
    //             pengarang: "",
    //             penerbit: "",
    //             deskripsi: ""
    //         }
    //     })
    //     // Mengembalikan Nilai Awal Notif
    //     setInterval(() => {
    //         this.setState({
    //             Notif: {
    //                 alertShow: false,
    //                 actionType: '',
    //                 responCode: 0,
    //             }
    //         })
    //     }, 4500);
    // }

    // handleSaveButton = () => {
    //     if (this.state.isUpdate) {
    //         this.EditDataBuku();
    //     } else {
    //         this.SaveNewDataBuku();
    //     }
    // }

    // handleEditBuku = (data) => {
    //     console.log('Update id', data.id);
    //     console.log('Update arry', data);
    //     this.setState({
    //         insertBuku: data,
    //         isUpdate: true
    //     })
    // }

    // handleHapusBuku = (data) => {
    //     console.log('Id delete =', data)
    //     const id = data;

    //     if (window.confirm('Apakah data ' + id + ' ?')) {
    //         this.HapusDataBuku(id)
    //     }
    // }

        // close modal
        const closeDialog = () => {
            console.log("masuk");
            window.location.reload();
        }
    
    const [judul, setJudul] = useState('');
    const [gambar, setGambar] = useState(null);
    const [kategori, setKategori] = useState('');
    const [pengarang, setPengarang] =useState('');
    const [penerbit, setPenerbit] =useState('');
    const [harga, setHarga] = useState(0);
    const [stok, setStok] =useState(0);
    const [deskripsi, setDeskripsi] =useState('');
    const [error, setError] = useState('');
    // editan baru

    const types = ['image/png', 'image/jpeg']


    const handleBookImage = (e) =>{
        let selectedFile = e.target.files[0];
        console.log(selectedFile);
        if (selectedFile && types.includes(selectedFile.type)){
            setGambar(selectedFile);
            setError('')        }
        else {
            setGambar(null);
            setError('Please select a valid image type (jpg or png)');
        }
    }

    const addBuku = (e) => {
        e.preventDefault();
        const uploadTask =ref(storage,`images/${gambar.name}`);
        uploadBytes(uploadTask,gambar).then((snapshot)=>{
            alert("sukses");
            getDownloadURL(snapshot.ref).then((url)=>{
                firebase.firestore().collection('buku').add({
                    judul: judul,
                    harga: Number(harga),
                    penerbit: penerbit,
                    pengarang:pengarang,
                    deskripsi:deskripsi,
                    stok :Number(stok),
                    kategori:kategori,
                    gambar: url
                }).then(() => {
                    setJudul('');
                    setHarga(0);
                    setStok(0);
                    setPenerbit('');
                    setDeskripsi('');
                    setPengarang('');
                    setKategori('');
                    setGambar('');
                    setError('');
                    document.getElementById('file').value = '';
                    closeDialog();
                }).catch(err => setError(err.message))
            })
        }, err => setError(err.message)
            , () => {
                // ref(storage, 'images').child(gambar.name).getDownloadURL().then(url => {
                //     firebase.firestore().collection('buku').add({
                //         judul: judul,
                //         harga: Number(harga),
                //         penerbit: penerbit,
                //         pengarang:pengarang,
                //         deskripsi:deskripsi,
                //         stok :Number(stok),
                //         kategori:kategori,
                //         gambar: url
                //     }).then(() => {
                //         setJudul('');
                //         setHarga(0);
                //         setStok(0);
                //         setPenerbit('');
                //         setDeskripsi('');
                //         setPengarang('');
                //         setKategori('');
                //         setGambar('');
                //         setError('');
                //         document.getElementById('file').value = '';
                //     }).catch(err => setError(err.message))
                // })
            })
    }


    // render() {

        return (

            <div class="container-fluid px-4">
                <h1 class="mt-4">Daftar Buku</h1>
                <ol class="breadcrumb mb-4">
                    <li class="breadcrumb-item active">Daftar Buku</li>
                </ol>
                <div className="card mb-4">
                    {/* modal */}

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
                                        <img src="https://img.jakpost.net/c/2020/04/21/2020_04_21_93387_1587459137._large.jpg" alt="bookStore" />
                                        <div className="card-body">
                                            {/* form pengisian */}

                                            <form>
                                                {/* <Alert data={this.state.Notif} /> */}
                                                <b><label htmlFor="gambar" form="gambar">Gambar Buku</label></b><br></br><br></br>
                                                <div className="form-floating mb-3">
                                                    {/* <input type="file" id="file" placeholder="gambar" onChange={(e) => setGambar(e.target.files[0])} className="form-control" name="gambar"/> */}
                                                    <input type="file" id="file" placeholder="gambar" onChange={handleBookImage} className="form-control" name="gambar"/>

                                                    <label htmlFor="gambar">Gambar</label>
                                                </div>
                                                <br></br>
                                                {/* <div className="form-floating mb-3">
                                                    <input disabled placeholder="ID" onChange={this.handleChange} className="form-control" id="id" name="id" />
                                                    <label htmlFor="id">ID</label>
                                                </div> */}
                                                <div className="form-floating mb-3">
                                                    <input className="form-control" id="judul" name="judul" type="text" placeholder="Judul" onChange={(e) => setJudul(e.target.value)} value={judul} />
                                                    <label htmlFor="judul" >Judul</label>
                                                </div>
                                                <div className="form-floating mb-3">
                                                    <input className="form-control" id="kategori" name="kategori" type="text" placeholder="Kategori Buku" onChange={(e) => setKategori(e.target.value)} value={kategori} />
                                                    <label htmlFor="kategori" >Kategori</label>
                                                </div>
                                                <div className="form-floating mb-3">
                                                    <input className="form-control" type="text" id="harga" name="harga" placeholder="Harga Buku" onChange={(e) => setHarga(e.target.value)} value={harga} />
                                                    <label htmlFor="harga" >Harga</label>
                                                </div>
                                                <div className="form-floating mb-3">
                                                    <input className="form-control" type="text" id="stok" name="stok" placeholder="Stok Buku" onChange={(e) => setStok(e.target.value)} value={stok} />
                                                    <label htmlFor="stok" >Stok</label>
                                                </div>
                                                <div className="form-floating mb-3">
                                                    <input className="form-control" type="text" id="pengarang" name="pengarang" placeholder="Pengarang" onChange={(e) => setPengarang(e.target.value)} value={pengarang} />
                                                    <label htmlFor="pengarang" >Pengarang</label>
                                                </div>
                                                <div className="form-floating mb-3">
                                                    <input className="form-control" type="text" id="penerbit" name="penerbit" placeholder="Penerbit" onChange={(e) => setPenerbit(e.target.value)} value={penerbit} />
                                                    <label htmlFor="penerbit" >Penerbit</label>
                                                </div>
                                                <div className="form-floating mb-3">
                                                    <textarea className="form-control" type="text" id="deskripsi" name="deskripsi" placeholder="Deskripsi Buku" onChange={(e) => setDeskripsi(e.target.value)} value={deskripsi} />
                                                    <label htmlFor="deskripsi">Deskripsi</label>
                                                </div>


                                                {/* <div className="d-flex align-items-center justify-content-between mt-4 mb-0">
                                        <button type="submit" className="btn btn-primary center-block" onClick={this.handleSaveButton}>Submit</button>
                                    </div> */}
                                            </form>


                                        </div>



                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" id="close" onClick={closeDialog} data-dismiss="modal">Close</button>
                                    <button type="submit" className="btn btn-primary center-block" onClick={addBuku}>Simpan</button>
                                </div>
                                {error && <span className='error-msg'>{error}</span>}
                            </div>
                        </div>
                    </div>


                    {/* data buku */}
                    <div className="card mb-4">
                        <div className="card-header">
                            <i className="fa fa-table me-1"></i>
                            Daftar Buku BookTown
                        </div>
                        <br></br>

                        <form className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Cari" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                <button className="btn btn-primary" id="btnNavbarSearch" type="button">Cari</button>
                                <button className="btn btn-success" id="btnNavbarSearch" type="button" style={{ marginInlineStart: '10px' }} data-toggle="modal" data-target="#exampleModalLong">Tambah data</button>
                            </div>
                        </form>



                        {/* <div className="card-body">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>GAMBAR BUKU</th>
                                        <th>JUDUL BUKU</th>
                                        <th>KATEGORI BUKU</th>
                                        <th>HARGA</th>
                                        <th>STOK</th>
                                        <th>PENGARANG</th>
                                        <th>PENERBIT</th>
                                        <th>DESKRIPSI</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {
                                        this.state.listBuku.map(buku => {    // looping dan masukkan untuk setiap data yang ada di listBuku ke variabel Buku
                                            // return <DataBuku key={buku.id} gambar={buku.gambar} judul={buku.judul} kategori={buku.kategori} harga={buku.harga} stok={buku.stok} pengarang={buku.pengarang} penerbit={buku.penerbit} deskripsi={buku.deskripsi} idBuku={buku.id} hapusDataBuku={this.handleHapusBuku} editDataBuku={this.handleEditBuku}/>     // mappingkan data json dari API sesuai dengan kategorinya
                                            return <DataBuku key={buku.id} data={buku} hapusDataBuku={this.handleHapusBuku} EditDataBuku={this.handleEditBuku} />
                                        })
                                    }
                                </tbody>
                            </table>
                        </div> */}
                    </div>

                </div>
            </div>
        );
    };
// }
// export default DaftarBuku;