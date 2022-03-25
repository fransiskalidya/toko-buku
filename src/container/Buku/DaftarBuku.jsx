import React, { Component } from "react";
// import './DaftarBuku.css';
import DataBuku from '../../components/Buku/DataBuku';
import Navbar from "./Navbar";
import { toHaveDisplayValue } from "@testing-library/jest-dom/dist/matchers";

class DaftarBuku extends Component {
    state = {
        listBuku: [],
        insertBuku: {
            id: 1,
            gambar: "",
            nama_buku: "",
            kategori_buku: "",
            harga: "",
            stok: 20,
            pengarang: "",
            penerbit: "",
            deskripsi: ""
        }

    }

    ambilDataDariServerAPI = () => {
        fetch('http://localhost:3003/buku')  // alamat URL API yang ingin kita ambil datanya
            .then(response => response.json())  // ubah response data dari URL API menjadi sebuah data json
            .then(jsonHasilAmbilDariAPI => {    // data json hasil ambil dari API kita masukkan ke dalam listBuku pada state 
                this.setState({
                    listBuku: jsonHasilAmbilDariAPI
                })
            })
    }

    componentDidMount() {
        this.ambilDataDariServerAPI()

    }

    handleHapusBuku = (data) => {
        fetch(`http://localhost:3003/buku/${data}`, { method: 'DELETE' })  // alamat URL API yang ingin kita HAPUS datanya
            .then(res => {      // ketika proses hapus berhasil, maka ambil data dari server API lokal 
                this.ambilDataDariServerAPI()
            })
    }

    handleAddBuku = (event) => {      // fungsi untuk meng-handle form tambah data Buku
        let formInsertBuku = { ...this.state.insertBuku };
        let timestamp = new Date().getTime();                        // digunakan untuk menyimpan waktu (sebagai ID Buku)
        formInsertBuku['id'] = timestamp;
        formInsertBuku[event.target.name] = event.target.value;      // menyimpan data onchange ke formInsertBuku sesuai dengan target yang diisi
        this.setState({
            insertBuku: formInsertBuku
        });
    }

    handleSaveButton = () => {        // fungsi untuk meng-handle tombol simpan
        fetch('http://localhost:3002/buku', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'

            },
            body: JSON.stringify(this.state.insertBuku)      // kirimkan ke body request untuk data Buku yang akan ditambahkan (insert)
        })
            .then((Response) => {
                this.ambilDataDariServerAPI();      // reload / refresh data
            });
    }

    render() {
        return (

            <div className="card mb-4">
                <Navbar />
                {/* <div className="containerForm"> */}

                {/* add buku */}
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-5">
                            <div className="card shadow-lg border-0 rounded-lg mt-5">
                                <div className="card-header"><h3 className="text-center font-weight-light my-4">Input data Kategori</h3></div>
                                <img src="https://img.jakpost.net/c/2020/04/21/2020_04_21_93387_1587459137._large.jpg" alt="bookStore" />
                                <div className="card-body">
                                    {/* form pengisian */}

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
                                            <button type="submit" className="btn btn-primary center-block" onClick={this.handleSaveButton}>Submit</button>
                                        </div>
                                    </form>


                                </div>



                            </div>
                        </div>
                    </div>
                </div>

                <br></br>
                <br></br>


                {/* data buku */}
                <div class="card mb-4">
                    <div class="card-header">
                        <i class="fas fa-table me-1"></i>
                        Daftar Buku BookTown
                    </div>
                    <br></br>

                    <form class="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
                        <div class="input-group">
                            <input type="text" class="form-control" placeholder="Cari" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                            <button class="btn btn-primary" id="btnNavbarSearch" type="button">Cari</button>
                        </div>
                    </form>

                    <div class="card-body">
                        <table class="table">
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
                                        return <DataBuku key={buku.id} gambar={buku.gambar} nama_buku={buku.nama_buku} kategori_buku={buku.kategori_buku} harga={buku.harga} stok={buku.stok} pengarang={buku.pengarang} penerbit={buku.penerbit} deskripsi={buku.deskripsi} idBuku={buku.id} hapusDataBuku={this.handleHapusBuku} />     // mappingkan data json dari API sesuai dengan kategorinya
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
export default DaftarBuku;