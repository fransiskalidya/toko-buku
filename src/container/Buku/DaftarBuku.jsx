import React, { Component } from "react";
import './DaftarBuku.css';
import DataBuku from '../../components/Buku/DataBuku';
import { toHaveDisplayValue } from "@testing-library/jest-dom/dist/matchers";

class DaftarBuku extends Component {
    state = {
        listBuku: [],
        insertBuku: {
            id: 1,
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
        fetch('http://localhost:3001/buku')  // alamat URL API yang ingin kita ambil datanya
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

            <div className="containerForm" id="tabelData">
                <div className="col-lg-4" id="tabelData">
                    <div className="content" id="tabelData">
                        <form>
                            <h3><b>Tambah Data Buku</b></h3><br></br>
                            <div className="bookStore">
                                <img src="https://png.pngtree.com/template/20190316/ourmid/pngtree-books-logo-image_80041.jpg" alt="bookStore" />
                            </div>
                            <div className="field">
                                <label htmlFor="nama_buku" className="col-sm-2 col-form-label">Judul</label>
                                <input type="text" className="form-control" id="nama_buku" name="nama_buku" placeholder="Judul Buku" onChange={this.handleAddBuku} />
                            </div>

                            <div className="field">
                                <label htmlFor="kategori_buku" className="col-sm-2 col-form-label">Kategori</label>
                                <input type="text" className="form-control" id="kategori_buku" name="kategori_buku" placeholder="Kategori Buku" onChange={this.handleAddBuku} />
                            </div>

                            <div className="field">
                                <label htmlFor="harga" className="col-sm-2 col-form-label">Harga</label>
                                <input type="text" className="form-control" id="harga" name="harga" placeholder="Harga Buku" onChange={this.handleAddBuku} />
                            </div>

                            <div className="field">
                                <label htmlFor="stok" className="col-sm-2 col-form-label">Stok</label>
                                <input type="text" className="form-control" id="stok" name="stok" placeholder="Stok Buku" onChange={this.handleAddBuku} />
                            </div>

                            <div className="field">
                                <label htmlFor="pengarang" className="col-sm-2 col-form-label">Pengarang</label>
                                <input type="text" className="form-control" id="pengarang" name="pengarang" placeholder="Pengarang" onChange={this.handleAddBuku} />
                            </div>

                            <div className="field">
                                <label htmlFor="penerbit" className="col-sm-2 col-form-label">Penerbit</label>
                                <input type="text" className="form-control" id="penerbit" name="penerbit" placeholder="Penerbit" onChange={this.handleAddBuku} />
                            </div>

                            <div className="field1">
                                <label htmlFor="deskripsi" className="col-sm-2 col-form-label">Deskripsi</label>
                                <textarea className="form-control" id="deskripsi" name="deskripsi" placeholder="Deskripsi Buku" onChange={this.handleAddBuku} />
                            </div>
                            <br>
                            </br>


                            <div className="container mt-3 center-block">
                                <button type="submit" className="btn btn-primary center-block" onClick={this.handleSaveButton}>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>

                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>



                <div className="containerTable">
                    <div className="py-4">
                        <h1>DAFTAR BUKU "BOOKTOWN"</h1>
                    </div>
                </div>
                <br></br>
                <br></br>

                <form>
                    <input className="search" type="text" placeholder="Cari..." required></input>
                    <input className="buttonSearch" type="button" value="Cari"></input>
                </form>
                <button className="buttonAdd" type="button">Tambahkan Data
                <a href="#tabelData"></a>
                </button>
                <div className="table">
                    <table className="table border shadow">
                        <thead className="thead-dark">
                            <tr>

                                <th width="200px">JUDUL BUKU</th>
                                <th width="160px">KATEGORI BUKU</th>
                                <th width="140px">HARGA</th>
                                <th>STOK</th>
                                <th>PENGARANG</th>
                                <th>PENERBIT</th>
                                <th>DESKRIPSI</th>
                                <th width="120px">Action</th>
                            </tr>
                            {
                                this.state.listBuku.map(buku => {    // looping dan masukkan untuk setiap data yang ada di listBuku ke variabel Buku
                                    return <DataBuku key={buku.id} nama_buku={buku.nama_buku} kategori_buku={buku.kategori_buku} harga={buku.harga} stok={buku.stok} pengarang={buku.pengarang} penerbit={buku.penerbit} deskripsi={buku.deskripsi} idBuku={buku.id} hapusDataBuku={this.handleHapusBuku} />     // mappingkan data json dari API sesuai dengan kategorinya
                                })
                            }
                        </thead>
                    </table>
                </div>
            </div>


        );
    };
}
export default DaftarBuku;